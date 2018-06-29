import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistDashboardMyeventsComponent } from './artist-dashboard-myevents.component';

describe('ArtistDashboardMyeventsComponent', () => {
  let component: ArtistDashboardMyeventsComponent;
  let fixture: ComponentFixture<ArtistDashboardMyeventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistDashboardMyeventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistDashboardMyeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
