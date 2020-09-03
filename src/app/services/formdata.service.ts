import { Injectable } from '@angular/core';
import { Steptwo } from '../models/steptwo';
import { Stepone } from '../models/stepone';
import { Stepthree } from '../models/stepthree';

@Injectable({
  providedIn: 'root'
})
export class FormdataService {

  one: Stepone;
  two: Steptwo;
  three: Stepthree;

  constructor() {
    this.one = new Stepone;
    this.two = new Steptwo;
    this.three = new Stepthree;
  }
  postData() {
    let myformData = {
      one: this.one,
      two: this.two,
      three: this.three
    }
  }
}
