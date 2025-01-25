const API_KEY = process.env.NEXT_PUBLIC_HUGGINGFACE_API_KEY;

export async function fetchHuggingFaceResponse(userMessage: string) {
  try {
    const response = await fetch('https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: userMessage,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch response from Hugging Face');
    }

    const data = await response.json();
    console.log(data);
    return data[0]?.generated_text || 'Error: No response generated.';
  } catch (error) {
    console.error('Error fetching response:', error);
    return 'Error: Unable to fetch response.';
  }
}
