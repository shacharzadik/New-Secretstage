import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageGetinvolvedComponent } from './homepage-getinvolved.component';

describe('HomepageGetinvolvedComponent', () => {
  let component: HomepageGetinvolvedComponent;
  let fixture: ComponentFixture<HomepageGetinvolvedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageGetinvolvedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageGetinvolvedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
