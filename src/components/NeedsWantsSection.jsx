import React, { useState } from 'react';
import { quizData } from '../data/financeData';

export default function NeedsWantsSection({ isVisible }) {
  const [labAnswers, setLabAnswers] = useState({});

  if (!isVisible) return null;

  function checkAnswer(id, choice) {
    const item = quizData.find((q) => q.id === id);
    const correct = choice === item.correct;
    setLabAnswers((prev) => ({
      ...prev,
      [id]: { choice, correct, actual: item.correct }
    }));
  }

  return (
    <section id="needs-wants" className="content-card searchable-section" data-keywords="needs wants quiz lab classification 48 hour">
      <h2 className="card-heading">2. Needs vs. Wants Lab</h2>
      <p className="card-subtext">Practice distinguishing vital necessities from optional lifestyle comforts.</p>

      <div className="row g-3" id="quiz-cards-row">
        {quizData.map((item) => {
          const ans = labAnswers[item.id];
          let border = 'var(--border-color)';
          if (ans) {
            border = ans.correct ? 'var(--color-savings)' : 'var(--color-danger)';
          }

          return (
            <div className="col-md-6 col-lg-3" key={item.id}>
              <div className="concept-card text-center" id={`quiz-card-${item.id}`} style={{ borderColor: border }}>
                <h4 className="text-dark">{item.name}</h4>
                <p className="mb-3">{item.desc}</p>
                <div className="d-flex justify-content-center gap-2 mb-2">
                  <button
                    type="button"
                    className="btn btn-sm btn-brand-outline btn-quiz-answer"
                    onClick={() => checkAnswer(item.id, 'need')}
                  >
                    Need
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-brand-outline btn-quiz-answer"
                    onClick={() => checkAnswer(item.id, 'want')}
                  >
                    Want
                  </button>
                </div>
                <div
                  className="quiz-feedback-box mt-2"
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    minHeight: '18px',
                    color: ans ? (ans.correct ? 'var(--color-savings)' : 'var(--color-danger)') : 'inherit'
                  }}
                >
                  {ans && (ans.correct ? '✓ Correct Answer!' : `✗ Actually a ${ans.actual.toUpperCase()}`)}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-3 mt-3 rounded border" style={{ backgroundColor: 'var(--body-bg)', fontSize: '13px' }}>
        <strong className="text-primary">The 48-Hour Decision Rule:</strong> Whenever you feel the urge to purchase a non-essential item online, wait 48 hours. If the urge fades, you just saved your budget from an impulse purchase!
      </div>
    </section>
  );
}
