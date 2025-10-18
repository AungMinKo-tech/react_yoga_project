const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold text-green-700">Total Members</h2>
          <p className="text-3xl font-bold mt-2">125</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold text-green-700">Upcoming Events</h2>
          <p className="text-3xl font-bold mt-2">4</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold text-green-700">Active Trainers</h2>
          <p className="text-3xl font-bold mt-2">8</p>
        </div>
      </div>

      <div className="mt-10 bg-white rounded-2xl shadow p-6">
        <h2 className="text-2xl font-semibold text-green-800 mb-3">
          Resort Updates
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Welcome to the Unlock Wealth Resort management system. Here, you can
          manage members, trainers, events, and more from a single dashboard.
          Stay tuned for upcoming features!
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
