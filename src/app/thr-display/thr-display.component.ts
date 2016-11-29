import { Component, Inject, OnInit } from '@angular/core';

import { Store } from 'redux';

import { STAT_STORE } from '../state/store';

import { Stats } from '../state/stats';

import { ITargetHeartRate } from '../state/formulas';

@Component({
  selector: 'app-thr-display',
  templateUrl: './thr-display.component.html',
  styleUrls: ['./thr-display.component.css']
})
export class ThrDisplayComponent implements OnInit {

  public thr: ITargetHeartRate = null;

  constructor(@Inject(STAT_STORE)private statStore: Store<Stats>) { }

  ngOnInit() {
    this.thr = this.statStore.getState().thr;
    this.statStore.subscribe(() => this.thr = this.statStore.getState().thr);
  }
}
