import React from 'react';
import { Bell, PlusCircle } from 'lucide-react';

export function Navbar({ onCreatePost, userType }) {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* <span className="font-bold text-xl text-blue-600">Social Dashboard</span> */}
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-md">
              Approved
            </button>
            <button className="px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-md">
              In Review
            </button>
            <button className="px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-md">
              Change Required
            </button>
            {userType === 'company' && (
              <button
                onClick={onCreatePost}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                <PlusCircle className="w-4 h-4 mr-2" />
                Create Post
              </button>
            )}
            <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-md">
              <Bell className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}