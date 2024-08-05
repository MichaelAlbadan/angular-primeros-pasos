import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public character:Character[] =[{
    id:   uuid(),
    name: 'Goku',
    power: 10000
  },
  {
    id:   uuid(),
    name:'Krillin',
    power: 6500
  },
  {
    id:   uuid(),
    name: 'Goku',
    power: 10000
  },
];

addCharacter(character:Character):void{
const newCharacter:Character= {id:uuid(), ...character}
this.character.push(newCharacter);
}
deletedCharacterById(id:string){
  this.character= this.character.filter(character =>character.id !==id)
}


}
