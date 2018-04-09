import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bs4FormInputgroupComponent } from './bs4-form-inputgroup.component';

describe('Bs4FormInputgroupComponent', () => {
  let component: Bs4FormInputgroupComponent;
  let fixture: ComponentFixture<Bs4FormInputgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bs4FormInputgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bs4FormInputgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
