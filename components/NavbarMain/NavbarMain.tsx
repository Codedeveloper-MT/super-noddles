import Link from "next/link";
import logoImg from "@/public/images/images1.jpg";
import styles from "./NavbarMain.module.css";
import Image from "next/image";

export default function NavbarMain() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image src={logoImg} alt="Super Noddles logo" />
        Super Noddles
      </Link>
      <nav>
        <ul className={styles.navList}>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/community">Community</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/account">My Account</Link></li>
        </ul>
      </nav>
    </header>
  );
}