import {Component} from '@angular/core';

@Component({
    selector: 'app-counter',
    // template: `
    // <h1>{{title}}</h1>
    // <h2>The base is: <strong>{{base}}</strong></h2>

    // <button (click) = "sum(base)" >SUMA +{{base}}</button>
    // <span>{{resultantNumber }}</span>
    // <button (click) = "substract(base)" >-{{base}}</button>
    // `,
    templateUrl: './counter.component.html'
})

export class CounterComponent {
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

};