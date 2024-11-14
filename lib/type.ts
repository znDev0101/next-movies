export interface AllTrending {
  backdrop_path: string; // Path to the backdrop image
  id: number; // Unique identifier for the movie
  title?: string; // Title of the movie
  name?: string;
  original_title?: string; // Original title of the movie
  overview: string; // Description of the movie
  poster_path: string; // Path to the poster image
  media_type: string; // Type of media (e.g., "movie")
  adult: boolean; // Indicates if the movie is for adults
  original_language: string; // Language of the original movie
  genre_ids: number[]; // Array of genre IDs
  popularity: number; // Popularity score
  release_date?: string; // Release date in YYYY-MM-DD format
  video: boolean; // Indicates if there's an associated video
  vote_average: number; // Average rating
  vote_count: number; // Number of votes
}
