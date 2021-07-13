{
  // Type Inference
  // 알아서 특정 type을 추론하는 것

  // 비록 TypeScript가 자동으로 추론해줘도 확실하게
  // type을 명시하는 것이 좋음

  let text = "hello";

  function print(message = "hello") {
    console.log(message);
  }
  print("hello");

  function add(x: number, y: number) {
    return x + y;
  }
  const result = add(1, 2);
}
