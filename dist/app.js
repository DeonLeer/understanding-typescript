"use strict";
class Person {
    constructor(name) {
        this.age = 22;
        this.name = name;
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
}
let user1;
user1 = new Person('Ted');
user1.greet('yo im ');
console.log(user1);
//# sourceMappingURL=app.js.map