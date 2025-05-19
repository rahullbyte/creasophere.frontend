// src/api.ts

export const fetchAnalysis = async (query: string) => {
  const res = await fetch('https://creasophere-backend.onrender.com/api/analysis', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  });

  if (!res.ok) throw new Error('Failed to fetch analysis');
  return await res.json();
};
