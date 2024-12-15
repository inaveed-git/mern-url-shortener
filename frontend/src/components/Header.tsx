import * as React from 'react';

const Header: React.FunctionComponent = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 p-6 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-white">
          <h1 className="text-3xl font-extrabold">urlShotner</h1>
        </div>

        {/* Navigation and Buttons */}
        <div className="flex space-x-6">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
            Sign In
          </button>
          <button className="bg-transparent text-white px-4 py-2 border-2 border-white rounded-md hover:bg-white hover:text-blue-600 transition">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
