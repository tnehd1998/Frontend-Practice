import { useQuery, gql } from "@apollo/client";
import { useNavigate } from "react-router";

const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      name
      code
      capital
      emoji
    }
  }
`;

interface ICountry {
  code: string;
  name: string;
  capital: string;
  emoji: string;
}

interface ICountries {
  countries: ICountry[];
}

const Home = () => {
  const { data, loading, error } = useQuery<ICountries>(GET_COUNTRIES);
  const navigate = useNavigate();

  const onClickCountry = (countryCode: string) => {
    navigate(`/country/${countryCode}`);
  };

  if (loading || error) {
    return <p>{error ? error.message : "Loading..."}</p>;
  }

  return (
    <div>
      {data?.countries.map((country) => (
        <div key={country.code}>
          {country.capital ? (
            <div
              style={{
                border: "1px solid black",
                padding: "10px",
                margin: "10px",
                cursor: "pointer",
              }}
              onClick={() => onClickCountry(country.code)}
            >
              <h1>나라 이름 : {country.name}</h1>
              <h3>수도 : {country.capital}</h3>
              <p>나라 코드 명 : {country.code}</p>
              <h2>{country.emoji}</h2>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Home;
