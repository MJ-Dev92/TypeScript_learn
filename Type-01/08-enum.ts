{
  /* Enum */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  // enum은 보통 쓰지 않는다. enum으로 지정된 타입에 아무 숫자를 할당할 수 있는게 문제
  // 그래서 유니온으로 대체해서 쓸 수 있다.
  type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday";
  enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  // 자동적으로 monday는 숫자 0을 가리킨다. 문자열도 가능하지만 각각 문자열을 입력해야 한다.
  console.log(Days.Monday);
  let day: Days = Days.Saturday;
  day = Days.Tuesday;
  day = 10;
  console.log(day);

  let dayOfweek: DaysOfWeek = "Monday";
  dayOfweek = "Wednesday"; // 유니온 타입 안에 있는 것 중에 하나만 선택할 수 있다.
}
