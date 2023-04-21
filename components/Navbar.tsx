import styles from "@/styles/components/Navbar.module.scss";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        setScrollPosition(window.pageYOffset);
      },
      { passive: true }
    );
  }, []);

  return (
    <>
      <nav
        className={`container-full ${styles.navbar} ${
          scrollPosition > 0 ? styles.scrolled : ""
        }`}
      >
        <ul className={styles.expandedList}>
          <li className={`clickable ${styles.navLink}`}>
            <a>Lorem</a>
          </li>
          <li className={`clickable ${styles.navLink}`}>
            <a>sit amet</a>
          </li>
          <li className={`clickable ${styles.navLink}`}>
            <a>His id magna</a>
          </li>
          <li className={`clickable ${styles.navLink}`}>
            <a>us doctus omittam e</a>
          </li>
          <li className={`clickable ${styles.navLink}`}>
            <a>Melius perpetua has in</a>
          </li>
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
          <li className={`clickable ${styles.navLink}`}>
            <a>Lorem</a>
          </li>
          <li className={`clickable ${styles.navLink}`}>
            <a>sit amet</a>
          </li>
          <li className={`clickable ${styles.navLink}`}>
            <a>His id magna</a>
          </li>
          <li className={`clickable ${styles.navLink}`}>
            <a>us doctus omittam e</a>
          </li>
          <li className={`clickable ${styles.navLink}`}>
            <a>Melius perpetua has in</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
