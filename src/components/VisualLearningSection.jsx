import React from 'react';

export default function VisualLearningSection({ isVisible }) {
  if (!isVisible) return null;

  return (
    <section id="infographics" className="content-card searchable-section" data-keywords="infographics visual cards 50 30 20 challenge cycle">
      <h2 className="card-heading">7. Visual Learning Cards</h2>
      <p className="card-subtext">Core financial awareness rules summarized at a glance.</p>

      <div className="row g-3">
        <div className="col-md-3">
          <div className="concept-card text-center">
            <h4 className="text-primary">50/30/20 Ratio</h4>
            <p>50% Essentials, 30% Lifestyle, 20% Emergency Savings.</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="concept-card text-center">
            <h4 style={{ color: 'var(--color-savings)' }}>30-Day Challenge</h4>
            <p>Save a small incrementing amount daily to build financial discipline.</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="concept-card text-center">
            <h4 style={{ color: 'var(--color-wants)' }}>Budget Cycle</h4>
            <p>Income → Fixed Needs → Savings Reserve → Variable Wants.</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="concept-card text-center">
            <h4 className="text-dark">Value Filter</h4>
            <p>Distinguish between long-term utility and 5-minute instant gratification.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
