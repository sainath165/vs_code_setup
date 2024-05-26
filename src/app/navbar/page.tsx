// components/Navbar.tsx
import Link from 'next/link';
import styles from './navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/Table" className={styles.navLink}>
            Table
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
