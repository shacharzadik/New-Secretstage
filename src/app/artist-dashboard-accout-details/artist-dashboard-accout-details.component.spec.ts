import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistDashboardAccoutDetailsComponent } from './artist-dashboard-accout-details.component';

describe('ArtistDashboardAccoutDetailsComponent', () => {
  let component: ArtistDashboardAccoutDetailsComponent;
  let fixture: ComponentFixture<ArtistDashboardAccoutDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistDashboardAccoutDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistDashboardAccoutDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
