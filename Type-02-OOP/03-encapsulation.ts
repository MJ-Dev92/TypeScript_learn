{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public - 기본적으로 설정되어 있음.
  // private - 외부에서 절대 접근할 수 없음.
  // protected - 외부에서는 접근할 수 없지만 클래스를 상속한 자식 클래스에서만 접근할 수 있다.
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance(object) level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // 생성자를 생성하는 것을 금지하기 위해서 아래와 같이 objects가 쓰인다.
    // constructor를 private 해주고 아래 함수에 접근하여 Class를 사용하는 것이 안정적이고 좋다.
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    // private가 되어있어 외부에서 설정이 불가하기 때문에 내부 함수로 변수를 조작한다.
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans must be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }

      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = CoffeeMaker.makeMachine(32);
  maker.fillCoffeeBeans(32);
}
