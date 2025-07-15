import { useEffect, useState } from 'react';
import API from '../api/axios';
import Navbar from '../components/Navbar';

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const res = await API.get('/admin/dashboard');
      setStats({
        users: res.data.totalUsers,
        posts: res.data.totalPosts,
        comments: res.data.totalComments,
        reports: res.data.totalReports,
      });
      setPosts(res.data.latestPosts);
    } catch (err) {
      console.error('Dashboard fetch error:', err);
    }
  };

  return (<Navbar Component={
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>

      {/* Metrics Section */}
      <div className="grid gap-6 md:grid-cols-4">
        {stats && (
          <>
            <StatCard title="Total Users" value={stats.users} />
            <StatCard title="Total Posts" value={stats.posts} />
            <StatCard title="Comments" value={stats.comments} />
            <StatCard title="Reports" value={stats.reports||0} />
          </>
        )}
      </div>

      {/* Latest Posts */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Latest Posts</h2>
        <ul className="space-y-4">
          {posts.map(post => (
            <li key={post._id} className="bg-white shadow rounded p-4">
              <p className="font-medium text-gray-800">{post.content}</p>
              {post.image && <img src={post.image} alt="post" className="mt-2 rounded w-full max-w-md" />}
              <p className="text-sm text-gray-500 mt-1">Posted on {new Date(post.createdAt).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>}/>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-white p-4 rounded shadow text-center">
      <p className="text-lg font-medium text-gray-700">{title}</p>
      <p className="text-2xl font-bold text-indigo-600">{value}</p>
    </div>
  );
}
