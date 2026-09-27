import React from 'react';

export default function SavingsGoalSection({
  currency,
  goalTitle,
  setGoalTitle,
  goalTarget,
  setGoalTarget,
  goalCurrent,
  setGoalCurrent,
  goalMonthly,
  setGoalMonthly,
  percent,
  monthsLeft,
  currentNum,
  targetNum,
  isVisible
}) {
  if (!isVisible) return null;

  return (
    <div className="col-lg-6">
      <section id="goals" className="content-card h-100 searchable-section" data-keywords="savings goal planner target monthly contribution">
        <h2 className="card-heading">4. Savings Goal Planner</h2>
        <p className="card-subtext">Estimate how many months it will take to achieve your target.</p>

        <div className="mb-3">
          <label htmlFor="goal-title" className="form-label-custom">Goal Title:</label>
          <input
            type="text"
            id="goal-title"
            className="form-control form-control-custom"
            value={goalTitle}
            onChange={(e) => setGoalTitle(e.target.value)}
          />
        </div>

        <div className="row g-2 mb-3">
          <div className="col-6">
            <label htmlFor="goal-target" className="form-label-custom">
              Target (<span className="currency-symbol">{currency}</span>):
            </label>
            <input
              type="number"
              id="goal-target"
              className="form-control form-control-custom"
              value={goalTarget}
              onChange={(e) => setGoalTarget(parseFloat(e.target.value) || 0)}
              min="1"
            />
          </div>
          <div className="col-6">
            <label htmlFor="goal-current" className="form-label-custom">
              Saved So Far (<span className="currency-symbol">{currency}</span>):
            </label>
            <input
              type="number"
              id="goal-current"
              className="form-control form-control-custom"
              value={goalCurrent}
              onChange={(e) => setGoalCurrent(parseFloat(e.target.value) || 0)}
              min="0"
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="goal-monthly" className="form-label-custom">
            Monthly Contribution (<span className="currency-symbol">{currency}</span>):
          </label>
          <input
            type="number"
            id="goal-monthly"
            className="form-control form-control-custom"
            value={goalMonthly}
            onChange={(e) => setGoalMonthly(parseFloat(e.target.value) || 0)}
            min="1"
          />
        </div>

        <div className="mt-4">
          <div className="d-flex justify-content-between font-monospace fw-bold" style={{ fontSize: '12px' }}>
            <span className="text-primary" id="goal-percent-text">{percent}% Completed</span>
            <span id="goal-time-left" className="text-success">
              {monthsLeft > 0 && currentNum < targetNum ? `${monthsLeft} Months Left` : 'Goal Achieved! 🎉'}
            </span>
          </div>
          <div className="custom-progress-bg">
            <div className="custom-progress-fill" id="goal-progress-fill" style={{ width: `${percent}%` }}></div>
          </div>
        </div>
      </section>
    </div>
  );
}
