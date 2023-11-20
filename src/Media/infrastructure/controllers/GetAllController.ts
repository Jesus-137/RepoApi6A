import { Request, Response } from "express";
import { GetAllUseCase } from "../../application/GetAllUseCase.ts";
import { CreateMediaController } from "./CreateMediaController.ts";

export class GetAllController {
  constructor(
    readonly getAllUseCase: GetAllUseCase,
    readonly createMediaController: CreateMediaController
  ) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    try {
      const createMedia: any = await this.createMediaController.run(id);
      if (createMedia==1){
        const medias = await this.getAllUseCase.run();
        if (medias)
          res.status(200).send(
            {
              status: 'success', 
              data: medias.map((media: any) => {
                return {
                  id: media.id,
                  id_user: media.id_user,
                  co2: media.co2,
                  ch4: media.ch4,
                  ph: media.ph,
                  conductividad: media.conductividad
                };
              }),
            }
          );
        else
          res.status(400).send({
            status: "error",
            msn: "Ocurrio algún problema",
          });
      }else if(createMedia==0){
        res.status(400).send({
          status: "error",
          msn: "Ocurrio algún problema con el guardado",
        });
      }
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
