import { Component, Inject, OnInit } from '@angular/core';

import { Store } from 'redux';

import { STAT_STORE } from '../state/store';

import { changeHeight } from '../state/actions';

import { Stats } from '../state/stats';

const validHeight = (height: number) => height >= 2 * 12 && height <= 8 * 12;

@Component({
  selector: 'app-height-input',
  templateUrl: './height-input.component.html',
  styleUrls: ['./height-input.component.css']
})
export class HeightInputComponent implements OnInit {

  private _height: number = 0;

  public get height(): number {
    return this._height;
  }
  public set height(height: number) {
    if (height !== this._height) {
      this._height = height;
      this.onChanges();
    }
  }

  constructor(@Inject(STAT_STORE)private store: Store<Stats>) {}

  ngOnInit() {
    this._height = this.store.getState().heightInches;
  }

  private onChanges() {
    if (this.store.getState().heightInches !== this.height && validHeight(this._height)) {
      this.store.dispatch(changeHeight(this._height));
    }
  }

}
