import React from 'react';
import { Link } from 'react-router-dom';
import './FineArtClasses.css';

const classes = [
  {
    title: 'Intro & Beginner Classes',
    schedule: 'Ongoing (when the weather is good)',
    description:
      'Outdoor Painting For Pleasure. A friendly class with lots of tips, chat and advice after the class on our WhatsApp group.',
    cta: 'Book Now',
  },
  {
    title: 'Outdoor Painting For Pleasure',
    schedule: 'May to September',
    description:
      'A friendly class with lots of tips, chat and advice after the class on our WhatsApp group.',
    cta: 'Contact Me',
  },
  {
    title: 'Painting For Pleasure',
    schedule: 'Indoors – Killyleagh area, Co. Down',
    description:
      'A friendly class with lots of tips, chat and advice after the class on our WhatsApp group. This class will be in Killyleagh with some craft classes in Saintfield Co. Down. It may be possible to Zoom this class also.',
    cta: 'Contact Me',
  },
];

const testimonials = [
  {
    quote:
      'I joined this group with low expectations, as I had no training in art (drawing or painting). After three, six week sessions, I still cannot call myself an artist, however I have found a confidence I never thought I would have. I have learned so much under Patricia\'s tuition. From colour mixing to producing a painting that a few weeks ago I would have thought impossible. If you want to paint but think you can\'t, get in touch with Patricia, she will help you unlock your artist potential.',
    author: 'Kate McKeown',
  },
  {
    quote:
      'As someone with no knowledge or experience of watercolour painting I tentatively joined Patricia\'s art group through Zoom. She makes everyone feel at ease and her teaching background allows her to develop experienced and novice artists like myself. I enjoy the classes and the other participants a great deal and look forward to face to face workshops.',
    author: 'David Keating',
  },
];

export default function FineArtClasses() {
  return (
    <>
      {/* Page hero */}
      <section className="page-hero page-hero--art">
        <div className="page-hero__overlay" />
        <div className="page-hero__content">
          <p className="page-hero__eyebrow">Artistic Holistic</p>
          <h1>Fine Art Classes</h1>
          <p>Painting Classes &amp; Workshops</p>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container">
          <div className="art-intro">
            <div className="art-intro__text">
              <h2 className="section-title">Painting for Pleasure</h2>
              <div className="section-divider" />
              <p>
                Painting for Pleasure classes are outdoors in the summertime and indoors when the
                weather changes. Contact me for details as numbers are limited.
              </p>
              <p>
                A friendly class with lots of tips, chat and advice during and after the class on
                our WhatsApp group. We paint outdoors in the summertime.
              </p>
              <p>
                For 3 months in the summertime we paint in areas like Killyleagh, Downpatrick,
                Ardglass, Strangford, Rossglass and Kilclief. Classes are once a week generally on
                Tuesday morning at the Bridge Centre, Killyleagh, Co Down from 9.30 am to 11.30.
                Please check for up-to-date information.
              </p>
              <p>
                Classes on ZOOM can also be arranged. Classes are generally 2 hours long but outdoor
                classes can be morning and after lunch, 4 hours or more.
              </p>
              <p>
                Members of the class will be exhibiting twice in November / December time. We have
                exhibited 6 times to date from 2020.
              </p>
              <p>
                Cost £15 for short morning courses but please check as times, prices and venues can
                vary depending on numbers. Click the button below to book. <strong>Limited places!</strong>
              </p>
              <Link to="/contact" className="btn" style={{ marginTop: '8px' }}>Book Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Classes grid */}
      <section className="section art-classes-section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <h2 className="section-title">Available Classes</h2>
            <div className="section-divider" style={{ margin: '0 auto' }} />
          </div>
          <div className="art-classes__grid">
            {classes.map((c) => (
              <div className="art-class-card" key={c.title}>
                <h3 className="art-class-card__title">{c.title}</h3>
                <p className="art-class-card__desc">{c.description}</p>
                <div className="art-class-card__meta">
                  <span>🕐 {c.schedule}</span>
                </div>
                <Link to="/contact" className="btn" style={{ marginTop: '16px', display: 'block', textAlign: 'center' }}>{c.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor bio */}
      <section className="section art-instructor-section">
        <div className="container">
          <div className="art-instructor">
            <div className="art-instructor__text">
              <h2 className="section-title">Your Fine Art Instructor</h2>
              <div className="section-divider" />
              <h3 style={{ color: '#30709c', fontSize: '22px', paddingBottom: '8px' }}>Patricia McCormick</h3>
              <p>
                Patricia McCormick BA ATD Member of the Ulster Watercolour Society. Teaching to A level
                standard since 1980 (Teaching in N.I and USA). GCSE and A level moderator — tuition available.
              </p>
              <p>
                She has also taught art in the USA in Ohio on teacher exchange and at the Skyros Holistic
                Holidays Center in Greece. Exhibits in N. Ireland, Greece and USA.
              </p>
              <p>
                Her work can be viewed at the Down Cathedral and St. Patrick Centre, Downpatrick and in
                Strangford at Kevin Ogg's Gift Shop. My Little Gallery in Killyleagh can be visited by
                appointment — please view on this website and my Facebook page Patricia McCormick Fine Art.
              </p>
              <p>
                I live in Killyleagh on the shores of Strangford Lough, Co Down, N. Ireland. I frequently
                do commissions. I really enjoy running Art Courses or teaching one to one.
              </p>
              <div style={{ display: 'flex', gap: '12px', marginTop: '12px', flexWrap: 'wrap' }}>
                <a
                  href="https://www.facebook.com/patriciamccormickfineart"
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  Facebook
                </a>
                <Link to="/contact" className="btn btn-outline">Contact Me Today</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section art-testimonials-section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <h2 className="section-title">From Our Students</h2>
            <div className="section-divider" style={{ margin: '0 auto' }} />
          </div>
          <div className="home-testimonials__grid">
            {testimonials.map((t) => (
              <div className="testimonial-card" key={t.author}>
                <blockquote className="testimonial-card__quote">"{t.quote}"</blockquote>
                <div className="testimonial-card__author">
                  <strong>— {t.author}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
