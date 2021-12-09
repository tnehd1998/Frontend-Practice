import { useLocation } from "react-router";

const Search = () => {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");
  return <div></div>;
};

export default Search;
