import { Request, Response } from "express";
import { CreateUserUseCase } from "../../application/CreateUserUseCase";

export class CreateReactionController {
  constructor (
    readonly createUserUseCase: CreateUserUseCase
    ) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const user = await this.createUserUseCase.run(
        data.id_raspberry,
        data.userName,
        data.password
      );
      if (user)
        //Code HTTP : 201 -> Creado
        res.status(201).send({
          status: "success",
          data: {
            id: user.id,
            id_raspberry: user.id_raspberry,
            userName: user.userName,
            password: user.password
          },
        });
      else
        res.status(204).send({
          status: "error",
          data: "NO fue posible agregar el registro",
        });
    } catch (error) {
      //Code HTTP : 204 Sin contenido
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}
