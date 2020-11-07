import currencyListActionTypes from "./currencylist.type";
import {fetchCurrency } from '../../Api/Api'

export const requestCurrencyStart=()=>({
  type: currencyListActionTypes.REQUEST_RATES_PENDING 
})

export const requestCurrencySuccess = (data)=>({
  type: currencyListActionTypes.REQUEST_RATES_SUCCESS,
  payload: data
})

export const requestCurrencyFailure = error=>({
  type: currencyListActionTypes.REQUEST_RATES_FAILED,
        payload: error
})
export const requestCurrencyRates = () => async(dispatch) => {
  dispatch(requestCurrencyStart())
  // dispatch({ type: currencyListActionTypes.REQUEST_RATES_PENDING });
  // fetch(`http://api.nbp.pl/api/exchangerates/tables/a/?format=JSON`)
  //   .then(response => response.json())
  //   .then(data => {
  //     data = data[0].rates;

  try{
      const data   = await fetchCurrency();
      dispatch(requestCurrencySuccess(data))
      // dispatch({
      //   type: currencyListActionTypes.REQUEST_RATES_SUCCESS,
      //   payload: data
      // });
    // })
  }catch(error ){
       dispatch(requestCurrencyFailure(error))
      // dispatch({
      //   type: currencyListActionTypes.REQUEST_RATES_FAILED,
      //   payload: error
      // })
  }
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
})
 

export const clearCurrency = () => ({
  type: currencyListActionTypes.CLEAR_CURRENCY
});

export const popupWindow= (id)=>({
  type:currencyListActionTypes.HANDLE_POPUP_WINDOW,
  payload:id
})
 

