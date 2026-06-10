/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React from "react";
import { Mail, Phone, MapPin, Youtube, Facebook, Instagram, ShieldCheck, Clock } from "lucide-react";
import { TenantViewModel } from "../types";
import { templateConfig } from "../template.config";
import { isValidImageUrl } from "../../../core/utils/url";

interface FooterProps {
  data: TenantViewModel;
  currentPath: string;
  onNavigate: (path: string) => void;
}

export default function Footer({ data, currentPath, onNavigate }: FooterProps) {
  const schoolName = data?.school?.name || "Campus School";
  const schoolLogo = data?.school?.logoUrl;
  const slogan = data?.school?.slogan || "Nurturing Mind, Body, & Spirit since 2012";
  const contacts = data?.contactDetails?.[0] || {
    phone: data?.school?.phone || "+91 98765 43210",
    email: data?.school?.email || "admissions@campusschool.edu.in",
    address: data?.school?.fullAddress || "Sports Valley Campus, Sector 9",
    mapUrl: "",
    facebook: "#",
    instagram: "#",
    youtube: "#",
    officeHours: "Monday - Saturday: 8:00 AM - 3:00 PM"
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="campus-footer" className="bg-campus-navy text-white font-sans mt-auto">
      {/* Upper Border Accent Line */}
      <div className="h-1.5 w-full bg-gradient-to-r from-campus-maroon via-campus-amber to-campus-maroon" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* School Brand Segment */}
          <div id="footer-col-brand" className="space-y-4">
            <div className="flex items-center gap-3">
              {isValidImageUrl(schoolLogo) ? (
                <img
                  id="footer-logo"
                  src={schoolLogo}
                  alt={schoolName}
                  className="w-12 h-12 rounded-full border border-white/20 p-0.5 object-contain"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div id="footer-logo-fallback" className="w-12 h-12 bg-campus-maroon font-display font-black text-xl rounded-full flex items-center justify-center">
                  {schoolName.charAt(0)}
                </div>
              )}
              <div>
                <h3 id="footer-title" className="font-display font-bold text-lg tracking-tight text-white leading-tight">
                  {schoolName}
                </h3>
                <span className="text-[10px] uppercase tracking-widest text-campus-amber font-semibold block">
                  CBSE Affiliation Portal
                </span>
              </div>
            </div>
            
            <p id="footer-slogan" className="text-sm text-slate-300 font-light leading-relaxed">
              {slogan}
            </p>

            <div className="flex items-center gap-3 pt-2 text-slate-400">
              <a href={contacts.facebook} className="hover:text-campus-amber transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={contacts.instagram} className="hover:text-campus-amber transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={contacts.youtube} className="hover:text-campus-amber transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div id="footer-col-links" className="space-y-4">
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-campus-amber">
              Academic Navigation
            </h4>
            <ul className="space-y-2.5">
              {templateConfig.routes.slice(0, 6).map((route) => (
                <li key={route.path}>
                  <button
                    onClick={() => onNavigate(route.path)}
                    className={`text-sm text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-2 ${
                      currentPath === route.path ? "text-white font-semibold" : ""
                    }`}
                  >
                    <span className="text-[9px] text-campus-amber">▪</span> {route.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Secondary Links Column */}
          <div id="footer-col-legal" className="space-y-4">
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-campus-amber">
              CBSE & Portal Info
            </h4>
            <ul className="space-y-2.5">
              {templateConfig.routes.slice(6).map((route) => (
                <li key={route.path}>
                  <button
                    onClick={() => onNavigate(route.path)}
                    className={`text-sm text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-2 ${
                      currentPath === route.path ? "text-white font-semibold" : ""
                    }`}
                  >
                    <span className="text-[9px] text-campus-amber">▪</span> {route.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div id="footer-col-contact" className="space-y-4">
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-campus-amber">
              Campus Locations
            </h4>
            <ul className="space-y-3.5 text-sm text-slate-300 font-light">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-campus-amber shrink-0 mt-0.5" />
                <span>{contacts.address || data.school.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-campus-amber shrink-0" />
                <span>{contacts.phone}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-campus-amber shrink-0" />
                <span className="break-all">{contacts.email}</span>
              </li>
              <li className="flex items-start gap-2.5 pt-1.5 border-t border-white/10 mt-1">
                <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-400">
                  <span className="font-semibold block text-slate-300">Office Working Hours</span>
                  <span>{contacts.officeHours}</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower copyright bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} {schoolName}. All rights reserved. Built using eddesk.</p>
          <div className="flex items-center gap-4 text-[10px] tracking-wider uppercase font-semibold">
            <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-campus-amber" /> CBSE Affiliated #123456</span>
            <span>|</span>
            <span>U-DISE Code: 0102030405</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
