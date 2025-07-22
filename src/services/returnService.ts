// riffhi-smartsho/src/services/returnService.ts
const API_BASE = 'https://smartsho-1.onrender.com/api'; // production backend

export async function createReturnRequest(data: any) {
  const res = await fetch(`${API_BASE}/returns`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to create return');
  return res.json();
}
