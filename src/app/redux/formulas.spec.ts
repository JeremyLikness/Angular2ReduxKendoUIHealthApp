import { TestBed } from '@angular/core/testing';

import { bmiEquation, bmrMan, bmrWoman, thr } from './formulas';

import { DEFAULT_STAT, Stats } from './stats';

describe('formulas', () => {

    let startStat: Stats = null;

    beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        bmiEquation
      ],
    });

    startStat =  Object.assign(new Stats(), DEFAULT_STAT);

  });

  describe('Body Mass Index equation', () => {

      it('should compute a BMI of 43 for a 5 ft 10 in person who weighs 300 pounds', () => {
          startStat.heightInches = 5 * 12 + 10;
          startStat.weightPounds = 300;
          expect(bmiEquation(startStat)).toBeCloseTo(43);
      });

      it('should compute a BMI of 18.2 for a 5 ft 8 in person who weighs 120 pounds', () => {
          startStat.heightInches = 5 * 12 + 8;
          startStat.weightPounds = 120;
          expect(bmiEquation(startStat)).toBeCloseTo(18.2);
      });
  });

  describe('Basal Metabolic Rate equation', () => {

      it('should compute a BMR of 1929 for a 40-year 5 ft 10 in male who weighs 200 pounds', () => {
          startStat.ageYears = 40;
          startStat.heightInches = 5 * 12 + 10;
          startStat.weightPounds = 200;
          expect(bmrMan(startStat)).toEqual(1929);
      });

      it('should compute a BMR of 1332 for a 35-year old 5 ft 8 in female who weighs 120 pounds', () => {
          startStat.ageYears = 35;
          startStat.heightInches = 5 * 12 + 8;
          startStat.weightPounds = 120;
          expect(bmrWoman(startStat)).toEqual(1332);
      });

  });

  describe('Target Heart Rate equation', () => {

      it('should compute a THR min of 90 and max of 153 for a 40-year old', () => {
          let actual = thr(40);
          expect(actual.min).toBeCloseTo(90);
          expect(actual.max).toBeCloseTo(153);
      });

  });
});
