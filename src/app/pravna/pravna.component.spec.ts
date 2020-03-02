import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PravnaComponent } from './pravna.component';

describe('PravnaComponent', () => {
  let component: PravnaComponent;
  let fixture: ComponentFixture<PravnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PravnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PravnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
