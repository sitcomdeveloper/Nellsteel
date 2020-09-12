import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpottvComponent } from './spottv.component';

describe('SpottvComponent', () => {
  let component: SpottvComponent;
  let fixture: ComponentFixture<SpottvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpottvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpottvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
