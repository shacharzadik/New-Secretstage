import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicGenderComponent } from './music-gender.component';

describe('MusicGenderComponent', () => {
  let component: MusicGenderComponent;
  let fixture: ComponentFixture<MusicGenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicGenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
