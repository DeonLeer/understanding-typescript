const names = ["Max", "Manuel"];

// const promise: Promise<string> = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('done')
//   }, 2000)
// })

// promise.then(data => {
//   data.split(' ')
// })

function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Max" }, 30); //doesnt error out, but doesnt work

// constraints

function merge2<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj2 = merge2({ name: "Max" }, { age: 30 }); //will error out if not objects

console.log(mergedObj2);

// Generic Function

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element";
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Hi there"));

// Keyof constraint

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

// Generic Classes

class DataStorage<T> {
  private data: T[] = [];
  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Tim");
textStorage.removeItem("Tim");

const numberStorage = new DataStorage<number>();

const objStorage = new DataStorage<object>();

objStorage.addItem({name: 'manu'})
objStorage.addItem({name: 'max'})
console.log(objStorage.getItems())
objStorage.removeItem({name: 'manu'})
console.log(objStorage.getItems())