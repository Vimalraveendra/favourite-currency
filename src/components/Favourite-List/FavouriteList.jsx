import React from "react";
import "./FavouriteList.scss";
import SelectCurrency from "../Select-Currency/SelectCurrency";
const FavouriteList = ({
  currencies,
  handleChange,
  currency,
  addCurrency,
  favouriteList,
  removeCurrency,
  clearCurrency
}) => {
  return (
    <React.Fragment>
      <div className="select-item">
        <select
          className="options"
          name="currency"
          value={currency}
          onChange={handleChange}
        >
          {currencies.map((currency, index) => (
            <option key={index}>{currency}</option>
          ))}
        </select>
      </div>

      <SelectCurrency
        favouriteList={favouriteList}
        removeCurrency={removeCurrency}
      />

      <div className="btn-item">
        <button type="submit" className="btn green" onClick={addCurrency}>
          Add Item
        </button>
        <button type="submit" className="btn red" onClick={clearCurrency}>
          Clear Item
        </button>
      </div>
    </React.Fragment>
  );
};

export default FavouriteList;
