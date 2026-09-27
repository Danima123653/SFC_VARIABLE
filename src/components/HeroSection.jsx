import React from 'react';

export default function HeroSection({ isVisible }) {
  if (!isVisible) return null;

  return (
    <section className="content-card hero-box searchable-section" data-keywords="welcome budget basics student finance">
      <div className="hero-tag">Student Personal Finance Guide</div>
      <h1 className="hero-title">Master Your Money & Build Smart Habits</h1>
      <p className="hero-desc">
        A practical, interactive guide designed for university students to understand income, divide expenses, and reach financial goals.
      </p>
      <div className="d-flex justify-content-center gap-2 flex-wrap">
        <a href="#calculator" className="btn btn-brand-primary">50/30/20 Calculator</a>
        <a href="#planner" className="btn btn-brand-outline">Demo Expense Planner</a>
      </div>
    </section>
  );
}
