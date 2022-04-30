import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router";

const ONE_FRUIT = gql`
  query oneFruit($id: ID!) {
    fruit(id: $id) {
      id
      scientific_name
      tree_name
      fruit_name
      family
    }
  }
`;

interface IFruitInfo {
  id: string;
  scientific_name: string;
  tree_name: string;
  fruit_name: string;
  family: string;
}

interface IFruit {
  fruit: IFruitInfo;
}

const Fruit = () => {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useQuery<IFruit>(ONE_FRUIT, {
    variables: { id },
  });

  if (loading || error) {
    return <p>{error ? error.message : "Loading..."}</p>;
  }

  return (
    <div>
      <h1>{data?.fruit.fruit_name}</h1>
      <div>
        <p>ID : {data?.fruit.id}</p>
        <p>Scientific Name : {data?.fruit.scientific_name}</p>
        <p>Tree Name : {data?.fruit.tree_name}</p>
        <p>Family : {data?.fruit.family}</p>
      </div>
    </div>
  );
};

export default Fruit;
