import { Component } from '@angular/core';
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {FooterComponent} from "../main/footer/footer.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    FooterComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) {
  }


  goToMain() {
    this.router.navigate(['/main'])
  }

  getOut() {
    window.location.href = 'https://www.google.com';
  }

}
