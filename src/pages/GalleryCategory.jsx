import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './FineArtClasses.css';
import './Gallery.css';

const pub = process.env.PUBLIC_URL;

const categoryData = {
  landscapes: {
    label: 'Landscapes',
    emoji: '🌄',
    heroClass: 'page-hero--gallery',
    description: 'Rolling green hills, misty mountains and the wild Irish countryside captured in oil, watercolour and acrylic.',
    items: [
      { id: 1,  title: 'Saul',                                        image: `${pub}/images/gallery/landscapes/saul.jpg` },
      { id: 2,  title: 'Irish Countryside',                            image: `${pub}/images/gallery/landscapes/countryside.jpg` },
      { id: 3,  title: '30 : The Old Building',                        image: `${pub}/images/gallery/landscapes/the-old-building.jpg`, price: '250.00' },
      { id: 4,  title: 'Country Path',                                 image: `${pub}/images/gallery/landscapes/country-path.jpg` },
      { id: 5,  title: 'The Overgrown Loney',                          image: `${pub}/images/gallery/landscapes/the-overgrown-loney.jpg` },
      { id: 6,  title: 'Landscape Study',                              image: `${pub}/images/gallery/landscapes/landscape-6.jpg` },
      { id: 7,  title: 'Landscape Study II',                           image: `${pub}/images/gallery/landscapes/landscape-7.jpg` },
      { id: 8,  title: 'Swan in a Frozen Sea',                         image: `${pub}/images/gallery/landscapes/swan-in-frozen-sea.jpg` },
      { id: 9,  title: 'The Hidden House',                             image: `${pub}/images/gallery/landscapes/the-hidden-house.jpg` },
      { id: 10, title: 'Trees',                                        image: `${pub}/images/gallery/landscapes/trees.jpg` },
      { id: 11, title: 'Waterlillies',                                  image: `${pub}/images/gallery/landscapes/waterlillies.jpg` },
      { id: 12, title: 'The Quiet Lagan',                              image: `${pub}/images/gallery/landscapes/the-quiet-lagan.jpg` },
      { id: 13, title: 'Poppy',                                        image: `${pub}/images/gallery/landscapes/poppy.jpg` },
      { id: 14, title: 'Inch Abbey',                                   image: `${pub}/images/shop/inch-abbey.jpg`,     price: '260.00' },
      { id: 15, title: '26 : The Laneway – Limited Edition Print',     image: `${pub}/images/shop/the-laneway.jpg`,    price: '70.00' },
      { id: 16, title: '17 : The Old Lamps',                          image: `${pub}/images/shop/old-lamps.jpg`,      price: '300.00' },
    ],
  },
  seascapes: {
    label: 'Seascapes',
    emoji: '🌊',
    heroClass: 'page-hero--gallery',
    description: 'The dramatic Atlantic coastline — crashing waves, peaceful harbours and sun-drenched shores.',
    items: [
      { id: 1,  title: 'Seascape',                                    image: `${pub}/images/gallery/seascapes/seascape-me.jpg` },
      { id: 2,  title: 'No. 58 – Sunset over Dorneill Island',        image: `${pub}/images/gallery/seascapes/sunset-dorneill.jpg` },
      { id: 3,  title: 'Seascape Study',                              image: `${pub}/images/gallery/seascapes/seascape-no.jpg` },
      { id: 4,  title: 'Killyleagh',                                  image: `${pub}/images/gallery/seascapes/killyleagh.jpg` },
      { id: 5,  title: 'No. 15',                                      image: `${pub}/images/gallery/seascapes/no-15.jpg` },
      { id: 6,  title: 'Seascape Study II',                           image: `${pub}/images/gallery/seascapes/seascape-no-1.jpg` },
      { id: 7,  title: 'The Wave – SOLD but Repeatable',              image: `${pub}/images/gallery/seascapes/the-wave.jpg`,        sold: true },
      { id: 8,  title: '34 : We Are Sailing',                         image: `${pub}/images/gallery/seascapes/we-are-sailing.png`,  price: '190.00' },
      { id: 9,  title: 'Seascape Study III',                          image: `${pub}/images/gallery/seascapes/seascape-study.jpg` },
      { id: 10, title: 'The Town Rock, Strangford Lough',             image: `${pub}/images/gallery/seascapes/town-rock.jpg`,       sold: true },
      { id: 11, title: 'White Rocks – Children on the Beach',         image: `${pub}/images/gallery/seascapes/white-rocks.jpg`,     sold: true },
      { id: 12, title: 'Red Dragon in Storm Kathleen',                image: `${pub}/images/shop/red-dragon.png`,                   price: '150.00' },
      { id: 13, title: 'Look What I Nearly Mist.',                    image: `${pub}/images/shop/look-what-i-nearly-mist.jpg`,      price: '360.00' },
      { id: 14, title: '57 : Water Lillies',                          image: `${pub}/images/shop/water-lillies.jpg`,                price: '150.00' },
    ],
  },
  'modern-art': {
    label: 'Modern Art',
    emoji: '🖼️',
    heroClass: 'page-hero--art',
    description: 'Bold, expressive and abstract works exploring colour, form and emotion.',
    items: [
      { id: 1, title: 'Goliath Cranes',      image: `${pub}/images/gallery/modern-art/goliath-cranes.jpg` },
      { id: 2, title: 'Modern Art Study I',  image: `${pub}/images/gallery/modern-art/modern-art-1.png` },
      { id: 3, title: 'Modern Art Study II', image: `${pub}/images/gallery/modern-art/modern-art-2.png` },
      { id: 4, title: 'Abstract',            image: `${pub}/images/gallery/modern-art/abstract-sold.jpg`,  sold: true },
      { id: 5, title: 'Acrylic Boats',       image: `${pub}/images/gallery/modern-art/acrylic-boats.jpg` },
      { id: 6, title: 'Abstract II',         image: `${pub}/images/gallery/modern-art/abstract-2.jpg` },
      { id: 7, title: 'Abstract III',        image: `${pub}/images/gallery/modern-art/abstract-3.jpg` },
    ],
  },
  animals: {
    label: 'Animals',
    emoji: '🦋',
    heroClass: 'page-hero--gallery',
    description: 'Detailed and evocative portraits of animals — from Irish wildlife to beloved pets.',
    items: [
      { id: 1, title: 'Mooove Over – Sold but Repeatable', image: `${pub}/images/gallery/animals/moove.jpg`,           sold: true, price: '300.00' },
      { id: 2, title: 'The Heron (Sold – Repeatable)',     image: `${pub}/images/gallery/animals/the-heron.jpg`,       sold: true },
      { id: 3, title: 'Animal Study',                      image: `${pub}/images/gallery/animals/animals-3.jpg` },
      { id: 4, title: 'Animal Study II',                   image: `${pub}/images/gallery/animals/animals-4.jpg` },
      { id: 5, title: 'Squirrel in a Pot',                 image: `${pub}/images/shop/squirrel-in-a-pot.jpg`,          price: '65.00' },
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
                  {item.sold && <span className="gallery-item__sold-badge">Sold</span>}
                </div>
                <div className="gallery-item__body">
                  <p className="gallery-item__title">{item.title}</p>
                  <div className="gallery-item__footer">
                    <span className="gallery-item__price">
                      {item.price ? `£${item.price}` : '£TBC'}
                    </span>
                    <Link to="/contact" className="btn gallery-item__enquire">Enquire</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
