import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { useRandomDriveImages } from '../hooks/useRandomDriveImages';

const testimonials = [
  {
    quote:
      'I joined this group with low expectations, as I had no training in art (drawing or painting). After three, six week sessions, I still cannot call myself an artist, however I have found a confidence I never thought I would have. I have learned so much under Patricia\'s tuition. From colour mixing to producing a painting that a few weeks ago I would have thought impossible. If you want to paint but think you can\'t, get in touch with Patricia, she will help you unlock your artist potential.',
    author: 'Kate McKeown',
    role: 'Happy Student',
  },
  {
    quote:
      'As someone with no knowledge or experience of watercolour painting I tentatively joined Patricia\'s art group through Zoom. She makes everyone feel at ease and her teaching background allows her to develop experienced and novice artists like myself. I enjoy the classes and the other participants a great deal and look forward to face to face workshops.',
    author: 'David Keating',
    role: 'Happy Student',
  },
];

export default function Home() {
  // Fetch 3 random gallery images from Drive on every page load for the Featured Artwork section
  const { images } = useRandomDriveImages(3);
  const [sale1, sale2, sale3] = images;

  const pub = process.env.PUBLIC_URL;

  return (
    <>
      {/* Hero – pure CSS gradient, no image file needed */}
      <section className="home-hero">
        <div className="home-hero__overlay" />
        <div className="home-hero__content">
          <p className="home-hero__eyebrow">Painting and Drawing Classes.</p>
          <h1 className="home-hero__title">
            <span>ARTISTIC</span> <span className="home-hero__title--holistic">HOLISTIC</span>
          </h1>
          <p className="home-hero__subtitle">Art Classes &nbsp;·&nbsp; Yoga Classes</p>
          <p className="home-hero__tagline">
            Outdoor classes are on when the weather is good.<br />
            Yoga Classes Every Monday 6pm – 7pm
          </p>
          <div className="home-hero__cta">
            <Link to="/fine-art-classes" className="btn">View All Classes</Link>
            <Link to="/contact" className="btn btn-outline btn-outline--light">Enquire Now</Link>
          </div>
        </div>
      </section>

      {/* ARTISTIC / HOLISTIC split panels – solid blue CSS background */}
      <section className="home-split">
        <div className="home-split__panel">
          <div className="home-split__overlay" />
          <div className="home-split__content">
            <h2>ARTISTIC</h2>
            <div className="home-split__divider" />
            <Link to="/fine-art-classes" className="btn">Art Classes</Link>
          </div>
        </div>
        <div className="home-split__panel">
          <div className="home-split__overlay" />
          <div className="home-split__content">
            <h2>HOLISTIC</h2>
            <div className="home-split__divider" />
            <Link to="/yoga-classes" className="btn">Yoga Classes</Link>
          </div>
        </div>
      </section>

      {/* Photo strip – static local images */}
      <div className="home-photo-strip">
        <img src={`${pub}/images/home/strip-1.jpg`} alt="Fine art painting class" />
        <img src={`${pub}/images/home/strip-2.jpg`} alt="Fine art and yoga" />
        <img src={`${pub}/images/home/strip-3.jpg`} alt="Outdoor painting" />
      </div>

      {/* Painting Classes intro */}
      <section className="section home-painting">
        <div className="container home-painting__grid">
          <div className="home-painting__text">
            <h2 className="section-title">Painting Classes &amp; Private One to One Tuition</h2>
            <div className="section-divider" />
            <p>
              Painting for Pleasure. OUTSIDE PAINTING classes are now in full swing in the Co. Down area.
            </p>
            <p>
              A friendly class with lots of tips, chat, demonstrations and advice. Patricia has been
              teaching since 1980 and welcomes all levels of experience. We have a supportive after
              class WhatsApp group also to help with tips and group spirit.
            </p>
            <p>
              Classes are mostly on a <strong>TUESDAY morning</strong> but sometimes Monday.<br />
              <strong>BOOKING IS ESSENTIAL</strong> — click the button below to learn more. Limited
              places so please book early!
            </p>
            <Link to="/fine-art-classes" className="btn" style={{ marginTop: '8px' }}>View All Classes</Link>
          </div>
          <div className="home-painting__workshops">
            <h2 className="section-title">Workshops &amp; Outdoor Painting</h2>
            <div className="section-divider" />
            <p>
              Workshops are ongoing at the moment. They are outdoors, also known as Plein air painting,
              in summertime and indoors when the weather is not suitable.
            </p>
            <p>
              CLASSES CAN BE ARRANGED FOR GROUPS OR ONE TO ONE. Please click the button below to enquire.
            </p>
            <Link to="/contact" className="btn" style={{ marginTop: '8px' }}>Enquire Now</Link>
          </div>
        </div>
      </section>

      {/* Art for Sale – 3 random Drive images with parsed title/price */}
      <section className="section home-shop">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '32px' }}>
            <h2 className="section-title">Featured Artwork</h2>
            <div className="section-divider" style={{ margin: '0 auto 16px' }} />
            <p>A selection of original paintings available to buy. Visit the Gallery to browse the full collection.</p>
          </div>
          <div className="home-shop__grid">
            {[sale1, sale2, sale3].filter(Boolean).map((item) => (
              <div className="home-shop__item" key={item.id}>
                <div className="home-shop__img-wrap">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="home-shop__img"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="home-shop__item-title">{item.title}</h4>
                <p className="home-shop__item-price">
                  {item.price ? `£${item.price}` : '£TBC'}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '32px' }}>
            <Link to="/gallery" className="btn">View Gallery</Link>
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="section home-videos">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '36px' }}>
            <h2 className="section-title">Watch Patricia in Action</h2>
            <div className="section-divider" style={{ margin: '0 auto' }} />
          </div>
          <div className="home-videos__grid">
            <div className="home-videos__wrapper">
              <iframe
                className="home-videos__iframe"
                src="https://drive.google.com/file/d/1VexzgtVwrjOQgPY6Abg3SAT3gdGAstCO/preview"
                title="Patricia in action – video 1"
                allow="autoplay"
                allowFullScreen
              />
            </div>
            <div className="home-videos__wrapper">
              <iframe
                className="home-videos__iframe"
                src="https://drive.google.com/file/d/1IW2kFkjC8HiVmblakD6WKj6dZjcNgIKN/preview"
                title="Patricia in action – video 2"
                allow="autoplay"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="section home-community">
        <div className="container text-center">
          <h2 className="section-title">Join Our Vibrant Art Community</h2>
          <div className="section-divider" style={{ margin: '0 auto 20px' }} />
          <p className="home-community__text">
            Join our vibrant art community and unlock your artistic potential with our friendly and
            supportive classes. Whether you're a complete beginner or looking to refine your skills,
            our experienced instructor, Patricia, will guide you through the wonderful world of art.
          </p>
          <p className="home-community__text">
            Embrace the joy of painting and drawing in our outdoor classes, or find your inner peace
            in our rejuvenating yoga sessions. Book your spot now and let's create beautiful art together!
          </p>
          <Link to="/fine-art-classes" className="btn" style={{ marginTop: '16px' }}>Find out more</Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section home-testimonials">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <h2 className="section-title">What Our Students Say</h2>
            <div className="section-divider" style={{ margin: '0 auto' }} />
          </div>
          <div className="home-testimonials__grid">
            {testimonials.map((t) => (
              <div className="testimonial-card" key={t.author}>
                <blockquote className="testimonial-card__quote">"{t.quote}"</blockquote>
                <div className="testimonial-card__author">
                  <strong>{t.author}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section home-newsletter">
        <div className="container text-center">
          <h2 className="section-title">Subscribe to My Newsletter</h2>
          <div className="section-divider" style={{ margin: '0 auto 16px' }} />
          <p>Get the latest news right to your inbox. Don't worry, you won't be bombarded with emails, I promise.</p>
          <form className="home-newsletter__form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Email" className="home-newsletter__input" />
            <button type="submit" className="btn">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  );
}
