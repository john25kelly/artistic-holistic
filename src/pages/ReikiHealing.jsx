import React from 'react';
import { Link } from 'react-router-dom';
import './FineArtClasses.css';
import './ReikiHealing.css';

const testimonials = [
  {
    quote: 'After a very short Reiki treatment I was able to play golf pain free for the next couple of days.',
    author: 'Ivor Cranston',
  },
  {
    quote: 'After my Reiki session with Patricia my back felt more relaxed and the pain had eased. I also slept really well that night.',
    author: 'Twyla Gibson',
  },
];

export default function ReikiHealing() {
  return (
    <>
      <section className="page-hero page-hero--reiki">
        <div className="page-hero__overlay" />
        <div className="page-hero__content">
          <p className="page-hero__eyebrow">Artistic Holistic</p>
          <h1>Reiki Healing</h1>
          <p>Experience the gentle power of Reiki energy healing — deeply relaxing sessions tailored to you.</p>
        </div>
      </section>

      {/* What is Reiki */}
      <section className="section">
        <div className="container">
          <div className="reiki-intro">
            <div className="reiki-intro__text">
              <h2 className="section-title">Reiki Healing</h2>
              <div className="section-divider" />
              <p>
                Reiki is an ancient Japanese technique for reducing stress and relaxing the body and mind.
                It is a holistic technique that involves the use of the Universal Life Force — the Reiki energy.
              </p>
              <p>
                During a Reiki session, the practitioner uses his or her hands very lightly on the client.
                The client is normally lying down and remains fully clothed throughout the session.
              </p>
              <p>
                The Reiki energy is drawn through the practitioner's hands in order to promote emotional or
                physical well-being. It is not a massage.
              </p>
              <p>
                Patricia is a Reiki Master, and offers hour-long Reiki Healing sessions.
              </p>
              <p>
                <strong>Cost £30 per hour.</strong>
              </p>
              <p>Click the button below to enquire today.</p>
              <Link to="/contact" className="btn" style={{ marginTop: '8px' }}>Enquire Today</Link>
            </div>
            <div className="reiki-intro__benefits">
              <h4>Reported Benefits</h4>
              {[
                'Deep relaxation and stress relief',
                'Reduced anxiety and worry',
                'Improved sleep quality',
                'Relief from pain and tension',
                'Emotional balance and clarity',
                'A sense of inner peace and wellbeing',
              ].map((b) => (
                <div className="reiki-benefit-item" key={b}>
                  <span className="reiki-benefit-item__dot" />
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section reiki-testimonials-section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <h2 className="section-title">Testimonials</h2>
            <div className="section-divider" style={{ margin: '0 auto' }} />
          </div>
          <div className="home-testimonials__grid">
            {testimonials.map((t) => (
              <div className="testimonial-card" key={t.author}>
                <blockquote className="testimonial-card__quote">"{t.quote}"</blockquote>
                <div className="testimonial-card__author">
                  <strong>{t.author}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
