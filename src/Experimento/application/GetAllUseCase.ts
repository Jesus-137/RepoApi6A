import { Expe } from "../domain/Expe";
import { ExpeRepository } from "../domain/ExpeRepository";

export class GetAllUseCase {
  constructor(readonly expeRepo: ExpeRepository) {}

  async run(): Promise<Expe[] | null> {
    try {
      const result = await this.expeRepo.getAll();
      return result;
    } catch (error) {
      return null;
    }
  }
}