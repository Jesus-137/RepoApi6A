import { Reactions } from "../domain/Reactions";
import { ReactionsRepository } from "../domain/ReactionsRepository";

export class CreateReactionUseCase {
  constructor(readonly reactionsRepo: ReactionsRepository) {}

  async run(
    id_raspberry: number,
    co2: number,
    ch4: number,
    ph: number,
    electricidad: number,
    tiempo_acumulado: number,
    fecha: string,
    hora: string
  ): Promise<Reactions | null> {
    try {
      const reaction = await this.reactionsRepo.createReaction(
        id_raspberry,
        co2,
        ch4,
        ph,
        electricidad,
        tiempo_acumulado,
        fecha,
        hora
      );
      return reaction;
    } catch (error) {
      return null;
    }
  }
}
