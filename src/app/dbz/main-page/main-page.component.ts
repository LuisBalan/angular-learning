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

  newCustom: Custom = {
    name: 'Trucks',
    strength: 14000
  };

  error: boolean = true;
  todos: string[] = ['sweep', 'drink', 'food'];
  errorMessage: string = "An error has occurred";

  add(){
    console.log(this.newCustom);
  };

  changeName(event: any){
    console.log(event.target.value);
  };

};
