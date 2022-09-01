import { ThisReceiver } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomsComponent } from '../customs/customs.component';
import { Custom } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

// interface Custom {
//   name: string,
//   strength: number
// }

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent {

  error: boolean = true;
  todos: string[] = ['sweep', 'drink', 'food'];
  errorMessage: string = "An error has occurred";

    // }
    // console.log(this.newCustom);

    // customs: Custom[] = [];

  newCustom: Custom = {
      name: 'Maestro Roshi',
      strength: 1000
    };

    get customs():Custom[]{
      return this.dbzService.customs;
    };
  
    add(){
      if(this.newCustom.name.trim().length === 0){return};
      this.customs.push(this.newCustom)
      this.newCustom = {
        name: '',
        strength: 0
      }
    };

  changeName(event: any){
    console.log(event.target.value);
  };

  addNewCustom(arg: Custom){
    console.log("Main page component");
    this.customs.push(arg);
  };

  constructor(private dbzService: DbzService){
  };

};
