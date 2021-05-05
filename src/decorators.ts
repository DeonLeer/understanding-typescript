// Decorators (capital letter for decorator functions)
function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    OGconstructor: T
  ) {
    console.log("renderin template");
    return class extends OGconstructor {
      constructor(..._: any[]) {
        super();
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

// @ is a special identifier that points to a function that will be your decorator, factories run first, but factory functions run bottom to top
@Logger("loggin")
@WithTemplate("<h1>Person Object</h1>", "app")
class Person2 {
  name = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new Person2();
console.log(pers);

function Log(target: any, propertyName: string | symbol) {
  console.log("Property decorator");
  console.log(target, propertyName);
}

function Log2(
  target: any,
  propertyName: string | symbol,
  descriptor: PropertyDescriptor
) {
  console.log("accessor decor");
  console.log(target);
  console.log(propertyName);
  console.log(descriptor);
}

function Log3(
  target: any,
  name: string | symbol,
  descriptor: PropertyDescriptor
) {
  console.log("method decor");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | symbol, position: number) {
  console.log("parameter decor");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;
  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("invalid price");
    }
  }
  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }
  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}
const p1 = new Product("Book", 19);

function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

class Printer {
  message = "this works";
  @AutoBind
  showMessage() {
    console.log(this.message);
  }
}
const p = new Printer();
const button = document.querySelector("button")!;
button.addEventListener("click", p.showMessage);

interface ValidatorConfig {
  [property: string]: {
    [validayanleProp: string]: string[]; // ['required', positive...]
  };
}
const registeredValidators: ValidatorConfig = {};
function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ["required"],
  };
}
function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ["positive"],
  };
}
function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;
  constructor(t: string, p: number) {
    this.price = p;
    this.title = t;
  }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);
  if (!validate(createdCourse)) {
    alert("invalid!");
    return;
  }
  console.log(createdCourse);
});
