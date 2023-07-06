interface Calendar {
  name: string;
  addEvent: () => void;
  removeEvent: () => void;
}

class GoogleCalendar implements Calendar {
  constructor(public name: string) {}

  addEvent(): void {
    console.log("This is add event method");
  }
  removeEvent(): void {
    console.log("This is remove event method");
  }
}
