import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RefreshCw } from "lucide-react";

// Mock data for demonstration
const mockCorrelations = [
  {
    id: 1,
    stockSymbol: "AAPL",
    newsHeadline: "Apple Announces New iPhone Model",
    correlation: 0.85,
    timestamp: "2023-03-15T14:30:00Z",
  },
  {
    id: 2,
    stockSymbol: "TSLA",
    newsHeadline: "Tesla Expands Production in China",
    correlation: 0.72,
    timestamp: "2023-03-15T13:45:00Z",
  },
  {
    id: 3,
    stockSymbol: "AMZN",
    newsHeadline: "Amazon Reports Record Prime Day Sales",
    correlation: 0.68,
    timestamp: "2023-03-15T12:15:00Z",
  },
];

const Correlations = () => {
  const [correlations, setCorrelations] = useState(mockCorrelations);

  const handleRefresh = () => {
    // In a real application, this would fetch new data from the API
    console.log("Refreshing correlations...");
    // For now, we'll just shuffle the existing data to simulate an update
    setCorrelations([...correlations].sort(() => Math.random() - 0.5));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Top Correlations</h1>
        <Button onClick={handleRefresh}>
          <RefreshCw className="mr-2 h-4 w-4" /> Refresh
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Stock Symbol</TableHead>
            <TableHead>News Headline</TableHead>
            <TableHead>Correlation</TableHead>
            <TableHead>Timestamp</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {correlations.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.stockSymbol}</TableCell>
              <TableCell>{item.newsHeadline}</TableCell>
              <TableCell>{item.correlation.toFixed(2)}</TableCell>
              <TableCell>{new Date(item.timestamp).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Correlations;