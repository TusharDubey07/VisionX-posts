import React, { useState } from 'react';
import PostCard from '../components/PostCard';
import PostModal from '../components/PostModal';

const posts = [
  {
    id: 1,
    imageUrl: "/src/assets/image1santro.jpg?height=500&width=500",
    caption: "Exploring the beautiful beaches of Bali! 🏖️",
    hashtags: ["travel", "bali", "beach", "vacation"],
    postedDate: "January 1, 2025"
  },
  {
    id: 2,
    imageUrl: "/src/assets/image2santro.jpg?height=500&width=500",
    caption: "Delicious homemade pasta for dinner tonight! 🍝",
    hashtags: ["foodporn", "homemade", "pasta", "yummy"],
    postedDate: "January 3, 2025"
  },
  {
    id: 3,
    imageUrl: "/src/assets/home-cleaning-extras-large.jpg?height=500&width=500",
    caption: "Morning workout complete! Start your day right 💪",
    hashtags: ["fitness", "workout", "motivation", "healthylifestyle"],
    postedDate: "January 5, 2025"
  },
  {
    id: 4,
    imageUrl: "/src/assets/home-cleaning-extras-large.jpg?height=500&width=500",
    caption: "New painting finished! What do you think? 🎨",
    hashtags: ["art", "painting", "creative", "artist"],
    postedDate: "January 7, 2025"
  },
  {
    id: 5,
    imageUrl: "/src/assets/image1santro.jpg?height=500&width=500",
    caption: "Unboxing the latest gadget! Review coming soon 📱",
    hashtags: ["tech", "gadgets", "unboxing", "newtech"],
    postedDate: "January 10, 2025"
  },
  {
    id: 6,
    imageUrl: "/src/assets/image2santro.jpg?height=500&width=500",
    caption: "Breathtaking sunset at the mountain top 🌄",
    hashtags: ["nature", "sunset", "mountains", "hiking"],
    postedDate: "January 12, 2025"
  }
];

const InstagramPage = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (id) => {
    const post = posts.find(p => p.id === id);
    setSelectedPost(post || null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Instagram Posts</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard
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
  );
};

export default InstagramPage;