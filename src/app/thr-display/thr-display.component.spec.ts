/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { makeStore, STAT_STORE } from '../state/store';

import { changeAge } from '../state/actions';

import { Stats, DEFAULT_STAT } from '../state/stats';

import { ThrDisplayComponent } from './thr-display.component';

describe('ThrDisplayComponent', () => {
  let component: ThrDisplayComponent;
  let fixture: ComponentFixture<ThrDisplayComponent>;
  let store = makeStore();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThrDisplayComponent ],
      providers: [{provide: STAT_STORE, useValue: store}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThrDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   it('should initialize the thr', () => {
    expect(component.thr).toEqual((<Stats><any>DEFAULT_STAT).thr);
  });

  it('should update the thr on changes', () => {
    store.dispatch(changeAge(50));
    expect(component.thr).toEqual(store.getState().thr);
  });
});
