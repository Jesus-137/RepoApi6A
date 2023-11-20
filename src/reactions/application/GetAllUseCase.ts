import { Reactions } from "../domain/Reactions";
import { ReactionsRepository } from "../domain/ReactionsRepository";

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