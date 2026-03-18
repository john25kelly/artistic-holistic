import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Fine Art Classes', path: '/fine-art-classes' },
  {
    label: 'Holistic',
    path: '#',
    children: [
      { label: 'Yoga Classes', path: '/yoga-classes' },
      { label: 'Reiki Healing', path: '/reiki-healing' },
    ],
  },
  { label: 'Shop', path: '/shop' },
  {
    label: 'Gallery',
    path: '/gallery',
    children: [
      { label: 'Landscapes', path: '/gallery/landscapes' },
      { label: 'Seascapes', path: '/gallery/seascapes' },
      { label: 'Modern Art', path: '/gallery/modern-art' },
      { label: 'Animals', path: '/gallery/animals' },
    ],
  },
  { label: 'Contact', path: '/contact' },
];

const ChevronDown = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{width:'12px',height:'12px',flexShrink:0}}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});

  const toggleMobile = () => setMobileOpen(prev => !prev);
  const toggleExpand = (label) => setExpandedItems(prev => ({ ...prev, [label]: !prev[label] }));
  const closeMobile = () => { setMobileOpen(false); setExpandedItems({}); };

  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__logo">
            <Link to="/" onClick={closeMobile}>
              <div className="header__logo-text">
                <span>Artistic Holistic</span>
                <span>Fine Art &amp; Yoga</span>
              </div>
            </Link>
          </div>

          <nav className="header__nav" aria-label="Main navigation">
            <ul className="header__nav-list">
              {navItems.map((item) => (
                <li key={item.label} className="header__nav-item">
                  {item.children ? (
                    <>
                      <span className="header__nav-link">
                        {item.label} <ChevronDown />
                      </span>
                      <ul className="header__dropdown">
                        {item.children.map((child) => (
                          <li key={child.label} className="header__dropdown-item">
                            <NavLink to={child.path}>{child.label}</NavLink>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) => 'header__nav-link' + (isActive ? ' active' : '')}
                      end={item.path === '/'}
                    >
                      {item.label}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <button
            className={'header__hamburger' + (mobileOpen ? ' open' : '')}
            onClick={toggleMobile}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            <span className="header__hamburger-bar" />
            <span className="header__hamburger-bar" />
            <span className="header__hamburger-bar" />
          </button>
        </div>
      </header>

      <nav className={'header__mobile-menu' + (mobileOpen ? ' open' : '')} aria-label="Mobile navigation">
        <ul className="header__mobile-nav-list">
          {navItems.map((item) => (
            <li key={item.label} className="header__mobile-nav-item">
              {item.children ? (
                <>
                  <button
                    className={'header__mobile-nav-link' + (expandedItems[item.label] ? ' expanded' : '')}
                    onClick={() => toggleExpand(item.label)}
                  >
                    {item.label} <ChevronDown />
                  </button>
                  <ul className={'header__mobile-dropdown' + (expandedItems[item.label] ? ' open' : '')}>
                    {item.children.map((child) => (
                      <li key={child.label} className="header__mobile-dropdown-item">
                        <NavLink to={child.path} onClick={closeMobile}>{child.label}</NavLink>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <NavLink
                  to={item.path}
                  className={({ isActive }) => 'header__mobile-nav-link' + (isActive ? ' active' : '')}
                  end={item.path === '/'}
                  onClick={closeMobile}
                >
                  {item.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

