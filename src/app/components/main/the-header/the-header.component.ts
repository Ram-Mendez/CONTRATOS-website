import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-the-header',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './the-header.component.html',
  styleUrl: './the-header.component.css'
})
export class TheHeaderComponent {
constructor(public userService:  UserService ) {
}
}
