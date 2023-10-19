import { Request, Response } from "express";
import { CreateReactionUseCase } from "../../application/CreateReactionUseCase";

export class CreateReactionController {
  constructor (
    readonly createReactionUseCase: CreateReactionUseCase
    ) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const reaction = await this.createReactionUseCase.run(
        data.id_raspberry,
        data.co2,
        data.ch4,
        data.ph,
        data.electricidad,
        data.tiempo_acumulado,
        data.fecha,
        data.hora
      );
      if (reaction){
        res.status(201).send({
          status: "success",
          data: {
            id: reaction.id,
            id_raspberry: reaction.id_raspberry,
            co2: reaction.co2,
            ch4: reaction.ch4,
            ph: reaction.ph,
            electricidad: reaction.electricidad,
            tiempo_acumulado: reaction.tiempo_acumulado,
            fecha: reaction.fecha,
            hora: reaction.hora
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
