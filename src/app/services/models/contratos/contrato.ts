export class Contrato {
  id: number;

  versionNum: number;
  nombre: string;
  fechaCreacion: Date;
  iva: number;
  entidadAutoridad: any[]
  entidadContratante: any[];



  constructor(id: number, versionNum: number, nombre: string, fechaCreacion: Date, iva: number, entidadAutoridad: any, entidadContratante: any) {
    this.id = id;
    this.versionNum = versionNum;
    this.nombre = nombre;
    this.fechaCreacion = fechaCreacion;
    this.iva = iva;
    this.entidadAutoridad = entidadAutoridad;
    this.entidadContratante = entidadContratante;
  }




}
