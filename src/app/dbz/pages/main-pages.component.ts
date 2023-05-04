import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page-component.html'
})

export class MainPageComponent {

  constructor( private dbzService: DbzService) {}

    get characters(): Character[] {
      //para no modificar el objeto mejor hacer una copia return [...this.dbzService.characters];
      //return this.dbzService.characters;
      return [...this.dbzService.characters];
    }

    onDeleteCharacter (id:string):void {
      this.dbzService.deleteCharacterById(id);
    }

    onNewCharacter (character:Character) {
      this.dbzService.addCharacter(character);
    }
}

