import currecncyListActionTypes from "./currencylist.type";
import currencyListActionTypes from "./currencylist.type";
import { v4 as uuidv4 } from "uuid";
import { currencySuccess, addCurrencyToList } from "./currencylist.utils";

const initialState = {
  currencies: [],
  rates: [],
  rate: "",
  currency: "USD",
  favouriteList: [],
  id: uuidv4(),
  isPending: false,
  error: "",
  result: ""
};
export const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case currecncyListActionTypes.REQUEST_RATES_PENDING:
      return {
        ...state,
        isPending: true
      };

    case currecncyListActionTypes.REQUEST_RATES_SUCCESS:
      return {
        ...state,
        isPending: false,
        currencies: currencySuccess(state.currencies, action.payload),
        rates: action.payload
      };
    case currecncyListActionTypes.REQUEST_RATES_FAILED:
      return {
        ...state,
        isPending: false,
        error: action.payload
      };
    case currencyListActionTypes.ADD_CURRENCY:
      return {
        ...state,
        favouriteList: addCurrencyToList(
          state.favouriteList,
          state.rates,
          action.payload
        )
      };
    case currencyListActionTypes.REMOVE_CURRENCY:
      return {
        ...state,
        favouriteList: state.favouriteList.filter(
          item => item.id !== action.payload
        )
      };
    case currencyListActionTypes.CLEAR_CURRENCY:
      return {
        ...state,
        favouriteList: []
      };
    case currencyListActionTypes.HANDLE_CHANGE:
      return {
        ...state,
        currency: action.payload
      };
    default:
      return state;
  }
};
