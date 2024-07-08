import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, LineChart, Newspaper, GitCompare } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar";
import Index from "./pages/Index.jsx";
import Stocks from "./pages/Stocks.jsx";
import News from "./pages/News.jsx";
import Correlations from "./pages/Correlations.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Stocks",
    to: "/stocks",
    icon: <LineChart className="h-4 w-4" />,
  },
  {
    title: "News",
    to: "/news",
    icon: <Newspaper className="h-4 w-4" />,
  },
  {
    title: "Correlations",
    to: "/correlations",
    icon: <GitCompare className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="stocks" element={<Stocks />} />
              <Route path="news" element={<News />} />
              <Route path="correlations" element={<Correlations />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;