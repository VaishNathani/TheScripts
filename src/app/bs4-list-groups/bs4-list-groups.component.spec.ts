import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bs4ListGroupsComponent } from './bs4-list-groups.component';

describe('Bs4ListGroupsComponent', () => {
  let component: Bs4ListGroupsComponent;
  let fixture: ComponentFixture<Bs4ListGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bs4ListGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bs4ListGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
