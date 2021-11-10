import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AlumnoPageRoutingModule } from './alumno-routing.module';
import { AlumnoPage } from './alumno.page';

import { AppModuleModule } from 'src/app/app-module.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnoPageRoutingModule,
    ReactiveFormsModule,
    AppModuleModule
  ],
  declarations: [AlumnoPage]
})
export class AlumnoPageModule {}
