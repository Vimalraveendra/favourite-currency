import React from "react";
import { removeCurrency } from "../../redux/currencylist/currencylist.actions";
import { connect } from "react-redux";

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

const mapDispatchToProps = dispatch => ({
  removeCurrency: id => dispatch(removeCurrency(id))
});
export default connect(null, mapDispatchToProps)(FavouriteCurrency);
