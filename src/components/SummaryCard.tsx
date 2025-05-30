type summaryProps = {
  summary: string;
};

const SummaryCard = ({ summary }: summaryProps) => (
  <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg shadow-sm">
    <h2 className="text-xl font-semibold text-blue-900 mb-2">Summary</h2>
    <p className="text-gray-800 leading-relaxed">{summary}</p>
    <p className="text-sm text-gray-500 mt-4 italic text-right">Generated by Gemini AI</p>
  </div>
);

export default SummaryCard;
