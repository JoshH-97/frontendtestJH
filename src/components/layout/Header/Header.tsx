import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import styles from "./Header.module.css";
import logo from "../../../assets/icons/izza.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("#home");

    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      {
        rootMargin: "-85px 0px 0px 0px",
      },
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#home" className={styles.logo} onClick={closeMenu}>
          <img src={logo} alt="Restaurant logo" />
        </a>

        <nav
          id="primary-navigation"
          className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}
          aria-label="Main navigation"
        >
          <a href="#menu" onClick={closeMenu}>
            Menu
          </a>
          <a href="#story" onClick={closeMenu}>
            Family
          </a>
          <a href="#find-us" onClick={closeMenu}>
            Find Us
          </a>

          <a
            href="#contact"
            className={styles.mobileContact}
            onClick={closeMenu}
          >
            Contact <Phone size={16} fill="currentColor" />
          </a>
        </nav>

        <a href="#footer" className={styles.contact}>
          Contact
          <Phone size={16} fill="currentColor" />
        </a>

        <button
          type="button"
          className={styles.menuToggle}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  );
}

export default Header;
