import { useState } from 'react';

const ChatInput = ({ onSubmit }: { onSubmit: (query: string) => void }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = () => {
    if (query.trim()) onSubmit(query.trim());
  };

  return (
    <div className="flex flex-col gap-2 mb-6">
      <input
        type="text"
        className="border p-2 rounded"
        placeholder="e.g. Analyze Wakad"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSubmit} className="bg-blue-600 text-white p-2 rounded">
        Submit
      </button>
    </div>
  );
};

export default ChatInput;
