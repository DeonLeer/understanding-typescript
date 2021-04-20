"use strict";
var _a;
const e1 = {
    name: "Max",
    privileges: ["create server"],
    startDate: new Date(),
};
function add2(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
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
    loadCargo(amount) {
        console.log(`loadin ${amount} cargo`);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
function moveAnimal(animal) {
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
const userInputElement = document.getElementById("user-input");
if (userInputElement) {
    userInputElement.value = "Hi";
}
const errorBag = {
    email: 'invalid',
    username: 'deon'
};
const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'owner' }
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput = '';
const storedData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
console.log(storedData);
//# sourceMappingURL=advancedTypes.js.map