import { useState } from "react";

export default function Profile() {
  const [user, setUser] = useState({
    name: "Tushar Pethkar",
    username: "tushar_123",
    bio: "Web developer | MERN stack | Open to work",
    profilePic: "/default-avatar.png",
    coverPhoto: "https://via.placeholder.com/900x200",
  });

  const [friends] = useState([
    { name: "John", avatar: "/default-avatar.png" },
    { name: "Jane", avatar: "/default-avatar.png" },
    { name: "Alex", avatar: "/default-avatar.png" },
  ]);

  const [posts] = useState([
    { id: 1, content: "Excited to start my new project!", image: "", date: "Today" },
    { id: 2, content: "Coding in React is fun!", image: "", date: "Yesterday" },
  ]);

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      {/* Cover and Profile Header */}
      <div>
        <img src={user.coverPhoto} alt="cover" className="w-full h-40 object-cover rounded" />
        <div className="-mt-12 flex items-center gap-4 px-4">
          <img src={user.profilePic} alt="profile" className="w-24 h-24 rounded-full border-4 border-white shadow-md" />
          <div>
            <h2 className="text-xl font-bold">{user.name}</h2>
            <p className="text-sm text-gray-600">@{user.username}</p>
            <p className="text-sm mt-1">{user.bio}</p>
          </div>
          <button className="ml-auto bg-blue-600 text-white px-4 py-1 rounded">Edit Profile</button>
        </div>
      </div>

      {/* Friends List */}
      <div>
        <h3 className="text-lg font-semibold mb-2">👥 Friends</h3>
        <div className="flex gap-4">
          {friends.map((friend, idx) => (
            <div key={idx} className="text-center">
              <img src={friend.avatar} className="w-16 h-16 rounded-full mx-auto" />
              <p className="text-sm mt-1">{friend.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Posts Section */}
      <div>
        <h3 className="text-lg font-semibold mb-2">📝 Posts</h3>
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-white p-4 rounded shadow">
              <p className="mb-2">{post.content}</p>
              {post.image && <img src={post.image} className="rounded" />}
              <p className="text-xs text-gray-500">{post.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
