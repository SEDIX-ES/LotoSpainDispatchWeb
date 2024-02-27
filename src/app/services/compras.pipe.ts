import { Pipe, PipeTransform } from '@angular/core';
import { InterfazBoleto } from '../models/BoletoInterface';

@Pipe({
  name: 'compras'
})
export class ComprasPipe implements PipeTransform {

  transform( data: InterfazBoleto[],filtro:string){
    if(data.length===0 || filtro===''){
      return data;
    }else{
      return data.filter((boleto)=>
      {
        return boleto.numero==filtro
      })
    }
  }
}
