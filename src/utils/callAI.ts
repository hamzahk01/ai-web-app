export const callAI = async (text: string) => {
  const res = await fetch('https://YOUR_N8N_WEBHOOK_URL', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text })
  });

  if (!res.ok) throw new Error('Failed to call AI');

  const data = await res.json();
  return data;
};
