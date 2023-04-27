import { Injectable } from '@angular/core';
import {Firestore,collection,collectionData,addDoc, getDocs, where, deleteDoc} from '@angular/fire/firestore'
import {Team} from '../Models/team'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private fs: Firestore) { }

  getTeams(): Observable <Team[]> {
    const myCollection1 : any = collection(this.fs, 'teams');
    return collectionData(myCollection1);
  }

  addTeams(team: Team){
    const myCollection1 = collection(this.fs, 'teams');
    addDoc (myCollection1, team);
  }

  async deleteTeamByName(name: string) {
    const myCollection1 = collection(this.fs, 'teams');
    const querySnapshot = await getDocs(myCollection1);
    querySnapshot.forEach((doc) => {
      const team = doc.data() as Team;
      if (team.Name === name) {
        deleteDoc(doc.ref);
      }
    });
  }
  

  
  
  
  
  
  
  
  
}
