import { Component } from '@angular/core';

import { Team } from '../Models/team';
import {TeamService} from '../Services/team.service';
import { Player } from '../Models/player';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})

export class TeamsComponent {
  constructor(private teamService: TeamService){}

  inputValue: string = '';
  newName: string = '';
  newAbbreviation: string ='';
  newFoundingYear: number = 0;
  newCoach: string ='';
  newPlayers: Player[]=[];
  teamsFromDB: Team[]= [];
  newPoints: number = 0;
  showFields: boolean = false;
  isDarkModeEnabled: boolean = false;
  outputEnabled: boolean = false;
  showTable: boolean = false;


  refresh()
  {
    this.newName='';
    this.newAbbreviation='';
    this.newFoundingYear=0;
    this.newCoach='';
    this.newPoints=0;
  }

  getTeams(){
    this.showTable = !this.showTable;
    this.teamService.getTeams().subscribe(result =>
      {
        this.teamsFromDB= result.sort((a, b) => b.Points - a.Points);
      })
  }

  toggleTranslation() {
    this.isDarkModeEnabled = !this.isDarkModeEnabled;
    
    if (this.isDarkModeEnabled) {
      document.body.style.backgroundColor = 'black';
    } else {
      document.body.style.backgroundColor = 'white';
    }
  }

  addTeams(){
    this.showTable = !this.showTable;
    let newTeam= {Name: this.newName, Abbreviation: this.newAbbreviation, FoundingYear: this.newFoundingYear, Coach: this.newCoach, Players : this.newPlayers, Points: this.newPoints}
    this.teamService.addTeams(newTeam)
  }

  getTeamsSortedByPoints() {
    this.teamService.getTeams().subscribe(result => {
      this.teamsFromDB = result.sort((a, b) => b.Points - a.Points);
    });
    
  }

  onDeleteTeam(teamName: string): void {
    this.teamService.deleteTeamByName(teamName)
      .then(() => console.log('Team deleted successfully'))
      .catch((error) => console.error(error));
  }
  

}
