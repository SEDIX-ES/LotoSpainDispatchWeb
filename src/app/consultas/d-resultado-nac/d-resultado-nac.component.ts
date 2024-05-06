import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NacionalInterface } from 'src/app/models/nacional.inerface';
import { ResultadosService } from 'src/app/services/resultados.service';

@Component({
  selector: 'app-d-resultado-nac',
  templateUrl: './d-resultado-nac.component.html',
  styleUrls: ['./d-resultado-nac.component.scss']
})
export class DResultadoNacComponent {
  resultado!: NacionalInterface;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string,
    private dialogRef: MatDialogRef<DResultadoNacComponent>,
    private _resultado: ResultadosService,
  ){}
  ngOnInit(): void {
    this.obtenerResultado();
  }

  obtenerResultado(){
    this._resultado.getSorteoFecha('Nacional',this.data).subscribe({
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
}
