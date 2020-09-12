import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NellsteelComponent } from './nellsteel.component';

describe('NellsteelComponent', () => {
  let component: NellsteelComponent;
  let fixture: ComponentFixture<NellsteelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NellsteelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NellsteelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
