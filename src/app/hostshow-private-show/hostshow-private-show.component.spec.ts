import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostshowPrivateShowComponent } from './hostshow-private-show.component';

describe('HostshowPrivateShowComponent', () => {
  let component: HostshowPrivateShowComponent;
  let fixture: ComponentFixture<HostshowPrivateShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostshowPrivateShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostshowPrivateShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
