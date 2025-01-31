import React, { useState, useEffect } from "react";

const ChatApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hello! How can I assist you with your banking needs today?" },
  ]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = async () => {
    if (input.trim() === "") return;

    const newUserMessage = { sender: "user", text: input };
    setMessages([...messages, newUserMessage]);
    setInput("");
    setIsThinking(true);

    try {
      const response = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        const errorData = await response.json(); // Try to get error details from the server
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`); // Use more specific error message
      }

      const data = await response.json();
      setMessages(prevMessages => [...prevMessages, { sender: "ai", text: data.response }]); // Use functional update
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setMessages(prevMessages => [...prevMessages, { sender: "ai", text: "Error communicating with the AI." }]); // User-friendly error message
    } finally {
      setIsThinking(false);
    }
  };

  return (
    <div>
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 bg-indigo-600 text-white p-4 rounded-full shadow-xl hover:bg-indigo-700 transition-colors duration-300 z-50"
      >
        💬
      </button>

      {/* Sidebar Chat Window */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-gray-900 shadow-2xl transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-500 ease-in-out z-40 rounded-l-lg border-l-4 border-indigo-500`}
      >
        <div className="p-4 border-b border-white/10 flex justify-between items-center">
          <h3 className="text-white font-semibold text-lg">AI Assistant</h3>
          <button onClick={toggleChat} className="text-gray-400 hover:text-white transition-colors duration-300">✖</button>
        </div>

        {/* Chat Messages */}
        <div className="h-[75vh] overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div className="bg-white/10 rounded-lg p-3 max-w-[80%] text-white text-sm shadow-md break-words">{msg.text}</div> {/* Added break-words */}
            </div>
          ))}
          {isThinking && (
            <div className="flex justify-start items-center">
              <div className="bg-white/10 rounded-lg p-3 max-w-[80%] text-white text-sm shadow-md animate-pulse">
                🤖 Thinking...
              </div>
            </div>
          )}
        </div>

        {/* Input Field */}
        <div className="p-4 border-t border-white/10 flex items-center bg-gray-800"> {/* Removed backdrop-blur */}
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" // Changed focus ring color
          />
          <button
            onClick={sendMessage}
            className="ml-2 bg-indigo-500 hover:bg-indigo-600 text-white p-3 rounded-full shadow-lg transition-colors duration-300" // Changed button styling
          >
            ➤
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;