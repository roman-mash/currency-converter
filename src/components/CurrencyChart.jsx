import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { formatDataForChart } from '../utils/dataFormatter';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CurrencyChart = ({ data, code }) => {
  const baseCurrency = useSelector((state) => state.currency.base);
  const formatedData = formatDataForChart(data, code);

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `Line chart for ${code}`,
      },
    },
  };

  const dataForChart = {
    labels: formatedData.labels,
    datasets: [
      {
        label: `${baseCurrency.toUpperCase()} - ${code}`,
        data: formatedData.ratesData,
        borderColor: '#002f7d',
        backgroundColor: '#002f7d',
      },
    ],
  };
  return <Line options={options} data={dataForChart} />;
};

export default CurrencyChart;
