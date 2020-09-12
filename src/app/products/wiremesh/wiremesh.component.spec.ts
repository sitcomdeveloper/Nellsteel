import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WiremeshComponent } from './wiremesh.component';

describe('WiremeshComponent', () => {
  let component: WiremeshComponent;
  let fixture: ComponentFixture<WiremeshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WiremeshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WiremeshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
