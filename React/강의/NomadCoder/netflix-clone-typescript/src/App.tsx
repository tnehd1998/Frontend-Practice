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
        <Route path="/tv" component={TV} />
        <Route path="/search" component={Search} />
        <Route path={["/", "/movies/:movieId"]} component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
