import { useState } from "react";

export default function Notifications() {
  const [notifications] = useState([
    {
      id: 1,
      type: "like",
      user: "John",
      profilePic: "/default-avatar.png",
      text: "liked your post",
      time: "2 mins ago",
    },
    {
      id: 2,
      type: "comment",
      user: "Jane",
      profilePic: "/default-avatar.png",
      text: "commented: 'Great work!'",
      time: "10 mins ago",
    },
    {
      id: 3,
      type: "friend-request",
      user: "Alex",
      profilePic: "/default-avatar.png",
      text: "sent you a friend request",
      time: "1 hour ago",
    },
    {
      id: 4,
      type: "message",
      user: "Mark",
      profilePic: "/default-avatar.png",
      text: "sent you a message",
      time: "Yesterday",
    },
  ]);

  return (
    <div className="max-w-2xl mx-auto p-4 mt-6">
      <h2 className="text-2xl font-bold mb-4">🔔 Notifications</h2>

      <div className="space-y-3">
        {notifications.map((n) => (
          <div key={n.id} className="flex items-start gap-3 p-3 bg-white rounded shadow">
            <img src={n.profilePic} className="w-10 h-10 rounded-full" />
            <div className="flex flex-col text-sm">
              <p>
                <span className="font-medium">{n.user}</span> {n.text}
              </p>
              <span className="text-xs text-gray-500">{n.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
