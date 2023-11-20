import { CreateMediaUseCase } from "../../application/CreateMediaUseCase";
import { MysqlReactionsRepository } from "../../../Reactions/infrastructure/MysqlReactionsRepository";


export class CreateMediaController {
  constructor(
    readonly createMediaUseCase: CreateMediaUseCase,
    readonly mysqlReactionsRepo: MysqlReactionsRepository
  ) { }

  async run(id_user: number) {
    try {
      const exp: any = await this.mysqlReactionsRepo.getAll();
      console.log(exp)
      let co2=0, nCo2=0, ch4=0, nCh4=0, ph=0, nPh=0, conductividad=0, nConductividad=0;
      if (exp){
        for (let i = 0; i < exp.length; i++) {
          if (exp[i].name=='co2'){
            co2 += exp[i].cantidad;
            nCo2++
          }else if (exp[i].name=='ch4'){
            ch4 += exp[i].cantidad;
            nCh4++
          }else if(exp[i].name=='ph'){
            ph += exp[i].cantidad;
            nPh++
          }else if(exp[i].name=='conductividad'){
            conductividad += exp[i].cantidad
            nConductividad++
          }
        }
        const mco2 = co2/nCo2;
        const mch4 = ch4/nCh4;
        const mph = ph/nPh;
        const mconductividad = conductividad/nConductividad;
        const media = await this.createMediaUseCase.run(
          id_user,
          mco2,
          mch4,
          mph,
          mconductividad
        );
        if (media) {
          console.log('Registro exitoso');
          return 1;
        }
      }
      else
        return 0;
    } catch (error) {
      //Code HTTP : 204 Sin contenido
      return -1;
    }
  }
}
