import { useState } from "react";

const CreatePost = ({ onPostCreate }) => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    const newPost = {
      id: Date.now(),
      username: "John Doe", // Replace with actual user
      profilePic: "/default-avatar.png",
      content,
      image,
    };

    onPostCreate(newPost);
    setContent("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded mb-6 space-y-3">
      <textarea
        className="w-full border rounded p-2 text-sm"
        rows={3}
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL (optional)"
        className="w-full border rounded p-2 text-sm"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
