{
  // Array
  // 배열 타입을 정하는 방법은 두 가지가 있다.
  const fruits: string[] = ["apple", "banana"];
  const scroes: Array<number> = [1, 5, 9];
  // 전달된 인자를 함수내부에서 변경되지 않게 타입을 보장할 때 readonly를 사용
  // readonly Array<number>는 사용하지 못한다.
  function printArray(fruits: readonly string[]) {}

  // Tuple -> interface, type alias, class
  // 위와 같은 경우가 아니라면 tuple은 사용하기 비추천.
  // 인덱스로 접근하는 것은 가독성이 떨어지기 때문
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;
}
