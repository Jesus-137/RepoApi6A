import { Request, Response } from "express";
import { LoginUseCase } from "../../application/LoginUseCase.ts";
import jwt from 'jsonwebtoken';

export class LoginController {
  constructor(readonly loginUseCase: LoginUseCase) {}

  async run(req: Request, res: Response) {
    const data = req.body
    try {
        const user = await this.loginUseCase.run(
            data.userName,
            data.password
        );
        if (user){
            const userName = data.userName
            const token = jwt.sign({ userName }, 'tu_secreto_secreto', { expiresIn: '1h' });
            res.json({ token });
        }
        else
            res.status(400).send({
                status: "error",
                msn: "Nombre de usario o contraceña incorectos",
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
