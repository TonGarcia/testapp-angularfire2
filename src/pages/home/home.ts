import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CreatePage} from '../../pages/create/create';
import {DetailPage} from '../../pages/detail/detail';

import { Song } from '../../models/song.interface';
import { FirestoreProvider } from '../../providers/firestore/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  params: any;
  createPage: any;
  detailPage: any;
  public songList: Observable<Song[]>;

  constructor(
    public navCtrl: NavController,
    public firestoreProvider: FirestoreProvider
  ) {
    this.createPage = CreatePage;
    this.detailPage = DetailPage;
  }

  detail(song: Song): void {
    this.navCtrl.push(this.detailPage, { song: song });
  }

  //we want to wait until the page loads and fetch the list from our provider
  ionViewDidLoad() {
    this.songList = this.firestoreProvider.getSongList().valueChanges();
  }
}
