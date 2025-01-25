
import { fetchHuggingFaceResponse } from '@/app/utils/huggingFaceAiApi';
import { useState } from 'react';

interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
}

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const sendMessage = async (userMessage: string) => {
    if (!userMessage.trim()) return;

    const newUserMessage: ChatMessage = { sender: 'user', text: userMessage };
    setMessages((prev) => [...prev, newUserMessage]);

    const aiResponse = await fetchHuggingFaceResponse(userMessage);
    setMessages((prev) => [...prev, { sender: 'ai', text: aiResponse }]);
  };

  return {
    messages,
    sendMessage,
  };
}
