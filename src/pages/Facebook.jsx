import React, { useState } from 'react';
import { PostCardFb } from '../components/PostCardFb';
import { PostModalFb } from '../components/PostModalFb';

const posts = [
    {
        id: 1,
        userAvatar: "/placeholder.svg?height=50&width=50",
        scheduledDate: "2024-12-28T15:30:00", // Added scheduled date
        timestamp: "Created 2 hours ago",
        content: "Just finished an amazing hike! The views were breathtaking.",
        media: {
          type: 'image',
          url: "/src/assets/home-cleaning-extras-large.jpg?height=400&width=600"
        },
        hashtags: ["nature", "hiking", "adventure"],
        likes: 15,
        comments: 3,
        shares: 2
    },
    {
        id: 2,
        userAvatar: "/placeholder.svg?height=50&width=50",
        scheduledDate: "2024-12-29T10:00:00",
        timestamp: "Created 4 hours ago",
        content: "Check out my new cooking video! Learn how to make the perfect pasta.",
        media: {
          type: 'video',
          url: "https://www.instagram.com/reel/C8MllutoxSx/"
        },
        hashtags: ["cooking", "pasta", "foodie"],
        likes: 32,
        comments: 8,
        shares: 5
    },
    {
        id: 3,
        userAvatar: "/placeholder.svg?height=50&width=50",
        scheduledDate: "2024-12-30T18:45:00",
        timestamp: "Created yesterday at 3:45 PM",
        content: "Just got back from an amazing concert! The energy was incredible.",
        media: {
          type: 'image',
          url: "/src/assets/image2santro.jpg?height=400&width=600"
        },
        hashtags: ["music", "concert", "livemusic"],
        likes: 45,
        comments: 12,
        shares: 3
    },
    {
        id: 4,
        userAvatar: "/placeholder.svg?height=50&width=50",
        scheduledDate: "2024-12-31T12:00:00",
        timestamp: "Created yesterday at 10:30 AM",
        content: "My new art piece is finally complete! What do you think?",
        media: {
          type: 'image',
          url: "/src/assets/image1santro.jpg?height=400&width=600"
        },
        hashtags: ["art", "painting", "creativity"],
        likes: 78,
        comments: 25,
        shares: 7
    }
];

export default function FacebookPage() {
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (id) => {
    const post = posts.find(p => p.id === id);
    setSelectedPost(post || null);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-600">Facebook Posts</h1>
        <div className="space-y-4">
          {posts.map((post) => (
            <PostCardFb
              key={post.id}
              {...post}
              onClick={handlePostClick}
            />
          ))}
        </div>
        <PostModalFb
          isOpen={!!selectedPost}
          onClose={() => setSelectedPost(null)}
          post={selectedPost}
        />
      </div>
    </div>
  );
}