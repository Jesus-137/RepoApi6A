import { Reactions } from "../domain/Reactions.ts";
import { ReactionsRepository } from "../domain/ReactionsRepository.ts";

export class GetAllUseCase {
  constructor(readonly reactionRepo: ReactionsRepository) {}

  async run(): Promise<Reactions[] | null> {
    try {
      const result = await this.reactionRepo.getAll();
      return result;
    } catch (error) {
      return null;
    }
  }
}