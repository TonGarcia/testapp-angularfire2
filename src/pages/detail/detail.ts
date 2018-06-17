import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  Loading,
  LoadingController,
  AlertController,
  Alert,
  App
} from 'ionic-angular';
import { Song } from '../../models/song.interface';
import { FirestoreProvider } from '../../providers/firestore/firestore';


@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  public song: Song;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private firestoreProvider: FirestoreProvider
  ) {
    this.song = this.navParams.get('song');
  }

  deleteSong(songId: string, songName: string): void {
    const alert: Alert = this.alertCtrl.create({
      message: `Are you sure you want to delete ${songName} from your list?`,
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Clicked Cancel');
          },
        },
        {
          text: 'OK',
          handler: () => {
            this.firestoreProvider.deleteSong(songId).then(() => {
              this.navCtrl.pop();
            });
          },
        },
      ],
    });
    alert.present();
  }
}
