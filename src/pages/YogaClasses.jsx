import React from 'react';
import { Link } from 'react-router-dom';
import './FineArtClasses.css';
import './YogaClasses.css';

const benefits = [
  { icon: '💪', text: 'Boosting the immunity' },
  { icon: '😴', text: 'Better sleep patterns' },
  { icon: '🧍', text: 'Improvement in posture' },
  { icon: '😌', text: 'Decreasing your stress levels' },
  { icon: '🌬️', text: 'Learning to chill out with different breathing patterns' },
  { icon: '❤️', text: 'Lower your blood pressure' },
  { icon: '🩺', text: 'Slow your heartrate' },
  { icon: '🧘', text: 'Soothe your nervous system' },
];

export default function YogaClasses() {
  return (
    <>
      <section className="page-hero page-hero--yoga">
        <div className="page-hero__overlay" />
        <div className="page-hero__content">
          <p className="page-hero__eyebrow">Artistic Holistic</p>
          <h1>Yoga &amp; Mindfulness</h1>
          <p>
            The Yoga class is at the Bridge Centre, Killyleagh. Enrolment is available or you can
            drop-in. Monday from 6pm – 7pm
          </p>
        </div>
      </section>

      {/* Class info */}
      <section className="section">
        <div className="container">
          <div className="art-intro">
            <div className="art-intro__text">
              <h2 className="section-title">Yoga &amp; Mindfulness</h2>
              <div className="section-divider" />
              <p>
                The Yoga class is at the Bridge Centre, Killyleagh. Enrolment is available or you
                can drop-in. <strong>Monday from 6pm – 7pm</strong>
              </p>
              <p>Please contact me for details. We have a Supportive WhatsApp Group.</p>
              <p>Learn ease of movement with me.</p>
              <Link to="/contact" className="btn" style={{ marginTop: '8px' }}>Book Now</Link>
            </div>
          </div>

          {/* Featured class card */}
          <div
            className="yoga-featured-class"
 page            style={{ backgroundImage: `url(https://artisticholistic.com/wp-content/uploads/2021/06/online-yoga-classes-artistic-holistic-300x300.jpg)` }}
          >
            <div className="yoga-featured-class__badge">Now Available</div>
            <h3 className="yoga-featured-class__title">Yoga Class, Live and on-line</h3>
            <p className="yoga-featured-class__desc">
              Can't make it to the Bridge Centre in person? Join Patricia's yoga classes live online
              from the comfort of your own home. Suitable for all levels — all you need is a mat and
              a little space!
            </p>
            <Link to="/contact" className="btn">Enquire Now</Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section yoga-benefits-section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <h2 className="section-title">The Many Benefits of Yoga</h2>
            <div className="section-divider" style={{ margin: '0 auto' }} />
            <p style={{ marginTop: '12px', color: '#666' }}>Some of the many benefits of Yoga include:</p>
          </div>
          <div className="yoga-benefits__grid">
            {benefits.map((b) => (
              <div className="yoga-benefit-card" key={b.text}>
                <span className="yoga-benefit-card__icon">{b.icon}</span>
                <p className="yoga-benefit-card__text">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patricia bio */}
      <section className="section art-instructor-section">
        <div className="container">
          <div className="art-instructor">
            <div className="art-instructor__text">
              <h2 className="section-title">A Little About Patricia</h2>
              <div className="section-divider" />
              <p>
                Patricia is an experienced yoga instructor who is qualified with the Yoga Therapy and
                Training Centre (YTTC) in Ireland.
              </p>
              <p>
                She has been teaching yoga for 20 years and has taught at schools, colleges and clubs
                in Northern Ireland. She has also taught it in France and at the Skyros Holistic
                Holidays Centre in Greece.
              </p>
              <p>
                Patricia runs yoga classes that are suitable for all levels. She will instruct you in
                Hatha and Iyengar techniques; as well as stretches, Pranayama, meditation and Yoga Nidra.
              </p>
              <p>
                In addition to yoga, Patricia is a qualified Personal Trainer, a RSA Aerobics and Step
                Instructor, and a Master in Reiki Healing.
              </p>
              <p>
                She is a former Northern Ireland Disco Dance Champion and Creative Dance Champion.
              </p>
              <p>
                Private one-to-one teaching is available, or workshops for small groups can be arranged
                — just click on the button below to enquire.
              </p>
              <Link to="/contact" className="btn" style={{ marginTop: '8px' }}>Enquire now</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
