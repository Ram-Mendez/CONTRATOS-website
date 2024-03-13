import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {RouterOutlet} from "@angular/router";
import {SettingsComponent} from "../sidebar/sidebarComponents/settings/settings.component";


@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    RouterOutlet,
    SettingsComponent
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  constructor(public dialog: MatDialog) {}
}
