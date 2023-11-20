import { Request, Response } from "express";
import { GetAllUseCase } from "../../application/GetAllUseCase.ts";

export class GetAllController{
    constructor(
        readonly getAllUseCase: GetAllUseCase
    ){}

    async run(req: Request, res: Response){
        try {
            const rasps = await this.getAllUseCase.run();
            if (rasps){
                res.status(201).send(rasps.map((rasp:any)=>{
                    return {
                        id: rasp.id,
                        modelo: rasp.modelo
                    };
                }));
            }
            else
                res.status(400).send({
                    status: "error",
                    msn: "Ocurio un problema"
                });
        } catch (error) {
            res.status(204).send({
                status: "error",
                data: "Ocurio un error",
                msn: error
            })
        }
    }
}