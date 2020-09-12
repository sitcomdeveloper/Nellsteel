import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotrolledComponent } from './hotrolled.component';

describe('HotrolledComponent', () => {
  let component: HotrolledComponent;
  let fixture: ComponentFixture<HotrolledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotrolledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotrolledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
