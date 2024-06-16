interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log("full time!!");
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log("part time!!");
  }
  workPartTime() {}
}

function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const mj = new FullTimeEmployee();
const bob = new PartTimeEmployee();
mj.workFullTime();
bob.workPartTime();

const mjAfterPay = pay(mj);
const bobAfterPay = pay(bob);
