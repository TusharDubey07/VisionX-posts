import React, { useState } from 'react';
import fantasy from '../assets/fantasy.jpg'
import gujji from '../assets/gujji.png'

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = ({ selectedClient, setSelectedClient }) => {
  // Dummy data for the graph
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Engagement Rate',
        data: [65, 59, 80, 81, 56, 55, 40, 84, 64, 71, 89, 90],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: 'Follower Growth',
        data: [28, 48, 40, 19, 86, 27, 90, 65, 59, 80, 81, 56],
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
      }
    ]
  };

  // Dummy clients data
  const clients = [
    {
      id: 1,
      name: "Fantasy Collection",
      logo: fantasy,
      industry: "Clothes",
      socialMedia: {
        instagram: true,
        facebook: true,
        linkedin: true,
        twitter: false
      }
    },
    {
      id: 2,
      name: "Gujji",
      logo: gujji,
      industry: "Laundry",
      socialMedia: {
        instagram: true,
        facebook: false,
        linkedin: false,
        twitter: true
      }
    },
    {
      id: 3,
      name: "Wandra",
      logo: "https://via.placeholder.com/50",
      industry: "Home cleaning",
      socialMedia: {
        instagram: true,
        facebook: true,
        linkedin: false,
        twitter: true
      }
    }
  ];

  const handleClientSelect = (client) => {
    setSelectedClient({
      ...client,
      // Add any additional data needed for the sidebar
      availableMenuItems: Object.entries(client.socialMedia)
        .filter(([_, isActive]) => isActive)
        .map(([platform]) => platform)
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="p-6">
        <div className="rounded-lg border bg-white p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            {selectedClient ? `Dashboard - ${selectedClient.name}` : 'Welcome to your Dashboard'}
          </h1>

          {/* Analytics Section */}
          <div className="mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Analytics Overview</h2>
              <div className="h-[400px] w-full">
                <Line data={chartData} options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'top',
                    },
                    title: {
                      display: true,
                      text: 'Yearly Performance'
                    }
                  }
                }} />
              </div>
            </div>
          </div>

          {/* Clients Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Your Clients</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clients.map((client) => (
                <div
                  key={client.id}
                  onClick={() => handleClientSelect(client)}
                  className={`
                    p-6 bg-white rounded-lg shadow-lg transition-all duration-300 cursor-pointer
                    hover:shadow-xl hover:transform hover:scale-105
                    ${selectedClient?.id === client.id ? 'ring-2 ring-blue-500' : ''}
                  `}
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{client.name}</h3>
                      <p className="text-sm text-gray-600">{client.industry}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-600">Active Social Media:</p>
                    <div className="flex gap-2 mt-2">
                      {Object.entries(client.socialMedia)
                        .filter(([_, isActive]) => isActive)
                        .map(([platform]) => (
                          <span
                            key={platform}
                            className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-800"
                          >
                            {platform}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;