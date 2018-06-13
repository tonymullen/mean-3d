import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  title = 'game';

  public rotationX = 0.0;
  public rotationY = 0.0;
  public rotationZ = 0.0;

  public translationY = 0.0;


  public shapeDataString= `{
    "path": [
             { 
                 "funct" : "moveTo",
                 "args" : [0, 0]
             },
             { 
                 "funct" : "absarc",
                 "args" : [0, 0, 8, 0, 6.283185307179586, false]
             }
         ],
     "holes": [{
         "path" :[
             { 
                 "funct" : "moveTo",
                 "args" : [0, 0]
             }, 
             { 
                 "funct" : "absarc",
                 "args" : [0, 0, 6, 0, 6.283185307179586, true]
             }
         ]
     }]
  }`

}
