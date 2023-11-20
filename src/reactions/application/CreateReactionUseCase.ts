import { Reactions } from "../domain/Reactions.ts";
import { ReactionsRepository } from "../domain/ReactionsRepository.ts";

export class CreateReactionUseCase {
  constructor(readonly reactionsRepo: ReactionsRepository) {}

  async run(
    name: string,
    cantidad: number,
    tiempo: number,
    id_expe: number
  ): Promise<Reactions | null> {
    try {
      const reaction = await this.reactionsRepo.createReaction(
        name,
        cantidad,
        tiempo,
        id_expe
      );
      return reaction;
    } catch (error) {
      return null;
    }
  }
}
