import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistProfileAboutComponent } from './artist-profile-about.component';

describe('ArtistProfileAboutComponent', () => {
  let component: ArtistProfileAboutComponent;
  let fixture: ComponentFixture<ArtistProfileAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistProfileAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistProfileAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
