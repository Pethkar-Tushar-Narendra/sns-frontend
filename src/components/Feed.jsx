import Post from "./Post";

const dummyPosts = [
  {
    id: 1,
    name: "John Doe",
    profilePic: "https://via.placeholder.com/40",
    content: "Just posted my first update! 🎉",
    image: "https://via.placeholder.com/300x150"
  },
  {
    id: 2,
    name: "Jane Smith",
    profilePic: "https://via.placeholder.com/40",
    content: "Loving this new platform!",
  },
];

export default function Feed() {
  return (
    <div className="mt-4">
      {dummyPosts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
