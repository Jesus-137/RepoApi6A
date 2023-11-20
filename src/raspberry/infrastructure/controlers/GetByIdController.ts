import { Request, Response } from "express";
import { GetByIdUseCase } from "../../application/GetByIdUseCase.ts";

export class GetByIdController{
    constructor(
        readonly getByIdUseCase: GetByIdUseCase
    ){}

    async run(req: Request, res: Response){
        const id: number = parseInt(req.params.id)
        try {
            const rasp = await this.getByIdUseCase.run(id);
            if (rasp)
                res.status(201).send({
                    status:"success",
                    data:{
                        id: rasp.id,
                        modelo: rasp.modelo
                    },
                });
            else
                res.status(400).send({
                    status: "error",
                    msn: "Ocurio un problema"
                });
        } catch (error) {
            res.status(204).send({
                status:"error",
                data: "Ocurio un error",
                msn:error
            })
        }
    }
}