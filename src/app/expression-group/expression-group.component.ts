import { Component, OnInit, ViewChildren, QueryList, Input, Output, EventEmitter } from '@angular/core';
import { ExpressionComponent } from '../expression/expression.component';

@Component({
  selector: 'app-expression-group',
  templateUrl: './expression-group.component.html',
  styleUrls: ['./expression-group.component.css']
})
export class ExpressionGroupComponent implements OnInit {

  logicalExpressions: Array<any> = [];
  expression: string = "";
  conjunctions: Array<any> = [];

  @ViewChildren("expressionView") expressions: QueryList<ExpressionComponent>;

  @Input()
  properties: Array<any> = [];  

  constructor() { }

  ngOnInit() {
    this.logicalExpressions = [{}]
  }

  detectChange() {
    this.expression = "";
    var count = 0
    this.expressions && this.expressions.forEach(ex => {
      if (count > 0) {
        this.expression += " " + (this.conjunctions[count - 1]?this.conjunctions[count - 1]:'') + " ";
      }
      this.expression += ex.getExpression()
      count++;
    });
  }

  getExpression():string{
    return this.expression;
  }
}
