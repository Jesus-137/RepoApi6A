import { Request, Response } from "express";
import { GetByIdDesviacionUseCase } from "../../application/GetByIdDesviacionUseCase";

export class GetByIdDesviacionController {
  constructor(readonly getByIdExpeCase: GetByIdDesviacionUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    try {
      const media = await this.getByIdExpeCase.run(id);

      if (media)
        //Code HTTP : 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          data: {
            id: media.id,
            id_user: media.id_user,
            co2: media.co2,
            ch4: media.ch4,
            ph: media.ph,
            conductividad: media.conductividad
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
