import React, { useState } from 'react';
import { sampleBudgetItems, formatMoney } from '../data/financeData';

export default function BasicsSection({ currency, isVisible }) {
  const [quizFeedback, setQuizFeedback] = useState(null);

  if (!isVisible) return null;

  return (
    <section id="basics" className="content-card searchable-section" data-keywords="basics income fixed expenses variable budget">
      <h2 className="card-heading">1. Budgeting Basics</h2>
      <p className="card-subtext">Understanding where student money comes from and how it gets categorized.</p>

      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <div className="concept-card">
            <h3>Income</h3>
            <p>Monthly allowances, part-time campus wages, stipends, or scholarship disbursements.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="concept-card">
            <h3>Fixed Expenses</h3>
            <p>Regular essential commitments that stay constant (e.g. dorm rent, semester bus pass, tuition).</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="concept-card">
            <h3>Variable Expenses</h3>
            <p>Daily fluctuating expenses that depend on choices (e.g. cafeteria food, stationery, outings).</p>
          </div>
        </div>
      </div>

      <h5 className="fw-bold text-dark mb-2" style={{ fontSize: '14px' }}>Sample Student Monthly Budget</h5>
      <div className="custom-table-wrap table-responsive">
        <table className="table custom-table">
          <thead>
            <tr>
              <th>Expense Item</th>
              <th>Type</th>
              <th>Sample Amount</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody id="sample-budget-table-body">
            {sampleBudgetItems.map((item, idx) => (
              <tr key={idx}>
                <td><strong>{item.name}</strong></td>
                <td><span className={`badge-pill-tag ${item.badgeClass}`}>{item.type}</span></td>
                <td><strong>{currency} {formatMoney(item.amount)}</strong></td>
                <td className="text-muted">{item.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-3 mt-3 rounded border" style={{ backgroundColor: 'var(--body-bg)' }}>
        <strong className="text-dark" style={{ fontSize: '13px' }}>Knowledge Check:</strong>
        <p className="text-muted my-2" style={{ fontSize: '13px' }}>
          Is a monthly semester bus pass a <em>Fixed Expense</em> or a <em>Variable Expense</em>?
        </p>
        <div className="d-flex gap-2">
          <button
            type="button"
            className="btn btn-sm btn-brand-outline"
            id="btn-quiz-fixed"
            onClick={() => setQuizFeedback({ correct: true, text: '✓ Correct! A semester bus pass is a recurring fixed necessity.' })}
          >
            Fixed Expense
          </button>
          <button
            type="button"
            className="btn btn-sm btn-brand-outline"
            id="btn-quiz-variable"
            onClick={() => setQuizFeedback({ correct: false, text: '✗ Incorrect. The pass cost is fixed per term regardless of trips.' })}
          >
            Variable Expense
          </button>
        </div>
        {quizFeedback && (
          <div
            id="basics-quiz-feedback"
            className="mt-2"
            style={{
              fontSize: '13px',
              fontWeight: 600,
              color: quizFeedback.correct ? 'var(--color-savings)' : 'var(--color-danger)'
            }}
          >
            <strong>{quizFeedback.text}</strong>
          </div>
        )}
      </div>
    </section>
  );
}
