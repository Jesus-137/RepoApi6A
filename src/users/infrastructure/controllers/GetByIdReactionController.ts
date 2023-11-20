import { Request, Response } from "express";
import { GetByIdPorcentajeUseCase } from "../../application/GetByIdUserUseCase";

export class GetByIdReactionController {
  constructor(readonly getByIdReactionCase: GetByIdPorcentajeUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    try {
      const user = await this.getByIdReactionCase.run(id);

      if (user)
        //Code HTTP : 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          data: {
            id: user.id,
            userName: user.userName,
            password: user.password,
            correo: user.correo
          },
        });
      else
        res.status(400).send({
          status: "error",
          msn: "Ocurrio algún problema",
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
