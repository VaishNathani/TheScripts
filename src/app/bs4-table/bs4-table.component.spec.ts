import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bs4TableComponent } from './bs4-table.component';

describe('Bs4TableComponent', () => {
  let component: Bs4TableComponent;
  let fixture: ComponentFixture<Bs4TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bs4TableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bs4TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
