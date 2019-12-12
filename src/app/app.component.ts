import { Component, Input, OnInit, Output, EventEmitter, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { ExpressionGroupComponent } from './expression-group/expression-group.component';

@Component({
  selector: 'mvel-expression-editor',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {
  
  @Input()
  properties: Array<any> = [];

  @Input()
  expression: string;

  @Output('onSubmitEvent')
  onSubmitEvent: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild("expressionGroup") expressionGroupView : ExpressionGroupComponent;

  submitExpression(){
    this.onSubmitEvent.emit(this.expressionGroupView.getExpression());
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  } 

}
