/* tslint:disable:no-unused-variable */
import { Actions,
    changeAge,
    changeHeight,
    changeWeight,
    changeGender } from './actions';

import { TestBed } from '@angular/core/testing';

describe('actions', () => {

    beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        changeAge, changeHeight, changeWeight, changeGender
      ],
    });
  });

  it('change age should create changeAge action', () => {
      expect(changeAge(32)).toEqual({
        type: Actions.ChangeAge,
        age: 32
    });
  });

  it('change height should create changeHeight action', () => {
        expect(changeHeight(70)).toEqual({
            type: Actions.ChangeHeight,
            height: 70
    });
  });

    it('change weight should create changeWeight action', () => {
      expect(changeWeight(215)).toEqual({
        type: Actions.ChangeWeight,
        weight: 215
    });
  });

  it('change gender should create changeGender action', () => {
      expect(changeGender(false)).toEqual({
        type: Actions.ChangeGender,
        isFemale: false
    });
  });

});
