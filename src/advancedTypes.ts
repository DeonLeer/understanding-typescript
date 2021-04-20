// intersection types

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

// Type Guards
function add2(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log(emp.name);
  if ("privileges" in emp) {
    console.log("adming");
  }
  if ("startDate" in emp) {
    console.log("regular");
  }
}

class Car {
  drive() {
    console.log("drivin a car");
  }
}
class Truck {
  drive() {
    console.log("drivin a truck");
  }
  loadCargo(amount: number) {
    console.log(`loadin ${amount} cargo`);
  }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

// instanceof
function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}
// discriminated unions

interface Bird {
  type: "bird";
  flyingSpeed: number;
}
interface Horse {
  type: "horse";
  runningSpeed: number;
}
type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log(`moving at ${speed}`);
}

// Type Casting

const userInputElement = document.getElementById("user-input");

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "Hi";
}

// Index Types

interface ErrorContainer {
  [prop: string]: string
}

const errorBag: ErrorContainer = {
  email: 'invalid',
  username: 'deon'
}

// Optional Chaining
const fetchedUserData = {
  id: 'u1',
  name: 'Max',
  job: {title: 'CEO', description: 'owner'}
}

console.log(fetchedUserData?.job?.title)

// Nullish Coalescing (??) 'null or undefined/falsy'

const userInput = '';

const storedData = userInput ?? 'DEFAULT';

console.log(storedData)