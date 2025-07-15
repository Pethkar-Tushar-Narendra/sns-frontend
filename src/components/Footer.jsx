// export default function Footer() {
//   return (
//     <footer className="bg-gray-100 py-6 mt-10 border-t">
//       <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 space-y-4 md:space-y-0">
//         {/* Left side links */}
//         <div className="space-x-4">
//           <a href="/about" className="hover:underline">About Us</a>
//           <a href="/privacy" className="hover:underline">Privacy Policy</a>
//           <a href="/terms" className="hover:underline">Terms of Service</a>
//           <a href="/contact" className="hover:underline">Contact Us</a>
//         </div>

//         {/* Right side icons */}
//         <div className="space-x-4 text-xl">
//           <a href="https://linkedin.com" target="_blank" rel="noreferrer">🔗</a>
//           <a href="https://github.com" target="_blank" rel="noreferrer">💻</a>
//           <a href="https://instagram.com" target="_blank" rel="noreferrer">📸</a>
//           <a href="https://x.com" target="_blank" rel="noreferrer">🐦</a>
//         </div>
//       </div>
//     </footer>
//   );
// }

// Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-5 xl:gap-8">
          {/* Company mission */}
          <div className="space-y-4 xl:col-span-2">
            <img
              className="h-8"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
            <p className="text-sm leading-6">
              Making the world a better place through constructing elegant hierarchies.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <i className="fab fa-facebook" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <i className="fab fa-instagram" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <i className="fab fa-twitter" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">GitHub</span>
                <i className="fab fa-github" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">YouTube</span>
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-3 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Solutions</h3>
              <ul className="mt-6 space-y-4 text-sm">
                <li><a href="#" className="hover:text-white">Marketing</a></li>
                <li><a href="#" className="hover:text-white">Analytics</a></li>
                <li><a href="#" className="hover:text-white">Automation</a></li>
                <li><a href="#" className="hover:text-white">Commerce</a></li>
                <li><a href="#" className="hover:text-white">Insights</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
              <ul className="mt-6 space-y-4 text-sm">
                <li><a href="#" className="hover:text-white">Submit ticket</a></li>
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Guides</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
              <ul className="mt-6 space-y-4 text-sm">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Jobs</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
              <ul className="mt-6 space-y-4 text-sm">
                <li><a href="#" className="hover:text-white">Terms of service</a></li>
                <li><a href="#" className="hover:text-white">Privacy policy</a></li>
                <li><a href="#" className="hover:text-white">License</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="text-xs leading-5 text-gray-400">
            &copy; 2024 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
