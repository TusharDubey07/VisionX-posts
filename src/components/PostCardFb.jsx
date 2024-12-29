// export function PostCardFb({
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
//         const date = new Date(dateString);
//         return date.toLocaleDateString('en-US', {
//           year: 'numeric',
//           month: 'long',
//           day: 'numeric',
//           hour: '2-digit',
//           minute: '2-digit'
//         });
//       };

//       const statusButtons = [
//         { id: 'approved', label: 'Approved', color: 'bg-green-500' },
//         { id: 'in-review', label: 'In Review', color: 'bg-yellow-500' },
//         { id: 'change-required', label: 'Change Required', color: 'bg-red-500' }
//       ];
    

//     return (
//       <div className="bg-white rounded-lg shadow-md w-full max-w-2xl mx-auto mb-4 cursor-pointer" onClick={() => onClick(id)}>
//         <div className="p-4">
//           <div className="flex items-center gap-4 mb-4">
//             <div className="w-12 h-12 rounded-full overflow-hidden">
//               <img src={userAvatar} alt="Post thumbnail" className="w-full h-full object-cover" />
//             </div>
//             <div>
//               <div className="flex items-center gap-2">
//                 <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-medium">
//                   Scheduled
//                 </span>
//                 <p className="text-sm text-gray-500">Created {timestamp}</p>
//               </div>
//               <h3 className="font-bold text-blue-600">
//                 Scheduled for: {formatScheduledDate(scheduledDate)}
//               </h3>
//             </div>
//           </div>
          
//           <p className="mb-4">{content}</p>
          
//           {media.type === 'image' ? (
//             <img src={media.url} alt="Post content" className="w-full rounded-md mb-4" />
//           ) : (
//             <video src={media.url} controls className="w-full rounded-md mb-4">
//               Your browser does not support the video tag.
//             </video>
//           )}
          
//           <div className="flex flex-wrap gap-2 mb-4">
//             {hashtags.map((tag, index) => (
//               <span key={index} className="text-blue-500 text-sm">#{tag}</span>
//             ))}
//           </div>
          
//           <div className="flex justify-between text-sm text-gray-500">
//             <span>{likes} Likes</span>
//             <span>{comments} Comments</span>
//             <span>{shares} Shares</span>
//           </div>
//         </div>
        
//         <div className="border-t p-4">
//           <div className="flex justify-between">
//             <button className="flex-1 flex items-center justify-center gap-2 p-2 hover:bg-gray-100">
//               <span>👍</span> Like
//             </button>
//             <button className="flex-1 flex items-center justify-center gap-2 p-2 hover:bg-gray-100">
//               <span>💬</span> Comment
//             </button>
//             <button className="flex-1 flex items-center justify-center gap-2 p-2 hover:bg-gray-100">
//               <span>↗️</span> Share
//             </button>
//           </div>
//         </div>
//       </div>
//     );
// }

import React, { useState } from 'react';

export function PostCardFb({
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
    <div className="bg-white rounded-lg shadow-md w-full max-w-2xl mx-auto mb-4">
      <div className="p-4">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img src={userAvatar} alt="Post thumbnail" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-medium">
                Scheduled
              </span>
              <p className="text-sm text-gray-500">Created {timestamp}</p>
            </div>
            <h3 className="font-bold text-blue-600">
              Scheduled for: {formatScheduledDate(scheduledDate)}
            </h3>
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
          <p className="mb-4">{content}</p>
          
          {media.type === 'image' ? (
            <img src={media.url} alt="Post content" className="w-full rounded-md mb-4" />
          ) : (
            <video src={media.url} controls className="w-full rounded-md mb-4">
              Your browser does not support the video tag.
            </video>
          )}
          
          <div className="flex flex-wrap gap-2 mb-4">
            {hashtags.map((tag, index) => (
              <span key={index} className="text-blue-500 text-sm">#{tag}</span>
            ))}
          </div>
          
          <div className="flex justify-between text-sm text-gray-500">
            <span>{likes} Likes</span>
            <span>{comments} Comments</span>
            <span>{shares} Shares</span>
          </div>
        </div>
        
        <div className="border-t mt-4 p-4">
          <div className="flex justify-between">
            <button className="flex-1 flex items-center justify-center gap-2 p-2 hover:bg-gray-100">
              <span>👍</span> Like
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 p-2 hover:bg-gray-100">
              <span>💬</span> Comment
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 p-2 hover:bg-gray-100">
              <span>↗️</span> Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}