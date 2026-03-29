import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__col">
          <h4>Artistic Holistic</h4>
          <p>
            Combining the beauty of fine art with the mindfulness of holistic practices.
            Join us for painting classes, yoga sessions, and reiki healing.
          </p>
          <div className="footer__social">
            <a href="https://www.facebook.com/patriciamccormickfineart" target="_blank" rel="noreferrer" aria-label="Facebook – Fine Art">f</a>
            <a href="https://www.facebook.com/yogawithpatricia" target="_blank" rel="noreferrer" aria-label="Facebook – Yoga">f</a>
            <a href="https://www.instagram.com/patriciamccormick_art_n_yoga/" target="_blank" rel="noreferrer" aria-label="Instagram">in</a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul className="footer__links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/fine-art-classes">Fine Art Classes</Link></li>
            <li><Link to="/yoga-classes">Yoga Classes</Link></li>
            <li><Link to="/reiki-healing">Reiki Healing</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Classes</h4>
          <ul className="footer__links">
            <li><Link to="/fine-art-classes">Painting &amp; Drawing</Link></li>
            <li><Link to="/yoga-classes">Yoga – Mon 6pm-7pm</Link></li>
            <li><Link to="/reiki-healing">Reiki Healing</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Get In Touch</h4>
          <div className="footer__contact-item">
            <span className="footer__contact-icon">📞</span>
            <span>07762 823133</span>
          </div>
          <div className="footer__contact-item">
            <span className="footer__contact-icon">📍</span>
            <span>Killyleagh, Northern Ireland</span>
          </div>
          <div className="footer__contact-item">
            <span className="footer__contact-icon">📘</span>
            <a href="https://www.facebook.com/patriciamccormickfineart" target="_blank" rel="noreferrer">Facebook (Fine Art)</a>
          </div>
          <div className="footer__contact-item">
            <span className="footer__contact-icon">📘</span>
            <a href="https://www.facebook.com/yogawithpatricia" target="_blank" rel="noreferrer">Facebook (Yoga)</a>
          </div>
          <div className="footer__contact-item">
            <span className="footer__contact-icon">📷</span>
            <a href="https://www.instagram.com/patriciamccormick_art_n_yoga/" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} Artistic Holistic. All rights reserved.</p>
      </div>
    </footer>
  );
}

