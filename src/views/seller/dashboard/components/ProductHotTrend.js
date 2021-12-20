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
    plugins: {
        title: {
            display: false,
            text: 'Chart.js Bar Chart - Stacked',
        },
    },
    responsive: true,
    scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true,
        },
    },
};

const labels = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9','Tháng 10', 'Tháng 11', 'Tháng 12'];


ProductHotTrend.propTypes = {
    revenueProductHotTrend: PropTypes.array,
}
ProductHotTrend.defaultProps = {
    revenueProductHotTrend: null,
}


export default function ProductHotTrend(props) {
    const { revenueProductHotTrend } = props;

    const data = {
        labels: labels,
        datasets: revenueProductHotTrend ? revenueProductHotTrend : [],
    };

    return <Bar options={options} data={data} />;
}