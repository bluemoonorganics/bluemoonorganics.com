import Link from "next/link";
import React, { useState } from "react";

function Navbar({deliveryAreas=[]}) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <header className="header">
      <nav className={`navbar container ${showMobileMenu ? "is-active" : ""}`}>
        <div className="navbar-brand">
          <strong>
            <Link href="/">Blue Moon Organics</Link>
          </strong>
          <button
            className="mobile-menu button--secondary"
            aria-label="menu"
            aria-expanded="false"
            onClick={toggleMobileMenu}
          >
            <span>Menu</span>
          </button>
        </div>

        <div className="navbar-menu" onClick={closeMobileMenu}>
          <div className="navbar-end">
            <Link className="nav__link" href="/">
              Home
            </Link>
            <Link className="nav__link" href="/about/">
              About
            </Link>
            <Link className="nav__link" href="/contact/">
              Contact
            </Link>
            <Link className="nav__link" href="/substitutions/">
              Substitutions
            </Link>

            <Link className="nav__link" href="/sign-up/">
              Sign Up
            </Link>
            <div className="navbar-item has-dropdown is-hoverable nav__link">
              <Link href="/delivery-areas" className="navbar-link">
                Delivery Areas ▾
              </Link>
              <div
                id="nav__delivery-areas-dropdown"
                className="navbar-dropdown"
              >
                {deliveryAreas.map((area) => (
                  <Link
                    key={area.title}
                    href={"/area/" + area.slug}
                  >
                    {area.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="navbar-item has-dropdown is-hoverable nav__link">
              <a className="navbar-link">Extras ▾</a>
              <div className="navbar-dropdown">
                <Link className="nav__link" href="/groceries/">
                  Groceries
                </Link>
                <Link className="nav__link" href="/pet-food/">
                  Pet Food
                </Link>
                <Link className="nav__link" href="/faq/">
                  FAQ
                </Link>
                <a
                  className="nav__link"
                  rel="noopener"
                  target="_blank"
                  href="https://www.facebook.com/organicsfrombluemoon"
                >
                  Facebook
                </a>
                <a
                  className="nav__link"
                  rel="noopener"
                  target="_blank"
                  href="https://www.instagram.com/bluemoonorganic/"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
