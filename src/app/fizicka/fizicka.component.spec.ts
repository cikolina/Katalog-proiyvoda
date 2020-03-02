import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FizickaComponent } from './fizicka.component';

describe('FizickaComponent', () => {
  let component: FizickaComponent;
  let fixture: ComponentFixture<FizickaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FizickaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FizickaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
