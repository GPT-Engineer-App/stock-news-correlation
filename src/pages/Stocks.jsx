import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Mock data for demonstration
const mockStocks = [
  { symbol: "AAPL", name: "Apple Inc.", price: 150.25, change: 2.5 },
  { symbol: "GOOGL", name: "Alphabet Inc.", price: 2750.80, change: -1.2 },
  { symbol: "MSFT", name: "Microsoft Corporation", price: 305.15, change: 0.8 },
  { symbol: "AMZN", name: "Amazon.com, Inc.", price: 3380.50, change: 1.5 },
];

const Stocks = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStocks = mockStocks.filter(
    (stock) =>
      stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stock.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Stocks</h1>
      <Input
        type="text"
        placeholder="Search stocks..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4"
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Symbol</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Change (%)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredStocks.map((stock) => (
            <TableRow key={stock.symbol}>
              <TableCell className="font-medium">{stock.symbol}</TableCell>
              <TableCell>{stock.name}</TableCell>
              <TableCell>${stock.price.toFixed(2)}</TableCell>
              <TableCell className={stock.change >= 0 ? "text-green-600" : "text-red-600"}>
                {stock.change > 0 ? "+" : ""}
                {stock.change.toFixed(2)}%
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Stocks;