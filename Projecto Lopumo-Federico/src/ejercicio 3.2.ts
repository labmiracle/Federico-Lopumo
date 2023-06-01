//ejercicio 3.2


interface BankAccount {
    money: number;
    deposit: (value: number, message?: string) => void;
}

const bankAccount: BankAccount = {
    money: 0,
    deposit(value: number, message?: string): void {
        this.money += value;
        if (message) {
            console.log(message);
        }
    }
};

bankAccount.deposit(20);
bankAccount.deposit(10, 'Deposit received');

console.log('[Exercise 3.2]', `Account value: $${bankAccount.money}`);

