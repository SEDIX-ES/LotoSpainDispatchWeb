export interface resultadoLoteria {
  imagen: string;
  fecha: string;
  titulo: string;
  nombre: string;
  resultados: string;
  fondo?: string;
  textcolor?: string;
  game_Id?: string;
  reintegro: [];
  combinacion?: {
    primer_premio: string;
    Segundo_premio: string;
  };
}
