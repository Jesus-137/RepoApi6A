import { Media } from "./Media";

export interface MediaRepository {
  getAll(): Promise<Media[] | null>;
  getById(id: number): Promise<Media | null>;
  createMedia(
    co2: number,
    ch4: number,
    ph: number,
    conductividad: number
  ): Promise <Media | null>
}
