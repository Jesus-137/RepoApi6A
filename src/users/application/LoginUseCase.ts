import { Users } from "../domain/Users.ts";
import { UsersRepository } from "../domain/UsersRepository.ts";

export class LoginUseCase {
  constructor(readonly userRepo: UsersRepository) {}

  async run(
    userName: string,
    password: string
  ): Promise<Users | null> {
    try {
      const result = await this.userRepo.login(
        userName,
        password
      );
      return result;
    } catch (error) {
      return null;
    }
  }
}