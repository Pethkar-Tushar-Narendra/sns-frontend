import { useState } from 'react';
import API from '../api/axios';
import EditPostModal from './EditPostModal';

export default function PostTable({ posts, onUpdate }) {
  const [editingPost, setEditingPost] = useState(null);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this post?')) return;
    try {
      await API.delete(`/admin/posts/${id}`);
      onUpdate();
    } catch (err) {
      alert('Error deleting post');
    }
  };

  return (
    <>
      <table className="min-w-full bg-white rounded shadow overflow-hidden">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="px-4 py-2">User</th>
            <th>Content</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((p) => (
            <tr key={p._id} className="border-t">
              <td className="px-4 py-2">{p.user?.name || 'Unknown'}</td>
              <td>{p.content}</td>
              <td>
                {p.image && (
                  <img src={p.image} alt="post" className="w-16 h-16 object-cover rounded" />
                )}
              </td>
              <td>
                <button className="text-blue-600 mr-2" onClick={() => setEditingPost(p)}>
                  Edit
                </button>
                <button className="text-red-600" onClick={() => handleDelete(p._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingPost && (
        <EditPostModal post={editingPost} onClose={() => setEditingPost(null)} onSave={onUpdate} />
      )}
    </>
  );
}
