export const currencySuccess = (currencies, payload) => {
  payload.forEach(item => currencies.push(item.code));
  return [...currencies];
};

export const addCurrencyToList = (favourite, rates, payload) => {
  if (favourite.some(item => item.currency === payload.currency)) {
    return [...favourite];
  } else {
    let result = "";
    result = rates.filter(item =>
      item.code === payload.currency ? item.mid : ""
    );
    let rate = result[0].mid.toFixed(3);
    return [...favourite, { ...payload, rate }];
  }
};
