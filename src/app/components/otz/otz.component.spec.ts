/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OtzComponent } from './otz.component';

describe('OtzComponent', () => {
  let component: OtzComponent;
  let fixture: ComponentFixture<OtzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
