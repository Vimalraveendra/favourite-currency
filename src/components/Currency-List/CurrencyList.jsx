import React from "react";

class CurrencyList extends React.Component {
  constructor() {
    super();
    this.state = {
      base: "EUR",
      amount: 1,
      convertedTo: "USD",
      currencies: [],
      rates: [],
      result: ""
    };
  }
  componentDidMount() {
    fetch(`http://api.nbp.pl/api/exchangerates/tables/a/today/?format=JSON`)
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
    return (
      <div className="homepage">
        <h1>Favorite Currency</h1>
      </div>
    );
  }
}

export default CurrencyList;
