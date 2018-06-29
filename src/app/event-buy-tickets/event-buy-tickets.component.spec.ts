import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBuyTicketsComponent } from './event-buy-tickets.component';

describe('EventBuyTicketsComponent', () => {
  let component: EventBuyTicketsComponent;
  let fixture: ComponentFixture<EventBuyTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventBuyTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBuyTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
