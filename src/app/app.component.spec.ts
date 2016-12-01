/* tslint:disable:no-unused-variable */

import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ChartsModule } from '@progress/kendo-angular-charts';

import { AppComponent } from './app.component';
import { GenderInputComponent } from './gender-input/gender-input.component';
import { AgeInputComponent } from './age-input/age-input.component';
import { HeightInputComponent } from './height-input/height-input.component';
import { HeightTextPipe } from './height-input/height-text.pipe';
import { WeightInputComponent } from './weight-input/weight-input.component';
import { BmrDisplayComponent } from './bmr-display/bmr-display.component';
import { BmiDisplayComponent } from './bmi-display/bmi-display.component';
import { BmrHistoryComponent } from './bmr-history/bmr-history.component';
import { BmiTextPipe } from './bmi-display/bmi-text.pipe';
import { ThrDisplayComponent } from './thr-display/thr-display.component';
import { makeStore, STAT_STORE } from './state/store';

describe('AppComponent', () => {

  let statStore = makeStore();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, InputsModule, ChartsModule ],
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
        ThrDisplayComponent,
        BmrHistoryComponent
      ],
    });
  });

  let fixture: ComponentFixture<AppComponent> = null;
  let app: any = null;

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Redux Angular 2 Example with Kendo UI'`, () => {
   expect(app.title).toEqual('Redux Angular 2 Example with Kendo UI');
  });

  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Redux Angular 2 Example with Kendo UI');
  });
});
