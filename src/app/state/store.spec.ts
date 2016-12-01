import { TestBed } from '@angular/core/testing';

import { Store } from 'redux';

import { makeStore } from './store';

import { DEFAULT_STAT, Stats, } from './stats';

import { changeAge } from './actions';

describe('store', () => {

    let statStore: Store<Stats> = null;

    beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
          makeStore
      ],
    });

    statStore = makeStore();
  });

  it('should default to the default status', () => {
      expect(statStore.getState()).toEqual(DEFAULT_STAT);
  });

  it('should update when dispatched', () => {
      let expected = Object.assign(new Stats(), DEFAULT_STAT, { ageYears: 30 });
      expected.bmrHistory = [...(<Stats><any>DEFAULT_STAT).bmrHistory, expected.bmr];
      statStore.dispatch(changeAge(30));
      expect(statStore.getState()).toEqual(expected);
  });

  it('should notify subscribers when state changes', () => {
      let notified = false;
      statStore.subscribe(() => notified = true);
      statStore.dispatch(changeAge(30));
      expect(notified).toBe(true);
  });

});
