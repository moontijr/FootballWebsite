import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TeamsComponent} from './teams/teams.component'
import {SecondComponent} from './players/second.component'
import {LeaguesComponent} from './leagues/leagues.component'
import { TotwComponent } from './totw/totw.component';
const routes: Routes = [
  
  {path: 'teams' , component : TeamsComponent},
  { path: 'seconds' , component : SecondComponent},
  {path: 'leagues' , component : LeaguesComponent},
  {path: 'totw' , component : TotwComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
