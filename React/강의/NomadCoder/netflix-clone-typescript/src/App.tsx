import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./routes/Home";
import Search from "./routes/Search";
import TV from "./routes/TV";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tv" component={TV} />
        <Route exact path="/search" component={Search} />
      </Switch>
    </Router>
  );
}

export default App;
