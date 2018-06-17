import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Song } from '../../models/song.interface';

@Injectable()
export class FirestoreProvider {
  constructor(public firestore: AngularFirestore) {}

  createSong(
    albumName: string,
    artistName: string,
    songDescription: string,
    songName: string
  ): Promise<void> {

    const id = this.firestore.createId();
    return this.firestore.doc(`songList/${id}`).set(
      {
        id,
        albumName,
        artistName,
        songDescription,
        songName,
      }
    );
    
  }
}
