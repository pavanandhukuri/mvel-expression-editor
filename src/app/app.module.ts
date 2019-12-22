import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { ExpressionGroupComponent } from './expression-group/expression-group.component';
import { ExpressionComponent } from './expression/expression.component';
import { OperandContainerComponent } from './operand-container/operand-container.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ExpressionGroupComponent, ExpressionComponent, OperandContainerComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(AppComponent, { injector });
    customElements.define('mvel-expression-editor', el);
  }
  ngDoBootstrap() { }
}
