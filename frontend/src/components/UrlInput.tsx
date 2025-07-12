import React, { useState } from "react";
import { crawlUrl } from "../services/api";
function UrlInput() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await crawlUrl(url);
      setUrl("");
    } catch (err) {
      setError("Failed to request crawl. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='w-full max-w-lg mx-auto mt-4'>
      {error && <div className='text-red-500 text-sm mb-2'>{error}</div>}
      <div className='flex items-center border-b-2 border-gray-500 py-2'>
        <input
          type='text'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder='Enter URL to crawl'
          className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
          required
          disabled={loading}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
          disabled={loading}
        >
          {loading ? 'Crawling...' : 'Crawl'}
        </button>
      </div>
    </form>
  );
}

export default UrlInput;
