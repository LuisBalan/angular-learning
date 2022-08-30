import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Custom {
  name: string,
  strength: number
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent {

  customs: Custom[] = [
    {
      name: "Goku",
      strength: 15000
    },
    {
      name: "Vegeta",
      strength: 7500
    }
  ];

  newCustom: Custom = {
    name: '',
    strength: 0
  };

  error: boolean = true;
  todos: string[] = ['sweep', 'drink', 'food'];
  errorMessage: string = "An error has occurred";

  add(){
    if(this.newCustom.name.trim().length === 0){return};
    this.customs.push(this.newCustom)
    this.newCustom = {
      name: '',
      strength: 0
    }
  };

    // }
    // console.log(this.newCustom);


  changeName(event: any){
    console.log(event.target.value);
  };

};
