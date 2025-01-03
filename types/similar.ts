export interface ISimilar {
  page: number;
  results: ITabsDetailSimilar[];
  total_pages: number;
  total_results: number;
}

export interface ITabsDetailSimilar {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title?: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date?: string;
  first_air_date?: string;
  title?: string;
  name?: string;
  original_name?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
