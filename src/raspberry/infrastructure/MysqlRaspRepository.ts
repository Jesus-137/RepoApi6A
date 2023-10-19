import { query } from "../../database/mysql";
import { Raspberry } from "../domain/Raspberry";
import { RaspberryRepository } from "../domain/RaspberryRepository";

export class MysqlRaspRepository implements RaspberryRepository{
    async getAll(): Promise<Raspberry[] | null> {
        const sql = "SELECT * FROM raspberrys"
        try {
            const [data]: any = await query(sql, []);
            const dataRasp = Object (JSON.parse(JSON.stringify(data)))
            return dataRasp.map((rasp: any)=>{
                return new Raspberry(
                    rasp.id,
                    rasp.modelo
                )
            });
        } catch (error) {
            return null;
        }
    }

    async getById(id: number): Promise<Raspberry | null> {
        const sql = "SELECT * FROM raspberrys WHERE id=?"
        const params: any[] = [id];
        try {
            const result: any = await query(sql, params);
            const rasp = result[0][0]
            return new Raspberry(
                rasp.id,
                rasp.modelo
            );
        } catch (error) {
            return null;
        }
    }
    
    async createRasp(modelo: string): Promise<Raspberry | null> {
        const sql = "INSERT INTO raspberrys (modelo) VALUES (?)";
        const params: any[] = [modelo]
        try {
            const [rasp]: any = await query(sql, params);
            return new Raspberry (rasp.insertId, modelo);
        } catch (error) {
            return null;
        }
    }
}