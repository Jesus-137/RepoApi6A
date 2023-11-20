import { Users } from "../domain/Users.ts";
import { UsersRepository } from "../domain/UsersRepository.ts";

export class GetAllUseCase {
  constructor(readonly userRepo: UsersRepository) {}

  async run(): Promise<Users[] | null> {
    try {
      const result = await this.userRepo.getAll();
      return result;
    } catch (error) {
      return null;
    }
  }
}