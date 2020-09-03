import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormdataService } from 'src/app/services/formdata.service';
import { Steptwo } from 'src/app/models/steptwo';

@Component({
  selector: 'app-steptwo',
  templateUrl: './steptwo.component.html',
  styleUrls: ['./steptwo.component.scss']
})
export class SteptwoComponent implements OnInit {

  two: Steptwo;

  syncArrayObject = [
    { sync: 22 },
    { sync: 33 },
    { sync: 44 },
    { sync: 55 },
  ]
  enclosureObject = [
    { enclose: 22 },
    { enclose: 33 },
    { enclose: 44 },
    { enclose: 55 },
  ]
  constructor(private fb: FormBuilder, private formdataservice: FormdataService) {
    this.two = formdataservice.two;

  }

  ngOnInit() {
    // this.ebgStepTwoForm = this.fb.group({
    //   synchrpm: ['',Validators.required],
    //   enclosure: ['',Validators.required],
    // })

  }

}
