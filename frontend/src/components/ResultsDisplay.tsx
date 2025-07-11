import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CrawlResult {
  url: string;
  pageTitle: string;
  num_external_links: number;
  num_internal_links: number;
  num_inaccessible_links: number;
  has_login_form: boolean;
}

interface ResultsDisplayProps {
  results: CrawlResult[];
}

function ResultsDisplay({ results }: ResultsDisplayProps) {
const [page, setPage] = useState<number>(1);
  const limit = 10;
  const totalPages = Math.ceil(results.length / limit);
  const handlePrev = () => page > 1 && setPage(page - 1);
  const handleNext = () => page < totalPages && setPage(page + 1);

  const paginatedResults = results.slice((page - 1) * limit, page * limit);
  const start = (page - 1) * limit + 1;
  const end = Math.min(start + limit - 1, results.length);

  if (results.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-8">
        No results to display. Please crawl a URL.
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto mt-12 px-4">
      <div className="overflow-x-auto border rounded-2xl shadow-sm bg-white">
        <table className="w-full text-sm text-gray-700">
          <thead className="bg-gray-50 text-gray-500 border-b">
            <tr>
              {[
                "URL",
                "Page Title",
                "External",
                "Internal",
                "Inaccessible",
                "Login",
              ].map((header) => (
                <th
                  key={header}
                  className="px-5 py-4 text-center text-xs uppercase tracking-wide font-medium whitespace-nowrap"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedResults.map((result, idx) => (
              <tr
                key={idx}
                className="hover:bg-gray-50 transition-colors border-b last:border-none"
              >
                <td className="px-5 py-3 font-medium text-blue-600 max-w-xs truncate">
                  <a
                    href={result.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {result.url}
                  </a>
                </td>
                <td className="px-5 py-3">{result.pageTitle}</td>
                <td className="px-5 py-3">{result.num_external_links}</td>
                <td className="px-5 py-3">{result.num_internal_links}</td>
                <td className="px-5 py-3">{result.num_inaccessible_links}</td>
                <td className="px-5 py-3 font-semibold">
                  {result.has_login_form ? (
                    <span className="text-green-600">Yes</span>
                  ) : (
                    <span className="text-red-500">No</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-6 mt-6">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <span className="text-sm text-gray-600 font-medium">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={page === totalPages}
          className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
        {/* Count */}
      <div className="mb-2 text-sm text-gray-600 font-medium text-left">
        Showing {results.length} of {results.length} URLs
      </div>
    </div>
  );
}

export default ResultsDisplay;
