import { Directive, Input, AfterViewInit, forwardRef } from '@angular/core';
import * as THREE from 'three';
import { AbstractObject3D } from '../abstract-object-3d';
import { BoxMeshDirective } from './box-mesh.directive';

@Directive({
  selector: 'three-cell-mesh',
  providers: [{ provide: AbstractObject3D, useExisting: forwardRef(() => CellMeshDirective) }]
})
export class CellMeshDirective extends BoxMeshDirective {
  constructor() {
    super();
    // console.log('BoxMeshDirective.constructor');

    this.material = new THREE.MeshPhongMaterial({
      color: 0xbbbbff,
      transparent: true,
      opacity: 0.2,
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
  }
}
