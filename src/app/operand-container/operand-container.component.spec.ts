import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperandContainerComponent } from './operand-container.component';

describe('OperandContainerComponent', () => {
  let component: OperandContainerComponent;
  let fixture: ComponentFixture<OperandContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperandContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperandContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
