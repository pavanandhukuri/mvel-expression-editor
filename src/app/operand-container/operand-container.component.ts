import { Component, OnInit, ViewChild, Input, EventEmitter, Output, DoCheck } from '@angular/core';
import { ExpressionGenerator } from '../expression-generator';

@Component({
  selector: 'app-operand-container',
  templateUrl: './operand-container.component.html',
  styleUrls: ['./operand-container.component.css']
})
export class OperandContainerComponent implements OnInit, ExpressionGenerator, DoCheck {
  
  type: string = '';
  property: string = '';
  fixedValue: string = '';
  customExpression: string = '';

  @ViewChild("subExpression") subExpressionView: ExpressionGenerator;

  @Output("onChange") onChange: EventEmitter<void> = new EventEmitter<void>();

  @Input()
  properties: Array<any> = [];

  constructor() { }

  ngOnInit() {
  }

  getExpression() {
    switch (this.type) {
      case "PROPERTY":
        return this.property;
      case "FIXED":
        return this.fixedValue;
      case "CUSTOM":
        return this.customExpression;
      case "NESTED":
        return this.subExpressionView.getExpression();
      default:
        return '';
    }
  }

  ngDoCheck(): void {
    this.onChange.emit();
  }  

  detectChange(){
    this.onChange.emit();
  }

}
