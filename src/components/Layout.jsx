import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { HiMenuAlt2 } from 'react-icons/hi';
import { Navbar } from './Navbar';
import { CreatePostModal } from './CreatePostModal';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(false); 

  const handleCreatePost = () => {
    setIsCreatePostModalOpen(true); 
  };

  const handleClosePostModal = () => {
    setIsCreatePostModalOpen(false); 
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Mobile sidebar backdrop */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:static lg:translate-x-0 inset-y-0 left-0 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-30 lg:z-0`}
      >
        <Sidebar />
      </div>

   {/* Main content */}
   <div className="flex-1 flex flex-col overflow-auto">
        {/* Navbar */}
        <Navbar onCreatePost={handleCreatePost} />

        {/* Mobile header */}
        <div className="lg:hidden flex items-center p-4 border-b">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <HiMenuAlt2 className="h-6 w-6" />
          </button>
        </div>

        {/* Page content */}
        <div className="p-4 flex-1 overflow-auto">{children}</div>
      </div>

      {/* Create Post Modal */}
      <CreatePostModal
        isOpen={isCreatePostModalOpen}
        onClose={handleClosePostModal}
      />
    </div>
  );
};

export default Layout;