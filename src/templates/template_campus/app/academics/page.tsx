/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Calendar, HelpCircle, FileText, Settings, Award, Layers, ArrowRight } from "lucide-react";
import { TenantViewModel } from "../../types";
import SectionHeader from "../../components/SectionHeader";

interface PageProps {
  data: TenantViewModel;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 85, damping: 14 }
  }
};

export default function AcademicsPage({ data }: PageProps) {
  const result = data?.academicResult ?? {
    year: 2025,
    tenthPassPercentage: 100,
    plusTwoPassPercentage: 99.2,
    passPercentage: 100,
    legacyQuote: "Consistent academic victory"
  };

  return (
    <div id="academics-page" className="bg-campus-sand font-sans py-12 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          id="academics-header"
          badge="CBSE AFFILIATED EDUCATION"
          title="Scholastic Framework & Curriculum"
          subtitle="Guided by structured academic guidelines that nurture analytical thinking and competitive competence."
        />

        {/* Board Results Stats Highlight Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring", stiffness: 70 }}
          className="bg-campus-maroon text-white p-8 md:p-12 rounded-3xl shadow-md border border-white/10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-16 relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute -right-16 -top-16 w-48 h-48 bg-campus-amber/10 rounded-full blur-3xl pointer-events-none" />

          <div className="md:col-span-4 text-center md:text-left space-y-2 relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold font-mono uppercase bg-campus-amber/20 text-campus-amber border border-campus-amber/30">
               BOARD CHAMPIONS {result.year}
            </span>
            <h3 className="font-display font-extrabold text-3xl text-white tracking-tight">
              CBSE Elite Pass Standard
            </h3>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              Our batch toppers consistently place in the top percentiles regionally.
            </p>
          </div>

          <div className="md:col-span-4 grid grid-cols-2 gap-4 relative z-10">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-black/25 p-5 rounded-2xl border border-white/5 text-center transition-all bg-opacity-40 hover:bg-opacity-50"
            >
              <span className="text-2xl md:text-3xl font-display font-black text-campus-amber">
                {result.tenthPassPercentage}%
              </span>
              <p className="text-[10px] text-slate-300 uppercase tracking-widest block font-semibold mt-1">
                Class X Pass
              </p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-black/25 p-5 rounded-2xl border border-white/5 text-center transition-all bg-opacity-40 hover:bg-opacity-50"
            >
              <span className="text-2xl md:text-3xl font-display font-black text-campus-amber">
                {result.plusTwoPassPercentage}%
              </span>
              <p className="text-[10px] text-slate-300 uppercase tracking-widest block font-semibold mt-1">
                Class XII Pass
              </p>
            </motion.div>
          </div>

          <div className="md:col-span-4 border-t md:border-t-0 md:border-l border-white/15 pt-6 md:pt-0 md:pl-8 text-center md:text-left relative z-10">
            <p className="text-xs md:text-sm italic font-light text-slate-200">
              "{result.legacyQuote}"
            </p>
          </div>
        </motion.div>

        {/* Co-Curricular Grade Streams Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Primary School Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6, boxShadow: "0 15px 35px -5px rgba(122,28,44,0.03)" }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-campus-maroon/5 space-y-4 flex flex-col justify-between group hover:border-campus-maroon/15 transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="p-3 w-fit rounded-2xl bg-campus-rose-tint text-campus-maroon group-hover:bg-campus-maroon group-hover:text-white transition-colors duration-300">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-campus-navy group-hover:text-campus-maroon transition-colors">
                 Primary School (Nursery to V)
              </h3>
              <p className="text-xs text-text-body font-light leading-relaxed">
                 Focused on sensory development, language familiarity, visual logic, basic motor activities, elementary mathematics, and general science awareness under an organic structure.
              </p>
            </div>
            <ul className="text-xs text-text-body font-semibold space-y-2 border-t border-campus-maroon/5 pt-4 font-mono uppercase text-campus-maroon">
              <li className="flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-campus-amber" /> Play-Based Logical Cognition</li>
              <li className="flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-campus-amber" /> Dynamic English & Hindi Writing</li>
              <li className="flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-campus-amber" /> Outdoor Wellness Athletics</li>
            </ul>
          </motion.div>

          {/* Middle School Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6, boxShadow: "0 15px 35px -5px rgba(122,28,44,0.03)" }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-campus-maroon/5 space-y-4 flex flex-col justify-between group hover:border-campus-amber/20 transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="p-3 w-fit rounded-2xl bg-campus-rose-tint text-campus-amber group-hover:bg-campus-amber group-hover:text-white transition-colors duration-300">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-campus-navy group-hover:text-campus-amber transition-colors">
                 Middle School (VI to VIII)
              </h3>
              <p className="text-xs text-text-body font-light leading-relaxed">
                 Strengthening core reasoning streams: Scientific discovery, advanced arithmetic calculations, social geography, computer coding fundamentals, and conversational foreign languages.
              </p>
            </div>
            <ul className="text-xs text-text-body font-semibold space-y-2 border-t border-campus-maroon/5 pt-4 font-mono uppercase text-campus-maroon">
              <li className="flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-campus-amber" /> Applied Science Laboratory Excursions</li>
              <li className="flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-campus-amber" /> Introductory Robotics & Logic</li>
              <li className="flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-campus-amber" /> Compulsory Sports Turf Stream</li>
            </ul>
          </motion.div>

          {/* Senior Secondary Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6, boxShadow: "0 15px 35px -5px rgba(122,28,44,0.03)" }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-campus-maroon/5 space-y-4 flex flex-col justify-between group hover:border-campus-navy/20 transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="p-3 w-fit rounded-2xl bg-campus-rose-tint text-campus-navy group-hover:bg-campus-navy group-hover:text-white transition-colors duration-300">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-campus-navy group-hover:text-campus-navy transition-colors">
                 Senior Secondary (IX to XII)
              </h3>
              <p className="text-xs text-text-body font-light leading-relaxed">
                 High standard board preparation tracks. Multiple major paths are offered side-by-side with national competition-level sports coaching to ensure top grade scores.
              </p>
            </div>
            <ul className="text-xs text-text-body font-semibold space-y-2 border-t border-campus-maroon/5 pt-4 font-mono uppercase text-campus-maroon">
              <li className="flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-campus-amber" /> Major Streams: Medical / Non-Med / Commerce</li>
              <li className="flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-campus-amber" /> Intensive Mock Exam series</li>
              <li className="flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-campus-amber" /> Board Certifications</li>
            </ul>
          </motion.div>

        </motion.div>

        {/* Academic Calendar Timeline of Assessments */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 space-y-8 bg-white rounded-3xl p-8 border border-campus-maroon/5 shadow-sm"
        >
          <h3 className="font-display font-bold text-xl text-campus-navy text-center tracking-tight">Seasonal Term Blueprint</h3>
          <div className="max-w-4xl mx-auto space-y-6">
            
            <motion.div 
              whileHover={{ x: 6 }}
              className="flex gap-4 items-start items-center transition-transform duration-200 cursor-pointer"
            >
              <div className="bg-campus-maroon text-white font-mono font-bold text-xs p-3 rounded-xl shrink-0 w-24 text-center uppercase tracking-wider shadow">
                TERM I
              </div>
              <div className="border-l-2 border-campus-maroon/20 pl-4 py-1 flex-1">
                <h4 className="font-display font-bold text-sm text-campus-navy">Periodic Evaluation (April - September)</h4>
                <p className="text-xs text-text-body font-light leading-relaxed">Continuous unit benchmarks, scientific experiments evaluation, mid-term examinations, and physical agility tests.</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ x: 6 }}
              className="flex gap-4 items-start items-center transition-transform duration-200 cursor-pointer"
            >
              <div className="bg-campus-amber text-white font-mono font-bold text-xs p-3 rounded-xl shrink-0 w-24 text-center uppercase tracking-wider shadow">
                TERM II
              </div>
              <div className="border-l-2 border-campus-maroon/20 pl-4 py-1 flex-1">
                <h4 className="font-display font-bold text-sm text-campus-navy">Comprehensive Assessment (October - March)</h4>
                <p className="text-xs text-text-body font-light leading-relaxed">Practical laboratory board preparation, CBSE mandatory model trials, sports olympiad results, and annual final assessments.</p>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}
