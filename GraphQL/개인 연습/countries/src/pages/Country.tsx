import React from "react";
import { useParams } from "react-router";

const Country = () => {
  const { countryCode } = useParams<{ countryCode: string }>();

  return <div>{countryCode}</div>;
};

export default Country;
