import { query } from "../../database/mysql";
import { Porcentaje } from "../domain/Porcentaje";
import { PorcentajeRepository } from "../domain/PorcentajeRepository";

export class MysqlPorcentajeRepository implements PorcentajeRepository {
  async getById (id: number): Promise<Porcentaje | null> {
    const sql = "SELECT * FROM porcentaje WHERE id=?";
    const params: any[] = [id];
    try {
      const result: any = await query(sql, params);
      const porcentaje = result[0][0]
      return new Porcentaje(
        porcentaje.id,
        porcentaje.id_raspberry,
        porcentaje.co2,
        porcentaje.ch4,
        porcentaje.ph,
        porcentaje.electricidad
      );
    } catch (error) {
      return null;
    }
  }
  async getAll(): Promise<Porcentaje[] | null> {
    const sql = "SELECT * FROM porcentaje";
    try {
      const [data]: any = await query(sql, []);
      const dataPorcentajes = Object.values(JSON.parse(JSON.stringify(data)));
      return dataPorcentajes.map(
        (porcentaje: any) =>
          new Porcentaje(
            porcentaje.id,
            porcentaje.id_raspberry,
            porcentaje.co2,
            porcentaje.ch4,
            porcentaje.ph,
            porcentaje.electricidad
          )
      );
    } catch (error) {
      return null;
    }
  }

  async createPorcentaje(
    id_raspberry: number,
    co2: number,
    ch4: number,
    ph: number,
    electricidad: number
  ): Promise<Porcentaje | null> {
    const sql = "INSERT INTO porcentaje (id_raspberry, co2, ch4, ph, electricidad) VALUES (?, ?, ?, ?, ?)";
    const params: any[] = [id_raspberry, co2, ch4, ph, electricidad];
    try {
      const [result]: any = await query(sql, params);
      return new Porcentaje(result.insertId, id_raspberry, co2, ch4, ph, electricidad);
    } catch (error) {
      return null;
    }
  }
}
