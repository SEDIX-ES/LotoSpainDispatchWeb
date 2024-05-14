import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QuinigolInterface } from 'src/app/models/quinigol.interface';
import { ResultadosService } from 'src/app/services/resultados.service';

@Component({
  selector: 'app-d-resultado-quinig',
  templateUrl: './d-resultado-quinig.component.html',
  styleUrls: ['./d-resultado-quinig.component.scss']
})
export class DResultadoQuinigComponent {
  constructor(
    private _resultado: ResultadosService,
    private dialogRef: MatDialogRef<DResultadoQuinigComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) {}

  resultado!: QuinigolInterface;
  ngOnInit(): void {
    this.obtenerResultado();
  }

  modificarResultado(cadena: string): string {
    var division: string[] = cadena.split('-');
    if (parseInt(division[0]) >= 3) {
      division[0]="M";
    }
    if (parseInt(division[1]) >= 3) {
      division[1]="M";
    }
    return division[0]+"-"+division[1];
  }

  obtenerResultado(){
    this._resultado.getSorteoFecha('Quinigol',this.data).subscribe({
      next: (res:any)=>{
        if(res.status==204){
          console.log("Tavacío");
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
