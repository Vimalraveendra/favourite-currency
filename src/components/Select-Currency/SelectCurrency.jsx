import React from "react";
import FavouriteCurrency from "../Favourite-Currency/FavouriteCurrency";
import { connect } from "react-redux";
import "./SelectCurrency.scss";

const SelectCurrency = ({ favouriteList }) => {
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
            />
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ currencylist: { favouriteList } }) => ({
  favouriteList
});

export default connect(mapStateToProps)(SelectCurrency);
