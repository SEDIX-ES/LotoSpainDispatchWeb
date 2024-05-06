import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QuinielaInterface } from 'src/app/models/quiniela.interface';
import { ResultadosService } from 'src/app/services/resultados.service';

@Component({
  selector: 'app-d-resultado-quini',
  templateUrl: './d-resultado-quini.component.html',
  styleUrls: ['./d-resultado-quini.component.scss'],
})
export class DResultadoQuiniComponent implements OnInit {
  constructor(
    private _resultado: ResultadosService,
    private dialogRef: MatDialogRef<DResultadoQuiniComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) {}

  resultado!: QuinielaInterface;
  ngOnInit(): void {
    this.obtenerResultado();
  }

  comprobarResultado(cadena: string): string {
    var division: string[] = cadena.split('-');
    if (parseInt(division[0]) > parseInt(division[1])) {
      return '1';
    } else if (parseInt(division[0]) == parseInt(division[1])) {
      return 'X';
    } else {
      return '2';
    }
  }
  obtenerPleno(cadena: string): string {
    var division: string[] = cadena.split('-');
    if (parseInt(division[0]) >= 3) {
      division[0] = 'M';
    }
    if (parseInt(division[1]) >= 3) {
      division[1] = 'M';
    }
    return division[0] + '-' + division[1];
  }

  obtenerResultado(){
    this._resultado.getSorteoFecha('Quiniela',this.data).subscribe({
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
