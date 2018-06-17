import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CreatePage} from '../../pages/create/create';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  createPage: any;

  constructor(public navCtrl: NavController) {
    this.createPage = CreatePage;
  }

  goToCreatePage(): void {
    this.navCtrl.push('CreatePage');
  }
}
