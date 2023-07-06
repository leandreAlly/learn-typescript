"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    walk() {
        console.log("Walking");
    }
}
class Students extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeText() {
        console.log("Taking a test");
    }
}
class Teacher extends Person {
    get fullName() {
        return "Professor: " + super.fullName;
    }
}
class Principle extends Person {
    get fullName() {
        return "Principle: " + super.fullName;
    }
}
printNames([
    new Students(1, "John", "doe"),
    new Teacher("ally", "leandre"),
    new Principle("Mary", "smith"),
]);
function printNames(people) {
    for (let person of people)
        console.log(person.fullName);
}
