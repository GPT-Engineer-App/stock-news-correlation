import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

// Mock data for demonstration
const mockNews = [
  {
    id: 1,
    title: "Tech Giants Report Strong Quarterly Earnings",
    source: "Financial Times",
    snippet: "Major technology companies exceed market expectations in their latest financial reports.",
    url: "https://www.ft.com/content/tech-giants-earnings",
  },
  {
    id: 2,
    title: "Oil Prices Surge Amid Global Supply Concerns",
    source: "Reuters",
    snippet: "Crude oil prices reach new highs as geopolitical tensions affect global supply chains.",
    url: "https://www.reuters.com/business/energy/oil-prices-surge",
  },
  {
    id: 3,
    title: "Federal Reserve Signals Potential Interest Rate Hike",
    source: "Wall Street Journal",
    snippet: "Central bank officials hint at possible rate increases to combat inflation pressures.",
    url: "https://www.wsj.com/articles/federal-reserve-interest-rate-hike",
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
              <p className="mb-4">{article.snippet}</p>
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => window.open(article.url, '_blank', 'noopener,noreferrer')}
              >
                Read Full Article <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default News;