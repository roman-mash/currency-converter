const formatListForConverterSelect = (list) => {
  const result = Object.keys(list).reduce((acc, key) => {
    return [...acc, { value: key, label: key.toUpperCase() }];
  }, []);
  return result;
};

const formatRatesForList = (rates) => {
  const ratesFormated = Object.entries(rates).reduce((result, [key, value]) => {
    return [
      ...result,
      {
        code: key,
        rate: value,
      },
    ];
  }, []);
  return ratesFormated;
};

const formatDataForChart = (data, code) => {
  let formatedData = {
    labels: [],
    ratesData: [],
  };
  Object.entries(data).forEach(([key, value]) => {
    const formData = new Date(key);
    formatedData.labels.push(formData.toLocaleDateString());
    formatedData.ratesData.push(value[code]);
  });
  return formatedData;
};

const formatListForSelectBase = (list) => {
  const result = Object.entries(list).reduce((acc, [key, value]) => {
    return [...acc, { value: key, label: `${key} - ${value.description}` }];
  }, []);
  return result;
};

export {
  formatListForConverterSelect,
  formatRatesForList,
  formatDataForChart,
  formatListForSelectBase,
};
