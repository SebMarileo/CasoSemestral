import { Component, OnInit } from '@angular/core';
import { ApiLoginService } from '../../services/api-login.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-inicio-sesion-alumno',
  templateUrl: './inicio-sesion-alumno.page.html',
  styleUrls: ['./inicio-sesion-alumno.page.scss'],
})
export class InicioSesionAlumnoPage implements OnInit {
  
  email: string;
  password: string;

  constructor(private apiService: ApiLoginService, public router: Router) { }

  ngOnInit() {
  }

  onSubmitLogin()
  {
    this.apiService.login(this.email, this.password).then( res =>{
      this.router.navigate(['/alumno'])
    }).catch(err => alert('Datos incorrectos o no Existen'))
  }

}
