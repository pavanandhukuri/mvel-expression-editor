# MVEL Expression Editor

This is an Angular based editor to create MVEL expressions. The editor is based on Angular Elements so it can be used in any non angular application as well. 

# Properties
## Inputs
Currently the editor only accepts one input called ```properties```. This is an array of name, value objects and can be used to populate properties for assistance.

## Outputs
Currently the editor has a button ```Submit``` which emits an event ```onSubmitEvent``` with the expression that is generated as part of the editor. This can be subscribed to to get the expression needed.

# Usage
## In Angular
Usage in Angular is straight forward, include the following component wherever necessary.

In componenet.ts
```typescript
let properties:Array<any> = [{name:"one", value":"one"}, {name:"one", value":"one"}];

onSubmit(expression){
  alert(expression);
}
```
HTML:
```html
<mvel-expression-editor [properties]="properties" (onSubmitEvent)="onSubmit()"></mvel-expression-editor>
```


## Outside Angular
The editor is built on the concept of custom elements, so it can be easily embedded into any Web Page.
The Javascript file necessary can be found under the ```mvel-expression-editor``` directory.

HTML:
```html
<mvel-expression-editor></mvel-expression-editor>
<script type="text/javascript" src="mvel-expression-editor.js"></script>
<script>
    let el = document.querySelector('mvel-expression-editor');
    el.properties = [{ name: "one", value: "one" }, { name: "two", value: "two" }];
    el.addEventListener('onSubmitEvent', function (event) {
      alert(event.detail);
    });
</script>
```

# Sample Images
![alt text](https://raw.githubusercontent.com/pavanandhukuri/mvel-expression-editor/master/samples/sample1.png)

![alt text](https://raw.githubusercontent.com/pavanandhukuri/mvel-expression-editor/master/samples/sample2.png)

