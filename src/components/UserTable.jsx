import { useState } from 'react';
import API from '../api/axios';
import EditUserModal from './EditUserModal.jsx';

export default function UserTable({ users, onUpdate }) {
  const [editingUser, setEditingUser] = useState(null);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;
    try {
      await API.delete(`/admin/users/${id}`);
      onUpdate(); // Refresh list
    } catch (err) {
      alert('Failed to delete user');
    }
  };

  return (
    <>
 <ul role="list" className="divide-y divide-gray-100">
      {users.map((person) => (
        <li key={person.email} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <img alt="" src={person.imageUrl} className="size-12 flex-none rounded-full bg-gray-50" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm/6 font-semibold text-gray-900">{person.name}</p>
              <p className="mt-1 truncate text-xs/5 text-gray-500">{person.email}</p>
            </div>
          </div>
          <div className="gap-2 shrink-0 flex sm:items-end flex-col ">
            <button
 className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                               onClick={() => setEditingUser(person)}
                >
                  Edit
                </button>
                <button
 className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                               onClick={() => handleDelete(person._id)}
                >
                  Delete
                </button>
          </div>
        </li>
      ))}
    </ul>
      {editingUser && (
        <EditUserModal user={editingUser} onClose={() => setEditingUser(null)} onSave={onUpdate} />
      )}
    </>
  );
}
