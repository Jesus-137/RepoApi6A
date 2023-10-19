import { Reactions } from "../domain/Reactions";
import { ReactionsRepository } from "../domain/ReactionsRepository";

export class GetByIdReactionUseCase {
  constructor(readonly reactionsRepo: ReactionsRepository) {}

  async run(id: number): Promise<Reactions | null> {
    try {
      const result = await this.reactionsRepo.getById(id);
      return result;
    } catch (error) {
      return null;
    }
  }
}
