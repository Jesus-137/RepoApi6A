import { Raspberry } from "../domain/Raspberry";
import { RaspberryRepository } from "../domain/RaspberryRepository";

export class GetByIdUseCase{
    constructor(readonly raspRepo: RaspberryRepository){}

    async run(
        id: number
    ): Promise <Raspberry | null>{
        try {
            const rasp = await this.raspRepo.getById(id)
            return rasp;
        } catch (error) {
            return null;
        }
    }
}