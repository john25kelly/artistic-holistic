import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './FineArtClasses.css';
import './Gallery.css';

const categoryData = {
  landscapes: {
    label: 'Landscapes',
    emoji: '🌄',
    heroClass: 'page-hero--gallery',
    description: 'Rolling green hills, misty mountains and the wild Irish countryside captured in oil, watercolour and acrylic.',
    items: [
      { id: 1,  title: 'Saul',                       image: '/images/gallery/landscapes/saul.jpg' },
      { id: 2,  title: 'Irish Countryside',           image: '/images/gallery/landscapes/countryside.jpg' },
      { id: 3,  title: 'The Old Building',            image: '/images/gallery/landscapes/the-old-building.jpg' },
      { id: 4,  title: 'Country Path',                image: '/images/gallery/landscapes/country-path.jpg' },
      { id: 5,  title: 'The Overgrown Loney',         image: '/images/gallery/landscapes/the-overgrown-loney.jpg' },
      { id: 6,  title: 'Landscape Study',             image: '/images/gallery/landscapes/landscape-6.jpg' },
      { id: 7,  title: 'Landscape Study II',          image: '/images/gallery/landscapes/landscape-7.jpg' },
      { id: 8,  title: 'Swan in a Frozen Sea',        image: '/images/gallery/landscapes/swan-in-frozen-sea.jpg' },
      { id: 9,  title: 'The Hidden House',            image: '/images/gallery/landscapes/the-hidden-house.jpg' },
      { id: 10, title: 'Trees',                       image: '/images/gallery/landscapes/trees.jpg' },
      { id: 11, title: 'Waterlillies',                image: '/images/gallery/landscapes/waterlillies.jpg' },
      { id: 12, title: 'The Quiet Lagan',             image: '/images/gallery/landscapes/the-quiet-lagan.jpg' },
      { id: 13, title: 'Poppy',                       image: '/images/gallery/landscapes/poppy.jpg' },
    ],
  },
  seascapes: {
    label: 'Seascapes',
    emoji: '🌊',
    heroClass: 'page-hero--gallery',
    description: 'The dramatic Atlantic coastline — crashing waves, peaceful harbours and sun-drenched shores.',
    items: [
      { id: 1,  title: 'Seascape',                                    image: '/images/gallery/seascapes/seascape-me.jpg' },
      { id: 2,  title: 'No. 58 – Sunset over Dorneill Island',        image: '/images/gallery/seascapes/sunset-dorneill.jpg' },
      { id: 3,  title: 'Seascape Study',                              image: '/images/gallery/seascapes/seascape-no.jpg' },
      { id: 4,  title: 'Killyleagh',                                  image: '/images/gallery/seascapes/killyleagh.jpg' },
      { id: 5,  title: 'No. 15',                                      image: '/images/gallery/seascapes/no-15.jpg' },
      { id: 6,  title: 'Seascape Study II',                           image: '/images/gallery/seascapes/seascape-no-1.jpg' },
      { id: 7,  title: 'The Wave (Sold – Repeatable)',                image: '/images/gallery/seascapes/the-wave.jpg' },
      { id: 8,  title: '34 : We Are Sailing',                         image: '/images/gallery/seascapes/we-are-sailing.png' },
      { id: 9,  title: 'Seascape Study III',                          image: '/images/gallery/seascapes/seascape-study.jpg' },
      { id: 10, title: 'The Town Rock, Strangford Lough (Sold)',      image: '/images/gallery/seascapes/town-rock.jpg' },
      { id: 11, title: 'White Rocks – Children on the Beach (Sold)', image: '/images/gallery/seascapes/white-rocks.jpg' },
    ],
  },
  'modern-art': {
    label: 'Modern Art',
    emoji: '🖼️',
    heroClass: 'page-hero--art',
    description: 'Bold, expressive and abstract works exploring colour, form and emotion.',
    items: [
      { id: 1, title: 'Goliath Cranes',      image: '/images/gallery/modern-art/goliath-cranes.jpg' },
      { id: 2, title: 'Modern Art Study I',  image: '/images/gallery/modern-art/modern-art-1.png' },
      { id: 3, title: 'Modern Art Study II', image: '/images/gallery/modern-art/modern-art-2.png' },
      { id: 4, title: 'Abstract (Sold)',     image: '/images/gallery/modern-art/abstract-sold.jpg' },
      { id: 5, title: 'Acrylic Boats',       image: '/images/gallery/modern-art/acrylic-boats.jpg' },
      { id: 6, title: 'Abstract II',         image: '/images/gallery/modern-art/abstract-2.jpg' },
      { id: 7, title: 'Abstract III',        image: '/images/gallery/modern-art/abstract-3.jpg' },
    ],
  },
  animals: {
    label: 'Animals',
    emoji: '🦋',
    heroClass: 'page-hero--gallery',
    description: 'Detailed and evocative portraits of animals — from Irish wildlife to beloved pets.',
    items: [
      { id: 1, title: 'Mooove Over',                    image: '/images/gallery/animals/moove.jpg' },
      { id: 2, title: 'The Heron (Sold – Repeatable)', image: '/images/gallery/animals/the-heron.jpg' },
      { id: 3, title: 'Animal Study',                   image: '/images/gallery/animals/animals-3.jpg' },
      { id: 4, title: 'Animal Study II',                image: '/images/gallery/animals/animals-4.jpg' },
    ],
  },
};

export default function GalleryCategory() {
  const { category } = useParams();
  const data = categoryData[category];

  if (!data) {
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
      <section className={`page-hero ${data.heroClass}`}>
        <div className="page-hero__overlay" />
        <div className="page-hero__content">
          <p className="page-hero__eyebrow">Gallery</p>
          <h1>{data.emoji} {data.label}</h1>
          <p>{data.description}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Link to="/gallery" className="gallery-back-link">← Back to Gallery</Link>

          <div className="gallery-grid">
            {data.items.map((item) => (
              <div className="gallery-item" key={item.id}>
                <div className="gallery-item__image">
                  <img src={item.image} alt={item.title} className="gallery-item__img" />
                </div>
                <div className="gallery-item__body">
                  <p className="gallery-item__title">{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <p style={{ marginBottom: '16px', color: '#555' }}>
              Interested in a piece? Many works are available to purchase or as prints.
            </p>
            <Link to="/shop" className="btn">Visit the Shop</Link>
            <Link to="/contact" className="btn btn-outline" style={{ marginLeft: '12px' }}>Enquire</Link>
          </div>
        </div>
      </section>
    </>
  );
}
