"use client";
import { useChat } from "@/hooks/useChat";
// Update with the correct path
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";
import TypingIndicator from "./TypingIndicator";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ChatWindow() {
  const { messages, sendMessage } = useChat();
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;

    setIsTyping(true);
    await sendMessage(message);
    setIsTyping(false);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 p-4 flex flex-col space-y-4">
        <h1 className="text-xl font-bold">ChatBot</h1>
        <Button className="w-full rounded-lg">New Chat</Button>
        <div className="flex-grow overflow-y-auto space-y-2">
          {/* Mock Chat History */}
          <div className="p-2 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600">
            Chat 1
          </div>
          <div className="p-2 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600">
            Chat 2
          </div>
        </div>
        <Button variant="destructive" className="w-full rounded-lg">
          Clear Chats
        </Button>
      </div>

      {/* Chat Area */}
      <div className="flex-grow flex flex-col">
        <div className="flex-grow overflow-y-auto p-4 space-y-4">
          {messages.map((msg, index) => (
            <MessageBubble key={index} sender={msg.sender} text={msg.text} />
          ))}
          {isTyping && <TypingIndicator />}
        </div>
        <div className="flex w-full justify-center items-center mb-10">
          <MessageInput onSend={handleSendMessage} />
        </div>
      </div>
    </div>
  );
}
