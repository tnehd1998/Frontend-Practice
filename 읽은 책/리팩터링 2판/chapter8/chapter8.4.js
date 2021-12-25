// 8.4 문장을 호출한 곳으로 옮기기

emitPhotoData(outStream, person.photo);

function emitPhotoData(outStream, photo) {
  outStream.write(`<p>제목: ${photo.title}</p>\n`);
  outStream.write(`<p>위치: ${photo.location}</p>\n`);
}

fixedEmitPhotoData(outStream, person.photo);
outStream.write(`<p>위치: ${person.photo.location}</p>\n`);

function fixedEmitPhotoData(outStream, photo) {
  outStream.write(`<p>제목: ${photo.title}</p>\n`);
}

// 📌 배경

// 함수는 프로그래머가 쌓아 올리는 추상화의 기본 빌딩 블록이다.
// 초기에는 응집고 높고 한 가지 일만 수행하던 함수가 어느새 둘 이상의 다른 일을 수행하게 바뀔 수도 있다.
// 그렇기 때문에 상황에 맞게 함수의 경계를 잘 나눠야 한다.

// 📌 절차

// 1. 호출자가 한두 개뿐이고 피호출 함수도 간단히 단순한 상황이면, 피호출 함수의 처음 줄을 잘라내어
// 호출자로 복사해 넣는다. 테스트만 통과하면 이번 리팩터링은 여기서 끝이다.
// 2. 더 복잡한 상황에서는, 이동하지 "않길" 원하는 모든 문장을 함수로 추출한 다음 검색하기 쉬운
// 임시 이름을 지어준다.
// 3. 원래 함수를 인라인한다.
// 4. 추출된 함수의 이름을 원래 함수의 이름으로 변경한다.
