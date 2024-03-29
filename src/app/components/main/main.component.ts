import { Component } from '@angular/core';
import {TheHeaderComponent} from "./the-header/the-header.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {ContentComponent} from "./content/content.component";
import {FooterComponent} from "./footer/footer.component";
import {LoginComponent} from "../login/login.component";
import {Router, RouterOutlet} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    TheHeaderComponent,
    SidebarComponent,
    ContentComponent,
    FooterComponent,
    LoginComponent,
    RouterOutlet
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  registerForm = this.formBuilder.group({
    usuario: [''],
    contrasena: ['', Validators.maxLength(4)],
  })

  constructor( private router: Router, private formBuilder: FormBuilder) {
  }

}
