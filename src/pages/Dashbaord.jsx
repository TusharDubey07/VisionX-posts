import React from 'react';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      {/* <Sidebar /> */}
      <main className="flex-1 p-6">
        <div className="rounded-lg border bg-white p-8 shadow">
          <h1 className="text-2xl font-bold">Welcome to your Dashboard</h1>
          <p className="mt-2 text-gray-600">
            Select an option from the sidebar to get started
          </p>
        </div>
        {/* Add your dashboard content here */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <p className="text-gray-600">No recent activity to display</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Analytics</h2>
            <p className="text-gray-600">Loading analytics data...</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <p className="text-gray-600">No actions available</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;