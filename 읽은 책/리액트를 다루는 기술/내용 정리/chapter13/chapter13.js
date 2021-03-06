// 13.1 SPA란?

// SPA는 말 그대로 한 개의 페이지로 이루어진 애플리케이션이라는 의미
// 전통적인 웹 페이지는 여러 페이지로 구성되어 있음

// 요즘은 웹에서 제공되는 정보가 정말 많기 때문에 새로운 화면을 보여 주어야 할때마다
// 서버측에서 모든 뷰를 준비한다면 성능상의 문제가 발생함

// 애플리케이션 내에서 화면 전환이 일어날 때마다 html을 계속 서버에 새로 요청하면
// 사용자의 인터페이스에서 사용하고 있던 상태를 유지하는 것도 번거롭고,
// 바뀌지 않는 부분까지 새로 불러와서 보여 줘어야 하기 때문에 불필요한 로딩이 있어서 비효율적임

// 리액트 같은 라이브러리 혹은 프레임워크를 사용하여 뷰 렌더링을 사용자의 브라우저가 담당하고,
// 우선 어플리케이션을 브라우저에 불러와 실행 시킨 후, 사용자와의 인터랙션이 발생하면
// 필요한 부분만 자바스크립트를 사용하여 업데이트 해줌
// 새로운 데이터가 필요하면 서버 API를 호출하여 필요한 데이터만 새로 불러와 어플리케이션에서 사용가능

// SPA의 경우 서버에서 사용자에게 제공하는 페이지는 한 종류이지만, 해당 페이지에서 로딩된 자바스크립트와
// 현재 사용자 브라우저의 주소 상태에 따라 다양한 화면을 보여 줄 수 있음

// 라우팅 : 다른 주소에 다른 화면을 보여주는 것

// 리액트 라우팅 라이브러리는 react-router, reach-router, next.js등 여러가지가 존재
// react-router : 클라이언트 사이드 렌더링
// next.js : 서버 사이드 렌더링

// 13.1.1 SPA의 단점

// 앱의 규모가 커지면 자바스크립트 파일이 너무 커진다는 것
// 코드 스플리팅을 사용하면 라우트별로 파일들을 나누어서 트래픽과 로딩 속도를 개선할 수 있음

// 리액트 라우터처럼 브라우저에서 자바스크립트를 사용하여 라우팅을 관리하는 것은
// 자바스크립트를 실행하지 않는 일반 크롤러에서는 페이지의 정보를 제대로 수집하지 못한다는 잠재적인 단점이 존재함

// 구글, 네이버, 다음 같은 검색 엔진의 검색 결과에 페이지가 잘 나타나지 않을 수도 있음
// 구글 검색 엔진에서 사용하는 크롤러의 경우 자바스크립트를 실행해 주는 기능이 탑재되어 있기는 하지만,
// 크롤링하는 모든 페이지에서 자바스크립트를 실행하고 있지는 않고, 자바스크립트가 실행될 때까지 페이지가 비어 있기 때문에
// 자바스크립트 파일이 로딩되어 실행되는 짧은 시간 동안 흰 페이지가 나타날 수 있다는 단점도 존재함
// 해당 문제들은 서버 사이트 렌더링을 통해 모두 해결 가능함

// 13.3 Route 하나에 여러 개의 path 설정하기
// Route를 두번 사용하는 대신, path props를 배열로 설정해 주면 여러 경로에서 같은 컴포넌트에 접근 가능
// Ex) <Route path={["/about", "/info"] component={About}}

// 13.4 URL 파라미터와 쿼리

// 13.4.1 URL 파라미터
// URL 파라미터를 사용할 때는 라우트로 사용되는 컴포넌트에서 받아 오는 match라는 객체 안의 params 값을 참조함
// match 객체 안에는 현재 컴포넌트가 어떤 경로 규칙에 의해 보이는지에 대한 정보가 들어 있음

// 13.4.2 URL 쿼리
// 쿼리는 location 객체에 들어 있는 search 값에서 조회할 수 있음
// location 객체는 라우트로 사용된 컴포넌트에게 props로 전달되며, 웹 어플리케이션의 현재 주소에 대한 정보를 지니고 있음

// 쿼리 문자열을 객체로 변환할 때는 qs라는 라이브러리를 사용함

// 13.5 서브 라우트
// 서브 라우트는 라우트 내부에 또 라우트를 정의하는 것을 의미함
// 그냥 라우트로 사용되고 있는 컴포넌트의 내부에 Route 컴포넌트를 또 사용하면 됨

// 13.6 리액트 라우터 부가 기능

// 13.6.1 history
// history 객체는 라우트로 사용된 컴포넌트에 match, location과 함께 전달되는 props중 하나로,
// 이 객체를 통해 컴포넌트 내에 구현하는 메서드에서 라우터 API를 호출할 수 있음

// 13.6.2 withRouter
// withRouter 함수는 HoC(Higher-order Component)이다
// 라우트로 사용된 컴포넌트가 아니어도 match, location, history 객체를 접근할 수 있게 해줌

// 13.6.3 Switch
// Switch 컴포넌트는 여러 Route를 감싸서 그중 일치하는 단 하나의 라우트만을 렌더링시켜줌
// Switch를 사용하면 모든 규칙과 일치하지 않을 때 보여 줄 Not Found 페이지도 구현 가능함

// 13.6.4 NavLink
// NavLink는 Link와 비슷함
// 현재 경로와 Link에서 사용하는 경로가 일치하는 경우 특정 스타일 혹은 CSS 클래스를 적용할 수 있는 컴포넌트
// 스타일을 적용할 때는 activeStyle값을, CSS클래스를 적용할 때는 activeClassName값을 props로 넣어주면 됨

// 라우트에 대한 결론
// 라우트에 따라 필요한 컴포넌트만 불러오고, 다른 컴포넌트는 다른 페이지를 방문하는 등의 필요한 시점에 불러오면 더 효율적이다
// 해당 문제를 해결해주는 기술이 바로 코드 스플리팅이다.
