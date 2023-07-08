import fromCamelCase from "@/helpers/fromCamelCase";
import styles from "@/styles/components/Navbar.module.scss";
import { useState } from "react";

const NavLinks = () => {
  const navData = {
    home: "/",
    gallery: "/gallery",
    github: "https://github.com/SoniaVivi",
    about: "/about",
    contact: "/contact",
  };

  return (
    <>
      {Object.entries(navData).map(([linkName, link]) => {
        if (link[0] != "/") {
          return (
            <li key={link}>
              <button
                className={`clickable ${styles.navLink}`}
                onClick={() =>
                  link ? window.open(link, "_blank,noreferer") : null
                }
              >
                <a target="_blank" rel="noreferrer">
                  {fromCamelCase(linkName)}
                </a>
              </button>
            </li>
          );
        } else {
          return (
            <li key={link}>
              <button
                className={`clickable ${styles.navLink}`}
                onClick={() => (link ? window.open(link, "_self") : null)}
              >
                <a>{fromCamelCase(linkName)}</a>
              </button>
            </li>
          );
        }
      })}
    </>
  );
};

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <nav className={`container-full ${styles.navbar}`}>
        <ul className={styles.expandedList}>
          <NavLinks />
        </ul>
        <button
          className={`${styles.hamburgerMenu} ${
            showMobileMenu ? styles.active : ""
          }`}
          onClick={() => setShowMobileMenu((state) => !state)}
        >
          <div></div>
          <div></div>
          <div></div>
        </button>
      </nav>
      <div className={styles.mobileMenuWrapper}>
        <ul
          className={`${styles.mobileMenu} ${
            showMobileMenu ? styles.visible : ""
          }`}
        >
          <NavLinks />
        </ul>
      </div>
    </>
  );
};

export default Navbar;
