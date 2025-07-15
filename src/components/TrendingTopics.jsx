export default function TrendingTopics() {
  const topics = ["#ReactJS", "#OpenAI", "#NodeJS", "#TailwindCSS", "#WebDev"];

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-2">🔥 Trending Topics</h3>
      <ul className="list-disc list-inside text-sm">
        {topics.map((topic, idx) => (
          <li key={idx}>{topic}</li>
        ))}
      </ul>
    </div>
  );
}
