import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <h4 className="footer-title d-flex align-items-center gap-2">
              <img src="/logo.png" alt="BudgetBasics Logo" className="footer-logo-img" />
              <span>BudgetBasics</span>
            </h4>
            <p>
              An educational personal finance Single Page Application (SPA) designed to help university students and young learners build responsible budgeting, spending, and savings discipline.
            </p>
            <p className="text-secondary" style={{ fontSize: '12px' }}>
              Conforming to Aptech Limited Project Guidelines.
            </p>
          </div>

          <div className="col-lg-2 col-md-6">
            <h4 className="footer-title">Learning Modules</h4>
            <ul className="footer-links">
              <li><a href="#basics">1. Budgeting Basics</a></li>
              <li><a href="#needs-wants">2. Needs vs Wants</a></li>
              <li><a href="#calculator">3. 50/30/20 Rule</a></li>
              <li><a href="#goals">4. Savings Goal</a></li>
              <li><a href="#planner">5. Expense Planner</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h4 className="footer-title">Awareness Tools</h4>
            <ul className="footer-links">
              <li><a href="#mistakes">Common Mistakes</a></li>
              <li><a href="#infographics">Visual Learning</a></li>
              <li><a href="#chatbot">Budget Helper Bot</a></li>
              <li><a href="#feedback">Student Feedback</a></li>
              <li><a href="#contact">Campus Contact</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h4 className="footer-title">Project Desk</h4>
            <p className="mb-1">
              <i className="fa-solid fa-envelope text-primary me-2"></i>
              <strong>Email:</strong> sfc-variable@budgetbasics.edu
            </p>
            <p className="mb-1">
              <i className="fa-solid fa-graduation-cap text-primary me-2"></i>
              <strong>Dept:</strong> SFC Variable Student Support
            </p>
            <p className="mb-0 text-secondary" style={{ fontSize: '12px' }}>
              <i className="fa-solid fa-lock text-secondary me-2"></i>
              <strong>Privacy:</strong> Client-side demo only (no permanent storage).
            </p>
          </div>
        </div>

        <div className="footer-bottom-bar d-flex justify-content-between align-items-center flex-wrap gap-2">
          <div>
            © 2026 <strong>BudgetBasics</strong> — Student Personal Finance Project. All rights reserved.
          </div>
          <div>
            <a href="#" className="text-primary text-decoration-none fw-semibold">↑ Back to Top</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
