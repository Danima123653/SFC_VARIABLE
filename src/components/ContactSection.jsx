import React, { useState } from 'react';
import { useWowAnimation } from '../utils/wowManager';

export default function ContactSection({ isVisible }) {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [shake, setShake] = useState(false);
  const [success, setSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState('');

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

    if (!contactName.trim()) {
      errs.contactName = 'Name required.';
    } else if (countLetters(contactName) < 3) {
      errs.contactName = 'Name must have at least 3 alphabets.';
    } else if (containsNumber(contactName)) {
      errs.contactName = 'Name cannot contain numbers.';
    }

    if (!contactEmail.trim()) {
      errs.contactEmail = 'Email required.';
    }

    if (!contactMessage.trim()) {
      errs.contactMessage = 'Message required.';
    } else if (countLetters(contactMessage) < 3) {
      errs.contactMessage = 'Message must have at least 3 alphabets.';
    } else if (containsNumber(contactMessage)) {
      errs.contactMessage = 'Message cannot contain numbers.';
    }

    return errs;
  }

  function doShake() {
    setShake(true);
    setTimeout(() => setShake(false), 620);
  }

  function submitContact(e) {
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
      setContactName('');
      setContactEmail('');
      setContactMessage('');
    }, 3000);
  }

  return (
    <div className="col-lg-6">
      <section
        id="contact"
        className="content-card h-100 searchable-section wow fadeInRight"
        data-wow-delay="0.1s"
        data-keywords="contact support email message"
      >
        <h2 className="card-heading wow fadeInDown" data-wow-delay="0.2s">
          Contact Us
        </h2>
        <p className="card-subtext wow fadeIn" data-wow-delay="0.3s">
          Have suggestions or questions for our campus project desk?
        </p>

        {success && (
          <div className="cf-success-banner wow zoomIn">
            <span>Message sent, <strong>{contactName}</strong>! We will get back to you.</span>
          </div>
        )}

        <form
          id="contact-form"
          onSubmit={submitContact}
          className={shake ? 'form-shake' : ''}
          noValidate
        >
          <div className={`cf-field-wrap mb-3 wow fadeInUp ${focusedField === 'name' ? 'field-active' : ''}`} data-wow-delay="0.35s">
            <label htmlFor="contact-name" className="form-label-custom">Name:</label>
            <input
              type="text"
              id="contact-name"
              className={`form-control form-control-custom ${errors.contactName ? 'input-error' : ''}`}
              value={contactName}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField('')}
              onChange={(e) => {
                setContactName(e.target.value);
                setErrors(prev => ({ ...prev, contactName: '' }));
              }}
            />
            {errors.contactName && <span className="field-error-msg">{errors.contactName}</span>}
          </div>

          <div className={`cf-field-wrap mb-3 wow fadeInUp ${focusedField === 'email' ? 'field-active' : ''}`} data-wow-delay="0.45s">
            <label htmlFor="contact-email" className="form-label-custom">Email:</label>
            <input
              type="email"
              id="contact-email"
              className={`form-control form-control-custom ${errors.contactEmail ? 'input-error' : ''}`}
              value={contactEmail}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField('')}
              onChange={(e) => {
                setContactEmail(e.target.value);
                setErrors(prev => ({ ...prev, contactEmail: '' }));
              }}
            />
            {errors.contactEmail && <span className="field-error-msg">{errors.contactEmail}</span>}
          </div>

          <div className={`cf-field-wrap mb-3 wow fadeInUp ${focusedField === 'msg' ? 'field-active' : ''}`} data-wow-delay="0.5s">
            <label htmlFor="contact-message" className="form-label-custom">Message:</label>
            <textarea
              id="contact-message"
              className={`form-control form-control-custom ${errors.contactMessage ? 'input-error' : ''}`}
              rows="3"
              value={contactMessage}
              onFocus={() => setFocusedField('msg')}
              onBlur={() => setFocusedField('')}
              onChange={(e) => {
                setContactMessage(e.target.value);
                setErrors(prev => ({ ...prev, contactMessage: '' }));
              }}
            ></textarea>
            {errors.contactMessage && <span className="field-error-msg">{errors.contactMessage}</span>}
          </div>

          <button type="submit" className="btn btn-brand-primary btn-contact-send wow fadeInUp" data-wow-delay="0.55s">
            Send Message
          </button>
        </form>

        <p className="text-muted mt-3 mb-0" style={{ fontSize: '12px' }}>
          Email: sfc-variable@budgetbasics.edu | Aptech Student Project Desk
        </p>
      </section>
    </div>
  );
}
