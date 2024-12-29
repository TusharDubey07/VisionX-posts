import React, { useState } from 'react';

const ChatMessage = ({ username, userAvatar, message, timestamp }) => (
  <div className="flex items-start gap-2">
    <div className="w-8 h-8 rounded-full overflow-hidden">
      <img src={userAvatar} alt={username} className="w-full h-full object-cover" />
    </div>
    <div>
      <p className="font-bold">{username}</p>
      <p>{message}</p>
      <p className="text-xs text-gray-500">{timestamp}</p>
    </div>
  </div>
);

export function PostModalFb({ isOpen, onClose, post }) {
  const [activeTab, setActiveTab] = useState('details');
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { id: 1, username: "Alice", userAvatar: "/placeholder.svg?height=32&width=32", message: "Great post!", timestamp: "2 hours ago" },
    { id: 2, username: "Bob", userAvatar: "/placeholder.svg?height=32&width=32", message: "I totally agree with you.", timestamp: "1 hour ago" },
  ]);

  if (!isOpen || !post) return null;

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      const newMessage = {
        id: chatHistory.length + 1,
        username: "Current User",
        userAvatar: "/placeholder.svg?height=32&width=32",
        message: chatMessage,
        timestamp: "Just now"
      };
      setChatHistory([...chatHistory, newMessage]);
      setChatMessage('');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-[800px] w-full m-4">
        <div className="p-4 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">{post.username}'s Post</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">×</button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <div>
            {post.media.type === 'image' ? (
              <img src={post.media.url} alt="Post content" className="w-full rounded-md" />
            ) : (
              <video src={post.media.url} controls className="w-full rounded-md">
                Your browser does not support the video tag.
              </video>
            )}
          </div>
          
          <div>
            <div className="border rounded-md">
              <div className="flex border-b">
                <button
                  className={`flex-1 p-2 ${activeTab === 'details' ? 'bg-gray-100' : ''}`}
                  onClick={() => setActiveTab('details')}
                >
                  Details
                </button>
                <button
                  className={`flex-1 p-2 ${activeTab === 'chat' ? 'bg-gray-100' : ''}`}
                  onClick={() => setActiveTab('chat')}
                >
                  Chat
                </button>
              </div>

              {activeTab === 'details' ? (
                <div className="p-4 h-[300px] overflow-y-auto">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img src={post.userAvatar} alt={post.username} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-bold">{post.username}</h3>
                      <p className="text-sm text-gray-500">{post.timestamp}</p>
                    </div>
                  </div>
                  
                  <p className="mb-4">{post.content}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.hashtags.map((tag, index) => (
                      <span key={index} className="text-blue-500 text-sm">#{tag}</span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>{post.likes} Likes</span>
                    <span>{post.comments} Comments</span>
                    <span>{post.shares} Shares</span>
                  </div>
                  
                  <div className="flex justify-between border-t pt-4">
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
              ) : (
                <div className="p-4">
                  <div className="h-[300px] overflow-y-auto mb-4">
                    {chatHistory.map((msg) => (
                      <ChatMessage key={msg.id} {...msg} />
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <textarea
                      className="flex-1 border rounded-md p-2 resize-none"
                      placeholder="Type your message here."
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                    />
                    <button
                      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                      onClick={handleSendMessage}
                    >
                      Send
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}