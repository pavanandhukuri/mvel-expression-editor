import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressionGroupComponent } from './expression-group.component';

describe('ExpressionGroupComponent', () => {
  let component: ExpressionGroupComponent;
  let fixture: ComponentFixture<ExpressionGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpressionGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressionGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
