import React from 'react';
import { Link } from 'react-router-dom';

export default function FeatureComingSoon() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
        {/* Clock Image Replacement */}
        <div className="w-16 h-16 mx-auto mb-4">
          <img 
            src="/src/assets/visionx.png" 
            alt="VisionX" 
            className="w-16 h-16 object-contain"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Feature Coming Soon</h1>

        {/* Description */}
        <p className="text-gray-600 mb-6">
          We're working hard to bring you something amazing. Stay tuned!
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
          <div className="bg-blue-500 h-2.5 rounded-full w-3/4"></div>
        </div>

        {/* Back to Home Link */}
        <Link
          to="/dashboard"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
