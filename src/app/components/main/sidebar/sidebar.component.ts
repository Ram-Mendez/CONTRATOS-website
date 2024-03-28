import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import { TreeModule } from 'primeng/tree';




@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    TreeModule,
    RouterOutlet
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor() {
  }



}
