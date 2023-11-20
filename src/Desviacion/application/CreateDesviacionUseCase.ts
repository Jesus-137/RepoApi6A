import { Desviacion } from "../domain/Desviacion";
import { DesviacionRepository } from "../domain/DesviacionRepository";

export class CreateDesviacionUseCase {
  constructor(readonly desviacionRepo: DesviacionRepository) {}

  async run(
    id_user: number,
    co2: number,
    ch4: number,
    ph: number,
    conductividad: number
  ): Promise<Desviacion | null> {
    try {
      const user = await this.desviacionRepo.createMedia(
        id_user,
        co2,
        ch4,
        ph,
        conductividad
      );
      return user;
    } catch (error) {
      return null;
    }
  }
}
