import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bs4FormValidationsComponent } from './bs4-form-validations.component';

describe('Bs4FormValidationsComponent', () => {
  let component: Bs4FormValidationsComponent;
  let fixture: ComponentFixture<Bs4FormValidationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bs4FormValidationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bs4FormValidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
