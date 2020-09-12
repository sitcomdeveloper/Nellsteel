import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OhsasComponent } from './ohsas.component';

describe('OhsasComponent', () => {
  let component: OhsasComponent;
  let fixture: ComponentFixture<OhsasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OhsasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OhsasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
