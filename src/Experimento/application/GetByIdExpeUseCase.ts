import { Expe } from "../domain/Expe.ts";
import { ExpeRepository } from "../domain/ExpeRepository.ts";

export class GetByIdExpeUseCase {
  constructor(readonly expeRepo: ExpeRepository) {}

  async run(id: number): Promise<Expe | null> {
    try {
      const result = await this.expeRepo.getById(id);
      return result;
    } catch (error) {
      return null;
    }
  }
}
