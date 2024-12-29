export interface IAllList {
  backdrop_path: string;
  id: number;
  title?: string;
  name?: string;
  original_title?: string;
  original_name?: string;
  overview: string;
  poster_path: string;
  profile_path?: string;
  media_type?: string;
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  genres?: any[];
  popularity: number;
  release_date?: string;
  first_air_date?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IAllMedia {
  dates: Record<string, string>;
  page: number;
  results: IAllList[];
  total_pages: number;
  total_results: number;
}
