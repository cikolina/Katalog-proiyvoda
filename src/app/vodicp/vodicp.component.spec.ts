import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VodicpComponent } from './vodicp.component';

describe('VodicpComponent', () => {
  let component: VodicpComponent;
  let fixture: ComponentFixture<VodicpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VodicpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VodicpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
