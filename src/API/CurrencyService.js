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
        places: 4,
      },
    });
    return response;
  }
  static async getCurrencyHistoryByCode(base, start_date, end_date, symbols) {
    const response = await axios.get(
      'https://api.exchangerate.host/timeseries',
      {
        params: {
          start_date,
          end_date,
          base,
          symbols,
          places: 4,
        },
      }
    );
    return response;
  }
  static async getConvertResult(from, to, amount) {
    const response = await axios.get('https://api.exchangerate.host/convert', {
      params: {
        from,
        to,
        amount,
        places: 2,
      },
    });
    return response;
  }
}
