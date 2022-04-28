import { useQuery, gql } from "@apollo/client";
import { useNavigate } from "react-router";

const LIST_COUNTRIES = gql`
  {
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
  const { data, loading, error } = useQuery<ICountries>(LIST_COUNTRIES);
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
            <div onClick={() => onClickCountry(country.code)}>
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
