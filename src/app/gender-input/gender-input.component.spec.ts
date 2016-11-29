/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InputsModule } from '@progress/kendo-angular-inputs';

import { GenderInputComponent } from './gender-input.component';

import { makeStore, STAT_STORE } from '../state/store';

describe('GenderInputComponent', () => {
  let component: GenderInputComponent;
  let fixture: ComponentFixture<GenderInputComponent>;
  let store = makeStore();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, InputsModule ],
      declarations: [ GenderInputComponent ],
      providers: [{provide: STAT_STORE, useValue: store}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize to the store default', () => {
    expect(component.isFemale).toEqual(store.getState().isFemale);
  });

  it('should update the store on toggle', () => {
    component.isFemale = !component.isFemale;
    expect(store.getState().isFemale).toEqual(component.isFemale);
  });
});
