/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Award, ShieldAlert, BookOpen, MapPin, PhoneCall, ChevronDown } from "lucide-react";
import { TenantViewModel } from "../types";
import { templateConfig } from "../template.config";
import { isValidImageUrl } from "../../../core/utils/url";

interface NavbarProps {
  data: TenantViewModel;
  currentPath: string;
  onNavigate: (path: string) => void;
}

export default function Navbar({ data, currentPath, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileOpen(false);
    setActiveDropdown(null);
  };

  const schoolLogo = data?.school?.logoUrl;
  const schoolName = data?.school?.name || "Campus School";
  const schoolMotto = data?.identity?.motto || "Holistic Excellence";

  const desktopMenuStructure = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Academics",
      children: [
        { name: "Overview", path: "/academics" },
        { name: "Faculty & Coaches", path: "/faculty" },
        { name: "CBSE Disclosure", path: "/disclosure" },
        { name: "Admissions Hub", path: "/admission" }
      ]
    },
    {
      name: "Campus Life",
      children: [
        { name: "Physical & Sports Program", path: "/activities" },
        { name: "Infrastructure & Turf", path: "/infrastructure" },
        { name: "Events & Fixtures", path: "/events" },
        { name: "Photo Gallery", path: "/gallery" }
      ]
    },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header id="campus-header" className="sticky top-0 z-40 w-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] border-b border-campus-maroon/5 transition-all">
      {/* Top emergency announcement bar or quick contacts if active */}
      <div id="top-contact-bar" className="hidden sm:flex bg-campus-maroon text-white text-xs px-6 py-2 justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1"><PhoneCall className="w-3.5 h-3.5" /> {data.school.phone}</span>
          <span className="flex items-center gap-1 opacity-90"><MapPin className="w-3.5 h-3.5" /> {data.school.city}, {data.school.state}</span>
        </div>
        <div id="top-motto" className="font-display tracking-wider font-semibold italic">
          "{schoolMotto}"
        </div>
      </div>

      <nav id="navbar-main" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo and Name */}
        <button
          id="btn-nav-logo"
          onClick={() => handleNavClick("/")}
          className="flex items-center gap-3 text-left focus:outline-none focus:ring-2 focus:ring-campus-amber rounded-lg p-1 group shrink-0"
        >
          {isValidImageUrl(schoolLogo) ? (
            <img
              id="img-nav-logo"
              src={schoolLogo}
              alt={schoolName}
              className="w-10 h-10 object-contain rounded-full border border-campus-maroon/10 p-0.5 group-hover:scale-105 transition-transform"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div id="fallback-logo" className="w-10 h-10 bg-campus-maroon text-white font-display font-semibold rounded-full flex items-center justify-center text-lg shadow">
              {schoolName.charAt(0)}
            </div>
          )}
          <div>
            <h1 id="txt-nav-school-name" className="font-display font-bold text-base md:text-lg text-campus-maroon tracking-tight leading-tight group-hover:text-campus-maroon/90 max-w-[200px] sm:max-w-xs md:max-w-md lg:max-w-sm xl:max-w-md truncate">
              {schoolName}
            </h1>
            <p id="txt-nav-school-sub" className="text-[10px] font-sans tracking-widest text-text-body font-medium uppercase">
              Affiliated to CBSE
            </p>
          </div>
        </button>

        {/* Desktop Links */}
        <ul id="desktop-nav-links" className="hidden lg:flex items-center gap-1 xl:gap-2">
          {desktopMenuStructure.map((item) => {
            if (item.children) {
              const isChildActive = item.children.some((child) => currentPath === child.path);
              const isOpen = activeDropdown === item.name;

              return (
                <li
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    id={`nav-dropdown-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className={`relative px-3.5 py-2 rounded-lg font-sans text-xs xl:text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-campus-amber cursor-pointer select-none flex items-center gap-1 ${
                      isChildActive ? "text-campus-maroon bg-campus-rose-tint/35" : "text-text-body hover:text-campus-maroon/85 hover:bg-campus-rose-tint/20"
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? "rotate-180 text-campus-maroon" : "text-text-body/60"}`} />
                    {isChildActive && (
                      <motion.span
                        layoutId="activeNavbarUnderline"
                        className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-campus-amber rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-1 w-56 bg-white rounded-2xl border border-campus-maroon/5 shadow-xl py-2 z-50 origin-top-left"
                      >
                        <div className="px-2 space-y-0.5">
                          {item.children.map((child) => {
                            const isChildItemActive = currentPath === child.path;
                            return (
                              <button
                                key={child.path}
                                id={`nav-child-${child.name.toLowerCase().replace(/\s+/g, "-")}`}
                                onClick={() => handleNavClick(child.path)}
                                className={`w-full text-left px-3.5 py-2.5 rounded-xl font-sans text-xs font-bold transition-all flex items-center gap-2 ${
                                  isChildItemActive
                                    ? "bg-campus-maroon text-white shadow-xs"
                                    : "text-text-body hover:bg-campus-rose-tint hover:text-campus-maroon"
                                }`}
                              >
                                <span className={`w-1.5 h-1.5 rounded-full z-10 ${isChildItemActive ? "bg-campus-amber" : "bg-transparent"}`} />
                                <span className="truncate">{child.name}</span>
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            }

            const isActive = currentPath === item.path;
            return (
              <li key={item.path}>
                <button
                  id={`nav-link-${item.path === "/" ? "home" : item.path!.replace("/", "")}`}
                  onClick={() => handleNavClick(item.path!)}
                  className={`relative px-3.5 py-2 rounded-lg font-sans text-xs xl:text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-campus-amber cursor-pointer select-none block ${
                    isActive ? "text-campus-maroon bg-campus-rose-tint/35" : "text-text-body hover:text-campus-maroon/85 hover:bg-campus-rose-tint/20"
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavbarUnderline"
                      className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-campus-amber rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Action Button & Collapsible menu toggle */}
        <div id="nav-actions" className="flex items-center gap-3">
          <motion.button
            id="btn-nav-admission"
            onClick={() => handleNavClick("/admission")}
            whileHover={{ scale: 1.05, translateY: -2, boxShadow: "0 8px 20px rgba(217, 119, 6, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:inline-flex items-center justify-center font-display font-bold text-xs uppercase tracking-wider px-5 py-2.5 bg-campus-amber text-white rounded-full cursor-pointer shadow-sm"
          >
            Admission Enquiry
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            id="btn-mobile-menu"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 -mr-2 rounded-lg text-text-body lg:hidden hover:text-campus-maroon hover:bg-campus-rose-tint transition-all cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Links Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden w-full bg-campus-sand border-t border-campus-maroon/5 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2">
              {templateConfig.routes.map((route) => {
                const isActive = currentPath === route.path;
                return (
                  <button
                    key={route.path}
                    id={`mobile-nav-link-${route.path === "/" ? "home" : route.path.replace("/", "")}`}
                    onClick={() => handleNavClick(route.path)}
                    className={`block w-full text-left px-4 py-2.5 rounded-xl font-sans text-sm font-bold transition-all ${
                      isActive
                        ? "bg-campus-maroon text-white"
                        : "text-text-body hover:bg-campus-rose-tint hover:text-campus-maroon"
                    }`}
                  >
                    {route.name}
                  </button>
                );
              })}
              <div className="pt-4 border-t border-campus-maroon/10">
                <button
                  id="btn-mobile-enquiry"
                  onClick={() => handleNavClick("/admission")}
                  className="w-full text-center font-display font-bold text-xs uppercase tracking-wider py-3 px-4 bg-campus-amber hover:bg-campus-amber/95 text-white rounded-xl shadow cursor-pointer block"
                >
                  Admission Enquiry
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
