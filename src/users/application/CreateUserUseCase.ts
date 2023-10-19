import { Users } from "../domain/Users";
import { UsersRepository } from "../domain/UsersRepository";

export class CreateUserUseCase {
  constructor(readonly usersRepo: UsersRepository) {}

  async run(
    id_raspberry: number,
    userName: string,
    password: string
  ): Promise<Users | null> {
    try {
      const user = await this.usersRepo.createUser(
        id_raspberry,
        userName,
        password
      );
      return user;
    } catch (error) {
      return null;
    }
  }
}
