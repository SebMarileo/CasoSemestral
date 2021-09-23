import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

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
    alert('grabo')
  }
}
