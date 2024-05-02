{
  /* Type Inference */

  let text = "hello"; // 타입이 자동적으로 추론하여 string 타입이 지정된다.

  // 인자가 any로 암묵적으로 지정되어 있기 때문에 타입을 구체적으로 지정해주는게 좋다
  function print(message = "hello") {
    console.log(message);
  }
  print("hello");

  function add(x: number, y: number) {
    return x + y;
  }
  const result = add(1, 2); // 자동적으로 추론하여 number 타입이 지정된다.
}
