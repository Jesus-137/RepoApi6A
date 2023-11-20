import { Request, Response } from "express";
import { GetAllUseCase } from "../../application/GetAllUseCase.ts";

export class GetAllReactionsController {
  constructor(readonly getAllUseCase: GetAllUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const reactions = await this.getAllUseCase.run();
      if (reactions)
        res.status(200).send(reactions.map((reaction: any) => {
            return {
              id: reaction.id,
              name: reaction.name,
              cantidad: reaction.cantidad,
              tiempo: reaction.tiempo,
              id_expe: reaction.id_expe
            };
          }),
        );
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
