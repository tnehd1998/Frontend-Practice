import React from "react";
import { Lang } from "./context";
import Screen from "./Screen";
import translations from "./translations";

const App = () => {
  return (
    <Lang defaultLang="en" translations={translations}>
      <Screen />
    </Lang>
  );
};

export default App;
