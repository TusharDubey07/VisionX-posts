// export function LinkedInCard({
//     id,
//     userAvatar,
//     scheduledDate,
//     timestamp,
//     content,
//     media,
//     hashtags,
//     likes,
//     comments,
//     shares,
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
//       <div className="bg-white border border-gray-200 rounded-lg shadow-sm mb-4 cursor-pointer" onClick={() => onClick(id)}>
//         <div className="p-4">
//           <div className="flex items-start gap-4 mb-4">
//             <div className="w-14 h-14 rounded-full overflow-hidden">
//               <img src={userAvatar} alt="Profile" className="w-full h-full object-cover" />
//             </div>
//             <div>
//               <div className="flex items-center gap-2">
//                 <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-medium">
//                   Scheduled Post
//                 </span>
//                 <span className="text-gray-500 text-sm">Created {timestamp}</span>
//               </div>
//               <div className="text-blue-600 font-medium mt-1">
//                 Scheduled for: {formatScheduledDate(scheduledDate)}
//               </div>
//             </div>
//           </div>
  
//           <div className="prose max-w-none mb-4">
//             <p className="whitespace-pre-wrap">{content}</p>
//           </div>
  
//           {media && (
//             <div className="mb-4">
//               {media.type === 'image' ? (
//                 <img src={media.url} alt="Post media" className="w-full rounded-lg" />
//               ) : (
//                 <video src={media.url} controls className="w-full rounded-lg">
//                   Your browser does not support the video tag.
//                 </video>
//               )}
//             </div>
//           )}
  
//           <div className="flex flex-wrap gap-2 mb-4">
//             {hashtags.map((tag, index) => (
//               <span key={index} className="text-blue-600 text-sm">#{tag}</span>
//             ))}
//           </div>
  
//           <div className="flex items-center justify-between text-gray-500 text-sm border-t pt-3">
//             <button className="flex items-center gap-2 hover:text-blue-600">
//               <span>👍</span> {likes}
//             </button>
//             <button className="flex items-center gap-2 hover:text-blue-600">
//               <span>💬</span> {comments}
//             </button>
//             <button className="flex items-center gap-2 hover:text-blue-600">
//               <span>↗️</span> {shares}
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

import React, { useState } from 'react';

export function LinkedInCard({
  id,
  userAvatar,
  scheduledDate,
  timestamp,
  content,
  media,
  hashtags,
  likes,
  comments,
  shares,
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
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm mb-4">
      <div className="p-4">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-14 h-14 rounded-full overflow-hidden">
            <img src={userAvatar} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-medium">
                Scheduled Post
              </span>
              <span className="text-gray-500 text-sm">Created {timestamp}</span>
            </div>
            <div className="text-blue-600 font-medium mt-1">
              Scheduled for: {formatScheduledDate(scheduledDate)}
            </div>
          </div>
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
          <div className="prose max-w-none mb-4">
            <p className="whitespace-pre-wrap">{content}</p>
          </div>

          {media && (
            <div className="mb-4">
              {media.type === 'image' ? (
                <img src={media.url} alt="Post media" className="w-full rounded-lg" />
              ) : (
                <video src={media.url} controls className="w-full rounded-lg">
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-4">
            {hashtags.map((tag, index) => (
              <span key={index} className="text-blue-600 text-sm">#{tag}</span>
            ))}
          </div>

          <div className="flex items-center justify-between text-gray-500 text-sm border-t pt-3">
            <button className="flex items-center gap-2 hover:text-blue-600">
              <span>👍</span> {likes}
            </button>
            <button className="flex items-center gap-2 hover:text-blue-600">
              <span>💬</span> {comments}
            </button>
            <button className="flex items-center gap-2 hover:text-blue-600">
              <span>↗️</span> {shares}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}