import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {

    heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Batman', 'Catwoman'];
    deletedHeroe: string[] = [];
    heroeIndicator: boolean = false;

    deleteHeroe(): void {
    let  warning: number = Number(window.prompt(`Enter a number between 0 y ${this.heroes.length - 1}`));
    this.deletedHeroe = this.heroes.splice((warning), 1);
    console.log(`Deleting ${this.deletedHeroe}`);
    
    if(this.deletedHeroe.length === 0){
      this.heroeIndicator = false;
    }else {
      this.heroeIndicator = true;
    };
  };

  deleteTester(): void {
  };


  }
