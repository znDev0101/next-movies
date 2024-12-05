export interface DataFromApi {
  adult: boolean;
  backdrop_path: string;
  genre_ids?: number[]; // Array of numbers for media type movie
  created_by?: number | string | null[];
  episode_run_time?: any[];
  genres?: string | number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date?: string; // Date stored as a string
  first_air_date?: string;
  title?: string;
  name?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
