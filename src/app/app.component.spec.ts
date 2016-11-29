/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { AppComponent } from './app.component';
import { GenderInputComponent } from './gender-input/gender-input.component';
import { AgeInputComponent } from './age-input/age-input.component';
import { HeightInputComponent } from './height-input/height-input.component';
import { HeightTextPipe } from './height-input/height-text.pipe';
import { WeightInputComponent } from './weight-input/weight-input.component';
import { BmrDisplayComponent } from './bmr-display/bmr-display.component';
import { BmiDisplayComponent } from './bmi-display/bmi-display.component';
import { BmiTextPipe } from './bmi-display/bmi-text.pipe';
import { ThrDisplayComponent } from './thr-display/thr-display.component';
import { makeStore, STAT_STORE } from './state/store';

describe('AppComponent', () => {

  let statStore = makeStore();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, InputsModule ],
      providers: [{provide: STAT_STORE, useValue: statStore }],
      declarations: [
        AppComponent,
        GenderInputComponent,
        AgeInputComponent,
        HeightInputComponent,
        WeightInputComponent,
        HeightTextPipe,
        BmrDisplayComponent,
        BmiDisplayComponent,
        BmiTextPipe,
        ThrDisplayComponent
      ],
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Redux Angular 2 Example with Kendo UI'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Redux Angular 2 Example with Kendo UI');
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Redux Angular 2 Example with Kendo UI');
  }));
});
