import { Request, Response } from "express";
import { GetByIdReactionUseCase } from "../../application/GetByIReactionUseCase";

export class GetByIdReactionController {
  constructor(readonly getByIdReactionCase: GetByIdReactionUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    try {
      const reaction = await this.getByIdReactionCase.run(id);

      if (reaction)
        //Code HTTP : 200 -> Consulta exitosa
        res.status(200).send({
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
