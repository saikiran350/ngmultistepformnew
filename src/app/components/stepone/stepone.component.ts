import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FormdataService } from 'src/app/services/formdata.service';
import { Stepone } from 'src/app/models/stepone';

@Component({
  selector: 'app-stepone',
  templateUrl: './stepone.component.html',
  styleUrls: ['./stepone.component.scss']
})
export class SteponeComponent implements OnInit {

  ebgStepOneForm: FormGroup;
  one: Stepone;

  frequencyObject = [
    { freq: 'Select' },
    { freq: 100 },
    { freq: 300 },
    { freq: 400 },
    { freq: 500 },
    { freq: 600 },
  ]
  constructor(private fb: FormBuilder, private formdataservice: FormdataService) {
    this.one = formdataservice.one;
  }


  ngOnInit() {
    // this.ebgStepOneForm = this.fb.group({
    //   enddestinationcountry: ['', Validators.required],
    //   nema: ['', Validators.required],
    //   frequencydropdown: ['', Validators.required]
    // })
  }

}
