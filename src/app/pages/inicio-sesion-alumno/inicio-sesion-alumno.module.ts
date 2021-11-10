import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioSesionAlumnoPageRoutingModule } from './inicio-sesion-alumno-routing.module';

import { InicioSesionAlumnoPage } from './inicio-sesion-alumno.page';
import { AppModuleModule } from 'src/app/app-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioSesionAlumnoPageRoutingModule,
    ReactiveFormsModule,
    AppModuleModule
  ],
  declarations: [InicioSesionAlumnoPage]
})
export class InicioSesionAlumnoPageModule {}
