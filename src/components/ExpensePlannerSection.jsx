import React, { useState } from 'react';
import { formatMoney } from '../data/financeData';

export default function ExpensePlannerSection({
  currency,
  monthlyIncome,
  expenses,
  setExpenses,
  totalExpenses,
  balance,
  isVisible
}) {
  const today = new Date().toISOString().split('T')[0];
  const [expDate, setExpDate] = useState(today);
  const [expCategory, setExpCategory] = useState('Food');
  const [expDesc, setExpDesc] = useState('');
  const [expAmt, setExpAmt] = useState('');

  if (!isVisible) return null;

  function handleAddExpense(e) {
    e.preventDefault();
    const amt = parseFloat(expAmt);
    if (!expDesc.trim() || isNaN(amt) || amt <= 0) {
      alert('Please enter a valid description and a positive amount.');
      return;
    }

    const newExpense = {
      id: Date.now(),
      date: expDate || today,
      category: expCategory,
      desc: expDesc.trim(),
      amount: amt
    };

    setExpenses((prev) => [...prev, newExpense]);
    setExpDesc('');
    setExpAmt('');
  }

  function handleDeleteExpense(id) {
    setExpenses((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <section id="planner" className="content-card mt-4 searchable-section" data-keywords="expense planner ledger track table spending balance">
      <h2 className="card-heading">5. Expense Planner Demonstration</h2>
      <p className="card-subtext">Log sample expenses to audit your spending against your monthly income.</p>

      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <div className="summary-stat-box">
            <div className="summary-stat-label">Monthly Income</div>
            <div className="summary-stat-val">
              <span className="currency-symbol">{currency}</span> <span id="ledger-income-val">{formatMoney(monthlyIncome)}</span>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="summary-stat-box">
            <div className="summary-stat-label">Total Expenses</div>
            <div className="summary-stat-val text-danger">
              <span className="currency-symbol">{currency}</span> <span id="ledger-expense-val">{formatMoney(totalExpenses)}</span>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="summary-stat-box">
            <div className="summary-stat-label">Balance Remaining</div>
            <div
              className="summary-stat-val"
              id="ledger-balance-box"
              style={{ color: balance >= 0 ? 'var(--color-savings)' : 'var(--color-danger)' }}
            >
              <span className="currency-symbol">{currency}</span> <span id="ledger-balance-val">{formatMoney(balance)}</span>
            </div>
          </div>
        </div>
      </div>

      <form id="add-expense-form" className="row g-2 mb-3" onSubmit={handleAddExpense}>
        <div className="col-md-3">
          <input
            type="date"
            id="expense-date"
            className="form-control form-control-custom"
            value={expDate}
            onChange={(e) => setExpDate(e.target.value)}
            required
          />
        </div>
        <div className="col-md-2">
          <select
            id="expense-category"
            className="form-select form-select-custom"
            value={expCategory}
            onChange={(e) => setExpCategory(e.target.value)}
            required
          >
            <option value="Food">Food & Dining</option>
            <option value="Transport">Transport</option>
            <option value="Education">Education</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Utilities">Utilities</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="text"
            id="expense-desc"
            className="form-control form-control-custom"
            placeholder="Description (e.g. Lunch, Book)"
            value={expDesc}
            onChange={(e) => setExpDesc(e.target.value)}
            required
          />
        </div>
        <div className="col-md-2">
          <input
            type="number"
            id="expense-amt"
            className="form-control form-control-custom"
            placeholder="Amount"
            value={expAmt}
            onChange={(e) => setExpAmt(e.target.value)}
            min="1"
            required
          />
        </div>
        <div className="col-md-1">
          <button type="submit" className="btn btn-brand-primary w-100">+ Add</button>
        </div>
      </form>

      <div className="custom-table-wrap table-responsive">
        <table className="table custom-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Description</th>
              <th>Amount</th>
              <th className="text-end">Action</th>
            </tr>
          </thead>
          <tbody id="expenses-table-body">
            {expenses.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center text-muted py-4">
                  No expenses logged yet. Add your first spending item above!
                </td>
              </tr>
            ) : (
              expenses.map((item) => (
                <tr key={item.id}>
                  <td>{item.date}</td>
                  <td><span className="badge-pill-tag badge-default">{item.category}</span></td>
                  <td>{item.desc}</td>
                  <td><strong>{currency} {formatMoney(item.amount)}</strong></td>
                  <td className="text-end">
                    <button
                      type="button"
                      className="btn btn-brand-danger btn-sm btn-delete-expense"
                      onClick={() => handleDeleteExpense(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
