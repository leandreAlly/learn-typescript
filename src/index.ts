const employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Ally",
  retire: (date: Date) => {
    console.log(date);
  },
};

// ReadOnly makes the id not being mutable
