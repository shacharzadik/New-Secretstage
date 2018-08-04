import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistDashboardInboxComponent } from './artist-dashboard-inbox.component';

describe('ArtistDashboardInboxComponent', () => {
  let component: ArtistDashboardInboxComponent;
  let fixture: ComponentFixture<ArtistDashboardInboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistDashboardInboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistDashboardInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
