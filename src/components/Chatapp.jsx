import React, { useState, useEffect } from "react";

const ChatApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hello! How can I assist you with your banking needs today?" },
  ]);
  const [input, setInput] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = async () => {
    if (input.trim() === "") return;
    
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    
    try {
      const response = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      
      const data = await response.json();
      setMessages([...newMessages, { sender: "ai", text: data.response }]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
    }
  };

  return (
    <div>
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-xl hover:scale-105 transition-all duration-300 z-50"
      >
        💬
      </button>
      
      {/* Sidebar Chat Window */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-gradient-to-br from-slate-900 to-purple-900 shadow-xl transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 z-40`}
      >
        <div className="p-4 border-b border-white/10 flex justify-between items-center">
          <h3 className="text-white font-semibold">AI Assistant</h3>
          <button onClick={toggleChat} className="text-gray-400 hover:text-white">✖</button>
        </div>
        <div className="h-[80vh] overflow-y-auto p-4 space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div className="bg-white/10 rounded-lg p-3 max-w-[80%] text-white text-sm">
                {msg.text}
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-white/10 flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none"
          />
          <button onClick={sendMessage} className="ml-2 bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg hover:scale-105 transition-all duration-300">
            ➤
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;