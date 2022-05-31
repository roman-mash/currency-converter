import axios from 'axios';

export default class CurrencyService {
  static async getCurrencyList() {
    const response = await axios.get('https://api.exchangerate.host/symbols');
    return response;
  }
  static async getCurrencyRates(base) {
    const response = await axios.get('https://api.exchangerate.host/latest', {
      params: {
        base,
        places: 2,
      },
    });
    return response;
  }
}
