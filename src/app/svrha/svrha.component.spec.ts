import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvrhaComponent } from './svrha.component';

describe('SvrhaComponent', () => {
  let component: SvrhaComponent;
  let fixture: ComponentFixture<SvrhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvrhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvrhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
