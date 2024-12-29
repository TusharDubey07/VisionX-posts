import React, { useState } from 'react';
import { LinkedInCard } from '../components/LinkedInCard';
import PostModal from '../components/PostModal';

const linkedInPosts = [
  {
    id: 1,
    userAvatar: "/placeholder.svg?height=50&width=50",
    scheduledDate: "2024-12-28T15:30:00",
    timestamp: "2 hours ago",
    content: "🎯 Excited to announce my upcoming workshop on 'Leadership in the Digital Age'!\n\nIn this comprehensive session, we'll explore:\n- Modern leadership challenges\n- Digital transformation strategies\n- Building high-performing remote teams\n\nJoin us for an insightful discussion on shaping the future of leadership.",
    media: {
      type: 'image',
      url: "/src/assets/image.png"
    },
    hashtags: ["Leadership", "DigitalTransformation", "FutureOfWork"],
    likes: 230,
    comments: 45,
    shares: 28
  },
  {
    id: 2,
    userAvatar: "/placeholder.svg?height=50&width=50",
    scheduledDate: "2024-12-29T10:00:00",
    timestamp: "4 hours ago",
    content: "Proud to share that our company has been recognized as one of the 'Top 100 Places to Work' for the third consecutive year! 🏆\n\nThis achievement reflects our commitment to creating an inclusive, innovative, and supportive workplace culture.\n\nThanks to our amazing team for making this possible!",
    media: {
      type: 'image',
      url: "/src/assets/image2.png"
    },
    hashtags: ["WorkplaceCulture", "EmployeeExperience", "CompanyCulture"],
    likes: 542,
    comments: 89,
    shares: 67
  }
];

export default function LinkedInPage() {
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (id) => {
    const post = linkedInPosts.find(p => p.id === id);
    setSelectedPost(post || null);
  };

  return (
    <div className="bg-[#F3F2EF] min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8 text-center text-[#0A66C2]">
           LinkedIn Posts
        </h1>
        <div className="max-w-2xl mx-auto">
          {linkedInPosts.map((post) => (
            <LinkedInCard
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