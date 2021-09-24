import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  qrData = "https://ionicframework.com/docs/components";
  elementType: 'url' | 'img' | 'canvas' = 'canvas'
  constructor(private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
  }

  usuario: any;

  lista() {
    var datos = localStorage.getItem('Usuarios');
    datos = datos.replace('[', '');
    datos = datos.replace(']', '');
    datos = datos.split('},{').join('};{');
    //alert(datos)
    var arreglo_temp = datos.split(";");
    var use;
    var lista_temporal = new Array();
    for (let index = 0; index < arreglo_temp.length; index++) {
      var registro = arreglo_temp[index];
      var el_user = JSON.parse(registro);
      use = {
        user: el_user.user
      }
      lista_temporal.push(use);
    }
    this.usuario(lista_temporal);
  }

}
