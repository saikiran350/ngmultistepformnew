import { Component, OnInit } from '@angular/core';
import { FormdataService } from 'src/app/services/formdata.service';
import { Stepthree } from 'src/app/models/stepthree';

@Component({
  selector: 'app-stepthree',
  templateUrl: './stepthree.component.html',
  styleUrls: ['./stepthree.component.scss']
})
export class StepthreeComponent implements OnInit {

  three: Stepthree;

  outputArrayObject = [
    { outVal: 1000 },
    { outVal: 450 },
    { outVal: 560 },
    { outVal: 1750 },
    { outVal: 1900 },
  ]

  voltageArrayObject = [
    { voltageVal: 19 },
    { voltageVal: 45 },
    { voltageVal: 56 },
    { voltageVal: 17 },
    { voltageVal: 100 },
  ]

  constructor(private formdataservice: FormdataService) {
    this.three = formdataservice.three;
  }

  finish() {
    this.formdataservice.postData();
    console.log("Step One Data ", this.formdataservice.one);
    console.log("Step Two Data ", this.formdataservice.two);
    console.log("Step Three Data ", this.formdataservice.three);
  }


  ngOnInit() {
  }

}
