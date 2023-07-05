class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + "" + this.lastName;
  }

  walk() {
    console.log("Walking");
  }
}

class Students extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeText() {
    console.log("Taking a test");
  }
}

let student = new Students(1, "john", "doe");

student.takeText();
student.walk();
