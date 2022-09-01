import { Component, Input, OnInit } from '@angular/core';
import { Custom } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-customs',
  templateUrl: './customs.component.html',
})
export class CustomsComponent {

  get customs(){
    return this.dbzService.customs;
  };

  constructor(private dbzService: DbzService){
  }
}
