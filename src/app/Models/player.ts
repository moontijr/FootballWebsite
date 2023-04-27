import { Team } from "./team";

export class Player {
    Id: string;
    Name: string;
    Age: number;
    Position: string;
    Foot: string;
    Nationality: string;
    Goals: number;
    Team: string;

    constructor()
    {
        this.Id=''
        this.Name='';
        this.Age=0;
        this.Position='';
        this.Foot='';
        this.Nationality=''
        this.Goals=0;
        this.Team='';
    }
}