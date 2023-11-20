import { Users } from "../domain/Users";
import { UsersRepository } from "../domain/UsersRepository";

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