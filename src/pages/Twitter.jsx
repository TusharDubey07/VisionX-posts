import React, { useState } from 'react';
import { TwitterCard } from '../components/TwitterCard';
import PostModal from '../components/PostModal';

const twitterPosts = [
  {
    id: 1,
    userAvatar: "/placeholder.svg?height=50&width=50",
    scheduledDate: "2024-12-28T15:30:00",
    timestamp: "2 hours ago",
    content: "Just dropped a new thread on web development best practices! 🧵\n\nCheck out these game-changing tips that will level up your coding skills! #WebDev #Programming",
    media: {
      type: 'image',
      url: "/src/assets/image2.png"
    },
    hashtags: ["WebDev", "Programming", "CodeTips"],
    retweets: 45,
    likes: 132,
    views: 1200
  },
  {
    id: 2,
    userAvatar: "/placeholder.svg?height=50&width=50",
    scheduledDate: "2024-12-29T10:00:00",
    timestamp: "4 hours ago",
    content: "🚀 Exciting announcement coming tomorrow!\n\nStay tuned for something that will revolutionize how we think about AI! #AI #Tech #Innovation",
    media: {
      type: 'image',
      url: "/src/assets/image1santro.jpg"
    },
    hashtags: ["AI", "Tech", "Innovation"],
    retweets: 89,
    likes: 245,
    views: 2500
  }
];

export default function TwitterPage() {
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (id) => {
    const post = twitterPosts.find(p => p.id === id);
    setSelectedPost(post || null);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-xl font-bold mb-8 text-center text-[#1DA1F2]">
         Tweets
        </h1>
        <div className="max-w-xl mx-auto">
          {twitterPosts.map((post) => (
            <TwitterCard
              key={post.id}
              {...post}
              onClick={handlePostClick}
            />
          ))}
        </div>
        <PostModal
          isOpen={!!selectedPost}
          onClose={() => setSelectedPost(null)}
          post={selectedPost}
        />
      </div>
    </div>
  );
}