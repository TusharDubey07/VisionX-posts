import React, { useState } from 'react';
import { ImagePlus, Hash } from 'lucide-react'

export function CreatePostModal({ isOpen, onClose }) {
  const [caption, setCaption] = useState('');
  const [hashtags, setHashtags] = useState('');
  const [mediaFile, setMediaFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ caption, hashtags, mediaFile });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white sm:max-w-[525px] w-full rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-primary mb-4">Create New Post</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Caption */}
          <div className="space-y-2">
            <label htmlFor="caption" className="text-sm font-medium text-gray-700">Caption</label>
            <textarea
              id="caption"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Write your caption here..."
              className="w-full min-h-[100px] p-2 border rounded-md resize-none"
            />
          </div>

          {/* Media Upload */}
          <div className="space-y-2">
            <label htmlFor="media" className="text-sm font-medium text-gray-700">Image or Video</label>
            <div className="flex items-center justify-center w-full border-2 border-dashed rounded-lg h-32 cursor-pointer bg-gray-50 hover:bg-gray-100">
              <label htmlFor="media" className="text-center">
                <ImagePlus  className="w-8 h-8 mb-2 mx-auto text-gray-400" />
                <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
                <p className="text-xs text-gray-500">PNG, JPG, GIF or MP4 (MAX. 800x400px)</p>
                <input
                  id="media"
                  type="file"
                  accept="image/*,video/*"
                  onChange={(e) => setMediaFile(e.target.files?.[0] || null)}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* Hashtags */}
          <div className="space-y-2 relative">
            <label htmlFor="hashtags" className="text-sm font-medium text-gray-700">Hashtags</label>
            <div className="relative">
              <Hash alt="Hash Icon" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                id="hashtags"
                value={hashtags}
                onChange={(e) => setHashtags(e.target.value)}
                placeholder="awesome, newpost"
                className="pl-10 w-full p-2 border rounded-md"
              />
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
            >
              Create Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
