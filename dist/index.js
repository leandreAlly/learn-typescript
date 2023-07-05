"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + "" + this.lastName;
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
let student = new Students(1, "john", "doe");
student.takeText();
student.walk();
