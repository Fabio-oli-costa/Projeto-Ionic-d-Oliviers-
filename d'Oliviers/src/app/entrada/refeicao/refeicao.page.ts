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
}
