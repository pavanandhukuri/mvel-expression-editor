import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { ExpressionGenerator } from '../expression-generator';

@Component({
  selector: 'app-expression',
  templateUrl: './expression.component.html',
  styleUrls: ['./expression.component.css']
})
export class ExpressionComponent implements OnInit, ExpressionGenerator {

  @Input()
  expression: any;

  @Input()
  operandType: string;

  @Input()
  properties: Array<any> = [];

  @Output()
  onChange: EventEmitter<void> = new EventEmitter<void>();

  operator: string = '';

  @ViewChild("leftOperand") leftOperandView: ExpressionGenerator;
  @ViewChild("rightOperand") rightOperandView: ExpressionGenerator;

  constructor() { }

  ngOnInit() {
  }

  getExpression() {
    return "( " + this.leftOperandView.getExpression() + " " + this.operator + " " + this.rightOperandView.getExpression() + " )";
  }

  detectChange(){
    this.onChange.emit();
  }

}
