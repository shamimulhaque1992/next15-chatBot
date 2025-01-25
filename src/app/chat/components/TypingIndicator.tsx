export default function TypingIndicator() {
  return (
    <div className="flex space-x-2 animate-pulse">
      <div className="h-2 w-2 bg-gray-300 rounded-full"></div>
      <div className="h-2 w-2 bg-gray-300 rounded-full"></div>
      <div className="h-2 w-2 bg-gray-300 rounded-full"></div>
    </div>
  );
}
