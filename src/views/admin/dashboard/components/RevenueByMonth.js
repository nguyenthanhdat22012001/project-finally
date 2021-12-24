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

const labels = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'];


RevenueByMonth.propTypes = {
  revenueStoresByMonth: PropTypes.array,
}
RevenueByMonth.defaultProps = {
  revenueStoresByMonth: null,
}

export default function RevenueByMonth(props) {
  const { revenueStoresByMonth } = props;
  const data = {
    labels: labels,
    datasets: revenueStoresByMonth ? revenueStoresByMonth : [],
  };

  return <Bar options={options} data={data} />;
}