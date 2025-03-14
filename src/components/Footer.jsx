import Logo from "/assets/logo/Grasfam.svg";

const Footer = () => {
  return (
    <footer className="bg-[#1D2026] text-white">
      {/* Top Call to Action */}
      <div className="border-b border-gray-700 py-10 text-center">
        <h2 className="text-xl md:text-2xl font-bold">Start travel with Grasfam.</h2>
        <div className="mt-4 flex justify-center gap-4">
          <button className="bg-red-500 px-5 py-2 rounded-lg font-semibold">Join</button>
          <button className="bg-gray-700 px-5 py-2 rounded-lg font-semibold">Browse All Travel</button>
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="border-b border-gray-700 py-10 px-4 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Logo and Socials */}
        <div>
          <img src={Logo} alt="Grasfam" className="h-10 ms-7 transform scale-300" />
          <p className="text-gray-400 mt-2">Aliquam rhoncus ligula est, non pulvinar elit convallis nec.</p>
        </div>

        {/* Top Categories */}
        <div>
          <h3 className="font-semibold">Top 4 Category</h3>
          <ul className="text-gray-400 space-y-2 mt-2">
            <li>Nature</li>
            <li>Beach</li>
            <li>Mountain</li>
            <li>City</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold">Quick Links</h3>
          <ul className="text-gray-400 space-y-2 mt-2">
            <li>About</li>
            <li className="flex items-center gap-1">Grasfam <span className="ml-1">→</span></li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Support & App Downloads */}
        <div>
          <h3 className="font-semibold">Support</h3>
          <ul className="text-gray-400 space-y-2 mt-2">
            <li>Help Center</li>
            <li>FAQs</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
          <div className="mt-4">
            <h3 className="font-semibold">Download Our App</h3>
            <div className="flex gap-2 mt-2">
              <button className="bg-gray-700 px-3 py-2 rounded-lg">App Store</button>
              <button className="bg-gray-700 px-3 py-2 rounded-lg">Play Store</button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="py-4 text-center text-gray-400 text-sm">© 2025 - Grasfam. Designed by Grasfam. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
