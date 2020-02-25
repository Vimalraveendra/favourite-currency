import React from "react";
import "./Homepage.scss";
import CurrencyList from "../../components/Currency-List/CurrencyList";

const HomePage = () => {
  return (
    <div className="homepage">
      <CurrencyList />
    </div>
  );
};

export default HomePage;
