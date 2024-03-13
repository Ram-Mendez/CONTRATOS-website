import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import { TreeModule } from 'primeng/tree';
import {MatDialog} from "@angular/material/dialog";
import {ContentComponent} from "../content/content.component";



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
