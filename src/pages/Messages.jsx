import { useState } from "react";

const dummyConversations = [
  { id: 1, name: "John", avatar: "/default-avatar.png", messages: [
    { from: "John", text: "Hey, what's up?" },
    { from: "me", text: "All good! You?" },
  ]},
  { id: 2, name: "Jane", avatar: "/default-avatar.png", messages: [
    { from: "Jane", text: "You free this weekend?" },
    { from: "me", text: "Maybe, let me check." },
  ]},
];

export default function Messages() {
  const [selectedConv, setSelectedConv] = useState(dummyConversations[0]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const newMsg = { from: "me", text: input };
    const updated = {
      ...selectedConv,
      messages: [...selectedConv.messages, newMsg],
    };
    
    setSelectedConv(updated);
    setInput("");
  };

  return (
    <div className="grid grid-cols-3 h-[80vh] border rounded overflow-hidden mt-6">
      {/* Sidebar */}
      <div className="col-span-1 bg-gray-100 p-4 space-y-3">
        <h2 className="font-semibold mb-2">📨 Conversations</h2>
        {dummyConversations.map((conv) => (
          <div key={conv.id} className={`p-2 rounded cursor-pointer hover:bg-gray-200 ${selectedConv.id === conv.id ? 'bg-white shadow' : ''}`} onClick={() => setSelectedConv(conv)}>
            <div className="flex items-center gap-2">
              <img src={conv.avatar} className="w-8 h-8 rounded-full" />
              <span>{conv.name}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Chat Window */}
      <div className="col-span-2 flex flex-col">
        <div className="p-4 bg-white border-b font-semibold">
          Chat with {selectedConv.name}
        </div>

        {/* Chat Area */}
        <div className="flex-1 p-4 space-y-2 overflow-y-auto bg-gray-50">
          {selectedConv.messages.map((msg, i) => (
            <div key={i} className={`max-w-xs p-2 rounded text-sm ${msg.from === "me" ? 'bg-blue-200 ml-auto' : 'bg-white'}`}>
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-3 border-t bg-white flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message…"
            className="flex-1 border rounded px-2 py-1 text-sm"
          />
          <button onClick={handleSend} className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
