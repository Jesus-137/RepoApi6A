import { Raspberry } from "../domain/Raspberry";
import { RaspberryRepository } from "../domain/RaspberryRepository";

export class GetAllUseCase {
    constructor (readonly raspRepo:RaspberryRepository){}

    async run(): Promise<Raspberry[] | null>{
        try {
            const rasps= await this.raspRepo.getAll()
            return rasps;
        } catch (error) {
            return null;
        }
    }
}