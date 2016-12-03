import { Actions } from './actions';

import { Stats, DEFAULT_STAT } from './stats';

import { statReducer } from './reducer';

import { TestBed } from '@angular/core/testing';

describe('reducer', () => {

    let defaultStat: Stats = null;

    beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        statReducer
      ],
    });

    defaultStat = Object.assign(new Stats(), DEFAULT_STAT);
    Object.freeze(defaultStat);
  });

  it('should handle initial state', () => {
      expect(statReducer(undefined, { type: undefined })).toEqual(DEFAULT_STAT);
  });

  it('should handle change age', () => {

      let expected: Stats = Object.assign(new Stats(), DEFAULT_STAT, { ageYears: 30 });
      expected.bmrHistory = [...defaultStat.bmrHistory, expected.bmr];

      expect(statReducer(defaultStat, {
          type: Actions.ChangeAge,
          age: 30
      })).toEqual(expected);
  });

  it('should handle change height', () => {

      let expected: Stats = Object.assign(new Stats(), DEFAULT_STAT, { heightInches: 74 });
      expected.bmrHistory = [...defaultStat.bmrHistory, expected.bmr];

      expect(statReducer(defaultStat, {
          type: Actions.ChangeHeight,
          height: 74
      })).toEqual(expected);
  });

  it('should handle change weight', () => {

      let expected: Stats = Object.assign(new Stats(), DEFAULT_STAT, { weightPounds: 180 });
      expected.bmrHistory = [...defaultStat.bmrHistory, expected.bmr];

      expect(statReducer(defaultStat, {
          type: Actions.ChangeWeight,
          weight: 180
      })).toEqual(expected);
  });

  it('should handle bmr history changes', () => {

      let initialBmr = (<Stats><any>DEFAULT_STAT).bmr;
      let expected: Stats = Object.assign(new Stats(), DEFAULT_STAT, { weightPounds: 180 });
      expected.bmrHistory = [initialBmr, expected.bmr];

      expect(statReducer(defaultStat, {
          type: Actions.ChangeWeight,
          weight: 180
      })).toEqual(expected);
  });

  it('should handle change gender', () => {
      let expected: Stats = Object.assign(new Stats(), DEFAULT_STAT, { isFemale: true });
      expected.bmrHistory = [...defaultStat.bmrHistory, expected.bmr];
      expect(statReducer(defaultStat, {
          type: Actions.ChangeGender,
          isFemale: true
      })).toEqual(expected);
  });
});

