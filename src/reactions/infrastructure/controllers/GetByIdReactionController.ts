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
            name: reaction.name,
            cantidad: reaction.cantidad,
            tiempo: reaction.tiempo,
            id_expe: reaction.id_expe
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
