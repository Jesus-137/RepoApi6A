import { Request, Response } from "express";
import { CreatePorcentajeUseCase } from "../../application/CreatePorcentajeUseCase";

export class CreatePorcentajeController {
  constructor (
    readonly createPorcentajeUseCase: CreatePorcentajeUseCase
    ) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const porcentaje = await this.createPorcentajeUseCase.run(
        data.id_raspberry,
        data.co2,
        data.ch4,
        data.ph,
        data.electricidad
      );
      if (porcentaje){
        //Code HTTP : 201 -> Creado
        res.status(201).send({
          status: "success",
          data: {
            id: porcentaje.id,
            userName: porcentaje.id_raspberry,
            password: porcentaje.co2,
            ch4: porcentaje.ch4,
            ph: porcentaje.ph,
            electricidad: porcentaje.electricidad
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
