import { CreateDesviacionUseCase } from "../../application/CreateDesviacionUseCase.ts";
import { MysqlReactionsRepository } from "../../../Reactions/infrastructure/MysqlReactionsRepository.ts";
import { MysqlMediaRepository } from "../../../Media/infrastructure/MysqlExpeRepository.ts";


export class CreateDesviacionController {
  constructor(
    readonly createDesviacionUseCase: CreateDesviacionUseCase,
    readonly mysqlReactionsRepo: MysqlReactionsRepository,
    readonly mysqlMediaRepo: MysqlMediaRepository
  ) { }

  async run(id_user: number) {
    try {
      const reaction: any = await this.mysqlReactionsRepo.getAll();
      const media: any = await this.mysqlMediaRepo.getById(id_user);
      let co2=0, nCo2=0, ch4=0, nCh4=0, ph=0, nPh=0, conductividad=0, nConductividad=0;
      if (reaction){
        if (media){
          for (let i = 0; i < reaction.length; i++) {
            for (let j = 0; j < media.length; j++){
              if (reaction[i].name=='co2'){
                co2 += Math.pow(reaction[i].cantidad - media[j].co2, 2);
                nCo2++
              }else if (reaction[i].name=='ch4'){
                ch4 += Math.pow(reaction[i].cantidad - media[j].ch4, 2);
                nCh4++
              }else if(reaction[i].name=='ph'){
                ph += Math.pow(reaction[i].cantidad - media[j].ph, 2);
                nPh++
              }else if(reaction[i].name=='conductividad'){
                conductividad += Math.pow(reaction[i].cantidad - media[j].conductividad, 2);
                nConductividad++
              }
            }
          }
          const mco2 = Math.sqrt(co2/(nCo2-1));
          const mch4 = Math.sqrt(ch4/(nCh4-1));
          const mph = Math.sqrt(ph/(nPh-1));
          const mconductividad = Math.sqrt(conductividad/(nConductividad-1));
          const desviacion = await this.createDesviacionUseCase.run(
            id_user,
            mco2,
            mch4,
            mph,
            mconductividad
          );
          if (desviacion) {
            console.log('Registro exitoso');
            return 1;
          }
        }
        else 
          return 0;
      }
      else
        return 0;
    } catch (error) {
      return -1;
    }
  }
}
