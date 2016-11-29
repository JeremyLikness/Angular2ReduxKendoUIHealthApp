import { Component, Inject, OnInit } from '@angular/core';

import { Store } from 'redux';

import { STAT_STORE } from '../state/store';

import { changeWeight } from '../state/actions';

import { Stats } from '../state/stats';

const validWeight = (weight: number) => weight >= 80 && weight <= 500;

@Component({
  selector: 'app-weight-input',
  templateUrl: './weight-input.component.html',
  styleUrls: ['./weight-input.component.css']
})
export class WeightInputComponent implements OnInit {

  private _weight: number = 0;

  public get weight(): number {
    return this._weight;
  }
  public set weight(weight: number) {
    if (weight !== this._weight) {
      this._weight = weight;
      this.onChanges();
    }
  }

  constructor(@Inject(STAT_STORE)private store: Store<Stats>) {}

  ngOnInit() {
    this._weight = this.store.getState().weightPounds;
  }

  private onChanges() {
    if (this.store.getState().weightPounds !== this._weight && validWeight(this._weight)) {
      this.store.dispatch(changeWeight(this._weight));
    }
  }


}
