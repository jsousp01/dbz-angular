
import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  //Toma todas las propiedades y asignalas automáticamente en el nuevo objeto
  addCharacter (character: Character):void {

    const newCharacter:Character = { id: uuid(), ...character };
    this.characters.push(newCharacter);
  }

  //onDeleteCharacter(index:number):void {
  //  this.characters.splice(index, 1); }
  deleteCharacterById (id:string){
    //El filter devuelve un array con todos los personajes excepto los que su id coincida con la recibida como argumento
    this.characters = this.characters.filter (character => character.id !== id);
  }
}
