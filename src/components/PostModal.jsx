import React, { useState } from 'react';

const PostModal = ({ isOpen, onClose, post }) => {
  const [activeTab, setActiveTab] = useState('details');
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { id: 1, username: "user1", message: "Great photo!", timestamp: "2023-05-15 10:30" },
    { id: 2, username: post?.username || "", message: "Thanks! I'm glad you like it.", timestamp: "2023-05-15 10:35" },
    { id: 3, username: "user2", message: "Where was this taken?", timestamp: "2023-05-15 11:00" },
    { id: 4, username: post?.username || "", message: "This was taken at Sunset Beach last weekend.", timestamp: "2023-05-15 11:05" }
  ]);

  if (!post || !isOpen) return null;

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      const newMessage = {
        id: chatHistory.length + 1,
        username: "currentUser",
        message: chatMessage,
        timestamp: new Date().toLocaleString()
      };
      setChatHistory([...chatHistory, newMessage]);
      setChatMessage('');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-[800px] w-full max-h-[90vh] overflow-hidden">
        <div className="p-4 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">{post.username}'s Post</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              ✕
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <div>
            <img src={post.imageUrl} alt="Post" className="w-full aspect-square object-cover rounded-md" />
          </div>
          
          <div>
            <div className="flex border-b mb-4">
              <button
                className={`px-4 py-2 ${activeTab === 'details' ? 'border-b-2 border-blue-500' : ''}`}
                onClick={() => setActiveTab('details')}
              >
                Details
              </button>
              <button
                className={`px-4 py-2 ${activeTab === 'chat' ? 'border-b-2 border-blue-500' : ''}`}
                onClick={() => setActiveTab('chat')}
              >
                Chat
              </button>
            </div>

            <div className="h-[300px] overflow-y-auto border rounded-md p-4">
              {activeTab === 'details' ? (
                <div>
                  <h3 className="font-semibold mb-2">Caption:</h3>
                  <p>{post.caption}</p>
                  <h3 className="font-semibold mt-4 mb-2">Hashtags:</h3>
                  <div>
                    {post.hashtags.map((tag, index) => (
                      <span key={index} className="text-blue-500 text-sm mr-2">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="space-y-4">
                    {chatHistory.map((msg) => (
                      <div key={msg.id} className="flex items-start space-x-2">
                        <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
                          <img
                            src={`https://avatar.vercel.sh/${msg.username}`}
                            alt={msg.username}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-semibold">{msg.username}</p>
                          <p>{msg.message}</p>
                          <p className="text-xs text-gray-500">{msg.timestamp}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <textarea
                    className="w-full p-2 border rounded-md resize-none"
                    rows="3"
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
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;