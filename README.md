# Stock News Correlator

This project integrates stock data from OpenBB and displays it in a React frontend.

## Setup

### Frontend

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm run dev
   ```

### Backend

1. Navigate to the `api` directory:
   ```
   cd api
   ```

2. Create a virtual environment:
   ```
   python -m venv venv
   ```

3. Activate the virtual environment:
   - On Windows:
     ```
     venv\Scripts\activate
     ```
   - On macOS and Linux:
     ```
     source venv/bin/activate
     ```

4. Install the required Python packages:
   ```
   pip install -r requirements.txt
   ```

5. Start the Flask server:
   ```
   python app.py
   ```

## Usage

Once both the frontend and backend servers are running, you can access the application at `http://localhost:5173`. The Stocks page will display real-time stock data fetched from the OpenBB API.