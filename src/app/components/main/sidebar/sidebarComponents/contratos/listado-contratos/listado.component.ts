import {Component, OnInit} from '@angular/core';
import {ContratoService} from "../../../../../../services/models/contratos/contrato.service";
import {HttpClient} from "@angular/common/http";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  providers: [ContratoService,],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent implements OnInit {
  contratos: any;

  constructor(private contratosService: ContratoService) {
  }

  refrescarTablaContratos() {
    this.contratosService.obtenerContrato().subscribe(data => {
      console.log(data)
      this.contratos = data
    })
  }

  ngOnInit() {
    this.refrescarTablaContratos()
  }

  contratoDeleted(id: number) {
    this.contratosService.deleteContrato(id).subscribe(
      response => {
        this.refrescarTablaContratos();
      }
    );

  }
}
