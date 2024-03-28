import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {FooterComponent} from "../main/footer/footer.component";
import {Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    FooterComponent,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  registerForm = this.formBuilder.group({
    usuario: [''],
    contrasena: ['', Validators.maxLength(4)],
  })

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) {
  }

  ngOnInit() {

  };

  logForm() {
    console.log(this.registerForm.value);
    this.userService.nombre = this.registerForm.value.usuario;
    this.router.navigate(['/main'])
  }

}
