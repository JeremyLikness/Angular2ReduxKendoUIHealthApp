/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BmiDisplayComponent } from './bmi-display.component';

import { BmiTextPipe } from './bmi-text.pipe';

import { makeStore, STAT_STORE } from '../state/store';

import { Stats, DEFAULT_STAT } from '../state/stats';

import { changeWeight, changeHeight } from '../state/actions';

describe('BmiDisplayComponent', () => {
  let component: BmiDisplayComponent;
  let fixture: ComponentFixture<BmiDisplayComponent>;
  let statStore = makeStore();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmiDisplayComponent, BmiTextPipe ],
      providers: [{ provide: STAT_STORE, useValue: statStore }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmiDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the bmi', () => {
    expect(component.bmi).toEqual((<Stats><any>DEFAULT_STAT).bmi);
  });

  it('should update bmi on changes', () => {
    statStore.dispatch(changeWeight(300));
    expect(component.bmi).toEqual(statStore.getState().bmi);
  });

  it('should set the obese flag', () => {
    statStore.dispatch(changeHeight(70));
    statStore.dispatch(changeWeight(300));
    expect(component.isObese).toBe(true);
    expect(component.isOverweight).toBe(false);
    expect(component.isUnderweight).toBe(false);
    expect(component.isNormal).toBe(false);
  });

  it ('should set the overweight flag', () => {
    statStore.dispatch(changeHeight(70));
    statStore.dispatch(changeWeight(200));
    expect(component.isObese).toBe(false);
    expect(component.isOverweight).toBe(true);
    expect(component.isUnderweight).toBe(false);
    expect(component.isNormal).toBe(false);
  });

  it ('should set the underweight flag', () => {
    statStore.dispatch(changeHeight(70));
    statStore.dispatch(changeWeight(80));
    expect(component.isObese).toBe(false);
    expect(component.isOverweight).toBe(false);
    expect(component.isUnderweight).toBe(true);
    expect(component.isNormal).toBe(false);
  });

  it ('should set the normal flag', () => {
    statStore.dispatch(changeHeight(70));
    statStore.dispatch(changeWeight(160));
    expect(component.isObese).toBe(false);
    expect(component.isOverweight).toBe(false);
    expect(component.isUnderweight).toBe(false);
    expect(component.isNormal).toBe(true);
  });
});
