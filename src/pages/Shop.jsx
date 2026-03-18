import React from 'react';
import { Link } from 'react-router-dom';
import './FineArtClasses.css';
import './Shop.css';

const pub = process.env.PUBLIC_URL;

const products = [
  { id: 1,  title: 'Yoga Class, Live and on-line',              price: null,     badge: 'Yoga',     image: `${pub}/images/shop/yoga-class.jpg` },
  { id: 2,  title: 'Red Dragon in Storm Kathleen',               price: '150.00', badge: 'Painting', image: `${pub}/images/shop/red-dragon.png` },
  { id: 3,  title: '17 : The Old Lamps',                        price: '300.00', badge: 'Painting', image: `${pub}/images/shop/old-lamps.jpg` },
  { id: 4,  title: 'Squirrel in a Pot',                         price: '65.00',  badge: 'Painting', image: `${pub}/images/shop/squirrel-in-a-pot.jpg` },
  { id: 5,  title: 'Inch Abbey',                                price: '260.00', badge: 'Painting', image: `${pub}/images/shop/inch-abbey.jpg` },
  { id: 6,  title: 'Look What I Nearly Mist.',                  price: '360.00', badge: 'Painting', image: `${pub}/images/shop/look-what-i-nearly-mist.jpg` },
  { id: 7,  title: 'The Wave – SOLD but Repeatable',            price: null,     sold: true,  badge: 'Painting', image: `${pub}/images/shop/the-wave.jpg` },
  { id: 8,  title: '34 : We Are Sailing',                       price: '190.00', badge: 'Painting', image: `${pub}/images/shop/we-are-sailing.png` },
  { id: 9,  title: 'Mooove Over',                               price: '300.00', badge: 'Painting', image: `${pub}/images/shop/mooove-over.jpg` },
  { id: 10, title: '30 : The Old Building',                     price: '250.00', badge: 'Painting', image: `${pub}/images/shop/the-old-building.jpg` },
  { id: 11, title: '57 : Water Lillies',                        price: '150.00', badge: 'Painting', image: `${pub}/images/shop/water-lillies.jpg` },
  { id: 12, title: '26 : The Laneway – Limited Edition Print',  price: '70.00',  badge: 'Print',    image: `${pub}/images/shop/the-laneway.jpg` },
];

const badgeColours = {
  Yoga:    '#3a9e6e',
  Painting:'#30709c',
  Print:   '#5a30a0',
};

export default function Shop() {
  return (
    <>
      <section className="page-hero page-hero--shop">
        <div className="page-hero__overlay" />
        <div className="page-hero__content">
          <p className="page-hero__eyebrow">Artistic Holistic</p>
          <h1>Shop</h1>
          <p>Showing all 12 results</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Product grid */}
          <div className="shop-grid">
            {products.map((p) => (
              <div className="shop-card" key={p.id}>
                <div className="shop-card__image">
                  <img src={p.image} alt={p.title} className="shop-card__img" />
                  <span
                    className="shop-card__badge"
                    style={{ backgroundColor: badgeColours[p.badge] }}
                  >
                    {p.badge}
                  </span>
                </div>
                <div className="shop-card__body">
                  <h3 className="shop-card__title">{p.title}</h3>
                  <div className="shop-card__footer">
                    <span className="shop-card__price">
                      {p.price ? `£${p.price}` : p.sold ? <em>Sold (repeatable)</em> : null}
                    </span>
                    <Link to="/contact" className="btn">Enquire</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="shop-note">
            <p>
              🛍️ To purchase any item or ask about availability, please{' '}
              <Link to="/contact">get in touch</Link>. Original paintings can also
              be viewed in person by appointment.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
