import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WirerodComponent } from './wirerod.component';

describe('WirerodComponent', () => {
  let component: WirerodComponent;
  let fixture: ComponentFixture<WirerodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WirerodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WirerodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
