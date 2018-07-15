import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardCalanderComponent } from './user-dashboard-calander.component';

describe('UserDashboardCalanderComponent', () => {
  let component: UserDashboardCalanderComponent;
  let fixture: ComponentFixture<UserDashboardCalanderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDashboardCalanderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardCalanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
