import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioSesionAlumnoPage } from './inicio-sesion-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: InicioSesionAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioSesionAlumnoPageRoutingModule {}
