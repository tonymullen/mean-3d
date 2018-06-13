import { Directive, Input, AfterViewInit, forwardRef } from '@angular/core';
import * as THREE from 'three';
import { AbstractObject3D } from '../abstract-object-3d';
import { ExtrudeMeshDirective } from './extrude-mesh.directive';

@Directive({
  selector: 'three-o-mesh',
  providers: [{ provide: AbstractObject3D, useExisting: forwardRef(() => OMeshDirective) }]
})
export class OMeshDirective extends ExtrudeMeshDirective {
  shapeData: any;
  extrudeSettings: any;
  
  constructor() {
    super();
    this.shapeData = {
      "path": [
               { 
                   "funct" : "moveTo",
                   "args" : [0, 0]
               },
               { 
                   "funct" : "absarc",
                   "args" : [0, 0, 7.7, 0, Math.PI * 2, false]
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
                   "args" : [0, 0, 6, 0, Math.PI * 2, true]
               }
           ]
       }]
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
        color: 0xff0000,
        flatShading: false,
        reflectivity: 0.25
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

}
