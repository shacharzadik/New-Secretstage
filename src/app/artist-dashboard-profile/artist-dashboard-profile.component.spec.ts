import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistDashboardProfileComponent } from './artist-dashboard-profile.component';

describe('ArtistDashboardProfileComponent', () => {
  let component: ArtistDashboardProfileComponent;
  let fixture: ComponentFixture<ArtistDashboardProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistDashboardProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistDashboardProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
