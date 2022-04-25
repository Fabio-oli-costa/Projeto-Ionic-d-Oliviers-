import { Component, OnInit } from '@angular/core';
import { AlertController} from '@ionic/angular';

@Component({
  selector: 'app-refeicao',
  templateUrl: './refeicao.page.html',
  styleUrls: ['./refeicao.page.scss'],
})
export class RefeicaoPage implements OnInit {

  constructor(public AelrtCtrl: AlertController) { }

  ngOnInit() {
  }

  async popup1(){
    const popup1 = await this.AelrtCtrl.create({
      header: "Promoção do Dia",
      subHeader: "Refeição com prato de entrada e sobremesa",
      message: "A promoção de hoje inclui salada de tomate como entrada, Arroz e bife no prato principal e sorvete de sobremesa."
    });
    popup1.present();
  }

  async popup2(){
    const popup2 = await this.AelrtCtrl.create({
      header: "Promoção do Dia",
      subHeader: "Refeição com prato de entrada e sobremesa",
      message: "A promoção de hoje inclui salada de tomate como entrada, Arroz e bife no prato principal e sorvete de sobremesa."
    });
    popup2.present();
  }

  async popup3(){
    const popup3 = await this.AelrtCtrl.create({
      header: "Promoção do Dia",
      subHeader: "Refeição com prato de entrada e sobremesa",
      message: "A promoção de hoje inclui salada de tomate como entrada, Arroz e bife no prato principal e sorvete de sobremesa."
    });
    popup3.present();
  }

  async popup4(){
    const popup4 = await this.AelrtCtrl.create({
      header: "Promoção do Dia",
      subHeader: "Refeição com prato de entrada e sobremesa",
      message: "A promoção de hoje inclui salada de tomate como entrada, Arroz e bife no prato principal e sorvete de sobremesa."
    });
    popup4.present();
  }
  
  async popup5(){
    const popup5 = await this.AelrtCtrl.create({
      header: "Promoção do Dia",
      subHeader: "Refeição com prato de entrada e sobremesa",
      message: "A promoção de hoje inclui salada de tomate como entrada, Arroz e bife no prato principal e sorvete de sobremesa."
    });
    popup5.present();
  }
}
