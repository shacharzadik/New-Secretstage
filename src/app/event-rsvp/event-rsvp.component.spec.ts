import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventRSVPComponent } from './event-rsvp.component';

describe('EventRSVPComponent', () => {
  let component: EventRSVPComponent;
  let fixture: ComponentFixture<EventRSVPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventRSVPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventRSVPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
