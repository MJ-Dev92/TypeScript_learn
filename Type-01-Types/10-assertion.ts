{
  /* Type Assertions */

  function jsStrFunc(): any {
    return "hello";
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 이렇게 어플리케이션이 죽을 수도 있기 때문에 확신하지 않으면 절대 쓰면 안된다.

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(2); // ? 옵셔널 체이닝이랑은 반대 ! 는 무조건 null이 없어랑 같은 말

  const buttton = document.querySelector("class")!; // 정말 정말 button이 있다고 장담한다면 !를 써야한다.
}
