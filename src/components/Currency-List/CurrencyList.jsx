import React from "react";
import FavouriteList from "../Favourite-List/FavouriteList";
import { connect } from "react-redux";
import "./CurrencyList.scss";

import { requestCurrencyRates } from "../../redux/currencylist/currencylist.actions";

class CurrencyList extends React.Component {
  componentDidMount() {
    this.props.getCurrency();
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <h3 className="title">Favourite Currency List </h3>
        </div>

        <FavouriteList />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getCurrency: () => dispatch(requestCurrencyRates())
});
export default connect(null, mapDispatchToProps)(CurrencyList);
