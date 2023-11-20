import { Request,Response } from "express";
import { CreateRaspUseCase } from "../../application/CreateRaspUseCase.ts";

export class CreateRaspController{
    constructor(
        readonly createRaspUseCase: CreateRaspUseCase
    ){}

    async run(req: Request, res: Response){
        const data = req.body;
        try {
            const rasp = await this.createRaspUseCase.run(data.modelo);
            if (rasp){
                res.status(201).send({
                    status: "success",
                    tada: {
                        id: rasp.id,
                        modelo: rasp.modelo
                    }
                })
            }
            else
                res.status(204).send({
                status: "error",
                data: "NO fue posible agregar el registro",
                });
        } catch (error) {
            res.status(204).send({
                status: "error",
                data: "Ocurrio un error",
                msn: error,
            });
        }
    }
}