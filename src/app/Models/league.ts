import { Team } from "./team";

export class League {
    Name: string;
    Type: string;
    Country: string;
    Teams: Team[];

    constructor()
    {
        this.Name='';
        this.Type='';
        this.Country='';
        this.Teams=[];
    }
}