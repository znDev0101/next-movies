export interface IImagesPersonData {
  id: number;
  cast_id?: number;
  media_type?: string;
  aspect_ratio: number;
  height: number;
  iso_639_1: string | null;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface IImagesPerson {
  id: number;
  profiles: IImagesPersonData[];
}
