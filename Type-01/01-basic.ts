{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array.....
   */

  // number
  const num: number = 1;

  // string
  const str: string = "hi";

  // boolean
  const boal: boolean = true;

  // undefined
  let name: undefined; // 이렇게 쓰진 않는다.
  // 옵셔널 타입일 때 쓰인다.
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; // 단독으로는 사용하지 않는다.
  let person2: string | null;
  // null과 undefined는 비슷하지만 보편적으로는 undefined를 사용한다.

  // unknown
  // 보통 쓰이진 않지만 값의 타입이 지정되어 있지 않을 때 보통 쓰인다.
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  // any
  // 가능하면 쓰지 않는게 좋다. 보통 타입이 정말 결정되어 있지 않을 때 사용!!
  let anything: any = 0;
  anything = "hello";

  // void
  // 아무것도 return 하지 않을 때 사용한다. void를 생략해도 무방하다.
  function print(): void {
    console.log("hello");
    return;
  }
  let unusable: void = undefined; // 이렇게 쓰진 않는다.

  // never
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while (true) {}
  }
  let neverEnding: never; // 이렇게 쓰진 않는다.

  // objet
  let obj: object; // 이렇게 쓰진 않는다.
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "ellie" });
  acceptSomeObject({ animal: "dog" });
}
