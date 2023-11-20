import { Users } from "../domain/Users.ts";
import { UsersRepository } from "../domain/UsersRepository.ts";

export class GetByIdPorcentajeUseCase {
  constructor(readonly usersRepo: UsersRepository) {}

  async run(id: number): Promise<Users | null> {
    try {
      const result = await this.usersRepo.getById(id);
      return result;
    } catch (error) {
      return null;
    }
  }
}
