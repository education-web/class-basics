const MESSAGE = 'Hello from';

let prevId = 0;

// module variable
export const myModuleVariable = 'hi';

// module function
export const myModuleFunction = () => {
  console.log(myModuleVariable);
};

export default class ExampleClass {
  // class field (stage 3)
  id = prevId + 1;

  // class field arrow function (stage 3)
  clickHandler = () => {
    console.log(`clickHandler for ${this.id}`);
  };

  // constructor
  constructor(id) {
    prevId = this.id;
  }

  // method
  sayHello() {
    console.log(`${MESSAGE} ${this.id}`);
  }

  // static property (stage 3)
  static myStaticProperty = 'beforeUpdate';

  // static method
  static myStaticMethod() {
    console.log(`static property before update: ${this.myStaticProperty}`);
    this.myStaticProperty = 'afterUpdate';
    console.log(`static property after update: ${this.myStaticProperty}`);
    this.myStaticProperty = 'beforeUpdate';
  }
}
