import React from "react";
import { connect } from "react-redux";
import "./FavouriteList.scss";
import SelectCurrency from "../Select-Currency/SelectCurrency";
import {
  handleChange,
  addCurrency,
  clearCurrency
} from "../../redux/currencylist/currencylist.actions";
import { v4 as uuidv4 } from "uuid";

const FavouriteList = ({
  currencies,
  handleChange,
  currency,
  addCurrency,
  clearCurrency,
  id
}) => {
  console.log("currencies", currencies);
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

      <SelectCurrency />

      <div className="btn-item">
        <button
          type="submit"
          className="btn green"
          onClick={() =>
            addCurrency({
              id: uuidv4(),
              currency: currency
            })
          }
        >
          Add Item
        </button>
        <button
          type="submit"
          className="btn red"
          onClick={() => clearCurrency()}
        >
          Clear Item
        </button>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = ({
  currencylist: { currency, currencies, rate, id, favouriteList }
}) => ({
  currency,
  currencies,
  id,
  favouriteList
});
const mapDispatchToProps = dispatch => ({
  handleChange: event => dispatch(handleChange(event.target.value)),
  addCurrency: item => dispatch(addCurrency(item)),
  clearCurrency: () => dispatch(clearCurrency())
});
export default connect(mapStateToProps, mapDispatchToProps)(FavouriteList);
