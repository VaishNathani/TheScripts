import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bs4FormComponent } from './bs4-form.component';

describe('Bs4FormComponent', () => {
  let component: Bs4FormComponent;
  let fixture: ComponentFixture<Bs4FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bs4FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bs4FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
