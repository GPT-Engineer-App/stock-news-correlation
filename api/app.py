from flask import Flask, jsonify
from flask_cors import CORS
from openbb import obb

app = Flask(__name__)
CORS(app)

@app.route('/api/stocks')
def get_stocks():
    try:
        # List of stock symbols
        symbols = ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'TSLA']
        
        stocks_data = []
        for symbol in symbols:
            quote = obb.stocks.quote(symbol)
            stocks_data.append({
                'symbol': symbol,
                'longName': quote.longName.iloc[0],
                'regularMarketPrice': quote.regularMarketPrice.iloc[0],
                'regularMarketChangePercent': quote.regularMarketChangePercent.iloc[0]
            })
        
        return jsonify(stocks_data)
    except Exception as e:
        print(f"Error fetching stocks: {str(e)}")
        return jsonify({'error': 'Failed to fetch stocks'}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)