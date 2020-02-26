import React from "react";
import "./FavouriteCurrency.scss";

const FavouriteCurrency = ({ id, currency, rate, removeCurrency }) => {
  return (
    <React.Fragment>
      <li className="item" key={id}>
        <span className="left-push">{currency}</span>
        <span className="right-push">{rate}</span>
        <span className="remove-item" onClick={() => removeCurrency(id)}>
          {" "}
          &#10060;
        </span>
      </li>
    </React.Fragment>
  );
};

export default FavouriteCurrency;
