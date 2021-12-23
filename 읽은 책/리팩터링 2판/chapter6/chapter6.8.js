// 6.8 매개변수 객체 만들기

function amountInvoiced(startDate, endDate) {}
function amountReceived(startDate, endDate) {}
function amountOverdue(startDate, endDate) {}

function fixedAmountInvoiced(aDateRange) {}
function fixedAmountReceived(aDateRange) {}
function fixedAmountOverdue(aDateRange) {}

// 📌 배경

// 데이터 뭉치를 데이터 구조로 묶으면 데이터 사이의 관계가 명확해진다는 이점을 얻는다.

// 📌 절차

// 1. 적당한 데이터 구조가 아직 마련되어 있지 않다면 새로 만든다.
// 2. 테스트한다.
// 3. 함수 선언 바꾸기로 새 데이터 구조를 매개변수로 추가한다.
// 4. 테스트한다.
// 5. 함수 호출 시 새로운 데이터 구조 인스턴스를 넘기도록 수정한다. 하나씩 수정할 때마다 테스트한다.
// 6. 기존 매개변수를 사용하던 코드를 새 데이터 구조의 원소로 사용하도록 바꾼다.
// 7. 다 바꿨다면 기존 매개변수를 제거하고 테스트한다.
