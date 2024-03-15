import {Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {TheHeaderComponent} from "./components/main/the-header/the-header.component";
import {MainComponent} from "./components/main/main.component";
import {SettingsComponent} from "./components/main/sidebar/sidebarComponents/settings/settings.component";
import {ContentComponent} from "./components/main/content/content.component";
import {ContratosComponent} from "./components/main/sidebar/sidebarComponents/contratos/contratos.component";
import {ContratistasComponent} from "./components/main/sidebar/sidebarComponents/contratistas/contratistas.component";
import {WebComponent} from "./components/main/sidebar/sidebarComponents/settings/web/web.component";
import {UsuariosComponent} from "./components/main/sidebar/sidebarComponents/settings/usuarios/usuarios.component";
import {
  InventarioComponent
} from "./components/main/sidebar/sidebarComponents/contratos/inventario/inventario.component";
import {ImpuestosComponent} from "./components/main/sidebar/sidebarComponents/contratos/impuestos/impuestos.component";
import {ListadoComponent} from "./components/main/sidebar/sidebarComponents/contratos/listado/listado.component";
import {
  GestionarComponent
} from "./components/main/sidebar/sidebarComponents/contratistas/gestionar/gestionar.component";
import {
  CrearEditarContratosComponent
} from "./components/main/sidebar/sidebarComponents/contratos/crear-editar-contratos/crear-editar-contratos.component";

export const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'main', component: MainComponent,
    children: [
      {path: 'settings', component: SettingsComponent,},
      {path: 'settings/web', component: WebComponent},
      {path: 'settings/usuarios', component: UsuariosComponent},

      {path: 'contratos', component: ContratosComponent,},
      {path: 'contratos/inventario', component: InventarioComponent,},
      {path: 'contratos/editarContratos', component: CrearEditarContratosComponent,},
      {path: 'contratos/impuestos', component: ImpuestosComponent,},
      {path: 'contratos/listado', component: ListadoComponent,},

      {path: 'contratistas', component: ContratistasComponent,},
      {path: 'contratistas/gestionar', component: GestionarComponent,},
    ]

  },
  {path: 'content', component: ContentComponent},


];
