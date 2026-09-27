import React, { useState } from 'react';
import { mistakesData } from '../data/financeData';

export default function MistakesSection({ isVisible }) {
  const [openAccordion, setOpenAccordion] = useState(0);

  if (!isVisible) return null;

  return (
    <section id="mistakes" className="content-card searchable-section" data-keywords="mistakes impulse buying leak subscriptions spending without plan">
      <h2 className="card-heading">6. Common Student Money Mistakes</h2>
      <p className="card-subtext">Practical solutions for typical financial pitfalls.</p>

      <div className="accordion" id="mistakesAccordion">
        {mistakesData.map((item, idx) => {
          const isOpen = openAccordion === idx;
          return (
            <div className="accordion-item" key={item.id}>
              <h2 className="accordion-header" id={`heading-${item.id}`}>
                <button
                  className={`accordion-button ${isOpen ? '' : 'collapsed'}`}
                  type="button"
                  onClick={() => setOpenAccordion(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                  aria-controls={item.id}
                >
                  {item.title}
                </button>
              </h2>
              {isOpen && (
                <div id={item.id} className="accordion-collapse collapse show">
                  <div className="accordion-body">
                    {item.body}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
