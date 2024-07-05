import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public nameHeroes:string[] = ['Spiderman','Hulk','Goku','Maestro Roshi'];
  public heroeBorrado?:string = '';

  borrarHeroe():void{
    this.heroeBorrado = this.nameHeroes.pop();

  }
}
