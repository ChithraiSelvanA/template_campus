/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { TenantViewModel } from "./types";
import { mockTenantData } from "./mockData";

// Navigation components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Sub-pages loading
import HomePage from "./app/page";
import AboutPage from "./app/about/page";
import AcademicsPage from "./app/academics/page";
import ActivitiesPage from "./app/activities/page";
import AdmissionPage from "./app/admission/page";
import ContactPage from "./app/contact/page";
import EventsPage from "./app/events/page";
import FacultyPage from "./app/faculty/page";
import InfrastructurePage from "./app/infrastructure/page";
import GalleryPage from "./app/gallery/page";
import DisclosurePage from "./app/disclosure/page";

interface TemplateCampusProps {
  data?: TenantViewModel;
}

export default function TemplateCampus({ data = mockTenantData }: TemplateCampusProps) {
  const finalData = data ?? mockTenantData;

  // Track the current active path state representation
  const [currentPath, setCurrentPath] = useState("/");

  // Listen for hash change for browser compliance routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const parsedPath = hash.replace("#", "") || "/";
      setCurrentPath(parsedPath);
      // Auto-scroll on page changes
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Parse initial route on load
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Soft program-controlled navigation triggers
  const handleNavClick = (path: string) => {
    window.location.hash = path === "/" ? "" : `#${path}`;
    setCurrentPath(path);
  };

  // Scroll Progress calculations for luxury ambient UI
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Switch renderer page based on current path state
  const renderSubPage = () => {
    switch (currentPath) {
      case "/":
        return <HomePage data={finalData} onNavigate={handleNavClick} />;
      case "/about":
        return <AboutPage data={finalData} />;
      case "/academics":
        return <AcademicsPage data={finalData} />;
      case "/activities":
        return <ActivitiesPage data={finalData} />;
      case "/admission":
        return <AdmissionPage data={finalData} />;
      case "/contact":
        return <ContactPage data={finalData} />;
      case "/events":
        return <EventsPage data={finalData} />;
      case "/faculty":
        return <FacultyPage data={finalData} />;
      case "/infrastructure":
        return <InfrastructurePage data={finalData} />;
      case "/gallery":
        return <GalleryPage data={finalData} />;
      case "/disclosure":
        return <DisclosurePage data={finalData} />;
      default:
        return <HomePage data={finalData} onNavigate={handleNavClick} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-campus-sand font-sans antialiased text-text-body selection:bg-campus-amber selection:text-white">
      {/* Scroll indicator bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-campus-amber origin-left z-[100] pointer-events-none"
        style={{ scaleX }}
      />

      {/* Sticky Top Navbar */}
      <Navbar data={finalData} currentPath={currentPath} onNavigate={handleNavClick} />

      {/* Main Pages Canvas with Smooth motion AnimatePresence Transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPath}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            {renderSubPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Sticky bottom page scroll indicators */}
      <ScrollToTop />

      {/* Structured Dark Footer */}
      <Footer data={finalData} currentPath={currentPath} onNavigate={handleNavClick} />
    </div>
  );
}
export { mockTenantData };
export type { TenantViewModel };
export { templateConfig } from "./template.config";
