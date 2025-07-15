import CreatePost from "../components/CreatePost";
import { useState } from "react";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const handleNewPost = (post) => {
    setPosts([post, ...posts]); // prepend new post
  };

  return (
    <div className="max-w-xl mx-auto mt-4">
      <CreatePost onPostCreate={handleNewPost} />

      {posts.map((post) => (
        <div key={post.id} className="bg-white p-4 rounded shadow mb-4 space-y-2">
          <div className="flex items-center gap-2">
            <img src={post.profilePic} className="w-10 h-10 rounded-full" />
            <p className="font-semibold">{post.username}</p>
          </div>
          <p>{post.content}</p>
          {post.image && <img src={post.image} className="w-full rounded-lg mt-2" />}
          <div className="flex gap-4 text-sm text-gray-600">
            <button>👍 Like</button>
            <button>💬 Comment</button>
            <button>🔁 Share</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home