import { Component, OnInit, ViewChild, Input} from '@angular/core';
import { ExpressionGenerator } from '../expression-generator';

@Component({
  selector: 'app-operand-container',
  templateUrl: './operand-container.component.html',
  styleUrls: ['./operand-container.component.css']
})
export class OperandContainerComponent implements OnInit {

  @Input()
  operandData: any;

  @ViewChild("subExpression") subExpressionView: ExpressionGenerator;

  @Input()
  properties: Array<any> = [];

  constructor() { }

  ngOnInit() {
    if (this.operandData == null || this.operandData == undefined) {
      this.operandData = {};
    }
  }

  initializeSubExpression() {
    if (this.operandData.type == 'NESTED') {
      this.operandData.expressionData = {
        operator: '',
        leftOperand: {},
        rightOperand: {}
      };
    } else {
      delete this.operandData.expressionData;
    }

  }
}
