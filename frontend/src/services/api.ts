import axios from 'axios';

// API_BASE_URL defines the base URL for the API
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3002/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// CrawlResult defines the structure of the crawl result
export interface CrawlResult {
  url: string;
  pageTitle: string;
  num_external_links: number;
  num_internal_links: number;
  num_inaccessible_links: number;
  has_login_form: boolean;
}

// crawlUrl requests a crawl for a given URL
export const crawlUrl = async (url: string): Promise<void> => {
  try {
    await apiClient.post('/crawl', { url });
  } catch (error) {

    console.error('Error requesting crawl:', error);
    throw error;
  }
};

// fetchCrawlResults fetches crawl results
export const fetchCrawlResults = async (): Promise<CrawlResult[]> => {
  try {
    const response = await apiClient.get('/results');
    return response.data;
  } catch (error) {

    console.error('Error fetching crawl results:', error);
    throw error;
  }
}; 