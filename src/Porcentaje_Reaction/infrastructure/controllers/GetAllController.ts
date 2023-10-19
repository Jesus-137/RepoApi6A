import { Request, Response } from "express";
import { GetAllUseCase } from "../../application/GetAllUseCase";

export class GetAllController {
  constructor(readonly getAllUseCase: GetAllUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const porcentajes = await this.getAllUseCase.run();
      if (porcentajes)
        res.status(200).send(porcentajes.map((porcentaje: any) => {
            return {
              id: porcentaje.id,
              id_user: porcentaje.id_raspberry,
              co2: porcentaje.co2,
              ch4: porcentaje.ch4,
              ph: porcentaje.ph,
              electricidad: porcentaje.electricidad
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
