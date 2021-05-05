"use strict";
const names = ["Max", "Manuel"];
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "Max" }, 30);
function merge2(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj2 = merge2({ name: "Max" }, { age: 30 });
console.log(mergedObj2);
function countAndDescribe(element) {
    let descriptionText = "Got no value.";
    if (element.length === 1) {
        descriptionText = "Got 1 element";
    }
    else if (element.length > 1) {
        descriptionText = `Got ${element.length} elements`;
    }
    return [element, descriptionText];
}
console.log(countAndDescribe("Hi there"));
function extractAndConvert(obj, key) {
    return obj[key];
}
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Max");
textStorage.addItem("Tim");
textStorage.removeItem("Tim");
const numberStorage = new DataStorage();
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const names1 = ['max', 'sports'];
//# sourceMappingURL=generics.js.map