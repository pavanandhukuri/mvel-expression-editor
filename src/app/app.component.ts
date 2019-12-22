import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ExpressionGroupComponent } from './expression-group/expression-group.component';

@Component({
  selector: 'mvel-expression-editor',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input()
  properties: Array<any> = [];

  @Input()
  expressions: Array<any> = [];

  @Output('onSubmit')
  onSubmit: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild("expressionGroup") expressionGroupView: ExpressionGroupComponent;

  submitExpression() {
    this.onSubmit.emit({ expression: this.expressionGroupView.getExpression(), model: this.expressionGroupView.getExpressionModel() });
  }
}
