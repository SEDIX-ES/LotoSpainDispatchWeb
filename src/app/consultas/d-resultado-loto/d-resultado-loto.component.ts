import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LototurfInterface } from 'src/app/models/lototurf.interface';
import { ResultadosService } from 'src/app/services/resultados.service';

@Component({
  selector: 'app-d-resultado-loto',
  templateUrl: './d-resultado-loto.component.html',
  styleUrls: ['./d-resultado-loto.component.scss']
})
export class DResultadoLotoComponent {
  resultado!: LototurfInterface;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string,
    private dialogRef: MatDialogRef<DResultadoLotoComponent>,
    private _resultado: ResultadosService,
  ){}
  ngOnInit(): void {
    this.obtenerResultado();
  }

  obtenerResultado(){
    this._resultado.getSorteoFecha('Lototurf',this.data).subscribe({
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
