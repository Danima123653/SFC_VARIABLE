import React from 'react';
import { formatMoney } from '../data/financeData';

export default function CalculatorSection({
  currency,
  monthlyIncome,
  setMonthlyIncome,
  needs,
  wants,
  savings,
  isVisible
}) {
  if (!isVisible) return null;

  return (
    <section id="calculator" className="content-card searchable-section" data-keywords="50 30 20 calculator rule split savings">
      <h2 className="card-heading">3. 50/30/20 Budget Rule Calculator</h2>
      <p className="card-subtext">Divide your income into three disciplined pillars: 50% Needs, 30% Wants, and 20% Savings.</p>

      <div className="mb-3" style={{ maxWidth: '320px' }}>
        <label htmlFor="income-input" className="form-label-custom">
          Monthly Income / Allowance (<span className="currency-symbol">{currency}</span>):
        </label>
        <input
          type="number"
          id="income-input"
          className="form-control form-control-custom"
          value={monthlyIncome}
          onChange={(e) => setMonthlyIncome(parseFloat(e.target.value) || 0)}
          min="0"
          step="500"
        />
      </div>

      <div className="row g-3 mt-1">
        <div className="col-md-4">
          <div className="pillar-card pillar-needs">
            <div className="pillar-tag">50% Needs</div>
            <div className="pillar-val">
              <span className="currency-symbol">{currency}</span> <span id="calc-needs-val">{formatMoney(needs)}</span>
            </div>
            <div className="pillar-sub">Room rent, food, transport, exam fees</div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="pillar-card pillar-wants">
            <div className="pillar-tag">30% Wants</div>
            <div className="pillar-val">
              <span className="currency-symbol">{currency}</span> <span id="calc-wants-val">{formatMoney(wants)}</span>
            </div>
            <div className="pillar-sub">Dining out, coffee, movies, hobbies</div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="pillar-card pillar-savings">
            <div className="pillar-tag">20% Savings</div>
            <div className="pillar-val">
              <span className="currency-symbol">{currency}</span> <span id="calc-savings-val">{formatMoney(savings)}</span>
            </div>
            <div className="pillar-sub">Emergency fund & future goals</div>
          </div>
        </div>
      </div>

      <p className="text-muted mt-3 mb-0 fst-italic" style={{ fontSize: '12px' }}>
        * Educational Note: This percentage split is a proven benchmark and can be adapted to individual needs.
      </p>
    </section>
  );
}
