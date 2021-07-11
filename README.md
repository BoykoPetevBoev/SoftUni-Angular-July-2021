# SoftUni Angular July-2021

## TypeScript 

### Compiler
<table>
    <tr>
        <th>tsc</th>
        <th>comment</th>
    </tr>
    <tr>
        <td>tsc --init</td>
        <td>Initializes a TypeScript project and creates a tsconfig.json file.</td>
    </tr>
    <tr>
        <td>tsc -h, tsc --help</td>
        <td>Print this message.</td>
    </tr>
    <tr>
        <td>tsc -w, tsc --watch</td>
        <td>Watch input files for changes.</td>
    </tr>
    <tr>
        <td>tsc -v, tsc --version</td>
        <td>Print the compiler's version.</td>
    </tr>
    <tr>
        <td>tsc -b, tsc --build</td>
        <td>Build one or more projects and their dependencies, if out of date</td>
    </tr>
</table>

### Config file
<table>
    <tr>
        <th>tscconfig.json</th>
        <th>comment</th>
    </tr>
    <tr>
        <td>"target": "es6"</td>
        <td>Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', 'ES2021', or 'ESNEXT'.</td>
    </tr>
    <tr>
        <td>"lib": []</td>
        <td>Specify library files to be included in the compilation.</td>
    </tr>
    <tr>
        <td>"sourceMap": true</td>
        <td>Generates corresponding '.map' file. We can use .ts files in browser for debugging</td>
    </tr>
    <tr>
        <td>"outDir": "./</td>
        <td>Redirect output structure to the directory.</td>
    </tr>
    <tr>
        <td>"rootDir": "./"</td>
        <td>Specify the root directory of input files. Use to control the output directory structure with --outDir.</td>
    </tr>
    <tr>
        <td>"strict": true</td>
        <td>Enable all strict type-checking options.</td>
    </tr>
</table>

## Types

### Number Types
In TypeScript, numbers are floating point values that have a type of number. You can assign any numeric values including decimals, hexadecimals, binary, and octal literals.
``` 
let decimalValue: number = 10;
let hexaDecimalValue: number = 0xf10b;
let binaryValue: number = 0b110100;
let octalValue: number = 0o410;
```
### String Types
When you want to use textual data, string types are used and get denoted by the keyword string. Like JavaScript, TypeScript also uses double quotes (") and single quotes (') to surround the string value.
```
let firstName: string = "Kunal"; 
let lastName: string = 'Chowdhury'; 
```
### Boolean Types
To use boolean data types in TypeScript, for declaring variables, use the boolean keyword.
```
let isPrimaryAccount: boolean = true;
let hasCards: boolean = false;
```
### Enum Types
Enumerated data types (enums) are a set of numeric values with more friendly names. It's an addition on top of JavaScript that TypeScript offers. The variables of enumerated data types are declared with the keyword enum. By default, the enum values start from 0 (zero), but you can also set it by manually entering the value of its members.
```
enum CardTypes { Debit, Credit, Virtual }
enum CardTypes { Debit = 1, Credit, Virtual }
enum CardTypes { Debit = 1, Credit = 3, Virtual = 5 }
let card: CardTypes = CardTypes.Debit;
```
### Void Types
In general, this type of data types are used in functions that do not return any value.
```
function showMessage(): void { ... }
```
### Any Types
While writing code for which you are unsure of the data type of a value, due to its dynamic content, you can use the keyword any to declare said variable. This is often useful when you are seeking input from users or at third-party library/service. This is also useful when you are declaring an array which has a mixed data type.
```
let dynamicValue: any = "Kunal Chowdhury";
dynamicValue = 100;
dynamicValue = 0b1100101;
dynamicValue = true;

let dynamicList: any[] = [ "Kunal Chowdhury", "Free User", 21, true ];
```
### Never Types
The never type represents the data type of values that never occur. For example, the following function that always throws an exception can never return a value. 
```
function throwError(message: string): never {
    throw new Error(message);
}
```
### Union Types
A union type is a type formed from two or more other types, representing values that may be any one of those types. We refer to each of these types as the union’s members.
```
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
printId(101);
printId("202");
```
### Array Types
Just like JavaScript, you can work with arrays in TypeScript and can define them in either of the following two ways
```
let marks: number[] = [80, 85, 75];
let marks: Array<number> = [80, 85, 75];
```
### Tuple Types
A tuple is a data type that allows you to create an array where the type of a fixed number of elements are known but need not be same. While accessing an element of a Tuple with a valid known index, the data of correct type will be returned.
```
// correct
let person: [string, number] = ["Kunal", 2018];

// error
let person: [string, number] = [2018, "Kunal"];

// correct
let person: [string, number] = ["Kunal", 2018, "India"];

// correct
let person: [string, number] = ["Kunal", 2018, 21];

// error
let person: [string, number] = ["Kunal", 2018, true];
```
### Aliases Type
We’ve been using object types and union types by writing them directly in type annotations. This is convenient, but it’s common to want to use the same type more than once and refer to it by a single name.
```
type Point = {
  x: number;
  y: number;
};
type ID = number | string;
```
Extending a type via intersections
```
type Animal = {
  name: string
}

type Bear = Animal & { 
  honey: boolean 
}

const bear = getBear();
bear.name;
bear.honey;
```
### Interfaces
An interface declaration is another way to name an object type.
```
interface Point {
  x: number;
  y: number;
}
```
Extending an interface
```
interface Animal {
  name: string
}

interface Bear extends Animal {
  honey: boolean
}

const bear = getBear() 
bear.name
bear.honey
```
### Assertions Type
Sometimes you will have information about the type of a value that TypeScript can’t know about.
For example, if you’re using document.getElementById, TypeScript only knows that this will return some kind of HTMLElement, but you might know that your page will always have an HTMLCanvasElement with a given ID.
```
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");
```

## Angular

### CLI
<table>
    <tr>
        <th>ng</th>
        <th>comment</th>
    </tr>
    <tr>
        <td>ng new some-app</td>
        <td>Create new project</td>
    </tr>
    <tr>
        <td>ng generate component home (g c) </td>
        <td>Generate a new component</td>
    </tr>
    <tr>
        <td>ng serve (s)</td>
        <td>Builds and serves your app, rebuilding on file changes.</td>
    </tr>
    <tr>
        <td>ng test (t)</td>
        <td>Runs unit tests in a project.</td>
    </tr>
    <tr>
        <td>ng version (v)</td>
        <td>Outputs Angular CLI version.</td>
    </tr>
    <tr>
        <td>ng build (b)</td>
        <td>Compiles an Angular app into an output directory named dist/ at the given output path. Must be executed from within a workspace directory.</td>
    </tr>    
</table>

### Lifecycle event sequence
<table>
    <tr>
        <th>Hook method</th>
        <th>Purpose</th>
    </tr>
    <tr>
        <td>ngOnChanges()</td>
        <td>Respond when Angular sets or resets data-bound input properties. The method receives a SimpleChanges object of current and previous property values.</td>
    </tr>   
    <tr>
        <td>ngOnInit()</td>
        <td>Initialize the directive or component after Angular first displays the data-bound properties and sets the directive or component's input properties. </td>
    </tr>   
    <tr>
        <td>ngOnDestroy()</td>
        <td>Called immediately before Angular destroys the directive or component.</td>
    </tr>   
    <tr>
        <td></td>
        <td></td>
    </tr>   
    <tr>
        <td></td>
        <td></td>
    </tr>   
</table>

