import React from "react";
import FavouriteList from "../Favourite-List/FavouriteList";
import { v4 as uuidv4 } from "uuid";

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
    const { rates, currency } = this.state;

    let result = "";
    rates.filter(item => (item.code === currency ? (result = item.mid) : ""));

    const newItem = {
      id: this.state.id,
      currency: this.state.currency,
      rate: result
    };
    const updatedItems = [...this.state.favouriteList, newItem];
    this.setState({
      favouriteList: updatedItems,
      rate: "",
      id: uuidv4()
    });
  };

  clearCurrency = () => {
    this.setState({
      favouriteList: []
    });
  };

  removeCurrency = id => {
    console.log("id", id);
    console.log("hello");
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
        // let baseValue = "";
        // let convertedValue = "";
        data.forEach(item => {
          currencyresult.push(item.code);
        });
        //   if (item.code === base) {
        //     baseValue = item.mid;
        //     console.log("base", baseValue);
        //   }
        //   if (item.code === convertedTo) {
        //     convertedValue = item.mid;
        //     console.log("value", convertedValue);
        //   }
        //   let result = amount * convertedValue;
        //   console.log("hello", result);
        // });
        this.setState({ currencies: currencyresult, rates: data });
      });
  }

  render() {
    console.log("currencies", this.state.currencies);
    console.log("rates", this.state.rates);
    console.log("currency", this.state.currency);
    console.log("id", this.state.id);
    console.log("favourite", this.state.favouriteList);
    return (
      <div className="currency-list">
        <div>
          <h3>Favourite Currency List </h3>
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
      </div>
    );
  }
}

export default CurrencyList;
