import { Component, Inject, OnInit } from '@angular/core';
import { ResultadosService } from 'src/app/services/resultados.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BonolotoInterface } from 'src/app/models/bonoloto.interface';

@Component({
  selector: 'app-d-resultado-bono',
  templateUrl: './d-resultado-bono.component.html',
  styleUrls: ['./d-resultado-bono.component.scss']
})
export class DResultadoBonoComponent implements OnInit{
  resultado!: BonolotoInterface;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string,
    private dialogRef: MatDialogRef<DResultadoBonoComponent>,
    private _resultado: ResultadosService,
  ){}
  ngOnInit(): void {
    this.obtenerResultado();
  }

  obtenerResultado(){
    this._resultado.getSorteoFecha('Bonoloto',this.data).subscribe({
      next: (res:any)=>{
        if(res.status==204){
        }else{
          this.resultado=res.body;
        }
        console.log(this.resultado);
      },
      error: (err)=>{
        console.log("ERROR AL CARGAR EL RESULTADO", err);
      },
      complete:()=>{},
    });
  }

  closeDialog(){
    this.dialogRef.close();
  }

  resultadoVacio(array:number[]):boolean{
    console.log(array);
    if(array.length==0){
      return true;
    }else{
      return false;
    }
  }
}
