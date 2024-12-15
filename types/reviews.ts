export interface IReviews {
  id: number;
  page: number;
  results: any[];
  total_page: number;
  total_results: number;
}

export interface IReviewsProps {
  author: string;
  author_details: Record<string, string | number>;
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}
