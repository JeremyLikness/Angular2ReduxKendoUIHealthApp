/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { InputsModule } from '@progress/kendo-angular-inputs';

import { makeStore, STAT_STORE } from '../state/store';

import { HeightTextPipe } from './height-text.pipe';

import { HeightInputComponent } from './height-input.component';

describe('HeightInputComponent', () => {
  let component: HeightInputComponent;
  let fixture: ComponentFixture<HeightInputComponent>;
  let store = makeStore();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, InputsModule ],
      declarations: [ HeightInputComponent, HeightTextPipe ],
      providers: [{provide: STAT_STORE, useValue: store}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeightInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
