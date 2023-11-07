import { Request, Response } from "express";
import { CreateExpeUseCase } from "../../application/CreateExpeUseCase";

export class CreateExpeController {
  constructor (
    readonly createExpeUseCase: CreateExpeUseCase
    ) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const expe = await this.createExpeUseCase.run(
        data.id_user,
        data.id_rasp
      );
      if (expe){
        //Code HTTP : 201 -> Creado
        res.status(201).send({
          status: "success",
          data: {
            id: expe.id,
            id_user: expe.id_user,
            id_rasp: expe.id_rasp
          },
        });
        console.log('Registro exitoso')
      }
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
