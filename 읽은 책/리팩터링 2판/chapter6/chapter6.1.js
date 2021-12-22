// 6.1 함수 추출하기

function printOwing(invoice) {
  printBanner();
  let outstanding = calculateOutstanding();

  console.log(`고객명 : ${invoice.customer}`);
  console.log(`채무액 : ${outstanding}`);
}

function fixedPrintOwing(invoice) {
  printBanner();
  let outstanding = calculateOutstanding();
  printDetails(outstanding);

  function printDetails(outstanding) {
    console.log(`고객명 : ${invoice.customer}`);
    console.log(`채무액 : ${outstanding}`);
  }
}

// 📌 배경

// 코드 조각을 찾아 무슨 일을 하는지 파악한 다음, 독립된 함수로 추출하고 목적에 맞는 이름을 붙인다.

// 함수를 짧게 만들면 함수 호출이 많아져서 성능이 느려질까 걱정하는 사람도 있다.
// 함수가 짧으면 캐싱하기가 더 쉽기 때문에 컴파일러가 최적화하는 데 유리할 때가 많다.

// 짧은 함수의 이점은 이름을 잘 지어야만 발휘되므로 이름 짓기에 특별히 신경 써야 한다.

// 📌 절차

// 1. 함수를 새로 만들고 목적을 잘 드러내는 이름을 붙인다.
// 2. 추출할 코드를 원본 함수에서 복사하여 새 함수에 붙여넣는다.
// 3. 추출한 코드 중 원본 함수의 지역 변수를 참조하거나 추출한 함수의 유효범위를 벗어나는
// 변수는 없는지 검사한다. 있다면 매개변수로 전달한다.
// 4. 변수를 다 처리했다면 컴파일한다.
// 5. 원본 함수에서 추출한 코드 부분을 새로 만든 함수를 호출하는 문장으로 바꾼다.
// 6. 테스트한다.
// 7. 다른 코드에 방금 추출한 것과 똑같거나 비슷한 코드가 없는지 살핀다.
// 있다면 방금 추출한 새 함수를 호출하도록 바꿀지 검토한다.
