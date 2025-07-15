export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 mt-10 border-t">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 space-y-4 md:space-y-0">
        {/* Left side links */}
        <div className="space-x-4">
          <a href="/about" className="hover:underline">About Us</a>
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/terms" className="hover:underline">Terms of Service</a>
          <a href="/contact" className="hover:underline">Contact Us</a>
        </div>

        {/* Right side icons */}
        <div className="space-x-4 text-xl">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">🔗</a>
          <a href="https://github.com" target="_blank" rel="noreferrer">💻</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">📸</a>
          <a href="https://x.com" target="_blank" rel="noreferrer">🐦</a>
        </div>
      </div>
    </footer>
  );
}
