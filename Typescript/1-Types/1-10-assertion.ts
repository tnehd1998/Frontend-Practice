{
  // Type Assertions 🤮
  // 되도록 안쓰는 것이 좋음

  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  //   console.log((wrong as Array<number>).push(1)); 🤮

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(2); // 특정 값이 있다고 확신할 때 사용 🤮
}
