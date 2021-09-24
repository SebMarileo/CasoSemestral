import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { Animation } from '@ionic/core';

@Component({
  selector: 'app-animacion',
  templateUrl: './animacion.page.html',
  styleUrls: ['./animacion.page.scss'],
})
export class AnimacionPage implements OnInit {

  constructor(private animationCtrl: AnimationController) { 
    const animacion: Animation = animationCtrl.create()
    .addElement(document.querySelector('cc'))
    .duration(1000)
    .fromTo('opacity',1,0);
    animacion.play;
  }

  ngOnInit() {
  }

}
