import { Component, Input, OnInit } from '@angular/core';
import { Custom } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-customs',
  templateUrl: './customs.component.html',
})
export class CustomsComponent {
  @Input() customs: Custom[] = [] ;


}
