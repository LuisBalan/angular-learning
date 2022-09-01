import { Injectable } from "@angular/core";
import { Custom } from "../interfaces/dbz.interfaces";

@Injectable()
export class DbzService {

    private _customs: Custom[] = [
        {
          name: "Goku",
          strength: 1500
        },
        {
          name: "Vegeta",
          strength: 7500
        }
      ];

      get customs(): Custom[]{
        return [...this._customs]
      };
    
    constructor(){
        console.log('Service has started...');
    };




}