import { Desviacion } from "./Desviacion";

export interface DesviacionRepository {
  getAll(): Promise<Desviacion[] | null>;
  getById(id: number): Promise<Desviacion | null>;
  createMedia(
    id_user: number,
    co2: number,
    ch4: number,
    ph: number,
    conductividad: number
  ): Promise <Desviacion | null>
}
