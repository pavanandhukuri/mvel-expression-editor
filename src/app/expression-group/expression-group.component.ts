import { Component, OnInit, Input } from '@angular/core';
import { ExpressionGeneratorService } from '../expression-generator.service';

@Component({
  selector: 'app-expression-group',
  templateUrl: './expression-group.component.html',
  styleUrls: ['./expression-group.component.css']
})
export class ExpressionGroupComponent implements OnInit {

  @Input()
  expressions: Array<any>;

  @Input()
  properties: Array<any>;

  constructor(private expressionGenerator: ExpressionGeneratorService) { }

  ngOnInit() {
    // if (this.expressions == null || this.expressions.length == 0) {
    //   this.expressions = [{
    //     expressionData: {
    //       operator: '',
    //       leftOperand: {},
    //       rightOperand: {}
    //     }, conjunction: ''
    //   }];
    // }
  }

  getExpression(): string {
    let expression: string = '';
    this.expressions.forEach(ex => {
      expression += this.expressionGenerator.buildExpression(ex.expressionData) + " " + (ex.conjunction ? ex.conjunction : '');
    });
    return expression;
  }

  getExpressionModel(): Array<any> {
    return this.expressions;
  }
}
