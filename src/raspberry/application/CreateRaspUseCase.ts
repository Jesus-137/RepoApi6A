import { Raspberry } from "../domain/Raspberry";
import { RaspberryRepository } from "../domain/RaspberryRepository";

export class CreateRaspUseCase{
    constructor (readonly raspRepo: RaspberryRepository){}

    async run(
        modelo: string
    ): Promise <Raspberry | null>{
        try {
            const rasp= await this.raspRepo.createRasp(
                modelo
            );
            return rasp;
        } catch (error) {
            return null;
        }
    }
}