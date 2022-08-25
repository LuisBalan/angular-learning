import { Component, OnInit } from '@angular/core';

interface Custom {
  name: string;
  strength: number
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent {

  newCustom: Custom = {
    name: "Trucks",
    strength: 14000
  }

};
