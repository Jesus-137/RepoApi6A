import { Request, Response } from "express";
import { GetByIdPorcentajeUseCase } from "../../application/GetByIdPorcentajeUseCase";

export class GetByIdPorcentajeController {
  constructor(readonly getByIdReactionCase: GetByIdPorcentajeUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    try {
      const porcentaje = await this.getByIdReactionCase.run(id);

      if (porcentaje)
        //Code HTTP : 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          data: {
            id: porcentaje.id,
            id_user: porcentaje.id_raspberry,
            co2: porcentaje.co2,
            ch4: porcentaje.ch4,
            ph: porcentaje.ph,
            electricidad: porcentaje.electricidad
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
