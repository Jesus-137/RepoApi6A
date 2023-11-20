import { Media } from "./Media";

export interface MediaRepository {
  getAll(): Promise<Media[] | null>;
  getById(id: number): Promise<Media[] | null>;
  createMedia(
    id_user: number,
    co2: number,
    ch4: number,
    ph: number,
    conductividad: number
  ): Promise <Media | null>
}
