"use strict";
let add1;
add1 = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
}
let user1;
user1 = new Person("Ted", 22);
user1.greet("yo im ");
console.log(user1);
//# sourceMappingURL=interfaces.js.map