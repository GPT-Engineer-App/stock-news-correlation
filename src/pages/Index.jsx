import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to Stock News Correlator</h1>
      <Card>
        <CardHeader>
          <CardTitle>About This Application</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            This application integrates stock data from OpenBB and news data from NewsAPI to display
            the top correlations between news stories and changes in stock prices as they are happening.
            Use the sidebar to navigate between different sections:
          </p>
          <ul className="list-disc list-inside mt-4">
            <li>View current stock prices and trends</li>
            <li>Browse the latest financial news</li>
            <li>Analyze correlations between news stories and stock price changes</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;