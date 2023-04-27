import { Player } from "./player";

export class Team {
    Name: string;
    Abbreviation: string;
    FoundingYear: number;
    Coach: string;
    Players: Player[];
    Points: number;


    constructor()
    {
        this.Name='';
        this.Abbreviation=''
        this.FoundingYear=0;
        this.Coach=''
        this.Players=[];
        this.Points=0;
    }

}