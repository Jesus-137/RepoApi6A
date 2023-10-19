import { query } from "../../database/mysql";
import { Reactions } from "../domain/Reactions";
import { ReactionsRepository } from "../domain/ReactionsRepository";

export class MysqlReactionsRepository implements ReactionsRepository {
  async getById (id: number): Promise<Reactions | null> {
    const sql = "SELECT * FROM reactions WHERE id=?";
    const params: any[] = [id];
    try {
      const result: any = await query(sql, params);
      const reaction = result[0][0]
      return new Reactions(
        reaction.id,
        reaction.id_raspberry,
        reaction.co2,
        reaction.ch4,
        reaction.ph,
        reaction.electricidad,
        reaction.tiempo_acumulado,
        reaction.fecha,
        reaction.hora
      );
    } catch (error) {
      return null;
    }
  }
  async getAll(): Promise<Reactions[] | null> {
    const sql = "SELECT * FROM reactions";
    try {
      const [data]: any = await query(sql, []);
      const dataReactions = Object.values(JSON.parse(JSON.stringify(data)));
      return dataReactions.map(
        (Reaction: any) =>
          new Reactions(
            Reaction.id,
            Reaction.id_raspberry,
            Reaction.co2,
            Reaction.ch4,
            Reaction.ph,
            Reaction.electricidad,
            Reaction.tiempo_acumulado,
            Reaction.fecha,
            Reaction.hora
          )
      );
    } catch (error) {
      return null;
    }
  }

  async createReaction(
    id_raspberry: number,
    co2: number,
    ch4: number,
    ph: number,
    electricidad: number,
    tiempo_acumulado: number,
    fecha: string,
    hora: string
  ): Promise<Reactions | null> {
    const sql =
"INSERT INTO reactions (id_raspberry, co2, ch4, ph, electricidad, tiempo_acumulado, fecha, hora) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    const params: any[] = [id_raspberry, co2, ch4, ph, electricidad, tiempo_acumulado, fecha, hora];
    try {
      const [result]: any = await query(sql, params);
      return new Reactions(result.insertId, id_raspberry, co2, ch4, ph, electricidad, tiempo_acumulado, fecha, hora);
    } catch (error) {
      return null;
    }
  }
}
