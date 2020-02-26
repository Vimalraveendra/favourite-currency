import currecncyListActionTypes from "./currencylist.type";
import currencyListActionTypes from "./currencylist.type";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  currencies: [],
  rates: [],
  rate: "",
  currency: "USD",
  favouriteList: [],
  id: uuidv4(),
  isPending: false,
  error: ""
};
export const currencyReducer = (state = initialState, action) => {
  // console.log("reducer", action.payload);
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
        currencies: action.payload
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
        favouriteList: [...state.favouriteList, action.payload]
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
        favouriteList: state.favouriteList.filter(
          favouriteItem => favouriteItem.id !== action.payload
        )
      };

    default:
      return state;
  }
};
