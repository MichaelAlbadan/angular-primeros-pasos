import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'iroman';
  public age:  number = 45;
  public botonName: boolean = true;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getheroDescriptions():string{
    return this.name + "-" + this.age;
  }

  changeHero():void{
   this.name = 'Spiderman';
   this.botonName = false;
  }

  changeAge():void{
    this.age = 25;
  }

}
