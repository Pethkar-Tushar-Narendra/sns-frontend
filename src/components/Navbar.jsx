import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
  <nav className="bg-white shadow px-6 py-3 flex items-center justify-between">
  <div className="flex items-center space-x-4 text-blue-600 font-medium">
    <span className="font-bold text-xl text-blue-700">🌐 SNS</span>
    <a href="/">Home</a>
    <a href="/profile">Profile</a>
    <a href="/friends">Friends</a>
    <a href="/messages">Messages</a>
    <a href="/notifications">Notifications</a>
  </div>
  <div className="flex items-center gap-2">
    <input type="text" placeholder="Search..." className="px-2 py-1 border rounded-md text-sm" />
    <button className="px-4 py-1 bg-gray-200 hover:bg-gray-300 rounded-md">Logout</button>
  </div>
</nav>
  );
}
