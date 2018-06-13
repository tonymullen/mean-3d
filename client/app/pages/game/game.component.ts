import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  Math: any;
  constructor() {
    this.Math = Math;
  }
  title = 'game';

  public rotationX = 0.0;
  public rotationY = 0.0;
  public rotationZ = 0.0;

  public translationY = 0.0;

  private gameState = [
    '','','',
    '','','',
    '','','',

    '','','',
    '','','',
    '','','',

    '','','',
    '','','',
    '','','',
  ]
}
