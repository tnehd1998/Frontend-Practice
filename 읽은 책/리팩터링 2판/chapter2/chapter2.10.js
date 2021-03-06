// 2.10 리팩터링 자동화

// 현재 다양한 언어에서 자동 리팩터링을 지원하는 도구가 등장함

// 리팩터링을 자동화하는 가장 어설픈 방법은 소스 코드의 텍스트를 직접 조작하는 것이다.

// 자동 리팩터링을 제대로 구현하려면 코드를 텍스트 상태가 아닌,
// 구문 트리(syntax tree)로 해석해서 다뤄야 한다.
// 구문 트리를 조작하는 방식이 코드의 원래 의미를 보존하는 데 훨씬 유리하기 때문이다.
