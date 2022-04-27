import { Component} from '@angular/core';
import { AlertController} from '@ionic/angular';

import SwiperCore, { Pagination } from "swiper"

SwiperCore.use([Pagination]);


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(public AelrtCtrl: AlertController) {}

  async showpromo(){
    const showpromo = await this.AelrtCtrl.create({
      cssClass: "alert",
      header: "Inclui: Entrada, Prato Principal e Sobremesa",
      subHeader:"Pelo preço promocional de R$24,90",
      message: "A promoção de hoje tem como entrada a nossa deliciosa Raclette acompanhada de salame defumado, com prato principal sendo o Blanquette de Veau, finalizando com o Petti Gateau na sobremesa"
    });
    showpromo.present();
  }
}
