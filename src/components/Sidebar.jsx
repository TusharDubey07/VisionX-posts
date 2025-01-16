import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaTasks } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";
import visionx from "../assets/visionx.png"

const Sidebar = ({ selectedClient, userType }) => {
  const navigate = useNavigate();
  
  // Define all possible menu items with different paths for different user types
  const menuItems = [
    {
      key: 'instagram',
      icon: <FaInstagram className="h-5 w-5" />,
      text: "Instagram",
      path: userType === 'client' ? "/client-dashboard/instagram" : "/dashboard/instagram",
      color: "from-purple-500 to-pink-500"
    },
    {
      key: 'facebook',
      icon: <FaFacebook className="h-5 w-5" />,
      text: "Facebook",
      path: userType === 'client' ? "/client-dashboard/facebook" : "/dashboard/facebook",
      color: "from-blue-600 to-blue-400"
    },
    {
      key: 'linkedin',
      icon: <FaLinkedin className="h-5 w-5" />,
      text: "LinkedIn",
      path: userType === 'client' ? "/client-dashboard/linkedln" : "/dashboard/linkedln",
      color: "from-blue-700 to-blue-500"
    },
    {
      key: 'twitter',
      icon: <FaTwitter className="h-5 w-5" />,
      text: "X",
      path: userType === 'client' ? "/client-dashboard/x" : "/dashboard/x",
      color: "from-gray-900 to-gray-700"
    },
    {
      key: 'tasks',
      icon: <FaTasks className="h-5 w-5" />,
      text: "Tasks/Ideas",
      path: userType === 'client' ? "/client-dashboard/comingsoon" : "/dashboard/comingsoon",
      color: "from-green-500 to-emerald-400"
    },
    {
      key: 'calendar',
      icon: <CiCalendar className="h-5 w-5" />,
      text: "Content Calendar",
      path: userType === 'client' ? "/client-dashboard/comingsoon" : "/dashboard/comingsoon",
      color: "from-orange-500 to-yellow-400"
    }
  ];

  // Get available menu items based on user type and selected client
  const getAvailableMenuItems = () => {
    if (userType === 'client') {
      return menuItems; // Show all menu items for client
    }
    
    // For company user, filter based on selected client
    if (!selectedClient || !selectedClient.socialMedia) return [];
    return menuItems.filter(item => 
      selectedClient.socialMedia[item.key]
    );
  };

  const handleLogoClick = () => {
    if (userType === 'client') {
      navigate('/client-dashboard');
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="w-64 min-h-screen bg-white border-r shadow-lg">
      <div className="p-6 border-b flex justify-center items-center">
        <img
          src={visionx}
          alt="VisionX"
          className="w-36 h-auto cursor-pointer transition-transform transform hover:scale-105"
          onClick={handleLogoClick}
        />
      </div>
      <nav className="p-4">
        {userType === 'company' && !selectedClient ? (
          <div className="text-center p-6">
            <div className="text-gray-400 mb-4">
              <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <p className="text-gray-600 font-medium">Select a client to view their social media handles</p>
            <p className="text-gray-400 text-sm mt-2">Choose from the client list on the dashboard</p>
          </div>
        ) : (
          <div>
            {userType === 'company' && selectedClient && (
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-800">Selected Client:</h3>
                <p className="text-blue-600 font-semibold">{selectedClient.name}</p>
              </div>
            )}
            <ul className="space-y-3">
              {getAvailableMenuItems().map((item) => (
                <li key={item.key}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => `
                      flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 
                      ${isActive 
                        ? `bg-gradient-to-r ${item.color} text-white shadow-md transform scale-105` 
                        : 'text-gray-700 hover:bg-gray-50 hover:scale-102'}
                    `}
                  >
                    {item.icon}
                    <span className="font-medium">{item.text}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;