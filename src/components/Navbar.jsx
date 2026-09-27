import React, { useState, useEffect } from 'react';

export default function Navbar({ currency, setCurrency }) {
  const [navOpen, setNavOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeNav = () => setNavOpen(false);

  return (
    <nav className={`navbar navbar-expand-lg navbar-custom sticky-top ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      <div className="container">

        {/* ---- Brand / Logo ---- */}
        <a className="navbar-brand" href="#">
          <div className="brand-logo-wrap">
            <img src="/logo.png" alt="BudgetBasics Logo" className="brand-logo-img" />
          </div>
          <div className="brand-text-wrap">
            <span className="brand-name">
              <span className="brand-accent">Budget</span>Basics
            </span>
            <span className="brand-tagline">Student Finance Guide</span>
          </div>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setNavOpen(!navOpen)}
          aria-controls="navbarContent"
          aria-expanded={navOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${navOpen ? 'show' : ''}`} id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link" href="#basics" onClick={closeNav}>Basics</a></li>
            <li className="nav-item"><a className="nav-link" href="#needs-wants" onClick={closeNav}>Needs vs Wants</a></li>
            <li className="nav-item"><a className="nav-link" href="#calculator" onClick={closeNav}>50/30/20</a></li>
            <li className="nav-item"><a className="nav-link" href="#goals" onClick={closeNav}>Savings Goal</a></li>
            <li className="nav-item"><a className="nav-link" href="#planner" onClick={closeNav}>Expense Planner</a></li>
            <li className="nav-item"><a className="nav-link" href="#mistakes" onClick={closeNav}>Mistakes</a></li>
            <li className="nav-item"><a className="nav-link" href="#chatbot" onClick={closeNav}>Help Bot</a></li>
            <li className="nav-item"><a className="nav-link" href="#feedback" onClick={closeNav}>Feedback</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact" onClick={closeNav}>Contact</a></li>
          </ul>

          <div className="d-flex align-items-center">
            <select
              id="currency-select"
              className="currency-select"
              title="Change Currency"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="Rs.">Rs. (PKR/INR)</option>
              <option value="$">$ (USD)</option>
              <option value="€">€ (EUR)</option>
              <option value="£">£ (GBP)</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}
