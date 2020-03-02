import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsouranceComponent } from './insourance.component';

describe('InsouranceComponent', () => {
  let component: InsouranceComponent;
  let fixture: ComponentFixture<InsouranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsouranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsouranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
