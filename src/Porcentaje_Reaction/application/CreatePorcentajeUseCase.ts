import { Porcentaje } from "../domain/Porcentaje";
import { PorcentajeRepository } from "../domain/PorcentajeRepository";

export class CreatePorcentajeUseCase {
  constructor(readonly porcentajeRepo: PorcentajeRepository) {}

  async run(
    id_raspberry: number,
    co2: number,
    ch4: number,
    ph: number,
    electricidad: number
  ): Promise<Porcentaje | null> {
    try {
      const user = await this.porcentajeRepo.createPorcentaje(
        id_raspberry,
        co2,
        ch4,
        ph,
        electricidad
      );
      return user;
    } catch (error) {
      return null;
    }
  }
}
