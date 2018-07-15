import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardMyeventsComponent } from './user-dashboard-myevents.component';

describe('UserDashboardMyeventsComponent', () => {
  let component: UserDashboardMyeventsComponent;
  let fixture: ComponentFixture<UserDashboardMyeventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDashboardMyeventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardMyeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
