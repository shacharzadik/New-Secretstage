import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistProfileEventPrefereanceComponent } from './artist-profile-event-prefereance.component';

describe('ArtistProfileEventPrefereanceComponent', () => {
  let component: ArtistProfileEventPrefereanceComponent;
  let fixture: ComponentFixture<ArtistProfileEventPrefereanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistProfileEventPrefereanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistProfileEventPrefereanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
