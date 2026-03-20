import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './FineArtClasses.css';
import './Gallery.css';
import { useGalleryData } from '../hooks/useGalleryData';

/**
 * Static metadata for each category.
 * Labels, emojis and descriptions are defined here;
 * the actual artworks come from Google Drive at runtime.
 */
const CATEGORY_META = {
  landscapes: {
    label:     'Landscapes',
    emoji:     '🌄',
    heroClass: 'page-hero--gallery',
    description: 'Rolling green hills, misty mountains and the wild Irish countryside captured in oil, watercolour and acrylic.',
  },
  seascapes: {
    label:     'Seascapes',
    emoji:     '🌊',
    heroClass: 'page-hero--gallery',
    description: 'The dramatic Atlantic coastline — crashing waves, peaceful harbours and sun-drenched shores.',
  },
  'modern-art': {
    label:     'Modern Art',
    emoji:     '🖼️',
    heroClass: 'page-hero--art',
    description: 'Bold, expressive and abstract works exploring colour, form and emotion. A celebration of creative freedom.',
  },
  animals: {
    label:     'Animals',
    emoji:     '🦋',
    heroClass: 'page-hero--gallery',
    description: 'Detailed and evocative portraits of animals — from Irish wildlife to beloved pets, rendered with care.',
  },
};

export default function GalleryCategory() {
  const { category } = useParams();
  const meta = CATEGORY_META[category];

  // Fetch images dynamically from Google Drive
  const { items, loading, error } = useGalleryData(category);

  if (!meta) {
    return (
      <section className="section">
        <div className="container text-center">
          <h2 className="section-title">Category Not Found</h2>
          <Link to="/gallery" className="btn" style={{ marginTop: '20px' }}>Back to Gallery</Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className={`page-hero ${meta.heroClass}`}>
        <div className="page-hero__overlay" />
        <div className="page-hero__content">
          <p className="page-hero__eyebrow">Gallery</p>
          <h1>{meta.emoji} {meta.label}</h1>
          <p>{meta.description}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Link to="/gallery" className="gallery-back-link">← Back to Gallery</Link>

          {/* ── Loading state ── */}
          {loading && (
            <div className="gallery-loading">
              <div className="gallery-spinner" />
              <p>Loading gallery…</p>
            </div>
          )}

          {/* ── Error state ── */}
          {!loading && error && (
            <div className="gallery-error">
              <p>⚠️ Could not load gallery images</p>
              <p className="gallery-error__detail">{error}</p>
            </div>
          )}

          {/* ── Empty state ── */}
          {!loading && !error && items.length === 0 && (
            <div className="gallery-empty">
              <p>No artworks found in this category yet — check back soon!</p>
            </div>
          )}

          {/* ── Grid ── */}
          {!loading && !error && items.length > 0 && (
            <div className="gallery-grid">
              {items.map((item) => (
                <div className="gallery-item" key={item.id}>
                  <div className="gallery-item__image">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="gallery-item__img"
                      referrerPolicy="no-referrer"
                      onError={(e) => console.error('[Gallery] Image failed to load:', e.target.src)}
                      onLoad={() => console.log('[Gallery] Image loaded OK:', item.title)}
                    />
                    {item.sold && (
                      <span className="gallery-item__sold-badge">Sold</span>
                    )}
                  </div>
                  <div className="gallery-item__body">
                    <p className="gallery-item__title">{item.title}</p>
                    <div className="gallery-item__footer">
                      <span className="gallery-item__price">
                        {item.price ? `£${item.price}` : '£TBC'}
                      </span>
                      <Link to="/contact" className="btn gallery-item__enquire">
                        Enquire
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
