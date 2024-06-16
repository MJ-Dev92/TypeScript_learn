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

const obj = {
  name: "MJ",
  age: 20,
};

const obj2 = {
  animal: "Dog",
};

console.log(getValue(obj, "name")); // MJ
console.log(getValue(obj, "age")); // 20
console.log(getValue(obj2, "animal")); // Dog

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
