import { Expe } from "../domain/Expe.ts";
import { ExpeRepository } from "../domain/ExpeRepository.ts";

export class CreateExpeUseCase {
  constructor(readonly expeRepo: ExpeRepository) {}

  async run(
    id_user: number,
    id_rasp: number
  ): Promise<Expe | null> {
    try {
      const user = await this.expeRepo.createExpe(
        id_user,
        id_rasp
      );
      return user;
    } catch (error) {
      return null;
    }
  }
}
