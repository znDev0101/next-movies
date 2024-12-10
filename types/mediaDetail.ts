export interface IMediaDetail {
  // Common Properties
  adult: boolean;
  backdrop_path: string;
  genres: any[]; // Both interfaces have this
  homepage: string;
  id: number;
  origin_country?: string[]; // Optional as it's in both but slightly different contexts
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: any[];
  production_countries: any[];
  spoken_languages: any[];
  status: string;
  tagline: string;
  vote_average: number;
  vote_count: number;

  // Movie-specific Properties
  belongs_to_collection?: null | object;
  budget?: number;
  imdb_id?: string;
  original_title?: string;
  release_date?: string;
  revenue?: number;
  runtime?: number;
  title?: string;
  video?: boolean;

  // TV Show-specific Properties
  created_by?: any[];
  episode_run_time?: number[];
  first_air_date?: string;
  in_production?: boolean;
  languages?: string[];
  last_air_date?: string;
  last_episode_to_air?: string | null;
  name?: string;
  next_episode_to_air?: string | null;
  networks?: any[];
  number_of_episodes?: number;
  number_of_seasons?: number;
  original_name?: string;
  seasons?: any[];
  type?: string;
}
