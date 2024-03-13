import {Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {TheHeaderComponent} from "./components/main/the-header/the-header.component";
import {MainComponent} from "./components/main/main.component";
import {SettingsComponent} from "./components/main/sidebar/sidebarComponents/settings/settings.component";
import {ContentComponent} from "./components/main/content/content.component";
import {ContratosComponent} from "./components/main/sidebar/sidebarComponents/contratos/contratos.component";
import {ContratistasComponent} from "./components/main/sidebar/sidebarComponents/contratistas/contratistas.component";

export const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'main', component: MainComponent,
    children: [
      {path: 'settings', component: SettingsComponent, },
      {path: 'contratos' , component: ContratosComponent,},
      {path: 'contratistas', component: ContratistasComponent,}]
  },
  {path: 'content', component: ContentComponent},


];
