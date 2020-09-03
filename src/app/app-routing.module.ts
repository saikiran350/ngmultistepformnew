import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SteponeComponent } from './components/stepone/stepone.component';
import { SteptwoComponent } from './components/steptwo/steptwo.component';
import { StepthreeComponent } from './components/stepthree/stepthree.component';


const routes: Routes = [
  {
    path: '', component: SteponeComponent
  },
  {
    path: 'stepone', component: SteponeComponent
  },
  {
    path: 'steptwo', component: SteptwoComponent
  },
  {
    path: 'stepthree', component: StepthreeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
