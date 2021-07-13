{
  // Enum : 상수 값들을 정의하기 위해 사용
  // 정해진 값 이외의 값도 넣을수가 있어 왠만하면 사용하지 않음

  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  enum Days { // 특정값을 지정하지 않으면 자동으로 해당 index값이 할당 됨
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Tuesday);
  let day: Days = Days.Saturday;
  day = Days.Monday;
  day = 10; // 이런 경우가 가능해져 버림 🤮
  console.log(day);

  // enum 대신 union type으로 대체하여 사용
  type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday";
  let dayOfWeek: DaysOfWeek = "Monday";
  //   dayOfWeek = 'billy' 이외의 값이 들어오는 상황을 방지함 😍
}
