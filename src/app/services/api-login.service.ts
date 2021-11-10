import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class ApiLoginService {

  constructor(private AFauth : AngularFireAuth) { }

  login(email:string, password:string){

    return new Promise((resolve, rejected) => {
      this.AFauth.auth.signInWithEmailAndPassword(email, password).then(user => {
      resolve(user);
      }).catch(err => rejected(err)); 
    }) 

     
  }
}
