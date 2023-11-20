import { Request, Response } from "express";
import { GetByIdExpeUseCase } from "../../application/GetByIdExpeUseCase.ts";

export class GetByIdExpeController {
  constructor(readonly getByIdExpeCase: GetByIdExpeUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    try {
      const expe = await this.getByIdExpeCase.run(id);

      if (expe)
        //Code HTTP : 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          data: {
            id: expe.id,
            id_user: expe.id_user,
            id_rasp: expe.id_rasp
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
