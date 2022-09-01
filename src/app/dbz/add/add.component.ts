import { Component, Input, OnInit } from '@angular/core';
import { Custom } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})

export class AddComponent {

  @Input() customs: Custom[] = [];
  @Input() newCustom: Custom = {
    name: '',
    strength: 0
  };

  add(){
    if(this.newCustom.name.trim().length === 0){return};
    this.customs.push(this.newCustom)
    this.newCustom = {
      name: '',
      strength: 0
    };
    console.log(this.customs)
  };
};
