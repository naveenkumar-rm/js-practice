class BankAccount {
    constructor(){
        this.accountHolder = accountHolder;
        this.balance = balance;
        this.pin = pin;
        this.cardNumber = cardNumber; 
    }
    deposit(amount){
        this.balance += amount;
        return `Deposited ${amount}`;
    }

    checkBalance(){
        return this.balance;
    }
}