import React, { useState, useEffect } from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './ExpenditureAnalysis.css'; // Ensure styles are imported

const ExpenditureAnalysis = () => {
  const [expenditures, setExpenditures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/expenditures')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setExpenditures(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <p className="text-center text-lg text-red-500">Error: {error}</p>;
  if (expenditures.length === 0) return <p className="text-center text-lg">No expenditure data available.</p>;

  const userExpenditures = expenditures[0]?.monthly_expenditures?.flatMap(month => month.expenses) || [];
  const categoryData = userExpenditures.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
    return acc;
  }, {});

  const dates = [...new Set(userExpenditures.map(e => e.date))];
  const dailyTotals = dates.map(date => (
    userExpenditures.filter(e => e.date === date).reduce((sum, e) => sum + e.amount, 0)
  ));
  const monthlyData = expenditures.flatMap(exp => exp.monthly_expenditures || []).reduce((acc, month) => {
    acc[month.month] = (acc[month.month] || 0) + month.total;
    return acc;
  }, {});

  const billNotes = userExpenditures.filter(expense => expense.note) || [];
  const defaultBillNotes = [
    { note: "Electricity bill due soon" },
    { note: "Internet subscription renewal" },
    { note: "Credit card payment reminder" }
  ];

  return (
    <div className="container">
      <h2 className="h2-e">Expenditure Analysis</h2>
      
      <div className="row">
        <div className="col-md-6 card-e">
          <div className="card h-100 piee">
            <div className="card-body-e">
              <h3 className="card-title-e">Spending by Category</h3>
              <Pie className="pie-e" data={{
                labels: Object.keys(categoryData),
                datasets: [{
                  data: Object.values(categoryData),
                  backgroundColor: ['#1E40AF', '#1E3A8A', '#2563EB', '#3B82F6', '#60A5FA', '#93C5FD', '#BFDBFE']
                }]
              }} />
            </div>
          </div>
        </div>

        <div className="col-md-6 d-flex flex-column">
          <div className="card flex-fill mb-4">
            <div className="card-body-e">
              <h3 className="card-title-e">Daily Expenditure Trend</h3>
              <Line data={{
                labels: dates,
                datasets: [{
                  label: 'Daily Spend',
                  data: dailyTotals,
                  borderColor: '#F59E0B',
                  backgroundColor: '#FBBF24'
                }]
              }} />
            </div>
          </div>
          
          {/* Category-wise Breakdown (Bar Chart) */}
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Category-wise Breakdown (Bar)</h3>
            <Bar data={{
              labels: Object.keys(categoryData),
              datasets: [{
                label: 'Total Spent',
                data: Object.values(categoryData),
                backgroundColor: '#F472B6'
              }]
            }} />
          </div>
        </div>
      </div>

    

      <div className="bg-yellow-100 p-6 rounded-lg shadow-md text-center mt-6 border border-yellow-500">
        <h3 className="text-xl font-semibold text-yellow-700">🔔 Bill Reminders</h3>
        <ul className="mt-4 text-yellow-900">
          {(billNotes.length > 0 ? billNotes : defaultBillNotes).map((expense, index) => (
            <li key={index} className="flex items-center justify-between p-2 border-b border-yellow-300">
              <span className={expense.paid ? "line-through text-gray-500" : ""}>{expense.note}</span>
              <input type="checkbox" checked={expense.paid} onChange={() => { expense.paid = !expense.paid; }} className="ml-2" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpenditureAnalysis;
