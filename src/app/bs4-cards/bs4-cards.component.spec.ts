import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bs4CardsComponent } from './bs4-cards.component';

describe('Bs4CardsComponent', () => {
  let component: Bs4CardsComponent;
  let fixture: ComponentFixture<Bs4CardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bs4CardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bs4CardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
