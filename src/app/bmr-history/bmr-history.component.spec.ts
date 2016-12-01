/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChartsModule } from '@progress/kendo-angular-charts';

import { makeStore, STAT_STORE } from '../state/store';

import { changeAge } from '../state/actions';

import { BmrHistoryComponent } from './bmr-history.component';

describe('BmrHistoryComponent', () => {
  let component: BmrHistoryComponent;
  let fixture: ComponentFixture<BmrHistoryComponent>;
  let store = makeStore();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ChartsModule ],
      declarations: [ BmrHistoryComponent ],
      providers: [{provide: STAT_STORE, useValue: store}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmrHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log the initial bmr', () => {
    expect(component.bmrHistory[0]).toEqual(store.getState().bmr);
  });

  it('should log changes to the store', () => {
    store.dispatch(changeAge(15));
    expect(component.bmrHistory[1]).toEqual(store.getState().bmr);
  });
});
