import { Injectable } from '@angular/core';
import {Firestore,collection,collectionData,addDoc} from '@angular/fire/firestore'
import {League} from '../Models/league'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  constructor(private fs: Firestore) { }

  getLeagues(): Observable <League[]> {
    const myCollection4 : any = collection(this.fs, 'leagues');
    return collectionData(myCollection4);
  }

  addLeagues(league: League){
    const myCollection4 = collection(this.fs, 'leagues');
    addDoc (myCollection4, league);
  }
}
