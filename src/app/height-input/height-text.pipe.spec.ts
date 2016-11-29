/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { HeightTextPipe } from './height-text.pipe';

describe('HeightTextPipe', () => {

  let pipe = new HeightTextPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('converts bad values to ???', () => {
    expect(pipe.transform(0)).toEqual('???');
  });

  it('does not show feet for less than 12 inches', () => {
    expect(pipe.transform(11)).toEqual('11 in.');
  });

  it('shows feet and inches based on the value passed', () => {
    expect(pipe.transform(70)).toEqual('5 ft. 10 in.');
  });
});
