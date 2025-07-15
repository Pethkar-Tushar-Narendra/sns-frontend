import { useEffect, useState } from 'react';
import API from '../api/axios';
import FriendRequestTable from '../components/FriendRequestTable';
import Navbar from '../components/Navbar';

export default function FriendRequests() {
  const [requests, setRequests] = useState([]);

  const fetchRequests = async () => {
    try {
      const res = await API.get('/admin/friends/requests');
      setRequests(res.data);
    } catch (err) {
      console.error('Error fetching friend requests:', err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (<Navbar Component={
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Pending Friend Requests</h1>
      <FriendRequestTable requests={requests} onUpdate={fetchRequests} />
    </div>}/>
  );
}
