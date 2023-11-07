import { CreateMediaUseCase } from "../../application/CreateMediaUseCase";
import { MysqlReactionsRepository } from "../../../Reactions/infrastructure/MysqlReactionsRepository";


export class CreateMediaController {
  constructor(
    readonly createMediaUseCase: CreateMediaUseCase,
    readonly mysqlReactionsRepo: MysqlReactionsRepository
  ) { }

  async run() {
    try {
      const exp: any = await this.mysqlReactionsRepo.getAll();
      console.log(exp)
      let co2=0, ch4=0, ph=0, conductividad=0;
      if (exp){
        for (let i = 0; i < exp.length; i++) {
          if (exp[i].name=='co2'){
            co2 += exp[i].cantidad;
          }else if (exp[i].name=='ch4'){
            ch4 += exp[i].cantidad;
          }else if(exp[i].name=='ph'){
            ph += exp[i].cantidad;
          }else if(exp[i].name=='conductividad'){
            conductividad += exp[i].conductividad
          }
        }
        const mco2 = co2/exp.length;
        const mch4 = ch4/exp.length;
        const mph = ph/exp.length;
        const mconductividad = conductividad/exp.length;
        const media = await this.createMediaUseCase.run(
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
