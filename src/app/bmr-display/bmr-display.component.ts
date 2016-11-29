import { Component, OnInit, Inject } from '@angular/core';

import { Store } from 'redux';

import { STAT_STORE } from '../state/store';

import { Stats } from '../state/stats';

@Component({
  selector: 'app-bmr-display',
  templateUrl: './bmr-display.component.html',
  styleUrls: ['./bmr-display.component.css']
})
export class BmrDisplayComponent implements OnInit {

  public bmr: number = 0;

  constructor(@Inject(STAT_STORE)private statStore: Store<Stats>) { }

  ngOnInit() {
    this.bmr = this.statStore.getState().bmr;
    this.statStore.subscribe(() => this.bmr = this.statStore.getState().bmr);
  }

}
