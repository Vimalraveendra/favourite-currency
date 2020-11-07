
import currencyListActionTypes from "./currencylist.type";
import { currencySuccess, addCurrencyToList } from "./currencylist.utils";

const initialState = {
  currencies: [],
  rates: [],
  rate: "",
  currency: "USD",
  favouriteList: [],
  id: "",
  isPending: false,
  error: "",
  result: "",
  isOpen:false
};
export const currencyReducer = (state = initialState, action) => {
 
  switch (action.type) {
    case currencyListActionTypes.REQUEST_RATES_PENDING:
      return {
        ...state,
        isPending: true
      };

    case currencyListActionTypes.REQUEST_RATES_SUCCESS:
      return {
        ...state,
        isPending: false,
        currencies: currencySuccess(state.currencies, action.payload),
        rates: action.payload
      };
    case currencyListActionTypes.REQUEST_RATES_FAILED:
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
      case currencyListActionTypes.HANDLE_POPUP_WINDOW:
      return {
        ...state,
        isOpen: !state.isOpen,
        id:action.payload
      };
    default:
      return state;
  }
};
