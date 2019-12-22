import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpressionGeneratorService {

  constructor() { }

  buildExpression(expressionData: any) {
    return "( " + this.buildOperand(expressionData.leftOperand) + " " + expressionData.operator + " " + this.buildOperand(expressionData.rightOperand) + ")";
  }

  buildOperand(operandData: any): string {
    switch (operandData.type) {
      case "PROPERTY":
        return operandData.property;
      case "CUSTOM":
        return operandData.customExpression;
      case "NESTED":
        return this.buildExpression(operandData.expressionData);
      default:
        return '';
    }
  }
}
