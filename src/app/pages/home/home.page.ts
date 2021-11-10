import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { auth } from 'firebase';
import { ApiLoginService } from '../../services/api-login.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  
})
export class HomePage {

  email: string;
  password: string;

  constructor(private apiService: ApiLoginService, public router: Router) {}
  /*
  user = new FormGroup({
    eluser : new FormControl('')
  })

  lista_user=new Array();
  usuario:any;
  grabar(){
    this.usuario={
      user: this.user.controls.eluser.value
    }
    this.lista_user.push(this.usuario);
    var datos = this.lista_user;
    localStorage.setItem('Usuarios',JSON.stringify(datos));
    //alert('grabo')
  }
  */

  onSubmitLogin()
  {
    this.apiService.login(this.email, this.password).then( res =>{
      this.router.navigate(['/inicio'])
    }).catch(err => alert('Datos incorrectos o no Existen'))
  }
}
