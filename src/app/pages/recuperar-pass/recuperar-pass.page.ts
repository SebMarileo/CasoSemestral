import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { Animation } from '@ionic/core';

@Component({
  selector: 'app-recuperar-pass',
  templateUrl: './recuperar-pass.page.html',
  styleUrls: ['./recuperar-pass.page.scss'],
})
export class RecuperarPassPage implements OnInit {

  animation: Animation;

  constructor(private animationCtrl: AnimationController) { }

  ngOnInit() {
    this.animation= this.animationCtrl.create()
      .addElement(document.querySelector('.square'))
      .duration(1500)
      .iterations(Infinity)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '1', '0.2');
  }
  play(){
    this.animation.play();
  }
  pause(){
    this.animation.pause();
  }
  stop(){
    this.animation.stop();
  }

}
