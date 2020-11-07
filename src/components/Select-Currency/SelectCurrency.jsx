import React from "react";
import FavouriteCurrency from "../Favourite-Currency/FavouriteCurrency";
import { connect } from "react-redux";
import "./SelectCurrency.scss";

const SelectCurrency = ({ favouriteList ,isOpen}) => {
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
              isOpen={isOpen}
            />
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ currencylist: { favouriteList,isOpen } }) => ({
  favouriteList,
  isOpen
});

export default connect(mapStateToProps)(SelectCurrency);
