// 11.4 객체 통째로 넘기기

const low = aRoom.daysTempRange.low;
const high = aRoom.daysTempRange.high;
if (aPlan.withinRange(low, high)) return;

if (aPlan.withinRange(aRoom.daysTempRange)) return;

// 📌 배경

// 레코드를 통째로 넘기면 변화에 대응하기 쉬우며 로직 중복도 없앨 수 있다.

// 📌 절차

// 1. 매개변수들을 원하는 형태로 받는 빈 함수를 만든다.
// 2. 새 함수의 본문에서는 원래 함수를 호출하도록 하며, 새 매개변수와 원래 함수의 매개변수를 매핑한다.
// 3. 정적 검사를 수행한다.
// 4. 모든 호출자가 새 함수를 사용하게 수정한다. 하나씩 수정하며 테스트하자.
// 5. 호출자를 모두 수정했다면 원래 함수를 인라인한다.
// 6. 새 함수의 이름을 적절히 수정하고 모든 호출자에 반영한다.
