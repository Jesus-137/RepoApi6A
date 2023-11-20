import { Request, Response } from "express";
import { CreateReactionUseCase } from "../../application/CreateReactionUseCase.ts";

export class CreateReactionController {
  constructor (
    readonly createReactionUseCase: CreateReactionUseCase
    ) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const reaction = await this.createReactionUseCase.run(
        data.name,
        data.cantidad,
        data.tiempo,
        data.id_expe
      );
      if (reaction){
        res.status(201).send({
          status: "success",
          data: {
            id: reaction.id,
            name: reaction.name,
            cantidad: reaction.cantidad,
            tiempo: reaction.tiempo,
            id_expe: reaction.id_expe
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
