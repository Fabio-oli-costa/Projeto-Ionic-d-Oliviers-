import { Component } from '@angular/core';
import { AlertController, IonCard } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public AelrtCtrl: AlertController) {}

  async showpromo(){
    const showpromo = await this.AelrtCtrl.create({
      header: "Promoção do Dia",
      subHeader: "Refeição com prato de entrada e sobremesa",
      message: "A promoção de hoje inclui salada de tomate como entrada, Arroz e bife no prato principal e sorvete de sobremesa."
    });
    showpromo.present();
  }

}
