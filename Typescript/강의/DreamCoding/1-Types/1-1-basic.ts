{
  // JavaScript
  // old: var X
  var count = 5;
  count = 1;

  // let ES6
  let name = "hello";
  name = "hi";

  // const
  const age = 5;

  /*
  JavaScript
  Primitive: number, string, boolean, bigint, symbol, null, undefined
  Object: function, array...
   */

  // number
  const num: number = 1;

  // string
  const str: string = "hello";

  // boolean
  const bool: boolean = false;

  // undefined
  let animal: undefined; // 사용하지 않음 ❌
  let dog: number | undefined;
  dog = undefined;
  dog = 5;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; // 사용하지 않음 ❌
  let person2: string | null;

  // unknown : 특정 타입을 지정하지 않음, 가능하면 사용하지 않음 ❌
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  // any : 아무 변수나 담음, 가능하면 사용하지 않음 ❌
  let anything: any = 0;
  anything = "hello";

  // void: 아무 값도 반환하지 않음
  function print(): void {
    console.log("hello");
  }
  let unusuable: void = undefined; // ❌

  // never: 반환을 하지 않음
  function throwError(message: string): never {
    // message => server(log)
    throw new Error(message);
  }
  let neverEnding: never; // ❌

  // object
  let obj: object; // ❌
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "billy" });
  acceptSomeObject({ animal: "dog" });
}
