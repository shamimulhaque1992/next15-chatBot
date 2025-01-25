# AI Chat Application

This is a small AI-powered chat application built with Next.js 15 (App Router), Tailwind CSS, ShadCN UI components, and TypeScript. It integrates with HuggingFace's API to provide AI responses in a conversational format.

### Implementation Overview


## Features

- **Real-time Chat**: Users can send messages and receive AI-generated responses.
- **Typing Indicator**: Displays an indicator while the AI processes a response.
- **Reusable Hooks**: Logic for managing chat messages is encapsulated in a custom hook, `useChat`, to maintain clean and modular code.
- **Responsive Design**: The app is styled using Tailwind CSS for a modern and responsive user interface.

### Key Components
1. **`useChat` Hook**: 
   - Manages chat state (`messages` array) and communication with Hugging Face AI via `fetchHuggingFaceResponse`.
   - Handles both user messages and AI responses in a reusable, isolated manner.

2. **Chat Components**:
   - `ChatWindow`: Main layout that combines the chat area, sidebar, and message input.
   - `MessageBubble`: Displays individual chat messages with sender information.
   - `TypingIndicator`: Shows a loading indicator while waiting for AI responses.
   - `MessageInput`: Input field for users to type and send messages.

3. **AI Response Handling**:
   - AI responses are fetched using the Hugging Face API via a utility function `fetchHuggingFaceResponse`.

### Workflow
1. User sends a message via the `MessageInput` component.
2. The message is passed to the `sendMessage` function in the `useChat` hook.
3. `sendMessage` updates the chat state with the user's message, fetches the AI response, and appends the response to the chat history.
4. The `ChatWindow` component renders the updated messages in real-time.

## Tech Stack

- **Frontend**: Next.js (App Router)
- **Styling**: Tailwind CSS, ShadCN UI components
- **AI Logic**: HuggingFace API (text-davinci-003 model)
- **Other Libraries**: Fetch for API calls
- **TypeScript** for type safety

## Setup

### 1. Clone the repository:
```bash
git clone https://github.com/shamimulhaque1992/next15-chatBot.git
cd ai-chat-app
```
### 2. Install dependencies::
```bash
npm install
```
### 3. Set up environment variables:
```bash
NEXT_PUBLIC_HUGGINGFACE_API_KEY=your_hugging_face_api_key
```
### 4. Run the project locally:
```bash
npm run dev
The app will be available at http://localhost:${PORT}.
```
   
This should be the full setup and ready for deployment! If you need anything else, feel free to ask.


