import { useState } from 'react';
import './App.css';
import ChatInput from './components/ChatInput';
import SummaryCard from './components/SummaryCard';
import ChartView from './components/ChartView';
import DataTable from './components/DataTable';
import { fetchAnalysis } from './api';

type BackendRow = {
  year: number;
  city: string;
  ["final location"]: string;
  loc_lat: number;
  loc_lng: number;
  "flat - weighted average rate": number | null;
  "flat total": number | null;
  "total carpet area supplied (sqft)": number | null;
};

type Row = {
  year: number;
  area: string;
  price: number | null;
  demand: number | null;
  size: number | null;
};

type ChartPoint = {
  year: number;
  value: number;
};

function App() {
  const [summary, setSummary] = useState('');
  const [chart, setChart] = useState<ChartPoint[]>([]);
  const [table, setTable] = useState<Row[]>([]);

  const handleQuery = async (query: string) => {
    try {
      const res = await fetchAnalysis(query);
      setSummary(res.summary);
      setChart(res.chartData);
      setTable(
        (res.table as BackendRow[]).map((item) => ({
          year: item.year,
          area: item["final location"],
          price: item["flat - weighted average rate"] ?? null,
          demand: item["flat total"] ?? null,
          size: item["total carpet area supplied (sqft)"] ?? null,
        }))
      );
    } catch (err) {
      console.error('Error:', err);
      alert('Failed to get analysis. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-white py-10 px-4 sm:px-6 lg:px-8">
      {/* Container */}
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">
        {/* Header with logo and title */}
        <header className="flex items-center mb-8">
          <div className="flex-shrink-0 mr-4">
            {/* Replace below with your actual logo or SVG */}
            <svg
              className="h-12 w-12 text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10h4l3 8 4-16 3 8h4"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900">Real Estate Analysis Chatbot</h1>
        </header>

        {/* Chat input box */}
        <div className="mb-8">
          <ChatInput onSubmit={handleQuery} />
        </div>

        {/* Summary card */}
        {summary && (
          <div className="mb-8">
            <SummaryCard summary={summary} />
          </div>
        )}

        {/* Chart view */}
        {chart.length > 0 && (
          <div className="mb-8  bg-white ">
            <ChartView data={chart} />
          </div>
        )}

        {/* Data table */}
        {table.length > 0 && (
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <DataTable rows={table} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
