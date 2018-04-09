import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bs4GridComponent } from './bs4-grid.component';

describe('Bs4GridComponent', () => {
  let component: Bs4GridComponent;
  let fixture: ComponentFixture<Bs4GridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bs4GridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bs4GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
