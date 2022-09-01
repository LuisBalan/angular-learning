import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Custom } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})

export class AddComponent {

  @Input() newCustom: Custom = {
    name: '',
    strength: 0
  };
  @ Output() onNewCustom: EventEmitter<Custom> = new EventEmitter();

  add(){
    if(this.newCustom.name.trim().length === 0){return};
    console.log(this.newCustom);
    this.onNewCustom.emit(this.newCustom);
    this.newCustom = {
      name: '',
      strength: 0
    };
  };





};
