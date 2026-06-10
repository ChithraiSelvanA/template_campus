/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Compass, Eye, Shield, Award, Users, ChevronRight } from "lucide-react";
import { TenantViewModel } from "../../types";
import SectionHeader from "../../components/SectionHeader";
import { isValidImageUrl } from "../../../../core/utils/url";

interface PageProps {
  data: TenantViewModel;
}

// Premium animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 14 }
  }
};

const floatAnimation = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function AboutPage({ data }: PageProps) {
  const identity = data?.identity ?? {
    vision: "Developing future pioneers",
    mission: "Nurturing intellect and grit",
    motto: "Aeterna Intellectus et Virtus",
    history: "A premier academy established in 2012.",
    foundedYear: 2012,
    boardMessage: "Welcome message from the board.",
    aboutTitle: "We Shape Scholars & Athletes",
    aboutDescription: "Balanced training model."
  };

  const school = data?.school ?? { name: "Campus School" };

  return (
    <div id="about-page" className="bg-campus-sand font-sans py-12 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          id="about-main-header"
          badge={`Legacy since ${identity.foundedYear}`}
          title={`About ${school.name}`}
          subtitle={identity.aboutTitle}
        />

        {/* History and Message from Chair Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Main narrative history */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.015)] border border-campus-maroon/5 space-y-6 hover:shadow-[0_12px_40px_rgba(122,28,44,0.03)] transition-shadow duration-300"
          >
            <div className="flex items-center gap-2 text-campus-maroon font-bold font-mono text-xs uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-campus-maroon uppercase animate-ping" />
              Our Scholarly Creed
            </div>
            <h3 className="font-display font-extrabold text-2xl text-campus-navy tracking-tight">Our Academic Journey</h3>
            <p className="text-sm md:text-base text-text-body font-light leading-relaxed whitespace-pre-line">
              {identity.history}
            </p>
            <div className="pt-4 border-t border-campus-maroon/10 grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <span className="text-2xl font-display font-black text-campus-maroon">10+</span>
                <p className="text-[10px] uppercase font-bold text-text-body tracking-wider">Years of Academic Glory</p>
              </div>
              <div className="space-y-1">
                <span className="text-2xl font-display font-black text-campus-amber">CBSE</span>
                <p className="text-[10px] uppercase font-bold text-text-body tracking-wider">National Level Ranking</p>
              </div>
            </div>
          </motion.div>

          {/* Core Values side panel */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 space-y-6"
          >
            {/* Vision card */}
            <motion.div 
              whileHover={{ y: -4, scale: 1.01, boxShadow: "0 10px 25px -5px rgba(122,28,44,0.04)" }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-campus-maroon/5 flex gap-4 items-start hover:border-campus-maroon/15 transition-all duration-300 group"
            >
              <div className="p-3 rounded-xl bg-campus-rose-tint text-campus-maroon group-hover:bg-campus-maroon group-hover:text-white transition-colors duration-300">
                <Eye className="w-5 h-5 animate-pulse" />
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-bold text-sm text-campus-navy uppercase tracking-wider">Vision</h4>
                <p className="text-xs text-text-body font-light leading-relaxed">{identity.vision}</p>
              </div>
            </motion.div>

            {/* Mission card */}
            <motion.div 
              whileHover={{ y: -4, scale: 1.01, boxShadow: "0 10px 25px -5px rgba(122,28,44,0.04)" }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-campus-maroon/5 flex gap-4 items-start hover:border-campus-maroon/15 transition-all duration-300 group"
            >
              <div className="p-3 rounded-xl bg-campus-rose-tint text-campus-amber group-hover:bg-campus-amber group-hover:text-white transition-colors duration-300">
                <Compass className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-bold text-sm text-campus-navy uppercase tracking-wider">Mission</h4>
                <p className="text-xs text-text-body font-light leading-relaxed">{identity.mission}</p>
              </div>
            </motion.div>

            {/* Motto card */}
            <motion.div 
              whileHover={{ y: -4, scale: 1.01, boxShadow: "0 10px 25px -5px rgba(122,28,44,0.04)" }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-campus-maroon/5 flex gap-4 items-start hover:border-campus-maroon/15 transition-all duration-300 group"
            >
              <div className="p-3 rounded-xl bg-campus-rose-tint text-campus-navy group-hover:bg-campus-navy group-hover:text-white transition-colors duration-300">
                <Shield className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-bold text-sm text-campus-navy uppercase tracking-wider">School Crest Motto</h4>
                <p className="text-xs text-text-body font-medium italic text-campus-maroon">
                  "{identity.motto}"
                </p>
              </div>
            </motion.div>
          </motion.div>

        </motion.div>

        {/* Message from Board segment */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, type: "spring", stiffness: 60 }}
          className="mt-16 bg-white border border-campus-maroon/5 rounded-3xl p-8 md:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.015)] relative overflow-hidden"
        >
          {/* Subtle watermarked crest */}
          <motion.div 
            variants={floatAnimation}
            animate="animate"
            className="absolute right-6 bottom-6 opacity-[0.03] hidden lg:block pointer-events-none"
          >
            <Award className="w-80 h-80 text-campus-navy" />
          </motion.div>

          <div className="max-w-3xl space-y-6 relative z-10">
            <span className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-campus-maroon font-extrabold bg-campus-rose-tint px-3 py-1 rounded">
              Governing Council Statement
            </span>
            <h3 className="font-display font-bold text-2xl text-campus-navy leading-snug">
               A Message from the Chairman & Board of Trustees
            </h3>
            <p className="text-sm md:text-base text-text-body font-light leading-relaxed italic whitespace-pre-line">
              "{identity.boardMessage}"
            </p>
            <div className="pt-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-campus-rose-tint text-campus-maroon flex items-center justify-center font-display font-black text-lg border border-campus-maroon/10">
                BC
              </div>
              <div>
                <h4 className="font-display font-bold text-sm text-campus-navy">Board Committee</h4>
                <p className="text-[10px] text-text-body font-mono uppercase tracking-widest">St. Columba's Academy Trust</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Co-curricular Integration Pillars */}
        <div className="mt-20 text-center space-y-8">
          <motion.h3 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-display font-extrabold text-2xl text-campus-navy tracking-tight"
          >
            How We Nurture Whole Minds
          </motion.h3>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white p-6 rounded-2xl text-center space-y-2 border border-campus-maroon/5 shadow-sm group hover:border-campus-maroon/15 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-campus-rose-tint text-campus-maroon flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-sm text-campus-navy uppercase tracking-wider pt-2">Scientific rigor</h4>
              <p className="text-xs text-text-body font-light leading-relaxed">Classroom focus supported by computing and physical model laboratories.</p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white p-6 rounded-2xl text-center space-y-2 border border-campus-maroon/5 shadow-sm group hover:border-campus-amber/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-campus-rose-tint text-campus-amber flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-sm text-campus-navy uppercase tracking-wider pt-2">Disciplined Body</h4>
              <p className="text-xs text-text-body font-light leading-relaxed">Comprehensive athletics, indoor grids and professional wellness coaches.</p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white p-6 rounded-2xl text-center space-y-2 border border-campus-maroon/5 shadow-sm group hover:border-campus-navy/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-campus-rose-tint text-campus-navy flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Heart className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-sm text-campus-navy uppercase tracking-wider pt-2">Artistic Outlets</h4>
              <p className="text-xs text-text-body font-light leading-relaxed">Expressive programs in music, fine painting, debating clusters and drama.</p>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
