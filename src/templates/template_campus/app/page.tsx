/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  Trophy, BookOpen, GraduationCap, Users, Award, 
  MapPin, Calendar, Clock, Lock, ChevronLeft, ChevronRight,
  Shield, CheckCircle2, MessageSquare, ArrowRight, Sparkles, Activity
} from "lucide-react";
import { TenantViewModel } from "../types";
import SectionHeader from "../components/SectionHeader";
import { isValidImageUrl } from "../../../core/utils/url";

interface PageProps {
  data: TenantViewModel;
  onNavigate: (path: string) => void;
}

export default function HomePage({ data, onNavigate }: PageProps) {
  // Hero slider index
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const heroSlides = data.heroMedia ?? [];

  // Scroll parallax for premium aesthetic
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 800], [0, 240]);

  useEffect(() => {
    if (heroSlides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // Double-A+ Showcase Tabs: 'Academic' or 'Sports'
  const [activeAplusTab, setActiveAplusTab] = useState<"Academic" | "Sports">("Academic");

  // Parent Testimonial Carousel auto-play
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const testimonials = data.testimonials ?? [];

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Filtered Achievements for Showcase
  const filteredAchievements = (data.achievements ?? []).filter(
    (ach) => ach.category === activeAplusTab
  );

  // Faculty perspective flipped states handler
  const [flippedFaculty, setFlippedFaculty] = useState<Record<string, boolean>>({});
  const toggleFacultyFlip = (key: string) => {
    setFlippedFaculty((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const tenthVal = data.academicResult?.tenthPassPercentage ?? 100;
  const plusTwoVal = data.academicResult?.plusTwoPassPercentage ?? 99;

  // Render match fixture logo fallback or image
  const renderFixtureLogo = (teamName: string, gender: string) => {
    return (
      <div className="w-10 h-10 bg-campus-rose-tint text-campus-maroon font-display font-bold text-sm rounded-full flex items-center justify-center border border-campus-maroon/10">
        {teamName.substring(0, 2).toUpperCase()}
      </div>
    );
  };

  return (
    <div id="campus-home-page" className="bg-campus-sand overflow-hidden font-sans">
      
      {/* SECTION 1: CAMPUS HERO SLIDER */}
      <section id="sec-hero-slider" className="relative h-[80vh] w-full overflow-hidden bg-campus-navy">
        {heroSlides.length > 0 ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentHeroIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              {/* Background with Slow Zoom Transition & CPU/GPU Parallax */}
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: 1.05 }}
                transition={{ duration: 6, ease: "linear" }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${heroSlides[currentHeroIndex].mediaUrl})`,
                  y: yParallax
                }}
                referrerPolicy="no-referrer"
              />
              
              {/* Scholarly Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-campus-navy via-campus-navy/55 to-campus-navy/30" />

              {/* Slide Content */}
              <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl text-center text-white space-y-6">
                  <motion.span
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-campus-amber/20 text-campus-amber border border-campus-amber/30 backdrop-blur-xs"
                  >
                    <Award className="w-3.5 h-3.5" /> ESTABLISHED {data.identity.foundedYear} • CBSE STREAM
                  </motion.span>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tight"
                  >
                    {heroSlides[currentHeroIndex].headline}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-sm sm:text-base md:text-lg text-slate-200 font-light max-w-2xl mx-auto leading-relaxed"
                  >
                    {heroSlides[currentHeroIndex].subheadline}
                  </motion.p>

                  {/* Buttons Grid */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-wrap items-center justify-center gap-4 pt-4"
                  >
                    <motion.button
                      onClick={() => onNavigate("/admission")}
                      whileHover={{ scale: 1.05, translateY: -2, boxShadow: "0 10px 20px rgba(217, 119, 6, 0.25)" }}
                      whileTap={{ scale: 0.95 }}
                      className="px-7 py-3 rounded-full bg-campus-amber text-white font-display font-medium text-sm tracking-wider uppercase shadow-md cursor-pointer"
                    >
                      {heroSlides[currentHeroIndex].primaryButtonText || "Enquire Now"}
                    </motion.button>
                    
                    <motion.button
                      onClick={() => onNavigate("/infrastructure")}
                      whileHover={{ scale: 1.05, translateY: -2, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                      whileTap={{ scale: 0.95 }}
                      className="px-7 py-3 rounded-full border-2 border-white text-white font-display font-medium text-sm tracking-wider uppercase cursor-pointer"
                    >
                      {heroSlides[currentHeroIndex].secondaryButtonText || "Explore Campus"}
                    </motion.button>

                    <motion.a
                      href={`https://wa.me/${data.school.phone.replace(/\+/g, '').replace(/\s/g, '')}?text=Interested%20in%20School%20Admissions`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, translateY: -2, boxShadow: "0 10px 20px rgba(5, 150, 105, 0.25)" }}
                      whileTap={{ scale: 0.95 }}
                      className="px-5 py-3 rounded-full bg-emerald-600 text-white font-sans text-xs font-semibold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping" />
                      WhatsApp Updates
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="flex items-center justify-center h-full text-white text-lg">No slides loaded.</div>
        )}
      </section>

      {/* SECTION 2: BROADCAST NOTICE BOARD (SCROLLING MARQUEE) */}
      <section id="sec-marquee" className="bg-campus-navy text-white border-y border-white/15 py-3 z-20 relative overflow-hidden">
        <div className="flex items-center gap-4 px-6 max-w-7xl mx-auto">
          <div className="shrink-0 flex items-center gap-1.5 px-3 py-1 rounded bg-campus-maroon text-xs font-bold text-white uppercase tracking-wider shadow">
            <span className="w-2 h-2 rounded-full bg-campus-amber animate-ping" />
            Circular
          </div>
          <div className="relative overflow-hidden w-full h-5">
            <div className="absolute flex gap-16 whitespace-nowrap animate-[marquee_25s_linear_infinite] hover:pause">
              {(data.broadcast ?? []).length > 0 ? (
                data.broadcast.map((bc) => (
                  <span key={bc.key} className="text-sm font-medium hover:text-campus-amber cursor-pointer">
                     📢 <strong className="text-campus-amber">{bc.title}:</strong> {bc.message}
                  </span>
                ))
              ) : (
                <span className="text-sm">Welcome to our newly launched campus portal! Admissions are now underway.</span>
              )}
            </div>
          </div>
        </div>
        
        {/* Simple marquee animation injected via inline style since Tailwind standard might need custom config */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes marquee {
            0% { transform: translateX(50%); }
            100% { transform: translateX(-100%); }
          }
          .animate-\\[marquee_25s_linear_infinite\\] {
            animation: marquee 25s linear infinite;
          }
          .hover\\:pause:hover {
            animation-play-state: paused;
          }
        `}} />
      </section>

      {/* SECTION 3: SCHOLARLY STATS BAR */}
      <section id="sec-stats-bar" className="bg-campus-maroon text-white py-10 shadow-lg relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.05
                }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {(data.stats ?? []).map((stat) => (
              <motion.div
                key={stat.key}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.9 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1, 
                    transition: { type: "spring", stiffness: 90, damping: 12 } 
                  }
                }}
                className="text-center space-y-1.5"
              >
                <div className="flex justify-center text-campus-amber mb-2">
                  {stat.icon === "GraduationCap" && <GraduationCap className="w-8 h-8 font-extrabold" />}
                  {stat.icon === "Users" && <Users className="w-8 h-8 font-extrabold" />}
                  {stat.icon === "Trophy" && <Trophy className="w-8 h-8 font-extrabold" />}
                  {stat.icon === "Award" && <Award className="w-8 h-8 font-extrabold" />}
                  {!["GraduationCap", "Users", "Trophy", "Award"].includes(stat.icon) && <Activity className="w-8 h-8 font-extrabold" />}
                </div>
                <div className="font-display font-extrabold text-3xl md:text-4xl text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="font-sans text-xs md:text-sm uppercase tracking-widest text-campus-rose-tint/80 font-medium font-bold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: DOUBLE-A+ SHOWCASE (ACADEMICS & ATHLETICS) */}
      <section id="sec-aplus-showcase" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeader
          id="aplus-header"
          badge="High Standard Double-A+ Standard"
          title="Academics & Athletics Integrated"
          subtitle="A premium school has no blind spots. We drive 100% board scores while nurturing national athletics teams."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mt-8">
          {/* Progress Rings panel */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, type: "spring", stiffness: 60, damping: 14 }}
            whileHover={{ y: -6, scale: 1.01, borderColor: "rgba(122, 28, 44, 0.15)", boxShadow: "0 20px 40px rgba(122, 28, 44, 0.04)" }}
            className="lg:col-span-5 bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-campus-maroon/5 flex flex-col justify-between transition-colors duration-300"
          >
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-campus-maroon font-bold bg-campus-rose-tint px-3 py-1 rounded-full">
                Scholarly Records ({data.academicResult?.year ?? "2025"})
              </span>
              <h3 className="font-display font-bold text-2xl text-campus-navy tracking-tight">
                CBSE Board Examination Stats
              </h3>
              <p className="text-sm font-sans text-text-body leading-relaxed">
                {data.academicResult?.legacyQuote ?? "Our scholars achieve elite grades, backed by rigorous research modules, computational classes and comprehensive mentoring programs."}
              </p>
            </div>

            {/* Radial SVGs */}
            <div className="grid grid-cols-2 gap-6 py-8">
              {/* Grade 10 Pass rate */}
              <div id="ring-10th" className="flex flex-col items-center space-y-3">
                <div className="relative w-28 h-28 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="56" cy="56" r="48" stroke="#F5EBEF" strokeWidth="8" fill="transparent" />
                    <motion.circle
                      cx="56"
                      cy="56"
                      r="48"
                      stroke="#7A1C2C"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray="301.6"
                      initial={{ strokeDashoffset: 301.6 }}
                      whileInView={{ strokeDashoffset: 301.6 - (301.6 * tenthVal) / 100 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  </svg>
                  <span className="absolute font-display font-bold text-lg text-campus-navy">
                    {tenthVal}%
                  </span>
                </div>
                <div className="text-center">
                  <h4 className="font-display font-bold text-sm text-campus-navy leading-none">Class 10th</h4>
                  <span className="text-[10px] uppercase font-semibold text-text-body">CBSE Pass Ratio</span>
                </div>
              </div>

              {/* Grade 12 Pass rate */}
              <div id="ring-12th" className="flex flex-col items-center space-y-3">
                <div className="relative w-28 h-28 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="56" cy="56" r="48" stroke="#F5EBEF" strokeWidth="8" fill="transparent" />
                    <motion.circle
                      cx="56"
                      cy="56"
                      r="48"
                      stroke="#D97706"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray="301.6"
                      initial={{ strokeDashoffset: 301.6 }}
                      whileInView={{ strokeDashoffset: 301.6 - (301.6 * plusTwoVal) / 100 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  </svg>
                  <span className="absolute font-display font-bold text-lg text-campus-navy">
                    {plusTwoVal}%
                  </span>
                </div>
                <div className="text-center">
                  <h4 className="font-display font-bold text-sm text-campus-navy leading-none">Class 12th</h4>
                  <span className="text-[10px] uppercase font-semibold text-text-body">CBSE Pass Ratio</span>
                </div>
              </div>
            </div>

            <motion.button
              onClick={() => onNavigate("/academics")}
              whileHover={{ scale: 1.02, translateY: -1, backgroundColor: "rgba(242, 185, 196, 0.55)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full text-center py-3.5 rounded-xl bg-campus-rose-tint text-campus-maroon font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
            >
              Curriculum Overview <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>

          {/* Sliding Tabs Achievement Shelf */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, type: "spring", stiffness: 60, damping: 14 }}
            whileHover={{ y: -6, scale: 1.01, borderColor: "rgba(122, 28, 44, 0.15)", boxShadow: "0 20px 40px rgba(122, 28, 44, 0.04)" }}
            className="lg:col-span-7 bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-campus-maroon/5 flex flex-col justify-between transition-colors duration-300"
          >
            <div className="space-y-6">
              {/* Sliding Indicator Tab Selector */}
              <div className="flex bg-campus-sand p-1.5 rounded-full border border-campus-maroon/10">
                <button
                  onClick={() => setActiveAplusTab("Academic")}
                  className="flex-1 relative py-2.5 rounded-full font-display font-bold text-xs uppercase tracking-wider text-center cursor-pointer transition-colors focus:outline-none"
                >
                  <span className={`relative z-10 ${activeAplusTab === "Academic" ? "text-white" : "text-text-body"}`}>
                    🎓 Academic Honors
                  </span>
                  {activeAplusTab === "Academic" && (
                    <motion.span
                      layoutId="aplusTabSlide"
                      className="absolute inset-0 bg-campus-maroon rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  )}
                </button>
                <button
                  onClick={() => setActiveAplusTab("Sports")}
                  className="flex-1 relative py-2.5 rounded-full font-display font-bold text-xs uppercase tracking-wider text-center cursor-pointer transition-colors focus:outline-none"
                >
                  <span className={`relative z-10 ${activeAplusTab === "Sports" ? "text-white" : "text-text-body"}`}>
                    🏆 Athletics Cups
                  </span>
                  {activeAplusTab === "Sports" && (
                    <motion.span
                      layoutId="aplusTabSlide"
                      className="absolute inset-0 bg-campus-maroon rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  )}
                </button>
              </div>

              {/* Toggled Achievements List */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeAplusTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4 min-h-[220px]"
                >
                  {filteredAchievements.length > 0 ? (
                    filteredAchievements.map((ach) => (
                      <motion.div
                        key={ach.key}
                        whileHover={{ scale: 1.015, x: 6, backgroundColor: "rgba(242, 185, 196, 0.35)", borderColor: "rgba(122, 28, 44, 0.15)" }}
                        transition={{ type: "spring", stiffness: 220, damping: 18 }}
                        className="flex gap-4 p-4 rounded-2xl bg-campus-sand/50 border border-campus-maroon/5 group cursor-pointer transition-colors duration-300"
                      >
                        {isValidImageUrl(ach.imageUrl) && (
                          <img
                            src={ach.imageUrl}
                            alt={ach.title}
                            className="w-16 h-16 rounded-xl object-cover border border-campus-maroon/10 shrink-0 shadow-sm transition-transform duration-500 group-hover:scale-105"
                            referrerPolicy="no-referrer"
                          />
                        )}
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-sans font-bold bg-campus-amber text-white px-2 py-0.5 rounded uppercase">
                              {ach.awardLevel}
                            </span>
                            <span className="text-xs text-text-body font-mono">
                              Year: {ach.year}
                            </span>
                          </div>
                          <h4 className="font-display font-bold text-base text-campus-navy group-hover:text-campus-maroon transition-colors">
                            {ach.title}
                          </h4>
                          <p className="text-xs text-text-body leading-relaxed font-light">
                            {ach.description}
                          </p>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <div className="flex items-center justify-center py-12 text-slate-400 text-sm">
                      No featured achievements found for this category.
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.button
               onClick={() => onNavigate("/activities")}
               whileHover={{ scale: 1.02, translateY: -1, boxShadow: "0 8px 20px rgba(217, 119, 6, 0.15)" }}
               whileTap={{ scale: 0.98 }}
               className="mt-6 w-full text-center py-3.5 rounded-xl bg-campus-amber text-white font-display font-bold text-xs uppercase tracking-wider cursor-pointer font-bold"
            >
              View Sports & Activities
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: OUR PHILOSOPHY & CREST */}
      <section id="sec-philosophy" className="py-20 bg-campus-rose-tint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block with text */}
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, type: "spring", stiffness: 60, damping: 14 }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white text-campus-maroon border border-campus-maroon/10">
              <span className="w-1.5 h-1.5 rounded-full bg-campus-maroon animate-pulse" />
              Our Scholarly Creed
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-campus-navy tracking-tight leading-tight">
              {data.identity.aboutTitle}
            </h2>
            <p className="font-sans text-sm md:text-base text-text-body leading-relaxed font-light">
              {data.identity.aboutDescription}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-campus-maroon/5 space-y-2">
                <h4 className="font-display font-bold text-sm text-campus-maroon uppercase tracking-wider">
                  Vision Statement
                </h4>
                <p className="text-xs text-text-body leading-relaxed font-light">
                  {data.identity.vision}
                </p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-campus-maroon/5 space-y-2">
                <h4 className="font-display font-bold text-sm text-campus-amber uppercase tracking-wider">
                  Strategic Mission
                </h4>
                <p className="text-xs text-text-body leading-relaxed font-light">
                  {data.identity.mission}
                </p>
              </div>
            </div>

            <p className="text-xs italic text-text-body font-mono pt-4 border-t border-campus-maroon/10">
              Founded: Academic Year {data.identity.foundedYear} • Regional CBSE Affiliated Authority
            </p>
          </motion.div>

          {/* Right Block with School Crest Floating */}
          <motion.div 
            id="crest-floating-box" 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, type: "spring", stiffness: 60, damping: 12 }}
            className="lg:col-span-5 flex flex-col items-center justify-center"
          >
            <div className="relative animate-float bg-white p-10 rounded-full shadow-[0_15px_40px_rgba(122,28,44,0.08)] border border-campus-maroon/10">
              <div className="relative w-44 h-44 rounded-full bg-campus-maroon text-white flex flex-col items-center justify-center text-center p-6 border-4 border-campus-sand">
                <Shield className="w-14 h-14 text-campus-amber mb-2" />
                <h3 className="font-display font-black text-xs uppercase tracking-widest text-white leading-none">ST. COLUMBA'S</h3>
                <span className="text-[7px] tracking-wider uppercase font-sans text-campus-amber mt-1">FOUNDED 2012</span>
              </div>
              
              {/* Orbiting nodes representing academics and sports */}
              <div className="absolute -top-3 -right-3 bg-campus-amber text-white p-3 rounded-full shadow-lg border border-white">
                <Trophy className="w-5 h-5" />
              </div>
              <div className="absolute -bottom-3 -left-3 bg-campus-navy text-white p-3 rounded-full shadow-lg border border-white">
                <BookOpen className="w-5 h-5" />
              </div>
            </div>
            
            <p className="text-xs tracking-wider uppercase font-semibold text-campus-maroon font-display mt-6 block select-none">
              Motto: "{data.identity.motto}"
            </p>
          </motion.div>

        </div>
      </section>

      {/* SECTION 6: HOLISTIC CURRICULUM (CO-CURRICULAR & SPORTS GRID) */}
      <section id="sec-why-us" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeader
          id="whyus-header"
          badge="Four Pillars of Learning"
          title="Designed for Deep Co-Curricular Growth"
          subtitle="We ensure physical training is integrated with intellectual discovery to breed healthy minds."
        />

        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.05
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {(data.whyChooseUs ?? []).map((item, idx) => (
            <motion.div
              key={item.id ?? idx}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.98 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1, 
                  transition: { type: "spring", stiffness: 80, damping: 14 } 
                }
              }}
              whileHover={{ 
                y: -10, 
                scale: 1.03,
                borderColor: "rgba(122, 28, 44, 0.2)",
                boxShadow: "0 20px 45px rgba(122, 28, 44, 0.08)"
              }}
              transition={{ type: "spring", stiffness: 120, damping: 14 }}
              className="bg-white rounded-3xl p-6 border border-campus-maroon/5 shadow-[0_8px_30px_rgba(0,0,0,0.015)] flex flex-col justify-between group cursor-pointer transition-colors duration-300"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-campus-rose-tint flex items-center justify-center text-campus-maroon group-hover:bg-campus-maroon group-hover:text-white transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6">
                  {idx === 0 && <BookOpen className="w-6 h-6" />}
                  {idx === 1 && <Trophy className="w-6 h-6" />}
                  {idx === 2 && <Sparkles className="w-6 h-6" />}
                  {idx === 3 && <Users className="w-6 h-6" />}
                  {idx > 3 && <Activity className="w-6 h-6" />}
                </div>
                <h3 className="font-display font-semibold text-lg text-campus-navy group-hover:text-campus-maroon transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-text-body font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
              <button
                onClick={() => onNavigate("/activities")}
                className="mt-6 flex items-center gap-1.5 font-display font-bold text-xs uppercase tracking-wider text-campus-maroon hover:text-campus-amber transition-colors text-left"
              >
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SECTION 7: SPORTS ARENA & FIXTURES (BRINGING SPORTS TO ATTENTION) */}
      <section id="sec-fixtures" className="py-20 bg-campus-navy text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-6">
            <div>
              <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-campus-amber/20 text-campus-amber border border-campus-amber/30 mb-3 inline-block">
                Athletics Operations
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight leading-tight">
                School Sports Arena & Latest Fixtures
              </h2>
            </div>
            <motion.button
              onClick={() => onNavigate("/events")}
              whileHover={{ scale: 1.05, translateY: -1.5, backgroundColor: "rgba(122, 28, 44, 1)", borderColor: "rgba(251, 191, 36, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 rounded-full bg-campus-maroon border border-white/20 text-white font-display font-bold text-xs uppercase tracking-wider cursor-pointer"
            >
              All Match Schedules
            </motion.button>
          </div>

          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4 items-stretch"
          >
            
            {/* Recent Match Box 1 */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 14 } }
              }}
              whileHover={{ 
                y: -8, 
                scale: 1.02, 
                borderColor: "rgba(217, 119, 6, 0.4)", 
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.45)" 
              }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              className="bg-slate-900 rounded-3xl p-6 border border-white/10 relative overflow-hidden flex flex-col justify-between cursor-pointer group transition-colors duration-300"
            >
              <div>
                <div className="flex justify-between items-center pb-4 mb-4 border-b border-white/5 text-xs tracking-wider text-slate-400 font-mono uppercase">
                  <span>Football • Under-17 Class</span>
                  <span className="text-emerald-500 font-bold block">FINAL SCORE</span>
                </div>
                
                <div className="flex items-center justify-between py-2">
                  <div className="flex flex-col items-center">
                    {renderFixtureLogo("St. Columba's Acad.", "Boys")}
                    <span className="text-xs font-semibold mt-2 font-mono text-slate-300">ST. COLUMBA'S</span>
                  </div>
                  <div className="text-center bg-slate-800 rounded-xl px-4 py-2">
                    <span className="font-display font-black text-xl text-campus-amber">3</span>
                    <span className="mx-2 text-slate-500 font-black">-</span>
                    <span className="font-display font-black text-xl text-slate-300">1</span>
                  </div>
                  <div className="flex flex-col items-center">
                    {renderFixtureLogo("Riverside High", "Boys")}
                    <span className="text-xs font-semibold mt-2 font-mono text-slate-400">RIVERSIDE</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-400 font-light italic mt-6 border-t border-white/5 pt-3">
                📍 Academy Centenary Turf • Our strikers clenched victory with two second-half goals!
              </p>
            </motion.div>

            {/* Recent Match Box 2 */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 14 } }
              }}
              whileHover={{ 
                y: -8, 
                scale: 1.02, 
                borderColor: "rgba(217, 119, 6, 0.4)", 
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.45)" 
              }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              className="bg-slate-900 rounded-3xl p-6 border border-white/10 relative overflow-hidden flex flex-col justify-between cursor-pointer group transition-colors duration-300"
            >
              <div>
                <div className="flex justify-between items-center pb-4 mb-4 border-b border-white/5 text-xs tracking-wider text-slate-400 font-mono uppercase">
                  <span>Basketball • Under-15 Stream</span>
                  <span className="text-emerald-500 font-bold block">FINAL SCORE</span>
                </div>
                
                <div className="flex items-center justify-between py-2">
                  <div className="flex flex-col items-center">
                    {renderFixtureLogo("St. Columba's Acad.", "Girls")}
                    <span className="text-xs font-semibold mt-2 font-mono text-slate-300">ST. COLUMBA'S</span>
                  </div>
                  <div className="text-center bg-slate-800 rounded-xl px-4 py-2">
                    <span className="font-display font-black text-xl text-campus-amber">48</span>
                    <span className="mx-2 text-slate-500 font-black">-</span>
                    <span className="font-display font-black text-xl text-slate-300">42</span>
                  </div>
                  <div className="flex flex-col items-center">
                    {renderFixtureLogo("Oxford Heritage", "Girls")}
                    <span className="text-xs font-semibold mt-2 font-mono text-slate-400">OXFORD H.</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-400 font-light italic mt-6 border-t border-white/5 pt-3">
                📍 Olympia Indoor Court • An outstanding defensive play from Captain Riya in the final quarter.
              </p>
            </motion.div>

            {/* Upcoming Match schedule Banner */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 14 } }
              }}
              whileHover={{ 
                y: -8, 
                scale: 1.02, 
                borderColor: "rgba(251, 191, 36, 0.45)", 
                boxShadow: "0 25px 50px rgba(122, 28, 44, 0.35)" 
              }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              className="bg-campus-maroon rounded-3xl p-6 border border-white/10 relative overflow-hidden flex flex-col justify-between text-white cursor-pointer group transition-colors duration-300"
            >
              <div className="space-y-4">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-campus-amber text-white uppercase tracking-wider">
                  Upcoming Derby
                </span>
                
                <div className="space-y-2">
                  <h4 className="font-display font-bold text-lg text-white">
                     St. Columba's High vs. Zenith Sports Acad.
                  </h4>
                  <p className="text-xs text-campus-rose-tint/80 font-light">
                     Inter-School Badminton Semi-Finals matches. Individual streams and doubles.
                  </p>
                </div>

                <div className="pt-2 flex flex-col gap-2 font-mono text-xs text-slate-200">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-campus-amber" /> Friday, June 12, 2026</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-campus-amber" /> 4:00 PM Onwards</span>
                  <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-campus-amber" /> Centenary Indoor Arena</span>
                </div>
              </div>

              <motion.button
                onClick={() => onNavigate("/contact")}
                whileHover={{ scale: 1.02, translateY: -1, backgroundColor: "#f8fafc" }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 w-full py-2.5 rounded-xl bg-white text-campus-maroon font-display font-bold text-xs uppercase tracking-wider cursor-pointer"
              >
                Directions To Gym
              </motion.button>
            </motion.div>

          </motion.div>

          {/* Quick statement illustrating PE structure */}
          <div className="mt-12 bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left justify-between">
            <p className="text-sm font-sans text-slate-300 font-light">
              🏆 <strong className="text-white">Active Physical Wellness:</strong> We run structured tracks for Swimming, Badminton, Cricket, Gym, Football, Yoga and Equestrian activities. Students undergo professional evaluation on diet and flexibility.
            </p>
            <motion.button
              onClick={() => onNavigate("/activities")}
              whileHover={{ x: 4, color: "#f59e0b" }}
              whileTap={{ scale: 0.95 }}
              className="text-xs uppercase font-display font-bold text-campus-amber flex items-center gap-1 shrink-0 cursor-pointer"
            >
              Academic Wellness Stream <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>

        </div>
      </section>

      {/* SECTION 8: INFRASTRUCTURE & PLAYGROUNDS */}
      <section id="sec-infrastructure-snippet" className="py-20 bg-campus-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest text-campus-maroon font-bold bg-campus-rose-tint px-3.5 py-1 rounded-full mb-3 inline-block">
                Premium Sceneries
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-campus-navy tracking-tight leading-tight">
                Modern Laboratories & Sporting Facilities
              </h2>
            </div>
            <motion.button
              onClick={() => onNavigate("/infrastructure")}
              whileHover={{ scale: 1.05, translateY: -1.5, boxShadow: "0 8px 20px rgba(217, 119, 6, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full bg-campus-amber text-white font-display font-bold text-xs uppercase tracking-wider cursor-pointer"
            >
              All Campus Facilities
            </motion.button>
          </div>

          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.05
                }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {(data.infrastructure ?? []).slice(0, 4).map((inf) => (
              <motion.div
                key={inf.key}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.98 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { type: "spring", stiffness: 80, damping: 14 } 
                  }
                }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.025, 
                  boxShadow: "0 20px 40px rgba(122, 28, 44, 0.08)",
                  borderColor: "rgba(122, 28, 44, 0.18)" 
                }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
                className="relative h-72 rounded-3xl overflow-hidden group shadow-md border border-campus-maroon/5 bg-white cursor-pointer transition-all duration-300"
                onClick={() => onNavigate("/infrastructure")}
              >
                {isValidImageUrl(inf.imageUrl) ? (
                  <img
                    src={inf.imageUrl}
                    alt={inf.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-300 flex items-center justify-center text-slate-500 uppercase">
                    {inf.tag}
                  </div>
                )}
                
                {/* Subtle Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-campus-navy via-campus-navy/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute bottom-0 inset-x-0 p-6 text-white space-y-1">
                  <span className="inline-block text-[10px] uppercase tracking-wider font-bold bg-campus-amber text-white px-2 py-0.5 rounded transition-all duration-300 group-hover:translate-x-1 group-hover:bg-campus-maroon shadow-sm">
                    {inf.tag}
                  </span>
                  <h4 className="font-display font-bold text-base tracking-tight text-white leading-tight">
                    {inf.title}
                  </h4>
                  <p className="text-[11px] text-slate-200 line-clamp-2 leading-relaxed font-light">
                    {inf.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* SECTION 9: THE FACULTY & COACHES GRID (3D perspectiva flip cards) */}
      <section id="sec-faculty-flipped" className="py-20 bg-campus-rose-tint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            id="flipped-fac-header"
            badge="Academic Chair & Facilitators"
            title="Our Faculty & Coaching Staff"
            subtitle="Deep educational backgrounds matching physical training certification guidelines."
          />

          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.05
                }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-8"
          >
            {(data.faculty ?? []).map((fac) => {
              const isFlipped = !!flippedFaculty[fac.key];
              return (
                <motion.div
                  key={fac.key}
                  id={`faculty-card-${fac.key}`}
                  variants={{
                    hidden: { opacity: 0, y: 35 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: { type: "spring", stiffness: 70, damping: 14 }
                    }
                  }}
                  whileHover={{ scale: 1.03, y: -6 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="h-96 w-full perspective-1000 cursor-pointer group"
                  onClick={() => toggleFacultyFlip(fac.key)}
                >
                  <div className={`relative w-full h-full duration-500 transform-style-3d ${isFlipped ? "rotate-y-180" : ""}`}>
                    
                    {/* Front Face */}
                    <div className="absolute inset-0 backface-hidden w-full h-full bg-white rounded-3xl shadow-sm border border-campus-maroon/5 flex flex-col overflow-hidden transition-all duration-300 group-hover:border-campus-maroon/20 group-hover:shadow-md">
                      <div className="relative flex-1 overflow-hidden">
                        {isValidImageUrl(fac.imageUrl) ? (
                          <img
                            src={fac.imageUrl}
                            alt={fac.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <div className="w-full h-full bg-slate-200 flex items-center justify-center text-campus-maroon">
                            No Photo
                          </div>
                        )}
                        <span className="absolute top-3 right-3 text-[10px] uppercase font-bold bg-campus-maroon text-white px-2 py-0.5 rounded">
                          {fac.experienceYears} Yrs Exp
                        </span>
                      </div>
                      
                      <div className="p-4 text-center bg-white space-y-1">
                        <h4 className="font-display font-bold text-sm text-campus-navy truncate">
                          {fac.name}
                        </h4>
                        <p className="text-[11px] uppercase font-semibold tracking-wider text-campus-amber truncate">
                          {fac.designation}
                        </p>
                        <p className="text-[10px] text-text-body truncate">
                          {fac.qualification}
                        </p>
                        <span className="text-[10px] text-campus-maroon block font-semibold pt-1 font-mono uppercase">
                          Tap to view bio ↺
                        </span>
                      </div>
                    </div>

                    {/* Back Face */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180 w-full h-full bg-campus-navy text-white rounded-3xl p-6 border border-white/5 flex flex-col justify-between">
                      <div className="space-y-4">
                        <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-campus-amber text-white uppercase tracking-wider block w-fit">
                          {fac.designation}
                        </span>
                        
                        <h4 className="font-display font-bold text-base text-white">
                          {fac.name}
                        </h4>

                        <div className="space-y-2 text-xs text-slate-300 font-light font-sans">
                          <div>
                            <strong className="block text-white text-[10px] tracking-wider uppercase font-semibold text-campus-amber">Qualifications:</strong>
                            <span>{fac.qualification}</span>
                          </div>
                          <div>
                            <strong className="block text-white text-[10px] tracking-wider uppercase font-semibold text-campus-amber">Tenure legacy:</strong>
                            <span>Over {fac.experienceYears} Academic Semesters.</span>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-white/10 pt-4 space-y-2">
                        <p className="text-[11px] text-slate-300 italic font-light">
                          "Dedicated to cultivating robust intellect alongside high physical ethics."
                        </p>
                        <span className="text-[9px] text-slate-400 block uppercase tracking-wider">
                          Click to rotate ↺
                        </span>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* SECTION 10: EVENTS & CALENDAR */}
      <section id="sec-timeline-snippet" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12 pb-6 border-b border-campus-maroon/10">
          <div>
            <span className="text-xs uppercase tracking-widest text-campus-maroon font-bold bg-campus-rose-tint px-3 py-1 rounded-full mb-3 inline-block">
              Interactive Timelines
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-campus-navy tracking-tight leading-tight">
              School Events & Calendars
            </h2>
          </div>
          <motion.button
            onClick={() => onNavigate("/events")}
            whileHover={{ scale: 1.05, translateY: -2, boxShadow: "0 8px 20px rgba(122, 28, 44, 0.15)", backgroundColor: "#631220" }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 rounded-full bg-campus-maroon text-white font-display font-bold text-xs uppercase tracking-wider cursor-pointer"
          >
            Detailed Interactive Calendars
          </motion.button>
        </div>

        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6 mt-8"
        >
          {(data.events ?? []).map((ev, index) => {
            const formattedDate = new Date(ev.eventDate).toLocaleDateString("en-IN", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric"
            });
            return (
              <motion.div
                key={ev.key}
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 85, damping: 14 } }
                }}
                whileHover={{ scale: 1.01, y: -4, borderColor: "rgba(122, 28, 44, 0.15)", boxShadow: "0 12px 30px rgba(122, 28, 44, 0.03)" }}
                className="flex flex-col md:flex-row gap-6 p-6 rounded-3xl bg-white hover:bg-campus-rose-tint/30 border border-campus-maroon/5 items-center transition-all group cursor-pointer"
                onClick={() => onNavigate("/events")}
              >
                {isValidImageUrl(ev.imageUrl) && (
                  <img
                    src={ev.imageUrl}
                    alt={ev.title}
                    className="w-full md:w-44 h-32 rounded-2xl object-cover shrink-0 border border-campus-maroon/5 p-0.5 group-hover:scale-102 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                )}
                
                {/* Event details block */}
                <div className="flex-1 space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold font-sans uppercase tracking-widest bg-campus-rose-tint text-campus-maroon px-2.5 py-0.5 rounded">
                      {ev.category}
                    </span>
                    <span className="text-xs text-text-body font-mono flex items-center gap-1 font-semibold">
                      <Calendar className="w-3.5 h-3.5 text-campus-amber" /> {formattedDate}
                    </span>
                  </div>
                  
                  <h3 className="font-display font-bold text-lg text-campus-navy group-hover:text-campus-maroon transition-colors tracking-tight">
                    {ev.title}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-text-body leading-relaxed font-light">
                    {ev.description}
                  </p>
                </div>

                <div className="shrink-0 flex flex-col items-center justify-center p-4 border-t md:border-t-0 md:border-l border-campus-maroon/10 h-full">
                  <span className="text-xs font-mono text-text-body flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-campus-maroon" /> Location
                  </span>
                  <span className="text-sm font-display font-extrabold text-campus-maroon mt-1">
                    {ev.location}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* SECTION 11: PARENT TESTIMONIALS CAROUSEL (Auto-scrolling) */}
      <section id="sec-testimonials" className="py-20 bg-campus-rose-tint">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8">
          
          <div className="flex flex-col items-center space-y-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-campus-maroon border border-campus-maroon/10">
              Community Voices
            </span>
            <h2 className="font-display font-extrabold text-3xl text-campus-navy tracking-tight">
              Testimonials from Academy Parents
            </h2>
          </div>

          <div className="relative min-h-[180px] bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-campus-maroon/5 flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              {testimonials.length > 0 && (
                <motion.div
                  key={testimonialIndex}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <p className="font-sans text-sm sm:text-base leading-relaxed text-text-body font-light italic">
                    "{testimonials[testimonialIndex].message}"
                  </p>
                  
                  <div className="flex items-center justify-center gap-3">
                    {isValidImageUrl(testimonials[testimonialIndex].photoUrl) && (
                      <img
                        src={testimonials[testimonialIndex].photoUrl}
                        alt={testimonials[testimonialIndex].authorName}
                        className="w-10 h-10 rounded-full object-cover border border-campus-maroon/10"
                        referrerPolicy="no-referrer"
                      />
                    )}
                    <div className="text-left">
                      <h4 className="font-display font-bold text-sm text-campus-maroon">
                        {testimonials[testimonialIndex].authorName}
                      </h4>
                      <p className="text-[10px] text-text-body font-mono uppercase">
                        {testimonials[testimonialIndex].designation}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Slider controllers */}
            <div className="flex justify-center items-center gap-3 mt-6">
              <button
                id="btn-prev-test"
                onClick={() => setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="p-1.5 rounded-full bg-campus-sand hover:bg-campus-rose-tint text-text-body transition-colors cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              <div className="flex gap-1.5">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setTestimonialIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      idx === testimonialIndex ? "bg-campus-maroon" : "bg-campus-sand/80"
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                id="btn-next-test"
                onClick={() => setTestimonialIndex((prev) => (prev + 1) % testimonials.length)}
                className="p-1.5 rounded-full bg-campus-sand hover:bg-campus-rose-tint text-text-body transition-colors cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 12: LOCKED EDDESK PORTAL UPSELL */}
      <section id="sec-portal-upsell" className="bg-campus-navy text-white py-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative text-center space-y-8">
          <div className="flex flex-col items-center space-y-3">
            <div className="px-3.5 py-1 rounded bg-campus-maroon text-white text-xs font-bold uppercase tracking-widest flex items-center gap-1 shadow">
              <Lock className="w-3.5 h-3.5 text-campus-amber" />
              Portal Access Restrained
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
               Smart eddesk Dashboard Integrations
            </h2>
          </div>

          <p className="text-sm text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
             These features are configured automatically upon subscription integration. Once deployed on the school's primary domain, your parents automatically gain secure credentials.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 max-w-3xl mx-auto text-left">
            
            <div className="bg-slate-900 border border-white/10 p-5 rounded-2xl flex items-start gap-3.5 relative">
              <div className="text-campus-amber shrink-0 p-2 rounded-xl bg-slate-800">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-bold text-sm text-white flex items-center justify-between">
                  Fee Payments <span className="text-[10px] font-mono text-campus-amber uppercase font-bold tracking-tight">locked</span>
                </h4>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  CBSE compliant automatic receipts, term schedules, digital fee books.
                </p>
              </div>
            </div>

            <div className="bg-slate-900 border border-white/10 p-5 rounded-2xl flex items-start gap-3.5 relative">
              <div className="text-campus-amber shrink-0 p-2 rounded-xl bg-slate-800">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-bold text-sm text-white flex items-center justify-between">
                  WhatsApp circulars <span className="text-[10px] font-mono text-campus-amber uppercase font-bold tracking-tight">locked</span>
                </h4>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  Real-time alerts directly pushed to authorized mobile devices.
                </p>
              </div>
            </div>

            <div className="bg-slate-900 border border-white/10 p-5 rounded-2xl flex items-start gap-3.5 relative">
              <div className="text-campus-amber shrink-0 p-2 rounded-xl bg-slate-800">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-bold text-sm text-white flex items-center justify-between">
                  Absents Tracker <span className="text-[10px] font-mono text-campus-amber uppercase font-bold tracking-tight">locked</span>
                </h4>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  Authorized digital signature verification for school absentees.
                </p>
              </div>
            </div>

          </div>

          <div className="pt-4">
            <motion.button
              onClick={() => onNavigate("/contact")}
              whileHover={{ scale: 1.05, translateY: -2, boxShadow: "0 8px 24px rgba(217, 119, 6, 0.25)" }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 rounded-full bg-campus-amber text-white font-display font-bold text-xs uppercase tracking-wider cursor-pointer"
            >
              Contact EdDesk Administration
            </motion.button>
          </div>

        </div>
      </section>

    </div>
  );
}
