import * as React from 'react';

const Footer: React.FunctionComponent = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Footer Top Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-8 sm:mb-0 text-center sm:text-left">
            <h1 className="text-3xl font-extrabold text-blue-400">urlShotner</h1>
            <p className="mt-2 text-lg text-gray-300">
              Shorten, manage, and track your URLs easily.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center sm:justify-end space-x-6">
            <a href="#" className="text-white hover:text-blue-400 transition">
              <i className="fab fa-facebook-f text-xl"></i> {/* Font Awesome */}
            </a>
            <a href="#" className="text-white hover:text-blue-400 transition">
              <i className="fab fa-twitter text-xl"></i> {/* Font Awesome */}
            </a>
            <a href="#" className="text-white hover:text-blue-400 transition">
              <i className="fab fa-linkedin-in text-xl"></i> {/* Font Awesome */}
            </a>
            <a href="#" className="text-white hover:text-blue-400 transition">
              <i className="fab fa-github text-xl"></i> {/* Font Awesome */}
            </a>
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="mt-12 border-t border-gray-700 pt-8 text-center sm:text-left">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-12">
            <div>
              <h4 className="font-semibold text-lg">Company</h4>
              <ul className="mt-4 space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400">Careers</a></li>
                <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400">Terms & Conditions</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg">Resources</h4>
              <ul className="mt-4 space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400">Documentation</a></li>
                <li><a href="#" className="hover:text-blue-400">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-400">API</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg">Legal</h4>
              <ul className="mt-4 space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400">Terms of Use</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg">Contact</h4>
              <ul className="mt-4 space-y-2 text-gray-400">
                <li><a href="mailto:support@urlshotner.com" className="hover:text-blue-400">Email Us</a></li>
                <li><a href="tel:+1234567890" className="hover:text-blue-400">Call Us</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 text-center text-gray-400">
          <p>&copy; 2024 urlShotner. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
