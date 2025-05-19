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
        label: 'Average Price (₹/sqft)',
        data: data.map((d) => d.value),
        borderColor: '#2563eb', // Tailwind blue-600
        backgroundColor: 'rgba(37, 99, 235, 0.1)', // blue-600 with opacity
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#1f2937', // gray-800
        },
      },
      title: {
        display: true,
        text: 'Price Trend Over Time',
        color: '#1f2937',
        font: {
          size: 18,
        },
      },
      tooltip: {
        backgroundColor: '#f9fafb',
        titleColor: '#111827',
        bodyColor: '#374151',
        borderColor: '#d1d5db',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        ticks: { color: '#6b7280' }, // gray-500
        grid: {
          color: '#e5e7eb', // gray-200
        },
      },
      y: {
        ticks: { color: '#6b7280' },
        grid: {
          color: '#e5e7eb',
        },
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <Line key={JSON.stringify(chartData)} data={chartData} options={options} />
    </div>
  );
};

export default ChartView;
