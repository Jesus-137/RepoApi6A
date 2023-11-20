import { Raspberry } from "../domain/Raspberry.ts";
import { RaspberryRepository } from "../domain/RaspberryRepository.ts";

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