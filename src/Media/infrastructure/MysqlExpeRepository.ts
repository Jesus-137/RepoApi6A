import { query } from "../../database/mysql";
import { Media } from "../domain/Media";
import { MediaRepository } from "../domain/MediaRepository";

export class MysqlMediaRepository implements MediaRepository {
  async getById (id: number): Promise<Media | null> {
    const sql = "SELECT * FROM media WHERE id=?";
    const params: any[] = [id];
    try {
      const result: any = await query(sql, params);
      const media = result[0][0]
      return new Media(
        media.id,
        media.co2,
        media.ch4,
        media.ph,
        media.conductividad
      );
    } catch (error) {
      return null;
    }
  }
  async getAll(): Promise<Media[] | null> {
    const sql = "SELECT * FROM media";
    try {
      const [data]: any = await query(sql, []);
      const dataMedia = Object.values(JSON.parse(JSON.stringify(data)));
      return dataMedia.map(
        (media: any) =>
          new Media(
            media.id,
            media.co2,
            media.ch4,
            media.ph,
            media.conductividad
          )
      );
    } catch (error) {
      return null;
    }
  }

  async createMedia(
    co2: number,
    ch4: number,
    ph: number,
    conductividad: number
  ): Promise<Media | null> {
    const sql = "INSERT INTO media (co2, ch4, ph, conductividad) VALUES (?, ?, ?, ?)";
    const params: any[] = [co2, ch4, ph, conductividad];
    try {
      const [result]: any = await query(sql, params);
      return new Media (result.insertId, co2, ch4, ph, conductividad);
    } catch (error) {
      return null;
    }
  }
}
