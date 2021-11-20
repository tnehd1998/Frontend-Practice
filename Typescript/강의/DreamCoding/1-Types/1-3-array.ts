{
  // Array
  const fruits: string[] = ["🍎", "🍊"];
  const scores: Array<number> = [1, 3, 4];
  function printArray(fruits: readonly string[]) {}

  // Tuple: 서로 다른 타입을 넣을 때 사용
  // 굳이 사용하지 않음
  // interface, type alias, class로 대체 가능
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;
}
