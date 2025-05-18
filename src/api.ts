// src/api.ts

export const fetchAnalysis = async (query: string) => {
  const res = await fetch('http://localhost:5000/api/analysis', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  });

  if (!res.ok) throw new Error('Failed to fetch analysis');
  return await res.json();
};
