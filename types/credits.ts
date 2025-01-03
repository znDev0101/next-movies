export interface ICredits {
  id: number;
  cast: any[];
  crew: any[];
}

export interface ITabsDetailCredits {
  adult: boolean;
  cast_id: number;
  character: string;
  credit_id: number;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string;
  backdrop_path: string;
}
