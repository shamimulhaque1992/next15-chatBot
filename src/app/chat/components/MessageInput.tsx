import { useState } from "react";
import CustomButton from "./CustomButton";

interface MessageInputProps {
  onSend: (message: string) => void;
}

export default function MessageInput({ onSend }: MessageInputProps) {
  const [input, setInput] = useState("");

  const handleSendClick = () => {
    if (input.trim() !== "") {
      onSend(input);
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendClick();
    }
  };

  return (
    <div className="flex justify-center items-center px-6 py-4 bg-gray-800 border-t w-full md:w-10/12 2xl:w-1/2 border-gray-700 rounded-xl">
      <input
        type="text"
        className="flex-grow py-6 bg-gray-800 text-white rounded-l-lg focus:outline-none"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type your message..."
      />
      <CustomButton
        onClick={handleSendClick}
        label="Send"
        className="px-4 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 focus:outline-none"
        disabled={!input.trim()}
      />
    </div>
  );
}
