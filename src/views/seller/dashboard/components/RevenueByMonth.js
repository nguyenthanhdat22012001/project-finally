import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';
import PropTypes from 'prop-types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart',
    },
  },
};

RevenueByMonth.propTypes = {
  revenueByMonth: PropTypes.object,
}
RevenueByMonth.defaultProps = {
  revenueByMonth: null,
}

export default function RevenueByMonth(props) {
  const { revenueByMonth } = props;

  const data = {
    labels: revenueByMonth?.labels,
    datasets: [
      {
        label: 'Doanh thu theo tháng',
        data: revenueByMonth?.datasets,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return <Bar options={options} data={data} />;
}