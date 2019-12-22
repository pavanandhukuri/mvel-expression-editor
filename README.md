# MVEL Expression Editor

This is an Angular based editor to create MVEL expressions. The editor is based on Angular Elements so it can be used in any non angular application as well. The editor currently supports the following

* Properties selection in the expression
* Adding fixed values
* Adding custom expression
* Adding nested expression

# Properties
## Inputs

```properties``` - This is an array of name, value objects and can be used to populate properties for assistance. Objects of this array has to contain two properties ```name``` and ```value```

```expressions``` - The design time data for prepopulating the editor with already saved expressions.

## Outputs
Currently the editor has a button ```Submit``` which emits an event ```onSubmit``` with the expression that is generated as part of the editor. This can be subscribed to to get the expression needed.

Along with the expression, the event detail also consists a model. This should be stored and passed as input ```expressions``` to provide editing capability.

# Usage
## In Angular
Usage in Angular is straight forward, include the following component wherever necessary.

In componenet.ts
```typescript
let properties:Array<any> = [{name:"one", value":"one"}, {name:"one", value":"one"}];

onSubmit(event){
  alert(event.expression);
  alert(event.model)
}
```
HTML:
```html
<mvel-expression-editor [properties]="properties" (onSubmit)="onSubmit()"></mvel-expression-editor>
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

    /**
     * If a previously saved model is already present, then it can be passed as below.
     **/
    el.expressions = model;

    el.addEventListener('onSubmitEvent', function (event) {
      alert(event.detail.expression);
      alert(event.detail.model);
    });
</script>
```

# Sample Images
![alt text](https://raw.githubusercontent.com/pavanandhukuri/mvel-expression-editor/master/samples/sample1.png)

![alt text](https://raw.githubusercontent.com/pavanandhukuri/mvel-expression-editor/master/samples/sample2.png)

