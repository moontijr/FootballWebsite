import { Component, ViewChild } from '@angular/core';
import { League } from '../Models/league';
import { LeagueService } from '../Services/league.service';
import { Team } from '../Models/team';
import { TeamsComponent } from '../teams/teams.component';
import { Router, Routes } from '@angular/router';
import {SecondComponent} from '../players/second.component'

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent {

  

  @ViewChild(TeamsComponent)
  teamsComponent!: TeamsComponent;

  constructor(private leagueService: LeagueService, private router: Router){}

  inputValue: string = '';
  newName: string='';
  newType: string='';
  newCountry: string='';
  newTeams: Team[]=[];
  leaguesFromDB: League[]= [];
  showTeams = false;
  showPlayers=false;
  isToggled = false;
  darkMode=false;

  toggleTranslation() {
    this.isToggled = !this.isToggled;
    this.darkMode = !this.darkMode;
    
    if (this.darkMode) {
      document.body.style.backgroundColor = 'black';
    } else {
      document.body.style.backgroundColor = 'white';
    }
  }
  

  getLeagues(){
    this.leagueService.getLeagues().subscribe(result => 
      {
        this.leaguesFromDB= result;
      })
  }

  addLeagues(){
    let newLeague = {Name: this.newName, Type: this.newType, Country: this.newCountry, Teams: this.newTeams};
    this.leagueService.addLeagues(newLeague);
  }

  getTeamsSortedByPoints() {
    this.teamsComponent.getTeamsSortedByPoints();
  }
  showAllTeams() {
    this.showTeams = true;
  }
  reloadPage() {
    window.location.reload();
  }
  showAllPlayers(){
    this.showPlayers=true;
    this.router.navigate(['/teams']);
  }

  goToPage(pageName: string):void {
    this.router.navigate([`${pageName}`]);
  }

  

  
}