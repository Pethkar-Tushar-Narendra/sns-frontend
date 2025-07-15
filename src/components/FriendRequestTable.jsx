import API from '../api/axios';

export default function FriendRequestTable({ requests, onUpdate }) {
  const handleAction = async (action, from, to) => {
    try {
      const endpoint = action === 'accept' ? '/admin/friends/accept' : '/admin/friends/deny';
      await API.post(endpoint, { from, to });
      onUpdate();
    } catch (err) {
      alert(`Failed to ${action} request`);
    }
  };

  return (
    <table className="min-w-full bg-white rounded shadow overflow-hidden">
      <thead className="bg-gray-100 text-left">
        <tr>
          <th className="px-4 py-2">Sender</th>
          <th>Receiver</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {requests.map((req, index) => (
          <tr key={index} className="border-t">
            <td className="px-4 py-2">{req.from?.name || 'User A'}</td>
            <td>{req.to?.name || 'User B'}</td>
            <td>
              <button
                onClick={() => handleAction('accept', req.from._id, req.to._id)}
                className="bg-green-500 text-white px-3 py-1 rounded mr-2"
              >
                Accept
              </button>
              <button
                onClick={() => handleAction('deny', req.from._id, req.to._id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Deny
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
