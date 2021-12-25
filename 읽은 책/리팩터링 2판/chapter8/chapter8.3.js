// 8.3 문장을 함수로 옮기기

result.push(`<p>제목: ${person.photo.title}</p>`);
result.concat(photoData(person.photo));

function photoData(aPhoto) {
  return [
    `<p>위치: ${aPhoto.location}</p>`,
    `<p>날짜: ${aPhoto.date.toDateString()}</p>`,
  ];
}

result.concat(fixedPhotoData(person.photo));

function fixedPhotoData(aPhoto) {
  return [
    `<p>제목: ${aPhoto.title}</p>`,
    `<p>위치: ${aPhoto.location}</p>`,
    `<p>날짜: ${aPhoto.date.toDateString()}</p>`,
  ];
}

// 📌 배경

// 추후 반복되는 부분에서 무언가 수정할 일이 생겼을 때 단 한곳만 수정하면 된다.

// 📌 절차

// 1. 반복 코드가 함수 호출 부분과 멀리 떨어져 있다면 문장 슬라이드하기를 적용해 근처로 옮긴다.
// 2. 타깃 함수를 호출하는 곳이 한 곳뿐이면, 단순히 소스 위치에서 해당 코드를 잘라내어 피호출 함수로
// 복사하고 테스트한다. 이 경우라면 나머지 단계는 무시한다.
// 3. 호출자가 둘 이상이면 호출자 중 하나에서 "타깃 함수 호출 부분과 그 함수로 옮기려는 문장들을 함께"
// 다른 함수로 추출한다. 추출한 함수에 기억하기 쉬운 임시 이름을 지어준다.
// 4. 다른 호출자 모두가 방금 추출한 함수를 사용하도록 수정한다. 하나씩 수정할 때마다 테스트한다.
// 5. 모든 호출자가 새로운 함수를 사용하게 되면 원래 함수를 새로운 함수 안으로 인라인한 후
// 원래 함수를 제거한다.
// 6. 새로운 함수의 이름을 원래 함수의 이름으로 바꿔준다.
