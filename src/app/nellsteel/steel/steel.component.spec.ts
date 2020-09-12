import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteelComponent } from './steel.component';

describe('SteelComponent', () => {
  let component: SteelComponent;
  let fixture: ComponentFixture<SteelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
