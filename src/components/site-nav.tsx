"use client";

import { useEffect, useState } from "react";
import styles from "./site-nav.module.css";

type NavItem = {
  id: string;
  label: string;
};

type SiteNavProps = {
  items: NavItem[];
};

export function SiteNav({ items }: SiteNavProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "top");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sectionElements = items
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section instanceof HTMLElement);

    const updateActiveSection = () => {
      const triggerLine = window.scrollY + 180;
      let nextActiveId = items[0]?.id ?? "top";

      for (const section of sectionElements) {
        if (triggerLine >= section.offsetTop) {
          nextActiveId = section.id;
        }
      }

      setActiveId(nextActiveId);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, [items]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 960) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.wrapper}>
      <header className={styles.frame} data-open={menuOpen}>
        <a className={styles.brand} href="#top" onClick={() => setActiveId("top")}>
          <span className={styles.brandMark}>ER</span>
          <span className={styles.brandText}>
            <strong>Enosh Raju</strong>
            <span>Java Full Stack Developer</span>
          </span>
        </a>

        <button
          aria-controls="site-nav"
          aria-expanded={menuOpen}
          className={styles.menuToggle}
          onClick={() => setMenuOpen((current) => !current)}
          type="button"
        >
          <span />
          <span />
        </button>

        <nav
          aria-label="Primary"
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
          id="site-nav"
        >
          {items.map((item) => (
            <a
              className={styles.link}
              data-active={activeId === item.id}
              href={`#${item.id}`}
              key={item.id}
              onClick={() => {
                setActiveId(item.id);
                setMenuOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>
    </div>
  );
}
