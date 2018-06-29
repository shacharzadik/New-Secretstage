import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistProfileHostshowComponent } from './artist-profile-hostshow.component';

describe('ArtistProfileHostshowComponent', () => {
  let component: ArtistProfileHostshowComponent;
  let fixture: ComponentFixture<ArtistProfileHostshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistProfileHostshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistProfileHostshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
