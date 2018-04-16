import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsWidgetsComponent } from './js-widgets.component';

describe('JsWidgetsComponent', () => {
  let component: JsWidgetsComponent;
  let fixture: ComponentFixture<JsWidgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsWidgetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
