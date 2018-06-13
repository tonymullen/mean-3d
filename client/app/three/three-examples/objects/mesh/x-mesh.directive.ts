import { Directive, Input, AfterViewInit, forwardRef } from '@angular/core';
import * as THREE from 'three';
import { AbstractObject3D } from '../abstract-object-3d';
import { ExtrudeMeshDirective } from './extrude-mesh.directive';

@Directive({
  selector: 'three-x-mesh',
  providers: [{ provide: AbstractObject3D, useExisting: forwardRef(() => XMeshDirective) }]
})
export class XMeshDirective extends ExtrudeMeshDirective {
  shapeData: any;
  extrudeSettings: any;
  constructor() {
    super();
    this.shapeData = {
      "path": [
                { 
                    "funct" : "moveTo",
                    "args" : [0, 1.5]
                },
                { 
                    "funct" : "lineTo",
                    "args" : [4.2, 6.2]
                },
                { 
                    "funct" : "lineTo",
                    "args" : [5.5, 5]
                },
                { 
                    "funct" : "lineTo",
                    "args" : [1, 0]
                },
                { 
                    "funct" : "lineTo",
                    "args" : [5.5, -5]
                },
                { 
                    "funct" : "lineTo",
                    "args" : [4.2, -6.2]
                },
                { 
                   "funct" : "lineTo",
                   "args" : [0, -1.5]
                },
                { 
                    "funct" : "lineTo",
                    "args" : [-4.2, -6.2]
                },
                { 
                    "funct" : "lineTo",
                    "args" : [-5.5, -5]
                },
                { 
                    "funct" : "lineTo",
                    "args" : [-1, 0]
                },
                { 
                    "funct" : "lineTo",
                    "args" : [-5.5, 5]
                },
                { 
                    "funct" : "lineTo",
                    "args" : [-4.2, 6.2]
                },
                { 
                   "funct" : "lineTo",
                   "args" : [0, 1.5]
                }
                
           ]
    };

    this.extrudeSettings = {
      "amount" : 1,
      "depth" : 1,
      "curveSegments" : 12,
      "bevelEnabled" : true,
      "bevelSegments" : 5,
      "steps" : 3,
      "bevelSize" : 0.5,
      "bevelThickness" : 0.5       
    }

    this.material = new THREE.MeshPhongMaterial({
        color: 0x0000ff,
        flatShading: false,
    });
    
    this.material.envMap =  new THREE.CubeTextureLoader()
    .setPath( 'assets/images/uffizi/' )
    .load( [
        'x-pos.jpg',
        'x-neg.jpg',
        'z-pos.jpg',
        'z-neg.jpg',
        'y-pos.jpg',
        'y-neg.jpg'
    ] );


    // console.log('ExtrudeMeshDirective.constructor');
  }

 

//   protected afterInit(): void {
//     // console.log('ExtrudeMeshDirective.afterInit');
    
//   }

}

