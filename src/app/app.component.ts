import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //component name
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  template: `<span>{{base}}</span>`
})

export class AppComponent {
  title: string = 'Contador App';
  resultantNumber: number = 12;
  base: number = 12;
  //operation: string = "";

sum(value: number){
  this.resultantNumber = this.resultantNumber + value;
};

substract(value: number = this.base){
  this.resultantNumber = this.resultantNumber - value;
};


// accumulate(value: number = this.base, operation: string){
//   if(operation === "sum"){
//     this.resultantNumber += value; 
//   }else if(operation === "substraction"){
//     this.resultantNumber -= value
//   }else{
//     null
//   };
//};

};
