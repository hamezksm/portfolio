"use client";

import Link from "next/link";
import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: any) => {
    e.preventDefault();
    const targetId = href.replace(/.*#/, "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-dark-bg text-blue-600 p-4 z-10">
      <ul className="flex flex-row justify-end space-x-4">
        {["ABOUT", "SKILLS", "WORK", "PROJECTS", "CONTACT", "RESUME"].map(
          (item, index) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleClick(e, `#${item.toLowerCase()}`)}
                className="hover:text-white transition-colors duration-300 ease-in-out"
              >
                {index}. {item}
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
