import { Component, OnInit, Inject } from '@angular/core';

import { Store } from 'redux';

import { STAT_STORE } from '../state/store';

import { Stats } from '../state/stats';

import { Obese, Overweight, Underweight } from './bmi-levels';

@Component({
  selector: 'app-bmi-display',
  templateUrl: './bmi-display.component.html',
  styleUrls: ['./bmi-display.component.css']
})
export class BmiDisplayComponent implements OnInit {

  public bmi: number = 0;

  public isObese = false;
  public isOverweight = false;
  public isUnderweight = true;
  public isNormal = false;

  constructor(@Inject(STAT_STORE)private statStore: Store<Stats>) { }

  ngOnInit() {
    this.bmi = this.statStore.getState().bmi;
    this.evaluateBmi();
    this.statStore.subscribe(() => {
      this.bmi = this.statStore.getState().bmi;
      this.evaluateBmi();
    });
  }

  private evaluateBmi(): void {
    this.isObese = Obese(this.bmi);
    this.isOverweight = !this.isObese && Overweight(this.bmi);
    this.isUnderweight = Underweight(this.bmi);
    this.isNormal = !this.isObese && !this.isOverweight && !this.isUnderweight;
  }

}
