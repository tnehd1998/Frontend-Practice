import { useQuery, gql } from "@apollo/client";
import React from "react";

const GET_FRUITS = gql`
  query allFruits {
    fruits {
      id
      scientific_name
      fruit_name
      description
      producing_countries {
        country
      }
    }
  }
`;

interface IProducingCountries {
  country: string;
}

interface IFruit {
  id: string;
  scientific_name: string;
  fruit_name: string;
  description: string;
  producing_countries: IProducingCountries[];
}

interface IFruits {
  fruits: IFruit[];
}

const Home = () => {
  const { data, loading, error } = useQuery<IFruits>(GET_FRUITS);

  if (loading || error) {
    return <p>{error ? error.message : "Loading..."}</p>;
  }

  return (
    <div>
      {data?.fruits.map((fruit) => (
        <div
          key={fruit.id}
          style={{
            border: "1px solid black",
            padding: "40px",
            margin: "20px",
            cursor: "pointer",
          }}
        >
          <h1>Fruit Name : {fruit.fruit_name}</h1>
          <h2>Scientific Name : {fruit.scientific_name}</h2>
          <p>Description : {fruit.description}</p>
          <div>
            <h3>Producing Country</h3>
            {fruit.producing_countries.map((country) => (
              <p>{country.country}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
