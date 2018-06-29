import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistDashboardCalanderComponent } from './artist-dashboard-calander.component';

describe('ArtistDashboardCalanderComponent', () => {
  let component: ArtistDashboardCalanderComponent;
  let fixture: ComponentFixture<ArtistDashboardCalanderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistDashboardCalanderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistDashboardCalanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
