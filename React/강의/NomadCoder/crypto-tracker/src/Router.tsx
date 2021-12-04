import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

interface IRouterProps {}

const Router = ({}: IRouterProps) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Coins />
        </Route>
        <Route path="/:coinId">
          <Coin />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
