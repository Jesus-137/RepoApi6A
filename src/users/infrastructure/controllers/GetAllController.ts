import { Request, Response } from "express";
import { GetAllUseCase } from "../../application/GetAllUseCase";
import jwt  from "jsonwebtoken";

export class GetAllController {
  constructor(readonly getAllUseCase: GetAllUseCase) {}

  async run(req: Request, res: Response) {
    const token = req.headers['authorization'];
    try {
      if (!token) {
        return res.status(403).json({ error: 'Acceso denegado' });
      }
      else{
        const valido: any = jwt.verify(token, 'tu_secreto_secreto', (err) => 
          {if (err) {
            return false;
          }else{
            return true;
          }}
        );
        if (valido){
          const users = await this.getAllUseCase.run();
          if (users)
          res.status(200).send(users.map((user: any) => {
            return {
              id: user.id,
              userName: user.userName,
              password: user.password,
              correo: user.correo
            };
          }),
          );
          else
            res.status(400).send({
              status: "error",
              msn: "Ocurrio algún problema",
            });
        }else{
          res.status(401).json({ error: 'Token no válido' })
        }
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
