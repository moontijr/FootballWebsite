import { Component, ViewChild } from '@angular/core';
import {Router } from '@angular/router'
import { LeagueService } from './Services/league.service';
import { Team } from './Models/team';
import { League } from './Models/league';
import { TeamsComponent } from './teams/teams.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo';
  constructor(private router:Router, private leagueService: LeagueService){}

  @ViewChild(TeamsComponent)
  teamsComponent!: TeamsComponent;


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
  showTotw=false;

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
  }

  goToPage(pageName: string):void {
    this.router.navigate([`${pageName}`]);
  }

  showTotws(){
    this.showTotw=true;
  }

  displayPhoneNumber() {
    alert("Phone Number: 0740288378\nEmail: munteantudor03@yahoo.com");
  }

  
}
