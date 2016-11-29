/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WeightInputComponent } from './weight-input.component';

describe('WeightInputComponent', () => {
  let component: WeightInputComponent;
  let fixture: ComponentFixture<WeightInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeightInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
