"use client";
import { useEffect, useState } from "react";

export default function StickyHeading({ sections }) {
  const [activeSection, setActiveSection] = useState("");
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120) { // 120px untuk memastikan perubahan lebih smooth
            current = section.title;
          }
        }
      });

      setActiveSection(current);
      setIsSticky(window.scrollY > 56); // Sticky aktif jika scroll lebih dari navbar
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div 
      className={`fixed top-[56px] left-0 w-full px-6 py-3 bg-blue-800 text-white shadow-md z-40 
      transition-all duration-300 ${isSticky ? "opacity-100" : "opacity-0"}`}
    >
      <h2 className="text-lg font-semibold">{activeSection || "Skripsi Online"}</h2>
    </div>
  );
}
