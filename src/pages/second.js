import { Inter } from "next/font/google";
import Link from "next/link";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

const navLinks = [
  {
    title: "Showcase",
    path: "/showcase",
  },
  {
    title: "Docs",
    path: "/docs",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Analytics",
    path: "/analytics",
  },
  {
    title: "Templates",
    path: "/templates",
  },
  {
    title: "Enterprise",
    path: "/enterprise",
  },
];

export default function Navbar() {
  const [showMobileMenu, toggleMobileMenu] = useState(false);

  const handleToggleMenu = () => {
    toggleMobileMenu(!showMobileMenu);
  };

  const handleResize = () => {
    if (window.outerWidth > 768) {
      toggleMobileMenu(true);
    } else {
      toggleMobileMenu(false);
    }
  };

  useEffect(() => {
    handleResize(); // set navbar on load
    
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <a href="#" className="mobileMenu" onClick={handleToggleMenu}>
        <img src="/icons/menu.png" alt="menu" />
      </a>
      {showMobileMenu ? (
        <div className={`customNav ${inter.className}`}>
          <>
            <div className="logo">
              <Link href="/">AEON</Link>
              <div className="mobileActions">
                <a href="#" className="search">
                  <img src="/icons/search.png" alt="search" />
                </a>
                <a href="#" onClick={handleToggleMenu}>
                  <img src="/icons/close.png" alt="close" />
                </a>
              </div>
            </div>
            <nav>
              {navLinks.map((item) => (
                <a href={item.path} key={item.path}>
                  {item.title}
                </a>
              ))}
            </nav>
            <input type="text" placeholder="Search documentation..." />
          </>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
