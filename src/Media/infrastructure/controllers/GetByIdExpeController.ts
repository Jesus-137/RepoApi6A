import { Request, Response } from "express";
import { GetByIdMediaUseCase } from "../../application/GetByIdMediaUseCase";

export class GetByIdExpeController {
  constructor(readonly getByIdExpeCase: GetByIdMediaUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    try {
      const medias = await this.getByIdExpeCase.run(id);

      if (medias)
        //Code HTTP : 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          data: medias.map((media: any)=>{
            return {
              id: media.id,
              id_user: media.id_user,
              co2: media.co2,
              ch4: media.ch4,
              ph: media.ph,
              conductividad: media.conductividad
            }
          }),
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
