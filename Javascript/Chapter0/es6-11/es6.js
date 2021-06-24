// Shorthand property names
// key와 value가 같을때는 해당 작업을 다음과 같이 간추릴수 있음
{
  const billy1 = {
    name: "Billy",
    age: "24",
  };

  const name = "Billy";
  const age = "24";

  // 기존에 쓰던 방식
  const billy2 = {
    name: name,
    age: age,
  };

  // 위와같은 객체를 아래와 같이 표현 가능
  const billy3 = {
    name,
    age,
  };
}

// Destructuring Assignment

{
  // object
  const student = {
    name: "Billy",
    level: 1,
  };

  // Example 1.
  // 기존에 쓰던 방식
  {
    const name = student.name;
    const level = student.level;
    console.log(name, level);
  }

  // 위와같은 표현을 다음과 같이 사용 가능
  {
    const { name, level } = student;
    console.log(name, level);

    // Example 2.
    // 객체 안의 내용의 이름을 바꾸고 싶을때 다음과 같이 사용
    const { name: studentName, level: studentLevel } = student;
    console.log(studentName, studentLevel);
  }

  // array
  const animals = ["🐶", "🐷"];

  // Example 3.
  // 기존에 쓰던 방식
  {
    const first = animals[0];
    const second = animals[1];
    console.log(first, second);
  }

  // 위와같은 표현을 다음과 같이 사용 가능
  {
    const [first, second] = animals;
    console.log(first, second);
  }
}

// Spread Syntax
// 포인터 개념으로 특정 값을 받는것이 아니라 주소값을 복사함

{
  const obj1 = { key: "key1" };
  const obj2 = { key: "key2" };
  const array = [obj1, obj2];

  // array copy
  const arrayCopy = [...array];
  console.log(array, arrayCopy);

  const arrayCopy2 = [...array, { key: "key3" }];
  console.log(arrayCopy2);

  // object copy
  const obj3 = { ...obj1 };
  console.log(obj3);

  // array concatenation
  const fruits1 = ["🍏", "🍎"];
  const fruits2 = ["🍐", "🍊"];
  const fruits = [...fruits1, ...fruits2];
  console.log(fruits);

  // object merge
  const dog1 = { dog: "🐕" };
  const dog2 = { dog: "🐩" };
  const dog = { ...dog1, ...dog2 };
  console.log(dog);
}

// Default parameters

{
  // 기존에 쓰던 방법
  {
    function printMessage(message) {
      if (message == null) {
        message = "default message";
      }
      console.log(message);
    }

    printMessage("hello");
    printMessage();
  }

  // 위와 같은 표현
  {
    function printMessage(message = "default message") {
      console.log(message);
    }

    printMessage("hello");
    printMessage();
  }
}

// Ternary Operator

{
  const isCat = true;

  // 기존에 쓰던 방법
  {
    let component;
    if (isCat) {
      component = "🐱";
    } else {
      component = "🐶";
    }
    console.log(component);
  }

  // 위와 같은 표현 방식
  {
    const component = isCat ? "🐱" : "🐶";
    console.log(component);
  }
}

// Template Literals

{
  const weather = "🌤";
  const temperature = "16";

  // 기존에 쓰던 방식
  console.log(
    "Today weather is " + weather + " and temperature is " + temperature
  );

  // 위와 같은 의미
  console.log(`Today weather is ${weather} and temperature is ${temperature}`);
}
