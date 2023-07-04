"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    get balance() {
        return this._balance;
    }
    deposit(amount) {
        if (amount < 0)
            throw new Error("Invalid amount");
        this._balance += amount;
    }
}
let account = new Account(1, "Ally", 0);
account.deposit(1020);
console.log(account.balance);
