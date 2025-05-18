import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

type ChartDataPoint = {
  year: string | number;
  value: number;
};

type ChartViewProps = {
  data: ChartDataPoint[];
};

const ChartView = ({ data }: ChartViewProps) => {
  const chartData = {
    labels: data.map((d) => d.year),
    datasets: [
      {
        label: 'Price',
        data: data.map((d) => d.value),
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Price Trend Over Time',
      },
    },
  };

  return <Line key={JSON.stringify(chartData)} data={chartData} options={options} />;
};

export default ChartView;
