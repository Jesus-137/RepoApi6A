import { query } from "../../database/mysql";
import { Desviacion } from "../domain/Desviacion";
import { DesviacionRepository } from "../domain/DesviacionRepository";

export class MysqlDesviacionRepository implements DesviacionRepository {
  async getById (id: number): Promise<Desviacion | null> {
    const sql = "SELECT * FROM desviacion WHERE id=?";
    const params: any[] = [id];
    try {
      const result: any = await query(sql, params);
      const media = result[0][0]
      return new Desviacion(
        media.id,
        media.id_user,
        media.co2,
        media.ch4,
        media.ph,
        media.conductividad
      );
    } catch (error) {
      return null;
    }
  }
  async getAll(): Promise<Desviacion[] | null> {
    const sql = "SELECT * FROM desviacion";
    try {
      const [data]: any = await query(sql, []);
      const dataMedia = Object.values(JSON.parse(JSON.stringify(data)));
      return dataMedia.map(
        (media: any) =>
          new Desviacion(
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
  ): Promise<Desviacion | null> {
    const sql = "INSERT INTO desviacion (id_user, co2, ch4, ph, conductividad) VALUES (?, ?, ?, ?, ?)";
    const params: any[] = [id_user, co2, ch4, ph, conductividad];
    try {
      const [result]: any = await query(sql, params);
      return new Desviacion (result.insertId, id_user, co2, ch4, ph, conductividad);
    } catch (error) {
      return null;
    }
  }
}
