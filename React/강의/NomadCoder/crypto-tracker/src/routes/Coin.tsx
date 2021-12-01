import { useParams } from "react-router";

interface RouteParams {
  coinId: string;
}

const Coin = () => {
  const { coinId } = useParams<RouteParams>();
  return <div>Coin: {coinId}</div>;
};

export default Coin;
