import { Component, OnInit, Inject } from '@angular/core';

import { Store } from 'redux';

import { STAT_STORE } from '../state/store';

import { changeGender } from '../state/actions';

import { Stats } from '../state/stats';

@Component({
  selector: 'app-gender-input',
  templateUrl: './gender-input.component.html',
  styleUrls: ['./gender-input.component.css']
})
export class GenderInputComponent implements OnInit {

  private _isFemale: boolean;

  public get isFemale(): boolean {
    return this._isFemale;
  }

  public set isFemale(isFemale: boolean) {
    if (this._isFemale !== isFemale) {
      this._isFemale = isFemale;
      this.store.dispatch(changeGender(isFemale));
    }
  }

  constructor(@Inject(STAT_STORE)private store: Store<Stats>) {}

  ngOnInit() {
    this._isFemale = this.store.getState().isFemale;
  }

}
