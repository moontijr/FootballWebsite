import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatListModule} from '@angular/material/list';

import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

import {MatInputModule} from '@angular/material/input'

import {MatIconModule} from '@angular/material/icon'

import {FormsModule} from '@angular/forms'

import { config } from './config'

import {FirebaseAppModule, initializeApp, provideFirebaseApp} from '@angular/fire/app'

import {FirestoreModule} from '@angular/fire/firestore';
import { SecondComponent } from './players/second.component'
import { TeamsComponent } from './teams/teams.component';
import { LeaguesComponent } from './leagues/leagues.component';

import {MatTableModule} from '@angular/material/table';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    TeamsComponent,
    LeaguesComponent
  ],
  imports: [
    provideFirebaseApp(() => initializeApp(config.firebase)),
    FirebaseAppModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    FirestoreModule,
    MatTableModule,
    MatSlideToggleModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
