'use client';
import Navbar from "./components/Navbar";
import StickyHeading from "./components/StickyHeading";
import Bab1Content from "./components/Bab1Content";
import Bab2Content from "./components/Bab2Content";
import Bab3Content from "./components/Bab3Content";
import Bab4Content from "./components/Bab4Content";
import Bab5Content from "./components/Bab5Content";
import { useState, useEffect } from "react";

export default function Home() {
  const sections = [
    { id: "bab1", title: "📘 BAB 1: Pendahuluan" },
    { id: "bab2", title: "📗 BAB 2: Kajian Pustaka" },
    { id: "bab3", title: "📙 BAB 3: Metodologi Penelitian" },
    { id: "bab4", title: "📕 BAB 4: Hasil dan Pembahasan" },
    { id: "bab5", title: "📕 BAB 5: Kesimpulan dan Saran" },
  ];

  const [activeSection, setActiveSection] = useState("bab1");

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "bab1";
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section.id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]); // Menambahkan dependency agar lebih stabil

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Sticky Heading */}
      <StickyHeading sections={sections} activeSection={activeSection} />

      {/* Konten Bab */}
      <div className="mt-24 space-y-16 px-6">
        <div id="bab1" className="min-h-screen">
          <Bab1Content />
        </div>
        <div id="bab2" className="min-h-screen">
          <Bab2Content />
        </div>
        <div id="bab3" className="min-h-screen">
          <Bab3Content />
        </div>
        <div id="bab4" className="min-h-screen">
          <Bab4Content />
        </div>
        <div id="bab5" className="min-h-screen">
          <Bab5Content />
        </div>
      </div>
    </div>
  );
}
