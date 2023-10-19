import { Porcentaje } from "./Porcentaje";

export interface PorcentajeRepository {
  getAll(): Promise<Porcentaje[] | null>;
  getById(id: number): Promise<Porcentaje | null>
  createPorcentaje(
    id_raspberry: number,
    co2: number,
    ch4: number,
    ph: number,
    electricidad: number
  ): Promise<Porcentaje | null>;
}
