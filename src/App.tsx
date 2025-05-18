import { useState } from 'react'
import './App.css'
import ChatInput from './components/ChatInput';
import SummaryCard from './components/SummaryCard';
import ChartView from './components/ChartView';
import DataTable from './components/DataTable';
import { fetchAnalysis } from './api';

function App() {
  const [summary, setSummary] = useState('');
  const [chart, setChart] = useState([]);
  const [table, setTable] = useState([]);

  const handleQuery = async (query: string) => {
    try {
      const res = await fetchAnalysis(query);
      setSummary(res.summary);
      setChart(res.chartData);
      setTable(res.table);
    } catch (err) {
      console.error('Error:', err);
      alert('Failed to get analysis. Please try again.');
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Real Estate Analysis Chatbot</h1>
      <ChatInput onSubmit={handleQuery} />
      {summary && <SummaryCard summary={summary} />}
      {chart.length > 0 && <ChartView data={chart} />}
      {table.length > 0 && <DataTable rows={table} />}
    </div>
  );
}

export default App;
