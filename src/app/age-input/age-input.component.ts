import { Component, Inject, OnInit } from '@angular/core';

import { Store } from 'redux';

import { STAT_STORE } from '../state/store';

import { changeAge } from '../state/actions';

import { Stats } from '../state/stats';

const validAge = (age: number) => age >= 13 && age <= 120;

@Component({
  selector: 'app-age-input',
  templateUrl: './age-input.component.html',
  styleUrls: ['./age-input.component.css']
})
export class AgeInputComponent implements OnInit {

  private _age: number = 0;

  public get age(): number {
    return this._age;
  }
  public set age(age: number) {
    if (age !== this._age) {
      this._age = age;
      this.onChanges();
    }
  }

  constructor(@Inject(STAT_STORE)private store: Store<Stats>) {}

  ngOnInit() {
    this._age = this.store.getState().ageYears;
  }

  private onChanges() {
    if (this.store.getState().ageYears !== this.age && validAge(this.age)) {
      this.store.dispatch(changeAge(this.age));
    }
  }

}
