// 8.1 useState
// 함수형 컴포넌트에서 상태를 관리해야 할때 사용되는 Hook

// 8.2 useEffect
// 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook
// componentDidMount와 componentDidUpdate를 합친 형태

// 8.3 useReducer
// 현재 상태, 그리고 업데이트를 위해 필요한 정보를 담은 액션값을 전달받아 새로운 상태를 반환
// redux의 작동원리와 같음

// 8.4 useMemo
// 함수형 컴포넌트 내부에서 발생하는 연산을 최적화할 수 있게 해줌

// 8.5 useCallback
// useMemo와 비슷한 함수이며, 주로 렌더링 성능을 최적화해야 하는 상황에서 사용

// 8.6 useRef
// 함수형 컴포넌트에서 ref를 쉽게 사용할 수 있도록 해줌
// 컴포넌트 로컬 변수를 사용해야 할 때도 useRef를 사용하여 활용 가능
