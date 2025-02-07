// ---------------------------------------------------------------------------------
import React from "react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Plus,
  CreditCard,
  Send,
  Wallet,
  TrendingUp,
  DollarSign,
  Bell,
  Calendar,
  Clock,
  AlertCircle,
  Settings,
} from "lucide-react";

// the credit score element
const CreditScoreCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-lg font-bold mb-4">Credit Score</h3>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xl font-bold">750</p>
          <p className="text-gray-500">Good Credit</p>
        </div>
        <div className="bg-green-200 h-12 w-12 rounded-full flex items-center justify-center">
          <TrendingUp className="text-green-600" size={24} />
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-500">
        Your credit score is in good standing. Keep up the good work!
      </p>
    </div>
  );
};

const ProfilePage = () => {
  // Previous data remains the same
  const upcomingPayments = [
    {
      id: 1,
      name: "Netflix Subscription",
      amount: 14.99,
      dueDate: "2024-02-15",
      logo: "🎬",
      daysLeft: 3,
      type: "subscription",
    },
    {
      id: 2,
      name: "Credit Card Bill",
      amount: 1250.0,
      dueDate: "2024-02-20",
      logo: "💳",
      daysLeft: 8,
      type: "bill",
      minimumDue: 125.0,
    },
    {
      id: 3,
      name: "Spotify Premium",
      amount: 9.99,
      dueDate: "2024-02-18",
      logo: "🎵",
      daysLeft: 6,
      type: "subscription",
    },
  ];

  // Monthly spending data remains the same
  const monthlyData = [
    { month: "Jan", spending: 2400, income: 4500 },
    { month: "Feb", spending: 1398, income: 4500 },
    { month: "Mar", spending: 3800, income: 4800 },
    { month: "Apr", spending: 3908, income: 4700 },
    { month: "May", spending: 4800, income: 5200 },
    { month: "Jun", spending: 3800, income: 4900 },
  ];

  const getDaysLeftColor = (days) => {
    if (days <= 3) return "text-red-600";
    if (days <= 7) return "text-orange-500";
    return "text-green-600";
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Column */}
          <div className="col-span-12 md:col-span-3">
            {/* Profile Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
                      alt="Profile"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">
                      Alex Thompson
                    </h2>
                    <p className="text-sm text-gray-500">Premium Account</p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <Settings className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 rounded-xl p-3">
                  <p className="text-sm text-gray-500">Total Balance</p>
                  <p className="text-lg font-bold text-gray-800">$24,512.00</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-3">
                  <p className="text-sm text-gray-500">Reward Points</p>
                  <p className="text-lg font-bold text-gray-800">2,145</p>
                </div>
              </div>

              <div className="flex justify-between text-sm text-gray-500">
                <span>Account Number</span>
                <span className="font-medium text-gray-800">****3258</span>
              </div>
            </div>

            {/* Rest of the code remains exactly the same */}
            {/* Upcoming Payments Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mt-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-gray-800">
                  Upcoming Payments
                </h3>
                <Bell className="text-gray-400 h-5 w-5" />
              </div>

              <div className="space-y-4">
                {upcomingPayments.map((payment) => (
                  <div
                    key={payment.id}
                    className="bg-gray-50 rounded-xl p-4 relative"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{payment.logo}</span>
                        <div>
                          <p className="font-medium text-gray-800">
                            {payment.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            Due {new Date(payment.dueDate).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <span className="font-bold text-gray-800">
                        ${payment.amount.toFixed(2)}
                      </span>
                    </div>

                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span
                          className={`text-sm font-medium ${getDaysLeftColor(
                            payment.daysLeft
                          )}`}
                        >
                          {payment.daysLeft} days left
                        </span>
                      </div>
                      <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                        Pay Now
                      </button>
                    </div>

                    {payment.type === "bill" && (
                      <div className="mt-2 text-sm text-gray-500">
                        Minimum due: ${payment.minimumDue.toFixed(2)}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Middle Column */}
          <div className="col-span-12 md:col-span-6 space-y-6">
            {/* Cards Section with Enhanced Design */}
            <div className="grid grid-cols-2 gap-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl transform transition-transform group-hover:scale-105 shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <div className="absolute top-0 left-0 w-full h-full bg-[url('/api/placeholder/400/200')] opacity-10 mix-blend-overlay"></div>
                </div>
                <div className="relative p-6 text-white">
                  <div className="flex justify-between items-start mb-8">
                    <CreditCard className="h-8 w-8" />
                    <img
                      src="/api/placeholder/60/30"
                      alt="Visa"
                      className="h-6"
                    />
                  </div>
                  <p className="text-2xl font-bold tracking-wider mb-4">
                    •••• •••• •••• 4582
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm opacity-80">Card Holder</p>
                      <p className="font-medium">Alex Thompson</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm opacity-80">Expires</p>
                      <p className="font-medium">12/24</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl transform transition-transform group-hover:scale-105 shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <div className="absolute top-0 left-0 w-full h-full bg-[url('/api/placeholder/400/200')] opacity-10 mix-blend-overlay"></div>
                </div>
                <div className="relative p-6 text-white">
                  <div className="flex justify-between items-start mb-8">
                    <CreditCard className="h-8 w-8" />
                    <img
                      src="/api/placeholder/60/30"
                      alt="Mastercard"
                      className="h-6"
                    />
                  </div>
                  <p className="text-2xl font-bold tracking-wider mb-4">
                    •••• •••• •••• 7851
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm opacity-80">Card Holder</p>
                      <p className="font-medium">Alex Thompson</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm opacity-80">Expires</p>
                      <p className="font-medium">09/25</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Compact Spending Chart with More Info */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-gray-800">
                  Financial Overview
                </h3>
                <select className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm">
                  <option>Last 6 months</option>
                  <option>Last year</option>
                </select>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="bg-gray-50 rounded-xl p-3">
                  <p className="text-sm text-gray-500">Monthly Spending</p>
                  <p className="text-lg font-bold text-gray-800">$3,824</p>
                  <span className="text-sm text-green-600">↑ 2.5%</span>
                </div>
                <div className="bg-gray-50 rounded-xl p-3">
                  <p className="text-sm text-gray-500">Monthly Income</p>
                  <p className="text-lg font-bold text-gray-800">$4,900</p>
                  <span className="text-sm text-green-600">↑ 4.1%</span>
                </div>
                <div className="bg-gray-50 rounded-xl p-3">
                  <p className="text-sm text-gray-500">Savings Rate</p>
                  <p className="text-lg font-bold text-gray-800">22%</p>
                  <span className="text-sm text-green-600">↑ 1.5%</span>
                </div>
              </div>

              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="spending"
                      stroke="#8884d8"
                      strokeWidth={2}
                      dot={false}
                    />
                    <Line
                      type="monotone"
                      dataKey="income"
                      stroke="#82ca9d"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                <span>● Income</span>
                <span>● Spending</span>
                <button className="text-indigo-600 hover:text-indigo-800">
                  View Details
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Same as before with Recent Transactions and Quick Transfer */}
          {/* Right Column */}
          <div className="col-span-12 md:col-span-3 space-y-6">
            {/* Credit Score Card */}
            {/* Right Column - Same as before with Recent Transactions and Quick Transfer */}
            {/* Right Column */}
            {/* Add Credit Score Card */}
            <CreditScoreCard />

            {/* Recent Transactions */}
            {/* Recent Transactions */}
            <div className="bg-white rounded-2xl shadow-lg p-4"> {/* Reduced padding from p-6 to p-4 */}
              <div className="flex justify-between items-center mb-4"> {/* Reduced margin-bottom from mb-6 to mb-4 */}
                <h3 className="text-lg font-bold text-gray-800">
                  Recent Transactions
                </h3>
                <button className="text-indigo-600 hover:text-indigo-800">
                  See all
                </button>
              </div>
              <div className="space-y-3"> {/* Reduced space-y from space-y-4 to space-y-3 */}
                {[
                  {
                    icon: "🛒",
                    name: "Shopping",
                    amount: -82.5,
                    time: "2h ago",
                  },
                  {
                    icon: "🍽️",
                    name: "Restaurant",
                    amount: -35.2,
                    time: "5h ago",
                  },
                  {
                    icon: "💰",
                    name: "Salary",
                    amount: 2750.0,
                    time: "1d ago",
                  },
                ].map((transaction, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 rounded-xl hover:bg-gray-50">
                    <div className="flex items-center space-x-2"> {/* Reduced space-x from space-x-3 to space-x-2 */}
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-lg"> {/* Reduced width and height from w-10 h-10 to w-8 h-8 */}
                        {transaction.icon}
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">
                          {transaction.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {transaction.time}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`font-medium ${
                        transaction.amount > 0
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {transaction.amount > 0 ? "+" : ""}
                      {transaction.amount.toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Transfer */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Quick Transfer
              </h3>
              <div className="flex space-x-2 mb-4">
                {[1, 2, 3].map((_, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center"
                  >
                    <img
                      src={`/api/placeholder/40/40`}
                      alt="Contact"
                      className="w-full h-full rounded-full"
                    />
                  </div>
                ))}
                <button className="w-10 h-10 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 hover:border-indigo-500 hover:text-indigo-500">
                  <Plus size={20} />
                </button>
              </div>
              <button className="w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition-colors">
                Transfer Money
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
