import { Users } from "../domain/Users";
import { UsersRepository } from "../domain/UsersRepository";

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