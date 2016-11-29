import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InputsModule } from '@progress/kendo-angular-inputs';

import { AppComponent } from './app.component';
import { BmrDisplayComponent } from './bmr-display/bmr-display.component';

import { makeStore, STAT_STORE } from './state/store';
import { BmiDisplayComponent } from './bmi-display/bmi-display.component';
import { BmiTextPipe } from './bmi-display/bmi-text.pipe';
import { GenderInputComponent } from './gender-input/gender-input.component';
import { AgeInputComponent } from './age-input/age-input.component';
import { HeightInputComponent } from './height-input/height-input.component';
import { HeightTextPipe } from './height-input/height-text.pipe';
import { WeightInputComponent } from './weight-input/weight-input.component';
import { ThrDisplayComponent } from './thr-display/thr-display.component';

let statStore = makeStore();

@NgModule({
  declarations: [
    AppComponent,
    BmrDisplayComponent,
    BmiDisplayComponent,
    BmiTextPipe,
    GenderInputComponent,
    AgeInputComponent,
    HeightInputComponent,
    HeightTextPipe,
    WeightInputComponent,
    ThrDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    InputsModule
  ],
  providers: [{provide: STAT_STORE, useValue: statStore}],
  bootstrap: [AppComponent]
})
export class AppModule { }
