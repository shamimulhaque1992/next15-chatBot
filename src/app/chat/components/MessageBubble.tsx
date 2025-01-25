interface MessageBubbleProps {
  sender: 'user' | 'ai';
  text: string;
}

export default function MessageBubble({ sender, text }: MessageBubbleProps) {
  const isUser = sender === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-xs p-4 rounded-xl shadow-md ${
          isUser ? 'bg-blue-500 text-white' : 'bg-gray-700 text-white'
        }`}
      >
        {text}
      </div>
    </div>
  );
}