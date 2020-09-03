import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormdataService } from './services/formdata.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SteponeComponent } from './components/stepone/stepone.component';
import { SteptwoComponent } from './components/steptwo/steptwo.component';
import { StepthreeComponent } from './components/stepthree/stepthree.component';

@NgModule({
  declarations: [
    AppComponent,
    SteponeComponent,
    SteptwoComponent,
    StepthreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FormdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
