// export function TwitterCard({
//     id,
//     userAvatar,
//     scheduledDate,
//     timestamp,
//     content,
//     media,
//     hashtags,
//     retweets,
//     likes,
//     views,
//     onClick
//   }) {
//     const formatScheduledDate = (dateString) => {
//       const date = new Date(dateString);
//       return date.toLocaleDateString('en-US', {
//         year: 'numeric',
//         month: 'long',
//         day: 'numeric',
//         hour: '2-digit',
//         minute: '2-digit'
//       });
//     };
  
//     return (
//       <div className="bg-white border border-gray-200 rounded-xl p-4 hover:bg-gray-50 cursor-pointer mb-4" onClick={() => onClick(id)}>
//         <div className="flex items-start gap-3">
//           <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
//             <img src={userAvatar} alt="Avatar" className="w-full h-full object-cover" />
//           </div>
//           <div className="flex-1">
//             <div className="flex items-center gap-2 mb-1">
//               <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs font-medium">
//                 Scheduled Tweet
//               </span>
//               <span className="text-gray-500 text-sm">Created {timestamp}</span>
//             </div>
//             <div className="text-blue-500 font-medium mb-2">
//               Scheduled for: {formatScheduledDate(scheduledDate)}
//             </div>
//             <p className="text-gray-900 mb-3 whitespace-pre-wrap">{content}</p>
            
//             {media && media.type === 'image' && (
//               <div className="rounded-xl overflow-hidden mb-3">
//                 <img src={media.url} alt="Tweet media" className="w-full" />
//               </div>
//             )}
            
//             <div className="flex flex-wrap gap-1 mb-3">
//               {hashtags.map((tag, index) => (
//                 <span key={index} className="text-blue-500 text-sm">#{tag}</span>
//               ))}
//             </div>
            
//             <div className="flex justify-between text-gray-500 text-sm">
//               <button className="flex items-center gap-2 hover:text-blue-500">
//                 <span>💬</span> {retweets}
//               </button>
//               <button className="flex items-center gap-2 hover:text-green-500">
//                 <span>🔄</span> {likes}
//               </button>
//               <button className="flex items-center gap-2 hover:text-red-500">
//                 <span>❤️</span> {views}
//               </button>
//               <button className="flex items-center gap-2 hover:text-blue-500">
//                 <span>📊</span> Views
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

import React, { useState } from 'react';

export function TwitterCard({
  id,
  userAvatar,
  scheduledDate,
  timestamp,
  content,
  media,
  hashtags,
  retweets,
  likes,
  views,
  onClick
}) {
  const [activeStatus, setActiveStatus] = useState('in-review');

  const formatScheduledDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const statusButtons = [
    { id: 'approved', label: 'Approved', color: 'bg-green-500' },
    { id: 'in-review', label: 'In Review', color: 'bg-yellow-500' },
    { id: 'change-required', label: 'Change Required', color: 'bg-red-500' }
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 hover:bg-gray-50 mb-4">
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
          <img src={userAvatar} alt="Avatar" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs font-medium">
              Scheduled Tweet
            </span>
            <span className="text-gray-500 text-sm">Created {timestamp}</span>
          </div>
          <div className="text-blue-500 font-medium mb-2">
            Scheduled for: {formatScheduledDate(scheduledDate)}
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
          
          <div className="cursor-pointer" onClick={() => onClick(id)}>
            <p className="text-gray-900 mb-3 whitespace-pre-wrap">{content}</p>
            
            {media && media.type === 'image' && (
              <div className="rounded-xl overflow-hidden mb-3">
                <img src={media.url} alt="Tweet media" className="w-full" />
              </div>
            )}
            
            <div className="flex flex-wrap gap-1 mb-3">
              {hashtags.map((tag, index) => (
                <span key={index} className="text-blue-500 text-sm">#{tag}</span>
              ))}
            </div>
            
            <div className="flex justify-between text-gray-500 text-sm">
              <button className="flex items-center gap-2 hover:text-blue-500">
                <span>💬</span> {retweets}
              </button>
              <button className="flex items-center gap-2 hover:text-green-500">
                <span>🔄</span> {likes}
              </button>
              <button className="flex items-center gap-2 hover:text-red-500">
                <span>❤️</span> {views}
              </button>
              <button className="flex items-center gap-2 hover:text-blue-500">
                <span>📊</span> Views
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}