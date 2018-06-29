import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistProfileMediaComponent } from './artist-profile-media.component';

describe('ArtistProfileMediaComponent', () => {
  let component: ArtistProfileMediaComponent;
  let fixture: ComponentFixture<ArtistProfileMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistProfileMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistProfileMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
