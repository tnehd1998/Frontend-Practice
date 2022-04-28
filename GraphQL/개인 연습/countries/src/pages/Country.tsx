import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router";

const GET_COUNTRY = gql`
  query GetCountry($countryCode: ID!) {
    country(code: $countryCode) {
      name
      native
      capital
      emoji
      currency
    }
  }
`;

interface ICountryInfo {
  name: string;
  native: string;
  capital: string;
  emoji: string;
  currency: string;
}

interface ICountry {
  country: ICountryInfo;
}

const Country = () => {
  const { countryCode } = useParams<{ countryCode: string }>();
  const { data, loading, error } = useQuery<ICountry>(GET_COUNTRY, {
    variables: { countryCode },
  });

  console.log(data);

  if (loading || error) {
    return <p>{error ? error.message : "Loading..."}</p>;
  }

  console.log(data);

  return (
    <div>
      {data?.country ? (
        <div>
          <h1>{data.country.name}</h1>
          <h1>{data.country.native}</h1>
          <h1>{data.country.capital}</h1>
          <h1>{data.country.emoji}</h1>
          <h1>{data.country.currency}</h1>
        </div>
      ) : null}
    </div>
  );
};

export default Country;
