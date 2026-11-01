"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./breadcrumb.module.css";

function formatLabel(segment: string) {
  return segment  
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function Breadcrumb() {
    const pathname = usePathname();
    if (pathname === "/") {
        return null;
    }
    const segments = pathname.split("/").filter(Boolean);
    return(
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      <Link href="/">Home</Link>
        {segments.map((segment, index) => {
           const href = "/" + segments.slice(0, index + 1).join("/");
            const isLast = index === segments.length - 1;
            return (
                <span key={href}>
            <span className={styles.separator}>&gt;</span>
            {isLast ? (
              <span className={styles.current}>{formatLabel(segment)}</span>
            ) : (
              <Link href={href}>{formatLabel(segment)}</Link>
            )}
          </span>
            );
        })}
        </nav>
    );
}