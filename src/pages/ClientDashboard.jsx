import React, { useState } from 'react';
import { FaUsers, FaThumbsUp, FaComments, FaCalendar, 
         FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ClientDashboard = () => {
  const [clientName] = useState('John Doe');

  const quickStats = [
    { title: 'Total Followers', value: '10,234', icon: FaUsers },
    { title: 'Total Likes', value: '45,678', icon: FaThumbsUp },
    { title: 'Total Comments', value: '5,678', icon: FaComments },
    { title: 'Scheduled Posts', value: '12', icon: FaCalendar },
  ];

  const recentPosts = [
    { platform: 'Facebook', content: 'Check out our latest product launch!', engagement: '1.2k likes', icon: FaFacebook },
    { platform: 'Twitter', content: 'Join us for a live Q&A session tomorrow!', engagement: '500 retweets', icon: FaTwitter },
    { platform: 'Instagram', content: 'Behind the scenes at our annual conference', engagement: '3k likes', icon: FaInstagram },
    { platform: 'LinkedIn', content: "We're hiring! Check out our open positions", engagement: '200 comments', icon: FaLinkedin },
  ];

  // Chart data
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Engagement',
      data: [65, 59, 80, 81, 56, 55],
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
    }]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Engagement Overview'
      },
    },
    maintainAspectRatio: false
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Welcome back, {clientName}!</h1>
      
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {quickStats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">{stat.title}</h3>
              <stat.icon className="h-5 w-5 text-blue-500" />
            </div>
            <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Posts */}
      <h2 className="text-2xl font-semibold mb-4">Recent Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {recentPosts.map((post, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <post.icon className="h-5 w-5 mr-2 text-blue-500" />
                <h3 className="text-sm font-medium">{post.platform}</h3>
              </div>
              <span className="text-xs text-gray-500">{post.engagement}</span>
            </div>
            <p className="text-sm text-gray-600">{post.content}</p>
          </div>
        ))}
      </div>

      {/* Performance Metrics */}
      <h2 className="text-2xl font-semibold mb-4">Performance Metrics</h2>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-lg font-semibold mb-4">Engagement Overview</h3>
        <div className="h-[300px]">
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>

      {/* Scheduled Posts */}
      <h2 className="text-2xl font-semibold mb-4">Upcoming Scheduled Posts</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Next 7 Days</h3>
        <ul className="space-y-4">
          {['Product feature highlight (Facebook)', 'Industry news roundup (Twitter)', 'Team spotlight (Instagram)'].map((post, index) => (
            <li key={index} className="flex items-center justify-between py-2 border-b">
              <span className="text-gray-600">{post}</span>
              <button className="px-4 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                Edit
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClientDashboard;