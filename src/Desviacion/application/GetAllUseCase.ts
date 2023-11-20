import { Desviacion } from "../domain/Desviacion";
import { DesviacionRepository } from "../domain/DesviacionRepository";

export class GetAllUseCase {
  constructor(readonly desviacionRepo: DesviacionRepository) {}

  async run(): Promise<Desviacion[] | null> {
    try {
      const result = await this.desviacionRepo.getAll();
      return result;
    } catch (error) {
      return null;
    }
  }
}