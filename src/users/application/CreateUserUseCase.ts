import { Users } from "../domain/Users";
import { UsersRepository } from "../domain/UsersRepository";

export class CreateUserUseCase {
  constructor(readonly usersRepo: UsersRepository) {}

  async run(
    userName: string,
    password: string,
    correo: string
  ): Promise<Users | null> {
    try {
      const user = await this.usersRepo.createUser(
        userName,
        password,
        correo
      );
      return user;
    } catch (error) {
      return null;
    }
  }
}
