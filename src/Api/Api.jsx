import axios from "axios";


export const fetchCurrency = async () => {
  try {
    const {data } = await axios.get(
      `http://api.nbp.pl/api/exchangerates/tables/a/?format=JSON`
    );
return data[0].rates;
   
  } catch (error) {
    return error;
  }
};

