import React from "react";
import FavouriteCurrency from "../Favourite-Currency/FavouriteCurrency";
import "./SelectCurrency.scss";

const SelectCurrency = ({ favouriteList, removeCurrency }) => {
  return (
    <div className="currency-list">
      <ul className="currency-item">
        {favouriteList.map(item => {
          return (
            <FavouriteCurrency
              key={item.id}
              id={item.id}
              currency={item.currency}
              rate={item.rate}
              removeCurrency={removeCurrency}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default SelectCurrency;
