import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistProfileHeroimageComponent } from './artist-profile-heroimage.component';

describe('ArtistProfileHeroimageComponent', () => {
  let component: ArtistProfileHeroimageComponent;
  let fixture: ComponentFixture<ArtistProfileHeroimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistProfileHeroimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistProfileHeroimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
