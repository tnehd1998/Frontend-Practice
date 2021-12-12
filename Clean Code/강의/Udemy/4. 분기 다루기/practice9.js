// 9. Default Case 고려하기

// 안전하고 확장성이 높은 코드를 작성하기 위해 Default값을 설정해주는게 좋음

// Example 1

function sum(x, y) {
  return x + y;
}

function fixedSum(x, y) {
  x = x || 1;
  y = y || 1;

  return x + y;
}

// Example 2

const Root = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/welcome" component={Welcome} />
    </Switch>
  </Router>
);

const FixedRoot = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/welcome" component={Welcome} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
