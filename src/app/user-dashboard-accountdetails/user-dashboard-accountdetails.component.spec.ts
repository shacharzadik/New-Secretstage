import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardAccountdetailsComponent } from './user-dashboard-accountdetails.component';

describe('UserDashboardAccountdetailsComponent', () => {
  let component: UserDashboardAccountdetailsComponent;
  let fixture: ComponentFixture<UserDashboardAccountdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDashboardAccountdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardAccountdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
