/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Store } from 'redux';

import { BmrDisplayComponent } from './bmr-display.component';

import { makeStore } from '../redux/store';

import { changeAge } from '../redux/actions';

import { DEFAULT_STAT, Stats } from '../redux/stats';

describe('BmrDisplayComponent', () => {
  let component: BmrDisplayComponent;
  let fixture: ComponentFixture<BmrDisplayComponent>;
  let statStore = makeStore();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{provide: 'statStore', useValue: statStore }],
      declarations: [ BmrDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmrDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the bmr', () => {
    expect(component.bmr).toEqual((<Stats><any>DEFAULT_STAT).bmr);
  });

  it('should update bmr on changes', () => {
    statStore.dispatch(changeAge(30));
    expect(component.bmr).toEqual(statStore.getState().bmr);
  });
});
