

import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, Calendar } from 'lucide-react';

const PostCard = ({ id, imageUrl, caption, hashtags, onClick, postedDate }) => {
  const [activeStatus, setActiveStatus] = useState('in-review'); // Default status

  const statusButtons = [
    { id: 'approved', label: 'Approved', color: 'bg-green-500' },
    { id: 'in-review', label: 'In Review', color: 'bg-yellow-500' },
    { id: 'change-required', label: 'Change Required', color: 'bg-red-500' }
  ];

  return (
    <div className="max-w-md rounded-lg border border-gray-200 bg-white shadow-md mb-4">
      <div className="p-4">
        <div className="flex items-center mb-4 border-b border-gray-100 pb-3">
          <Calendar className="w-5 h-5 text-gray-600 mr-2" />
          <span className="text-sm font-medium text-gray-700">Scheduled for: </span>
          <span className="text-sm font-semibold text-blue-600 ml-1">{postedDate}</span>
        </div>
        
        <div className="flex justify-between gap-2 mb-4">
          {statusButtons.map(({ id, label, color }) => (
            <button
              key={id}
              onClick={(e) => {
                e.stopPropagation();
                setActiveStatus(id);
              }}
              className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 
                ${activeStatus === id 
                  ? `${color} text-white` 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {label}
            </button>
          ))}
        </div>
        
        <div 
          onClick={() => onClick(id)}
          className="cursor-pointer"
        >
          <img 
            src={imageUrl} 
            alt="Post content" 
            className="w-full h-64 object-cover rounded-lg"
          />
          
          <div className="mt-4 flex justify-between items-center">
            <div className="flex space-x-4">
              {[Heart, MessageCircle, Send, Bookmark].map((Icon, index) => (
                <button 
                  key={index} 
                  className="hover:text-gray-600"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Icon className="w-6 h-6" />
                </button>
              ))}
            </div>
          </div>
          
          <p className="mt-3 text-gray-800">{caption}</p>
          
          <div className="mt-2 flex flex-wrap gap-2">
            {hashtags.map((tag, index) => (
              <span 
                key={index}
                className="text-blue-600 text-sm hover:text-blue-800"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;