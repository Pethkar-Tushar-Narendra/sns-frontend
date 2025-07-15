export default function Post({ post }) {
  return (
<div className="bg-white p-4 rounded shadow space-y-2 mb-4">
      <div className="flex items-center gap-2 mb-2">
        <img src={post.profilePic || "/default-avatar.png"} alt="user" className="w-10 h-10 rounded-full object-cover" />
        <span className="font-semibold">{post.name}</span>
      </div>
      <p className="mb-2">{post.content}</p>{post.image && <img src={post.image} alt="post" className="rounded-lg w-full max-h-64 object-cover mt-2" />}

      <div className="flex gap-4 mt-2 text-sm text-gray-600">
        <button>👍 Like</button>
        <button>💬 Comment</button>
        <button>🔁 Share</button>
      </div>
    </div>
  );
}
