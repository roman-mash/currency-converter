import CurrencyService from '../API/CurrencyService';
import { uploadList } from '../store/reducers/currencySlice';

export const fetchCurrencyList = () => {
  return async (dispatch) => {
    const response = await CurrencyService.getCurrencyList();
    dispatch(uploadList(response.data.symbols));
  };
};
