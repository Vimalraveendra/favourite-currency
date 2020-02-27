import currencyListActionTypes from "./currencylist.type";

export const requestCurrencyRates = () => dispatch => {
  dispatch({ type: currencyListActionTypes.REQUEST_RATES_PENDING });
  fetch(`http://api.nbp.pl/api/exchangerates/tables/a/?format=JSON`)
    .then(response => response.json())
    .then(data => {
      data = data[0].rates;
      dispatch({
        type: currencyListActionTypes.REQUEST_RATES_SUCCESS,
        payload: data
      });
    })
    .catch(error =>
      dispatch({
        type: currencyListActionTypes.REQUEST_RATES_FAILED,
        payload: error
      })
    );
};
export const handleChange = event => ({
  type: currencyListActionTypes.HANDLE_CHANGE,
  payload: event
});

export const addCurrency = item => ({
  type: currencyListActionTypes.ADD_CURRENCY,
  payload: item
});

export const removeCurrency = id => ({
  type: currencyListActionTypes.REMOVE_CURRENCY,
  payload: id
});

export const clearCurrency = () => ({
  type: currencyListActionTypes.CLEAR_CURRENCY
});
