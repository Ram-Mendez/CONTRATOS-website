import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators,} from "@angular/forms";
import {CdkDragPlaceholder} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-crear-editar-contratos',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CdkDragPlaceholder,
  ],
  templateUrl: './crear-editar-contratos.component.html',
  styleUrl: './crear-editar-contratos.component.css'
})
export class CrearEditarContratosComponent implements OnInit {
  selectOption1 = 4;
  selectOption2 = 15;
  selectOption3 = 21;
  datosFormulario: any;

  contratoForm = new FormGroup({
    contrato: new FormControl(''),
    fecha: new FormControl(''),
    impuesto: new FormControl(''),


  })

  guardarCambios() {
    if (this.contratoForm.valid) {
      this.datosFormulario = this.contratoForm.value
      // Aquí manejas la lógica para guardar los cambios, por ejemplo:
      console.log(this.contratoForm.value);
    }
  }


  ngOnInit() {
  }

}
