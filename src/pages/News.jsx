import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Mock data for demonstration
const mockNews = [
  {
    id: 1,
    title: "Tech Giants Report Strong Quarterly Earnings",
    source: "Financial Times",
    snippet: "Major technology companies exceed market expectations in their latest financial reports.",
  },
  {
    id: 2,
    title: "Oil Prices Surge Amid Global Supply Concerns",
    source: "Reuters",
    snippet: "Crude oil prices reach new highs as geopolitical tensions affect global supply chains.",
  },
  {
    id: 3,
    title: "Federal Reserve Signals Potential Interest Rate Hike",
    source: "Wall Street Journal",
    snippet: "Central bank officials hint at possible rate increases to combat inflation pressures.",
  },
];

const News = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredNews = mockNews.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.source.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Latest News</h1>
      <Input
        type="text"
        placeholder="Search news..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4"
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredNews.map((article) => (
          <Card key={article.id}>
            <CardHeader>
              <CardTitle>{article.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">{article.source}</p>
              <p>{article.snippet}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default News;