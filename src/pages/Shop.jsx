import React from 'react';
import { Link } from 'react-router-dom';
import './FineArtClasses.css';
import './Shop.css';

const products = [
  { id: 1,  title: 'Yoga Class, Live and on-line',              price: null,     badge: 'Yoga',     image: 'https://artisticholistic.com/wp-content/uploads/2021/06/online-yoga-classes-artistic-holistic-300x300.jpg' },
  { id: 2,  title: 'Red Dragon in Storm Kathleen',               price: '150.00', badge: 'Painting', image: 'https://artisticholistic.com/wp-content/uploads/2024/07/Red-Dragon-in-Storm-Kathleen-300x300.png' },
  { id: 3,  title: '17 : The Old Lamps',                        price: '300.00', badge: 'Painting', image: 'https://artisticholistic.com/wp-content/uploads/2021/05/FullSizeRender-8-226x300.jpg' },
  { id: 4,  title: 'Squirrel in a Pot',                         price: '65.00',  badge: 'Painting', image: 'https://artisticholistic.com/wp-content/uploads/2024/07/20200612_104034-scaled-e1722428289635-300x300.jpg' },
  { id: 5,  title: 'Inch Abbey',                                price: '260.00', badge: 'Painting', image: 'https://artisticholistic.com/wp-content/uploads/2024/07/IMG_E3773-300x300.jpg' },
  { id: 6,  title: 'Look What I Nearly Mist.',                  price: '360.00', badge: 'Painting', image: 'https://artisticholistic.com/wp-content/uploads/2024/07/IMG_E3724-300x300.jpg' },
  { id: 7,  title: 'The Wave – SOLD but Repeatable',            price: null,     sold: true,  badge: 'Painting', image: 'https://artisticholistic.com/wp-content/uploads/2021/06/the-wave-Commission.-SOLD-Have-your-name-in-the-wave-300x240.jpg' },
  { id: 8,  title: '34 : We Are Sailing',                       price: '190.00', badge: 'Painting', image: 'https://artisticholistic.com/wp-content/uploads/2021/06/we20are20sailing20better20copy_edited-231x300.png' },
  { id: 9,  title: 'Mooove Over – Sold but Repeatable',         price: '300.00', badge: 'Painting', image: 'https://artisticholistic.com/wp-content/uploads/2021/06/no.27.-Mooove-over-SOLD-1-300x300.jpg' },
  { id: 10, title: '30 : The Old Building',                     price: '250.00', badge: 'Painting', image: 'https://artisticholistic.com/wp-content/uploads/2021/06/NO.30-THE-OLD-BUILDING-61-BY-53-1-300x300.jpg' },
  { id: 11, title: '57 : Water Lillies',                        price: '150.00', badge: 'Painting', image: 'https://artisticholistic.com/wp-content/uploads/2021/06/Waterlillies-300x300.jpg' },
  { id: 12, title: '26 : The Laneway – Limited Edition Print',  price: '70.00',  badge: 'Print',    image: 'https://artisticholistic.com/wp-content/uploads/2021/05/The-Overgrown-Loney-300x300.jpeg' },
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
