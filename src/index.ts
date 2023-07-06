class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + " " + this.lastName;
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

class Teacher extends Person {
  override get fullName() {
    return "Professor: " + super.fullName;
  }
}

class Principle extends Person {
  override get fullName() {
    return "Principle: " + super.fullName;
  }
}

printNames([
  new Students(1, "John", "doe"),
  new Teacher("ally", "leandre"),
  new Principle("Mary", "smith"),
]);

function printNames(people: Person[]): void {
  for (let person of people) console.log(person.fullName);
}
