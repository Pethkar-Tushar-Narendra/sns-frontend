import { useState } from 'react';
import API from '../api/axios';

export default function EditPostModal({ post, onClose, onSave }) {
  const [content, setContent] = useState(post.content);
  const [image, setImage] = useState(post.image);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.put(`/admin/posts/${post._id}`, { content, image });
      onSave();
      onClose();
    } catch (err) {
      alert('Error updating post');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md space-y-4 w-96">
        <h2 className="text-xl font-bold">Edit Post</h2>
        <textarea
          className="border p-2 w-full"
          rows={4}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          className="border p-2 w-full"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image URL"
        />
        <div className="flex justify-end space-x-2">
          <button type="button" onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">
            Cancel
          </button>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
