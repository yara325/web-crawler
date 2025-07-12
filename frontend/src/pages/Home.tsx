import { useState, useEffect } from "react";
import UrlInput from "../components/UrlInput";
import ResultsDisplay from "../components/ResultsDisplay";
import { fetchCrawlResults, CrawlResult } from "../services/api";
import toast from "react-hot-toast";

// Dummy data for initial development
function Home() {
  const [results, setResults] = useState<CrawlResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const loadResults = async () => {
    setLoading(true);
    try {
      // NOTE(Yara): This will fail for now because the API is not implemented yet
      const data = await fetchCrawlResults();
      setResults(data);
    } catch (err) {
      setError("Failed to load crawl results.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadResults();
  }, []);
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);
  // const [results, setResults] = useState<any[]>([]);

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4'>
      <h1 className='text-3xl font-bold text-gray-800 mb-6'>Web Crawler</h1>
      <UrlInput />
      
      {loading ? (
        <div className='text-gray-500 mt-4'>Loading results...</div>
      ) : (
        <ResultsDisplay results={results} />
      )}
    </div>
  );
}

export default Home;
