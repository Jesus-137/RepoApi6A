import { Desviacion } from "../domain/Desviacion";
import { DesviacionRepository } from "../domain/DesviacionRepository";

export class GetByIdDesviacionUseCase {
  constructor(readonly desviacionRepo: DesviacionRepository) {}

  async run(id: number): Promise<Desviacion | null> {
    try {
      const result = await this.desviacionRepo.getById(id);
      return result;
    } catch (error) {
      return null;
    }
  }
}
