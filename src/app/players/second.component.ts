import { Component } from '@angular/core';
import { Player } from '../Models/player';
import {PlayerService} from '../Services/player.service';
import { Observable, of } from 'rxjs';
import { deleteDoc, doc } from '@angular/fire/firestore';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  constructor(private playerService: PlayerService){}

  playersFromDB: Player[]= [];
  newPlayerId: string='';
  newPlayerName: string='';
  newPlayerAge: number=0;
  newPosition: string='';
  newFoot: string='';
  newNationality: string='';
  newGoals:number=0;
  inputValue: string = '';
  newTeam: string=''
  showAllPlayersFlag: boolean = false;
  showPlayersByGoalsFlag: boolean = false;
  showPlayersByAgeFlag: boolean = false;
  showFields=false;
  searchResult: Player | undefined;
  showTable: boolean = false;
  playerNameToDelete: string = ''
  

  getPlayers(){
    this.playerService.getPlayers().subscribe(result =>
      {
        this.playersFromDB= result;
      })
      this.showAllPlayersFlag=true;
      this.showPlayersByGoalsFlag=false;
      this.showPlayersByAgeFlag=false
  }

  refresh()
  {
    this.newFoot='';
    this.newGoals=0;
    this.newNationality='';
    this.newPlayerAge=0;
    this.newPlayerId='';
    this.newPlayerName='';
    this.newPosition='';
  }

  setAllFalse()
  {
    this.showAllPlayersFlag=false;
      this.showPlayersByGoalsFlag=false;
      this.showPlayersByAgeFlag=false
  }

  getPlayerByName(name: string): Player | undefined {
    this.playerService.getPlayers().subscribe(result =>
      {
        this.playersFromDB= result;
      })
    return this.playersFromDB.find(player => player.Name === name);
  }

  
  

  search() {
    this.playerService.getPlayers().subscribe(result =>
      {
        this.playersFromDB= result;
      })
    this.searchResult = this.getPlayerByName(this.inputValue);
  }

  getPlayersByGoals()
  {
    this.playerService.getPlayers().subscribe(result =>
      {
        this.playersFromDB= result.sort((a, b) => b.Goals - a.Goals);
      })
      this.showAllPlayersFlag=false;
      this.showPlayersByGoalsFlag=true;
      this.showPlayersByAgeFlag=false;

  }

  
  

  getPlayersByAge()
  {
    this.playerService.getPlayers().subscribe(result =>
      {
        this.playersFromDB= result.sort((a, b) => b.Age - a.Age);
      })
      this.showAllPlayersFlag=false;
      this.showPlayersByGoalsFlag=false;
      this.showPlayersByAgeFlag=true;
  }

  addPlayer(){
    let newPlayer= {Id: this.newPlayerId, Name: this.newPlayerName, Age: this.newPlayerAge, Position: this.newPosition, Foot: this.newFoot, Nationality: this.newNationality, Goals: this.newGoals,Team : this.newTeam}
    this.playerService.addPlayers(newPlayer)
  }

  

  deletePlayer() {
    const playerToDelete = this.getPlayerByName(this.playerNameToDelete);
    if (playerToDelete) {
      this.playerService.removePlayer(playerToDelete.Name); 
    } else {
      alert('Player not found');
    }

    
    
  }
  
  

  
  
  

  
  

  


  
  

}


  
  
  
