import React, { useState } from 'react';
import { useWowAnimation } from '../utils/wowManager';

export default function FeedbackSection({ isVisible }) {
  const [fbName, setFbName] = useState('');
  const [fbEmail, setFbEmail] = useState('');
  const [fbRating, setFbRating] = useState('5');
  const [fbComments, setFbComments] = useState('');
  const [errors, setErrors] = useState({});
  const [shake, setShake] = useState(false);
  const [success, setSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState('');
  const [hoveredStar, setHoveredStar] = useState(0);

  useWowAnimation([isVisible]);

  if (!isVisible) return null;

  function countLetters(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if ((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z')) {
        count++;
      }
    }
    return count;
  }

  function containsNumber(str) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] >= '0' && str[i] <= '9') return true;
    }
    return false;
  }

  function validate() {
    const errs = {};

    if (!fbName.trim()) {
      errs.fbName = 'Name required.';
    } else if (countLetters(fbName) < 3) {
      errs.fbName = 'Name must have at least 3 alphabets.';
    } else if (containsNumber(fbName)) {
      errs.fbName = 'Name cannot contain numbers.';
    }

    if (!fbEmail.trim()) {
      errs.fbEmail = 'Email required.';
    }

    if (!fbComments.trim()) {
      errs.fbComments = 'Comments required.';
    } else if (countLetters(fbComments) < 3) {
      errs.fbComments = 'Comments must have at least 3 alphabets.';
    } else if (containsNumber(fbComments)) {
      errs.fbComments = 'Comments cannot contain numbers.';
    }

    return errs;
  }

  function doShake() {
    setShake(true);
    setTimeout(() => setShake(false), 620);
  }

  function submitFeedback(e) {
    e.preventDefault();
    const found = validate();
    if (Object.keys(found).length > 0) {
      setErrors(found);
      doShake();
      return;
    }
    setErrors({});
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setFbName('');
      setFbEmail('');
      setFbRating('5');
      setFbComments('');
      setHoveredStar(0);
    }, 3000);
  }

  const ratingLabels = { 5: 'Excellent', 4: 'Good', 3: 'Average', 2: 'Poor', 1: 'Very Poor' };
  const currentRating = parseInt(fbRating);

  return (
    <div className="col-lg-6">
      <section
        id="feedback"
        className="content-card h-100 searchable-section wow fadeInLeft"
        data-wow-delay="0.1s"
        data-keywords="feedback rating review"
      >
        <h2 className="card-heading wow fadeInDown" data-wow-delay="0.2s">
          Feedback Form
        </h2>
        <p className="card-subtext wow fadeIn" data-wow-delay="0.3s">
          Help us improve the student personal finance guide.
        </p>

        {success && (
          <div className="cf-success-banner wow zoomIn">
            <span>Thank you, <strong>{fbName}</strong>! Your feedback has been recorded.</span>
          </div>
        )}

        <form
          id="feedback-form"
          onSubmit={submitFeedback}
          className={shake ? 'form-shake' : ''}
          noValidate
        >
          <div className={`cf-field-wrap mb-3 wow fadeInUp ${focusedField === 'fbname' ? 'field-active' : ''}`} data-wow-delay="0.35s">
            <label htmlFor="fb-name" className="form-label-custom">
              Full Name:
            </label>
            <input
              type="text"
              id="fb-name"
              className={`form-control form-control-custom ${errors.fbName ? 'input-error' : ''}`}
              value={fbName}
              onFocus={() => setFocusedField('fbname')}
              onBlur={() => setFocusedField('')}
              onChange={(e) => {
                setFbName(e.target.value);
                setErrors(prev => ({ ...prev, fbName: '' }));
              }}
            />
            {errors.fbName && <span className="field-error-msg">{errors.fbName}</span>}
          </div>

          <div className={`cf-field-wrap mb-3 wow fadeInUp ${focusedField === 'fbemail' ? 'field-active' : ''}`} data-wow-delay="0.42s">
            <label htmlFor="fb-email" className="form-label-custom">
              Student Email:
            </label>
            <input
              type="email"
              id="fb-email"
              className={`form-control form-control-custom ${errors.fbEmail ? 'input-error' : ''}`}
              placeholder="sfc-variable@student.edu"
              value={fbEmail}
              onFocus={() => setFocusedField('fbemail')}
              onBlur={() => setFocusedField('')}
              onChange={(e) => {
                setFbEmail(e.target.value);
                setErrors(prev => ({ ...prev, fbEmail: '' }));
              }}
            />
            {errors.fbEmail && <span className="field-error-msg">{errors.fbEmail}</span>}
          </div>

          {/* Star Rating - custom interactive stars */}
          <div className="mb-3 wow fadeInUp" data-wow-delay="0.49s">
            <label className="form-label-custom d-block mb-2">
              Rating:
            </label>
            <div className="star-rating-row">
              {[1, 2, 3, 4, 5].map(star => (
                <button
                  key={star}
                  type="button"
                  className={`star-btn ${star <= (hoveredStar || currentRating) ? 'star-active' : 'star-empty'}`}
                  onMouseEnter={() => setHoveredStar(star)}
                  onMouseLeave={() => setHoveredStar(0)}
                  onClick={() => setFbRating(String(star))}
                  aria-label={`Rate ${star} - ${ratingLabels[star]}`}
                >
                  ★
                </button>
              ))}
              <span className="star-label-text">
                {ratingLabels[hoveredStar || currentRating]}
              </span>
            </div>
          </div>

          <div className={`cf-field-wrap mb-3 wow fadeInUp ${focusedField === 'fbcomments' ? 'field-active' : ''}`} data-wow-delay="0.56s">
            <label htmlFor="fb-comments" className="form-label-custom">
              Comments:
            </label>
            <textarea
              id="fb-comments"
              className={`form-control form-control-custom ${errors.fbComments ? 'input-error' : ''}`}
              rows="2"
              value={fbComments}
              onFocus={() => setFocusedField('fbcomments')}
              onBlur={() => setFocusedField('')}
              onChange={(e) => {
                setFbComments(e.target.value);
                setErrors(prev => ({ ...prev, fbComments: '' }));
              }}
            ></textarea>
            {errors.fbComments && <span className="field-error-msg">{errors.fbComments}</span>}
          </div>

          <button type="submit" className="btn btn-brand-primary btn-feedback-submit wow fadeInUp" data-wow-delay="0.62s">
            Submit Feedback
          </button>
        </form>
      </section>
    </div>
  );
}
