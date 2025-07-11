import UrlInput from '../components/UrlInput';
import ResultsDisplay from '../components/ResultsDisplay';


// Dummy data for initial development
function Home() {
  interface CrawlResult {
  url: string;
  pageTitle: string;
  num_external_links: number;
  num_internal_links: number;
  num_inaccessible_links: number;
  has_login_form: boolean;
}
const sampleResults: CrawlResult[] = [
  {
    url: "https://example.com",
    pageTitle: "Example Home",
    num_external_links: 5,
    num_internal_links: 10,
    num_inaccessible_links: 1,
    has_login_form: true,
  },
  {
    url: "https://example.org/about",
    pageTitle: "About Us",
    num_external_links: 2,
    num_internal_links: 4,
    num_inaccessible_links: 0,
    has_login_form: false,
  },
  {
    url: "https://example.net/contact",
    pageTitle: "Contact Page",
    num_external_links: 3,
    num_internal_links: 3,
    num_inaccessible_links: 2,
    has_login_form: true,
  },
];
  // const [results, setResults] = useState<any[]>([]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Web Crawler</h1>
      <UrlInput />
      <ResultsDisplay results={sampleResults} />
    </div>
  );
}

export default Home; 
