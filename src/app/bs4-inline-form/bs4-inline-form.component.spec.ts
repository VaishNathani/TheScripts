import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bs4InlineFormComponent } from './bs4-inline-form.component';

describe('Bs4InlineFormComponent', () => {
  let component: Bs4InlineFormComponent;
  let fixture: ComponentFixture<Bs4InlineFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bs4InlineFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bs4InlineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
