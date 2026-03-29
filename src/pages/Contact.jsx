import React, { useState } from 'react';
import './FineArtClasses.css';
import './Contact.css';

const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/pmccormickart@gmail.com';

export default function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = 'Please enter your first name.';
    if (!form.lastName.trim()) e.lastName = 'Please enter your last name.';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Please enter a valid email address.';
    if (!form.subject) e.subject = 'Please select a subject.';
    if (!form.message.trim()) e.message = 'Please enter a message.';
    return e;
  };

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setSending(true);
    setSendError(false);
    try {
      const res = await fetch(FORMSUBMIT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          subject: form.subject,
          message: form.message,
          _subject: `Artistic Holistic Enquiry – ${form.subject}`,
          _captcha: 'false',
        }),
      });
      const data = await res.json();
      if (data.success === 'true' || data.success === true) {
        setSubmitted(true);
      } else {
        setSendError(true);
      }
    } catch {
      setSendError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <section className="page-hero page-hero--contact">
        <div className="page-hero__overlay" />
        <div className="page-hero__content">
          <p className="page-hero__eyebrow">Artistic Holistic</p>
          <h1>Contact Me</h1>
          <p>Don't be a stranger! Please use any of the methods below to contact me. Patricia</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            {/* Info panel */}
            <div className="contact-info">
              <h2 className="section-title">Reach Me</h2>
              <div className="section-divider" />
              <p>Please get in touch using any of the following methods:</p>

              <div className="contact-info__items">
                <div className="contact-info__item">
                  <span className="contact-info__icon">📍</span>
                  <div>
                    <strong>Address</strong>
                    <p>Killyleagh, Northern Ireland</p>
                  </div>
                </div>
                <div className="contact-info__item">
                  <span className="contact-info__icon">📞</span>
                  <div>
                    <strong>Call Me</strong>
                    <p><a href="tel:07762823133">07762 823133</a></p>
                  </div>
                </div>
              </div>

              <div className="contact-info__social">
                <strong>Follow Us</strong>
                <div className="contact-info__social-links">
                  <a
                    href="https://www.facebook.com/patriciamccormickfineart"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook – Fine Art
                  </a>
                  <a
                    href="https://www.facebook.com/yogawithpatricia"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook – Yoga
                  </a>
                  <a
                    href="https://www.instagram.com/patriciamccormick_art_n_yoga/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Form panel */}
            <div className="contact-form-wrap">
              {submitted ? (
                <div className="contact-success">
                  <span className="contact-success__icon">✅</span>
                  <h3>Message Sent!</h3>
                  <p>Thank you for getting in touch. Patricia will get back to you as soon as possible.</p>
                  <button className="btn" onClick={() => { setSubmitted(false); setForm({ firstName: '', lastName: '', email: '', subject: '', message: '' }); }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <h2 className="section-title">Get In Touch</h2>
                  <div className="section-divider" />
                  <p style={{ marginBottom: '20px', color: '#555', fontSize: '14px' }}>
                    Please fill out the form and drop me a message below:
                  </p>

                  <div className="contact-form__row">
                    <div className="contact-form__group">
                      <label htmlFor="firstName">First Name *</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        className={errors.firstName ? 'error' : ''}
                      />
                      {errors.firstName && <span className="contact-form__error">{errors.firstName}</span>}
                    </div>
                    <div className="contact-form__group">
                      <label htmlFor="lastName">Last Name *</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        className={errors.lastName ? 'error' : ''}
                      />
                      {errors.lastName && <span className="contact-form__error">{errors.lastName}</span>}
                    </div>
                  </div>

                  <div className="contact-form__group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="contact-form__error">{errors.email}</span>}
                  </div>

                  <div className="contact-form__group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className={errors.subject ? 'error' : ''}
                    >
                      <option value="">Subject</option>
                      <option value="Fine Art">Fine Art</option>
                      <option value="Yoga">Yoga</option>
                    </select>
                    {errors.subject && <span className="contact-form__error">{errors.subject}</span>}
                  </div>

                  <div className="contact-form__group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Your message…"
                      rows={6}
                      className={errors.message ? 'error' : ''}
                    />
                    {errors.message && <span className="contact-form__error">{errors.message}</span>}
                  </div>

                  {sendError && (
                    <p className="contact-form__send-error">
                      Sorry, something went wrong. Please try again or call 07762 823133.
                    </p>
                  )}
                  <button type="submit" className="btn contact-form__submit" disabled={sending}>
                    {sending ? 'Sending…' : 'Message Me'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
