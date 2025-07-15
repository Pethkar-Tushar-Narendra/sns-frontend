import API from '../api/axios';

export default function ReportTable({ reports, onUpdate }) {
  const handleAction = async (id, action) => {
    try {
      await API.post(`/admin/reports/${id}/action`, { action });
      onUpdate();
    } catch (err) {
      alert(`Failed to ${action} report`);
    }
  };

  return (
    <table className="min-w-full bg-white rounded shadow overflow-hidden">
      <thead className="bg-gray-100 text-left">
        <tr>
          <th className="px-4 py-2">Reported By</th>
          <th>Reported User</th>
          <th>Reason</th>
          <th>Target</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {reports.map((r) => (
          <tr key={r._id} className="border-t">
            <td className="px-4 py-2">{r.reportedBy?.name || 'N/A'}</td>
            <td>{r.targetUser?.name || 'N/A'}</td>
            <td>{r.reason}</td>
            <td>{r.targetType}</td>
            <td className="space-x-2">
              <button
                onClick={() => handleAction(r._id, 'warn')}
                className="bg-yellow-500 text-white px-2 py-1 rounded"
              >
                Warn
              </button>
              <button
                onClick={() => handleAction(r._id, 'ban')}
                className="bg-red-600 text-white px-2 py-1 rounded"
              >
                Ban
              </button>
              <button
                onClick={() => handleAction(r._id, 'delete')}
                className="bg-gray-700 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
