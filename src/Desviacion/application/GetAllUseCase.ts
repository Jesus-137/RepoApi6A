import { Desviacion } from "../domain/Desviacion.ts";
import { DesviacionRepository } from "../domain/DesviacionRepository.ts";

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