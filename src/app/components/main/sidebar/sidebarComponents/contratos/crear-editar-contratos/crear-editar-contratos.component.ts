import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {ContratoService} from "../../../../../../services/models/contratos/contrato.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {Contrato} from "../../../../../../services/models/contratos/contrato";
import {toNumbers} from "@angular/compiler-cli/src/version_helpers";

@Component({
  selector: 'app-crear-editar-contratos',
  templateUrl: './crear-editar-contratos.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ContratoService, HttpClient],
  styleUrl: './crear-editar-contratos.component.css'
})
export class CrearEditarContratosComponent implements OnInit {
  id: any = '';

  constructor(private route: ActivatedRoute, private contratoService: ContratoService, private router: ActivatedRoute
    , private http: HttpClient
  ) {
  }

  selectOption1 = 4;
  selectOption2 = 15;
  selectOption3 = 21;
  datosFormulario: any;

  contratoForm = new FormGroup({
    nombre: new FormControl(''),
    fechaCreacion: new FormControl(''),
    iva: new FormControl(''),


  })

  guardarCambios() {
    if (this.contratoForm.valid) {
      if (this.id !== undefined) {
        this.contratoService.actualizarContrato(this.contratoForm.value, this.id).subscribe();
      } else {
        this.contratoService.crearContrato(this.contratoForm.value).subscribe();
      }
      console.log(this.contratoForm.value);

    }
  }


  ngOnInit() {
    //Me suscribo a la parte variable de la ruta. Cuando hay un cambio, este metodo lo detecta
    (this.router.params.subscribe(params => {
      //una vez detectados los cambios, se recoge el valor de params, en este caso es ID, porque es asi definido en router.ts
      this.id = params['id'];

      console.log(this.id + ' este es el id que obtenemos de la ruta')
      this.http.get<Contrato>('\n' +
        'http://localhost:8080/contratos/' + this.id).subscribe((contrato: Contrato) => {
        console.log(contrato)
        this.contratoForm.get('nombre')?.patchValue(contrato.nombre);
        this.contratoForm.get('fechaCreacion')?.patchValue(contrato.fechaCreacion?.toString());
        this.contratoForm.get('iva')?.patchValue(contrato.iva?.toString());


      })
    }))
  }

}
