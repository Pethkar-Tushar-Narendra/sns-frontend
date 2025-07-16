import { useEffect, useState } from 'react';
import API from '../api/axios';
import PostTable from '../components/PostTable';
import Navbar from '../components/Navbar';

export default function Posts() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await API.get('/admin/posts');
      setPosts(res.data);
    } catch (err) {
      console.error('Error fetching posts:', err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Navbar Component={
    <div className="py-6">
      <PostTable posts={posts} onUpdate={fetchPosts} />
    </div>}/>
  );
}
