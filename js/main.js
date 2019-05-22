import ExampleClass, { myModuleFunction, myModuleVariable } from './ExampleClass.js';

const exampleObject1 = new ExampleClass(); // constructor returns 1st object
const exampleObject2 = new ExampleClass(); // constructor returns 2nd object
exampleObject1.sayHello(); // method of 1nd object. Has this bound to 1st object
exampleObject2.sayHello(); // method of 2nd object. Has this bound to 2nd object

// static
console.log(`myStaticProperty: ${ExampleClass.myStaticProperty}`);
ExampleClass.myStaticMethod(); // static method. Has this bound to class

// module declarations can be used instead of static
console.log(`myModuleVariable: ${myModuleVariable}`); // variable
myModuleFunction(); // function
