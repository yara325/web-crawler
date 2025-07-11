import React, { useState } from 'react';

function UrlInput() {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for API call to backend
    console.log('Crawling URL:', url);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto mt-4">
      <div className="flex items-center border-b-2 border-gray-500 py-2">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL to crawl"
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          required
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline">Crawl</button>
      </div>
    </form>
  );
}

export default UrlInput; 