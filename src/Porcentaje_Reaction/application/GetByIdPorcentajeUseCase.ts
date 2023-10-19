import { Porcentaje } from "../domain/Porcentaje";
import { PorcentajeRepository } from "../domain/PorcentajeRepository";

export class GetByIdPorcentajeUseCase {
  constructor(readonly porcentajeRepo: PorcentajeRepository) {}

  async run(id: number): Promise<Porcentaje | null> {
    try {
      const result = await this.porcentajeRepo.getById(id);
      return result;
    } catch (error) {
      return null;
    }
  }
}
