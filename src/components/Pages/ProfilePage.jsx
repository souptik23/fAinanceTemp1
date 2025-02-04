import React, { useEffect, useRef, useState } from 'react';
import { Chart } from 'chart.js/auto';
import 'animate.css'; // For animations
import { motion } from 'framer-motion'; // For advanced animations
import { useScroll, useTransform } from 'framer-motion'; // For scroll effects

const BankingProfile = () => {
  const skillsChartRef = useRef(null);
  const spendingChartRef = useRef(null);
  const savingsChartRef = useRef(null);
  const [showFullImage, setShowFullImage] = useState(false);

  // Scroll effects
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  useEffect(() => {
    // Destroy existing charts if they exist
    if (skillsChartRef.current) skillsChartRef.current.destroy();
    if (spendingChartRef.current) spendingChartRef.current.destroy();
    if (savingsChartRef.current) savingsChartRef.current.destroy();

    // Skills Pie Chart
    const skillsCtx = document.getElementById('skillsChart')?.getContext('2d');
    if (skillsCtx) {
      skillsChartRef.current = new Chart(skillsCtx, {
        type: 'doughnut',
        data: {
          labels: ['Savings', 'Investments', 'Expenses', 'Loans'],
          datasets: [
            {
              data: [40, 30, 20, 10],
              backgroundColor: [
                'rgba(52, 211, 153, 0.8)', // Green
                'rgba(96, 165, 250, 0.8)', // Blue
                'rgba(251, 146, 60, 0.8)', // Orange
                'rgba(239, 68, 68, 0.8)', // Red
              ],
              borderColor: '#fff',
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: { position: 'bottom' },
          },
          animation: { animateScale: true, animateRotate: true },
        },
      });
    }

    // Spending Line Chart
    const spendingCtx = document.getElementById('spendingChart')?.getContext('2d');
    if (spendingCtx) {
      spendingChartRef.current = new Chart(spendingCtx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            {
              label: 'Monthly Spending',
              data: [500, 700, 600, 900, 800, 1000],
              borderColor: 'rgba(239, 68, 68, 1)', // Red
              tension: 0.4,
              fill: true,
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
            },
          ],
        },
        options: {
          responsive: true,
          plugins: { legend: { display: false } },
          scales: { y: { beginAtZero: true } },
          animation: { duration: 2000, easing: 'easeInOutQuart' },
        },
      });
    }

    // Savings Bar Chart
    const savingsCtx = document.getElementById('savingsChart')?.getContext('2d');
    if (savingsCtx) {
      savingsChartRef.current = new Chart(savingsCtx, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            {
              label: 'Monthly Savings',
              data: [200, 300, 400, 500, 600, 700],
              backgroundColor: 'rgba(52, 211, 153, 0.8)', // Green
              borderRadius: 5,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: { legend: { display: false } },
          scales: { y: { beginAtZero: true } },
        },
      });
    }

    // Cleanup function
    return () => {
      if (skillsChartRef.current) skillsChartRef.current.destroy();
      if (spendingChartRef.current) spendingChartRef.current.destroy();
      if (savingsChartRef.current) savingsChartRef.current.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row p-4 gap-4">
      {/* Left Column */}
      <div className="w-full md:w-1/3 space-y-4">
        {/* Profile Card */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-4 animate__animated animate__fadeIn"
          style={{ scale }}
          onMouseEnter={() => setShowFullImage(true)}
          onMouseLeave={() => setShowFullImage(false)}
        >
          {showFullImage && (
            <div className="animate__animated animate__zoomIn">
              <img
                src="https://via.placeholder.com/150"
                alt="Profile"
                className="rounded-full w-32 h-32 mx-auto mb-4"
              />
            </div>
          )}
          <p className="text-xl font-bold text-center">John Doe</p>
          <p className="text-gray-600 text-center">Senior Account Holder</p>
          <div className="space-y-2 mt-4">
            <p>Account Type: Premium</p>
            <p>Balance: $12,345.67</p>
            <p>Card: **** 1234</p>
            <p>Branch: New York</p>
          </div>
        </motion.div>

        {/* Savings Goal */}
        <div className="bg-white shadow-lg rounded-lg p-4 animate__animated animate__fadeIn">
          <p className="text-lg font-bold">Savings Goal</p>
          <p className="text-green-500">$8,000 / $12,000</p>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full md:w-2/3 space-y-4">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: 'fas fa-piggy-bank', color: 'text-green-500', label: 'Savings', value: '$8,000' },
            { icon: 'fas fa-chart-line', color: 'text-blue-500', label: 'Investments', value: '$15,000' },
            { icon: 'fas fa-credit-card', color: 'text-purple-500', label: 'Spending', value: '$2,500' },
            { icon: 'fas fa-hand-holding-usd', color: 'text-yellow-500', label: 'Loans', value: '$5,000' },
          ].map((stat, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4">
              <i className={`${stat.icon} ${stat.color} text-2xl`}></i>
              <p className="text-sm">{stat.label}</p>
              <p className="font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="bg-white shadow-lg rounded-lg p-4 space-y-4">
          <p className="text-lg font-bold">Financial Distribution</p>
          <canvas id="skillsChart" className="w-full h-48"></canvas>
          <p className="text-lg font-bold">Monthly Spending</p>
          <canvas id="spendingChart" className="w-full h-48"></canvas>
          <canvas id="savingsChart" className="w-full h-48"></canvas>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <p className="text-lg font-bold">Recent Transactions</p>
          {[
            { icon: 'fas fa-shopping-cart', label: 'Grocery Store', amount: '-$120', time: '2 hours ago' },
            { icon: 'fas fa-coffee', label: 'Coffee Shop', amount: '-$5', time: '4 hours ago' },
            { icon: 'fas fa-dollar-sign', label: 'Salary', amount: '+$3,000', time: '1 day ago' },
          ].map((transaction, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
              <div>
                <i className={`${transaction.icon} text-gray-500 mr-2`}></i>
                <span>{transaction.label}</span>
              </div>
              <div>
                <span>{transaction.time}</span>
                <span className="ml-2 font-bold">{transaction.amount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BankingProfile;