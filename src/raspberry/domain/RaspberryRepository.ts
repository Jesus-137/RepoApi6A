import { Raspberry } from "./Raspberry.ts";

export interface RaspberryRepository{
    getAll(): Promise<Raspberry[] | null>
    getById(id:number): Promise<Raspberry | null>
    createRasp(
        modelo: string
    ): Promise<Raspberry | null>
}