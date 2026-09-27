import React, { useState, useEffect } from 'react';
import { formatMoney } from '../data/financeData';

export default function TopMetaBar() {
  const [liveTime, setLiveTime] = useState('');
  const [visitorCount, setVisitorCount] = useState(1421);

  useEffect(() => {
    function tick() {
      const now = new Date();
      setLiveTime(now.toLocaleDateString() + ' ' + now.toLocaleTimeString());
    }
    tick();
    const clockInterval = setInterval(tick, 1000);

    let initialCount = 1421;
    try {
      const saved = localStorage.getItem('budgetbasics_visitors');
      if (saved) initialCount = parseInt(saved, 10) + 1;
      localStorage.setItem('budgetbasics_visitors', initialCount);
    } catch (e) {}
    setVisitorCount(initialCount);

    const visitorInterval = setInterval(() => {
      setVisitorCount((prev) => {
        const next = prev + Math.floor(Math.random() * 2) + 1;
        try {
          localStorage.setItem('budgetbasics_visitors', next);
        } catch (e) {}
        return next;
      });
    }, 7000);

    return () => {
      clearInterval(clockInterval);
      clearInterval(visitorInterval);
    };
  }, []);

  return (
    <div className="top-meta-bar">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <span className="live-dot"></span>
            <span id="live-clock">{liveTime || 'Loading...'}</span>
          </div>
          <div>
            <span>Active Learners: <strong className="text-success" id="visitor-counter">{formatMoney(visitorCount)}</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
}
