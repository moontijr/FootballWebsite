import { Injectable } from '@angular/core';
import {Firestore,collection,collectionData,addDoc,deleteDoc, docData, query, where, doc} from '@angular/fire/firestore'
import {Player} from '../Models/player'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private fs: Firestore) { }

  getPlayers(): Observable <Player[]> {
    const myCollection2 : any = collection(this.fs, 'players');
    return collectionData(myCollection2);
  }

  addPlayers(player: Player){
    const myCollection2 = collection(this.fs, 'players');
    addDoc (myCollection2, player);
  }

  removePlayer(playerId: string) {
    const myCollection2 = collection(this.fs, 'players');
    const playerDoc = doc(myCollection2, playerId);
    deleteDoc(playerDoc).then(() => {
      console.log("Document successfully deleted!");
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  findPlayerById(playerId: string): Observable<Player> {
    const myCollection2 = collection(this.fs, 'players');
    const playerDoc = doc(myCollection2, playerId);
    return docData(playerDoc) as Observable<Player>;
  }

  findPlayerByName(playerName: string): Observable<Player[]> {
    const myCollection2 = collection(this.fs, 'players');
    const queryByName = query(myCollection2, where('Name', '==', playerName));
    return collectionData(queryByName) as Observable<Player[]>;
  }

  refreshPlayers(): Observable<Player[]> {
    const myCollection = collection(this.fs, 'players');
    const queryAllPlayers = query(myCollection);
    return collectionData(queryAllPlayers) as Observable<Player[]>;
  }
  
  
}
