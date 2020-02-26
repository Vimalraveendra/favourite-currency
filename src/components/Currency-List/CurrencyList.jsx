import React from "react";
import FavouriteList from "../Favourite-List/FavouriteList";
import { v4 as uuidv4 } from "uuid";
import "./CurrencyList.scss";

class CurrencyList extends React.Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
      rates: [],
      rate: "",
      currency: "USD",
      favouriteList: [],
      id: uuidv4()
    };
  }

  handleChange = e => {
    this.setState({ currency: e.target.value });
  };

  addCurrency = () => {
    const { rates, currency, favouriteList } = this.state;
    if (favouriteList.some(item => item.currency === currency)) {
      return;
    } else {
      let result = "";

      rates.filter(item => (item.code === currency ? (result = item.mid) : ""));

      const newItem = {
        id: this.state.id,
        currency: this.state.currency,
        rate: result.toFixed(3)
      };
      const updatedItems = [...this.state.favouriteList, newItem];
      this.setState({
        favouriteList: updatedItems,
        rate: "",
        id: uuidv4()
      });
    }
  };

  clearCurrency = () => {
    this.setState({
      favouriteList: []
    });
  };

  removeCurrency = id => {
    const filteredItems = this.state.favouriteList.filter(
      item => item.id !== id
    );
    this.setState({ favouriteList: filteredItems });
  };

  componentDidMount() {
    fetch(`http://api.nbp.pl/api/exchangerates/tables/a/?format=JSON`)
      .then(response => response.json())
      .then(data => {
        data = data[0].rates;
        let currencyresult = [];
        data.forEach(item => {
          currencyresult.push(item.code);
        });

        this.setState({ currencies: currencyresult, rates: data });
      });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <h3 className="title">Favourite Currency List </h3>
        </div>

        <FavouriteList
          currency={this.state.currency}
          currencies={this.state.currencies}
          handleChange={this.handleChange}
          addCurrency={this.addCurrency}
          favouriteList={this.state.favouriteList}
          removeCurrency={this.removeCurrency}
          clearCurrency={this.clearCurrency}
        />
      </React.Fragment>
    );
  }
}

export default CurrencyList;
