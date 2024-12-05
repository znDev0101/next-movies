interface Movie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  } | null; // Use `null` if `belongs_to_collection` might be absent or nullable
  budget: number;
  genres: Array<{
    id: number;
    name: string;
  }>;
  homepage: string;
  id: number;
  imdb_id: string | null; // Use `null` if `imdb_id` might be absent or nullable
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<{
    id: number;
    logo_path: string | null; // Use `null` if `logo_path` might be absent or nullable
    name: string;
    origin_country: string;
  }>;
  production_countries: Array<{
    iso_3166_1: string;
    name: string;
  }>;
  release_date: string; // ISO date string
  revenue: number;
  runtime: number | null; // Use `null` if `runtime` might be absent or nullable
  spoken_languages: Array<{
    english_name: string;
    iso_639_1: string;
    name: string;
  }>;
  status: string;
  tagline: string | null; // Use `null` if `tagline` might be absent or nullable
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
