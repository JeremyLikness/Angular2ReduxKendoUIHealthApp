/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { makeStore, STAT_STORE } from '../state/store';

import { WeightInputComponent } from './weight-input.component';

describe('WeightInputComponent', () => {
  let component: WeightInputComponent;
  let fixture: ComponentFixture<WeightInputComponent>;
  let store = makeStore();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ WeightInputComponent ],
      providers: [{provide: STAT_STORE, useValue: store}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   it('should initialize to the store default', () => {
    expect(component.weight).toEqual(store.getState().weightPounds);
  });

  it('should update the store on weight change', () => {
    component.weight = 80;
    expect(store.getState().weightPounds).toEqual(80);
  });

  it('should ignore and out of range weight', () => {
    component.weight = 1000;
    expect(store.getState().weightPounds).not.toEqual(1000);
  });
});
