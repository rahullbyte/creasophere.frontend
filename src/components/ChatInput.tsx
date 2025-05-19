import { useState } from 'react';

type ChatInputProps = {
  onSubmit: (query: string) => void;
};

const ChatInput = ({ onSubmit }: ChatInputProps) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSubmit(input.trim());
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        className="flex-grow border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Ask something about real estate, e.g. 'Analyze Wakad area'"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-5 py-2 rounded-r-md hover:bg-blue-700 transition"
      >
        Analyze
      </button>
    </form>
  );
};

export default ChatInput;
