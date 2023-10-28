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
        reaction.name,
        reaction.cantidad,
        reaction.tiempo,
        reaction.id_expe
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
            Reaction.id_expe,
            Reaction.name,
            Reaction.cantidad,
            Reaction.tiempo
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
