import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EurodreamsInterface } from 'src/app/models/eurodreams.interface';
import { ResultadosService } from 'src/app/services/resultados.service';

@Component({
  selector: 'app-d-resultado-eurod',
  templateUrl: './d-resultado-eurod.component.html',
  styleUrls: ['./d-resultado-eurod.component.scss']
})
export class DResultadoEurodComponent implements OnInit{
  resultado!: EurodreamsInterface;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string,
    private dialogRef: MatDialogRef<DResultadoEurodComponent>,
    private _resultado: ResultadosService,
  ){}
  ngOnInit(): void {
    this.obtenerResultado();
  }

  obtenerResultado(){
    this._resultado.getSorteoFecha('Eurodreams',this.data).subscribe({
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
