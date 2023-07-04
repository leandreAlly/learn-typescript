class Account {
  nickname?: string;

  constructor(
    public id: number,
    public owner: string,
    private _balance: number
  ) {}

  get balance(): number {
    return this._balance;
  }

  deposit(amount: number): void {
    if (amount < 0) throw new Error("Invalid amount");
    this._balance += amount;
  }
}

let account = new Account(1, "Ally", 0);

account.deposit(1020);
console.log(account.balance);
