export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid messages array' });
    }

    const upstageApiKey = process.env.UPSTAGE_API_KEY;
    if (!upstageApiKey) {
      return res.status(500).json({ error: 'Server missing UPSTAGE_API_KEY' });
    }

    const response = await fetch('https://api.upstage.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${upstageApiKey}`
      },
      body: JSON.stringify({
        model: 'solar-pro3',
        messages: messages
      })
    });

    const data = await response.json();
    
    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('API Chat Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
