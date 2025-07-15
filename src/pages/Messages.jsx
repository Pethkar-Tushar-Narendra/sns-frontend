import { useState } from "react";
import Navbar from "../components/Navbar";

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
const people = [
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Michael Foster',
    email: 'michael.foster@example.com',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Dries Vincent',
    email: 'dries.vincent@example.com',
    role: 'Business Relations',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: null,
  },
  {
    name: 'Lindsay Walton',
    email: 'lindsay.walton@example.com',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Courtney Henry',
    email: 'courtney.henry@example.com',
    role: 'Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Tom Cook',
    email: 'tom.cook@example.com',
    role: 'Director of Product',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: null,
  },
]
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

  return (<Navbar Component={
  <>
   <ul role="list" className="divide-y divide-gray-100">
      {people.map((person) => (
        <li key={person.email} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <img alt="" src={person.imageUrl} className="size-12 flex-none rounded-full bg-gray-50" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm/6 font-semibold text-gray-900">{person.name}</p>
              <p className="mt-1 truncate text-xs/5 text-gray-500">{person.email}</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm/6 text-gray-900">{person.role}</p>
            {person.lastSeen ? (
              <p className="mt-1 text-xs/5 text-gray-500">
                Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
              </p>
            ) : (
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="size-1.5 rounded-full bg-emerald-500" />
                </div>
                <p className="text-xs/5 text-gray-500">Online</p>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  
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
  </>
  }/>
  );
}
