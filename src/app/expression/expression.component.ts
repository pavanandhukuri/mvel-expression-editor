import { Component, OnInit, Input, Output, EventEmitter, DoCheck } from '@angular/core';
import { ExpressionGeneratorService } from '../expression-generator.service';

@Component({
  selector: 'app-expression',
  templateUrl: './expression.component.html',
  styleUrls: ['./expression.component.css']
})
export class ExpressionComponent implements OnInit, DoCheck {

  @Input()
  operandType: string;

  @Input()
  properties: Array<any> = [];

  @Input()
  expressionData: any;

  @Output()
  expressionDataChange: EventEmitter<any> = new EventEmitter<any>();

  leftExpression: string = '';
  rightExpression: string = '';
  operators: Array<any> = [{ value: ">", label: ">", type: "LOGICAL" },
  { value: ">=", label: ">=", type: "LOGICAL" },
  { value: "<", label: "<", type: "LOGICAL" },
  { value: "<=", label: "<=", type: "LOGICAL" },
  { value: "==", label: "equals", type: "LOGICAL" },
  { value: "!=", label: "does not equal", type: "LOGICAL" },
  { value: "soundslike", label: "sounds like", type: "LOGICAL" },
  { value: "+", label: "+", type: "ARITHMETIC" },
  { value: "-", label: "-", type: "ARITHMETIC" },
  { value: "*", label: "*", type: "ARITHMETIC" },
  { value: "/", label: "/", type: "ARITHMETIC" },
  { value: "%", label: "%", type: "ARITHMETIC" },
  { value: "strsim", label: "similar to", type: "ARITHMETIC" }];


  constructor(private expressionGenerator: ExpressionGeneratorService) { }

  ngOnInit() {
    if (this.expressionData == null || this.expressionData == undefined) {
      this.expressionData = {
        operator: '',
        leftOperand: {},
        rightOperand: {}
      }
    }
    this.operators = this.operators.filter(o => o.type == this.operandType);
  }

  ngDoCheck(): void {
    this.expressionDataChange.emit(this.expressionData);
    this.leftExpression = this.expressionGenerator.buildOperand(this.expressionData.leftOperand);
    this.rightExpression = this.expressionGenerator.buildOperand(this.expressionData.rightOperand);
  }
}
