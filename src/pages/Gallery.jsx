import React from 'react';
import { Link } from 'react-router-dom';
import './FineArtClasses.css';
import './Gallery.css';

const categories = [
  {
    label: 'Landscapes',
    path: '/gallery/landscapes',
    emoji: '🌄',
    count: 13,
    description: 'Rolling green hills, misty mountains and the wild Irish countryside captured in oil, watercolour and acrylic.',
  },
  {
    label: 'Seascapes',
    path: '/gallery/seascapes',
    emoji: '🌊',
    count: 11,
    description: 'The dramatic Atlantic coastline — crashing waves, peaceful harbours and sun-drenched shores.',
  },
  {
    label: 'Modern Art',
    path: '/gallery/modern-art',
    emoji: '🖼️',
    count: 7,
    description: 'Bold, expressive and abstract works exploring colour, form and emotion. A celebration of creative freedom.',
  },
  {
    label: 'Animals',
    path: '/gallery/animals',
    emoji: '🦋',
    count: 4,
    description: 'Detailed and evocative portraits of animals — from Irish wildlife to beloved pets, rendered with care.',
  },
];

export default function Gallery() {
  return (
    <>
      <section className="page-hero page-hero--gallery">
        <div className="page-hero__overlay" />
        <div className="page-hero__content">
          <p className="page-hero__eyebrow">Artistic Holistic</p>
          <h1>Gallery</h1>
          <p>Explore original artworks by our tutors and students across a range of subjects and styles.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <h2 className="section-title">Browse by Category</h2>
            <div className="section-divider" style={{ margin: '0 auto 16px' }} />
            <p style={{ maxWidth: '560px', margin: '0 auto' }}>
              Each piece in our gallery is created with passion and skill. Many works are available to purchase — visit our <Link to="/shop">Shop</Link> for details.
            </p>
          </div>
          <div className="gallery-categories__grid">
            {categories.map((c) => (
              <Link to={c.path} className="gallery-cat-card" key={c.label}>
                <div className="gallery-cat-card__image">
                  <span className="gallery-cat-card__emoji">{c.emoji}</span>
                </div>
                <div className="gallery-cat-card__body">
                  <div className="gallery-cat-card__header">
                    <h3 className="gallery-cat-card__title">{c.label}</h3>
                    <span className="gallery-cat-card__count">{c.count} works</span>
                  </div>
                  <p className="gallery-cat-card__desc">{c.description}</p>
                  <span className="gallery-cat-card__link">View collection →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section gallery-cta">
        <div className="container text-center">
          <h2 className="section-title">Interested in Purchasing?</h2>
          <div className="section-divider" style={{ margin: '0 auto 20px' }} />
          <p>Many of our artworks are available to buy as originals or as high-quality prints.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '20px', flexWrap: 'wrap' }}>
            <Link to="/shop" className="btn">Visit the Shop</Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}

