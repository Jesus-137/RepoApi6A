import { Request, Response } from "express";
import { GetByIdReactionUseCase } from "../../application/GetByIReactionUseCase";
import jwt  from "jsonwebtoken";

export class GetByIdReactionController {
  constructor(readonly getByIdReactionCase: GetByIdReactionUseCase) {}

  async run(req: Request, res: Response) {
    const name: string = req.body.name;
    const token = req.headers['authorization'];
    try {
      if (!token) {
        return res.status(403).json({ error: 'Acceso denegado' });
      }else{
        const valido: any = jwt.verify(token, 'tu_secreto_secreto', (err) => 
          {if (err) {
            return false;
          }else{
            return true;
          }}
        );
        if(valido){
          const reaction = await this.getByIdReactionCase.run(name);
          if (reaction)
            //Code HTTP : 200 -> Consulta exitosa
            res.status(200).send({
              error: '',  
              body: reaction.map((reaccion: any) => {
                return {
                  id: reaccion.id,
                  name: reaccion.name,
                  cantidad: reaccion.cantidad,
                  tiempo: reaccion.tiempo,
                  id_expe: reaccion.id_expe
                };
              })}
            )
          else
            res.status(400).send({
              status: "error",
              msn: "Ocurrio algún problema",
            });
        }else
          return res.status(403).json({ error: 'Acceso denegado' });
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
