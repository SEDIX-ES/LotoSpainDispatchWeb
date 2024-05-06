import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GordoInterface } from 'src/app/models/gordo.interface';
import { ResultadosService } from 'src/app/services/resultados.service';

@Component({
  selector: 'app-d-resultado-gordo',
  templateUrl: './d-resultado-gordo.component.html',
  styleUrls: ['./d-resultado-gordo.component.scss']
})
export class DResultadoGordoComponent {
  resultado!: GordoInterface;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string,
    private dialogRef: MatDialogRef<DResultadoGordoComponent>,
    private _resultado: ResultadosService,
  ){}
  ngOnInit(): void {
    this.obtenerResultado();
  }

  obtenerResultado(){
    this._resultado.getSorteoFecha('Gordo',this.data).subscribe({
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
