/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { makeStore, STAT_STORE } from '../state/store';

import { AgeInputComponent } from './age-input.component';

describe('AgeInputComponent', () => {
  let component: AgeInputComponent;
  let fixture: ComponentFixture<AgeInputComponent>;
  let store = makeStore();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      providers: [{provide: STAT_STORE, useValue: store}],
      declarations: [ AgeInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    it('should initialize to the store default', () => {
    expect(component.age).toEqual(store.getState().ageYears);
  });

  it('should update the store on age change', () => {
    component.age = 20;
    expect(store.getState().ageYears).toEqual(20);
  });

  it('should ignore and out of range age', () => {
    component.age = 190;
    expect(store.getState().ageYears).not.toEqual(190);
  });
});
