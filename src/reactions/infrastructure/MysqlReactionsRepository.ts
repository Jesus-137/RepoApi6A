import { query } from "../../database/mysql";
import { Reactions } from "../domain/Reactions";
import { ReactionsRepository } from "../domain/ReactionsRepository";

export class MysqlReactionsRepository implements ReactionsRepository {
  async getById (name: string): Promise<Reactions[] | null> {
    const sql = "SELECT * FROM reactions WHERE name=?";
    const params: any = [name];
    try {
      const result: any = await query(sql, params);
      const reaction = Object.values(JSON.parse(JSON.stringify(result[0])))
      console.log(reaction)
      return reaction.map(
        (reaccion: any) =>
          new Reactions(
            reaccion.id,
            reaccion.name,
            reaccion.cantidad,
            reaccion.tiempo,
            reaccion.id_expe
          )
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
      console.log(dataReactions)
      return dataReactions.map(
        (Reaction: any) =>
          new Reactions(
            Reaction.id,
            Reaction.name,
            Reaction.cantidad,
            Reaction.tiempo,
            Reaction.id_expe
          )
      );
    } catch (error) {
      return null;
    }
  }

  async createReaction(
    name: string,
    cantidad: number,
    tiempo: number,
    id_expe: number
  ): Promise<Reactions | null> {
    const sql =
"INSERT INTO reactions (name, cantidad, tiempo, id_expe) VALUES (?, ?, ?, ?)";
    const params: any[] = [name, cantidad, tiempo, id_expe];
    try {
      const [result]: any = await query(sql, params);
      return new Reactions(result.insertId, name, cantidad, tiempo, id_expe);
    } catch (error) {
      return null;
    }
  }
}
