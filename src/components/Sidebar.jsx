import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaTasks } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";
import visionx from "../assets/visionx.png"

const Sidebar = () => {
    const navigate = useNavigate();
  const menuItems = [
    {
      icon: <FaInstagram className="h-5 w-5" />,
      text: "Instagram",
      path: "/dashboard/instagram",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaFacebook className="h-5 w-5" />,
      text: "Facebook",
      path: "/dashboard/facebook",
      color: "from-blue-600 to-blue-400"
    },
    {
      icon: <FaLinkedin className="h-5 w-5" />,
      text: "LinkedIn",
      path: "/dashboard/linkedln",
      color: "from-blue-700 to-blue-500"
    },
    {
      icon: <FaTwitter className="h-5 w-5" />,
      text: "X",
      path: "/dashboard/x",
      color: "from-gray-900 to-gray-700"
    },
    {
      icon: <FaTasks className="h-5 w-5" />,
      text: "Tasks/Ideas",
      path: "/dashboard/comingsoon",
      color: "from-green-500 to-emerald-400"
    },
    {
      icon: <CiCalendar className="h-5 w-5" />,
      text: "Content Calendar",
      path: "/dashboard/comingsoon",
      color: "from-orange-500 to-yellow-400"
    }
  ];

  return (
    <div className="w-64 min-h-screen bg-white border-r shadow-lg">
      <div className="p-6 border-b flex justify-center items-center">
        <img
          src={visionx}
          alt="VisionX"
          className="w-36 h-auto cursor-pointer transition-transform transform hover:scale-105"
          onClick={() => navigate("/dashboard")}
        />
      </div>
      <nav className="p-4">
        <ul className="space-y-3">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) => `
                  flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 
                  ${isActive 
                    ? `bg-gradient-to-r ${item.color} text-white shadow-md transform scale-105` 
                    : 'text-gray-700 hover:bg-gray-50 hover:scale-102'}
                `}
              >
                <div className={({ isActive }) => 
                  `transition-transform duration-300 ${isActive ? 'transform scale-110' : ''}`
                }>
                  {item.icon}
                </div>
                <span className="font-medium">{item.text}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;