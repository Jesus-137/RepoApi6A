export class Reactions {
  constructor(
    readonly id: number,
    readonly id_raspberry: number,
    readonly co2: number,
    readonly ch4: number,
    readonly ph: number,
    readonly electricidad: number,
    readonly tiempo_acumulado: number,
    readonly fecha: string,
    readonly hora: string
  ) {}
}
