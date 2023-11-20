import { Expe } from "./Expe.ts";

export interface ExpeRepository {
  getAll(): Promise<Expe[] | null>;
  getById(id: number): Promise<Expe | null>
  createExpe(
    id_user: number,
    id_rasp: number
  ): Promise<Expe | null>;
}
