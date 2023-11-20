import { query } from "../../database/mysql.ts";
import { Expe } from "../domain/Expe.ts";
import { ExpeRepository } from "../domain/ExpeRepository.ts";

export class MysqlPorcentajeRepository implements ExpeRepository {
  async getById (id: number): Promise<Expe | null> {
    const sql = "SELECT * FROM experimento WHERE id=?";
    const params: any[] = [id];
    try {
      const result: any = await query(sql, params);
      const expe = result[0][0]
      return new Expe(
        expe.id,
        expe.id_user,
        expe.id_rasp
      );
    } catch (error) {
      return null;
    }
  }
  async getAll(): Promise<Expe[] | null> {
    const sql = "SELECT * FROM experimento";
    try {
      const [data]: any = await query(sql, []);
      const dataExpe = Object.values(JSON.parse(JSON.stringify(data)));
      return dataExpe.map(
        (expe: any) =>
          new Expe(
            expe.id,
            expe.id_user,
            expe.id_rasp
          )
      );
    } catch (error) {
      return null;
    }
  }

  async createExpe(
    id_user: number,
    id_rasp: number
  ): Promise<Expe | null> {
    const sql = "INSERT INTO experimento (id_user, id_rasp) VALUES (?, ?)";
    const params: any[] = [id_user, id_rasp];
    try {
      const [result]: any = await query(sql, params);
      return new Expe(result.insertId, id_user, id_rasp);
    } catch (error) {
      return null;
    }
  }
}
