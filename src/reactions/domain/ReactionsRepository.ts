import { Reactions } from "./Reactions";

export interface ReactionsRepository {
  getAll(): Promise<Reactions[] | null>;
  getById(name: string): Promise<Reactions[] | null>
  createReaction(
    name: string,
    tiempo: number,
    cantidad: number,
    id_expe: number
  ): Promise<Reactions | null>;
}
