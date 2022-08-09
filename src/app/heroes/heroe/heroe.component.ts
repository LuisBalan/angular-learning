import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{
    name:string = "Ironman";
    age: number = 45;

    
    
    get capitalizedName(): string{
        return this.name.toUpperCase();
    };
    
    getName(): string {
        return `${this.name} - ${this.age}`
    };
    
    capitalize(): string {
        return this.name.toUpperCase();
    };

    changeName(): void {
        this.name = 'Spiderman';
    };

    changeAge(): void {
        this.age = 30;
    }


};