import { Porcentaje } from "../domain/Porcentaje";
import { PorcentajeRepository } from "../domain/PorcentajeRepository";

export class GetAllUseCase {
  constructor(readonly porcentajeRepo: PorcentajeRepository) {}

  async run(): Promise<Porcentaje[] | null> {
    try {
      const result = await this.porcentajeRepo.getAll();
      return result;
    } catch (error) {
      return null;
    }
  }
}