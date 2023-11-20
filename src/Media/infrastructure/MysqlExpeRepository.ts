import { query } from "../../database/mysql.ts";
import { Media } from "../domain/Media.ts";
import { MediaRepository } from "../domain/MediaRepository.ts";

export class MysqlMediaRepository implements MediaRepository {
  async getById (id: number): Promise<Media[] | null> {
    const sql = "SELECT * FROM media WHERE id_user=?";
    try {
      const [data]: any = await query(sql, [id]);
      const dataReactions = Object.values(JSON.parse(JSON.stringify(data)));
      console.log(dataReactions)
      return dataReactions.map(
        (Reaction: any) =>
          new Media(
            Reaction.id,
            Reaction.id_user,
            Reaction.co2,
            Reaction.ch4,
            Reaction.ph,
            Reaction.conductividad
          )
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
            media.id_user,
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
    id_user: number,
    co2: number,
    ch4: number,
    ph: number,
    conductividad: number
  ): Promise<Media | null> {
    const sql = "INSERT INTO media (id_user, co2, ch4, ph, conductividad) VALUES (?, ?, ?, ?, ?)";
    const params: any[] = [id_user, co2, ch4, ph, conductividad];
    try {
      const [result]: any = await query(sql, params);
      return new Media (result.insertId, id_user, co2, ch4, ph, conductividad);
    } catch (error) {
      return null;
    }
  }
}
