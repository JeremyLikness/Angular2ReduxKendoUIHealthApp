/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { BmiTextPipe } from './bmi-text.pipe';

describe('BmiTextPipe', () => {

  let pipe = new BmiTextPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('translates obese for bmi 30.0 or over', () => {
    expect(pipe.transform(30.0)).toBe('Obese');
  });

  it('translates normal for bmi under 25.0', () => {
    expect(pipe.transform(24.0)).toBe('Normal');
  });

  it('translates overweight for bmi 25.0 or over', () => {
    expect(pipe.transform(25.0)).toBe('Overweight');
  });

  it('translates underweight for bmi under 18.5', () => {
    expect(pipe.transform(18.4)).toBe('Underweight');
  });
});
