import { Reactions } from "./Reactions";

export interface ReactionsRepository {
  getAll(): Promise<Reactions[] | null>;
  getById(id: number): Promise<Reactions | null>
  createReaction(
    id_raspberry: number,
    co2: number,
    ch4: number,
    ph: number,
    electricidad: number,
    tiempo_acumulado: number,
    fecha: string,
    hora: string
  ): Promise<Reactions | null>;
}
