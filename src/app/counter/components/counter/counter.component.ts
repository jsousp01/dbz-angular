import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>Hola Counter</h1>

    <h3>Counter Component: {{ counter }}</h3>

    <button (click)="increaseBy(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="decreaseBy(1)">-1</button>


  `
})

export class CounterComponent {

  public title: string = 'Hola Mundo';
  public counter: number = 20;

  increaseBy( value:number):void {
    this.counter += value;
  }

  decreaseBy( value:number):void {
    this.counter -= value;
  }

  reset():void {
    this.counter = 10;
  }

}
