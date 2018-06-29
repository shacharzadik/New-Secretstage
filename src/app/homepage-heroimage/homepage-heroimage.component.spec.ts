import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageHeroimageComponent } from './homepage-heroimage.component';

describe('HomepageHeroimageComponent', () => {
  let component: HomepageHeroimageComponent;
  let fixture: ComponentFixture<HomepageHeroimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageHeroimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageHeroimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
