import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostshowPublicShowComponent } from './hostshow-public-show.component';

describe('HostshowPublicShowComponent', () => {
  let component: HostshowPublicShowComponent;
  let fixture: ComponentFixture<HostshowPublicShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostshowPublicShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostshowPublicShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
