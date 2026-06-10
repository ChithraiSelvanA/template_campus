/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ShieldAlert, Sparkles, UserCheck, BookOpen, Clock } from "lucide-react";
import { TenantViewModel } from "../../types";
import SectionHeader from "../../components/SectionHeader";
import { isValidImageUrl } from "../../../../core/utils/url";

interface PageProps {
  data: TenantViewModel;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

export default function FacultyPage({ data }: PageProps) {
  const facultyList = data?.faculty ?? [];
  
  // Track flip state by key
  const [rotatedKeys, setRotatedKeys] = useState<Record<string, boolean>>({});

  const clickFlipCard = (key: string) => {
    setRotatedKeys((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div id="faculty-coaches-page" className="bg-campus-sand font-sans py-12 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          id="faculty-hub-header"
          badge="FACILITY ADVISORY BOARD"
          title="Our Scholastic Leaders, Teachers, & Coaches"
          subtitle="Our instructors harbor exceptional academic achievements alongside standard sports certifications to deliver complete guidance."
        />

        {/* Informative advice banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring" }}
          className="max-w-4xl mx-auto bg-campus-maroon text-white p-6 rounded-3xl mb-12 border border-white/5 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left justify-between"
        >
          <p className="text-xs md:text-sm font-sans text-slate-200">
             🌟 <strong className="text-white">Instructor Spotlight:</strong> Every member of our coaching and teaching staff undergoes continuous CBSE pedagogical training and standard health/cardiac emergency protocols.
          </p>
          <span className="text-[10px] tracking-wider uppercase font-extrabold font-mono text-campus-amber shrink-0 bg-white/10 px-2.5 py-1 rounded animate-pulse">
             Certified Staff
          </span>
        </motion.div>

        {/* 3D Perspective Flip Grid */}
        <motion.div 
          id="grid-teachers-coaches" 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {facultyList.length > 0 ? (
            facultyList.map((fac) => {
              const isRotated = !!rotatedKeys[fac.key];
              return (
                <motion.div
                  key={fac.key}
                  variants={cardVariants}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  onClick={() => clickFlipCard(fac.key)}
                  className="h-[410px] w-full perspective-1000 cursor-pointer group"
                >
                  <div className={`relative w-full h-full duration-500 transform-style-3d ${isRotated ? "rotate-y-180" : ""}`}>
                    
                    {/* Front Aspect of Flip Card */}
                    <div className="absolute inset-0 backface-hidden w-full h-full bg-white rounded-3xl shadow-sm border border-campus-maroon/5 flex flex-col overflow-hidden">
                      <div className="relative flex-1 bg-slate-100 overflow-hidden">
                        {isValidImageUrl(fac.imageUrl) ? (
                          <img
                            src={fac.imageUrl}
                            alt={fac.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-slate-400 font-light">
                            No Photo
                          </div>
                        )}
                        {/* Experience bubble */}
                        <div className="absolute top-4 right-4 text-[10px] uppercase font-bold text-white bg-campus-maroon px-3 py-1 rounded-full border border-white/10 shadow-sm">
                           {fac.experienceYears} Years Exp
                        </div>
                      </div>

                      <div className="p-5 text-center bg-white space-y-1">
                        <span className="text-[10px] uppercase tracking-widest text-campus-amber font-extrabold block">
                          {fac.designation}
                        </span>
                        <h4 className="font-display font-bold text-base text-campus-navy truncate group-hover:text-campus-maroon transition-colors">
                          {fac.name}
                        </h4>
                        <p className="text-xs text-text-body truncate">
                          {fac.qualification}
                        </p>
                        <div className="text-[10px] text-campus-maroon font-semibold uppercase font-mono mt-2 pt-1 border-t border-campus-maroon/5 group-hover:animate-pulse">
                           Interactive Bio ↺
                        </div>
                      </div>
                    </div>

                    {/* Back Aspect of Flip Card */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180 w-full h-full bg-campus-navy text-white rounded-3xl p-6 flex flex-col justify-between border border-white/5 shadow-md">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center pb-2 border-b border-white/10">
                          <span className="text-[10px] bg-campus-amber text-white px-2.5 py-0.5 rounded font-extrabold uppercase">
                             {fac.designation}
                          </span>
                          <Clock className="w-3.5 h-3.5 text-campus-amber animate-spin-slow" />
                        </div>
                        
                        <h4 className="font-display font-bold text-lg text-white">
                           {fac.name}
                        </h4>

                        <div className="space-y-3 text-xs text-slate-300 font-sans">
                          <div>
                            <strong className="block text-white uppercase text-[9px] tracking-wider font-semibold text-campus-amber mb-0.5">Academic Credentials:</strong>
                            <p className="font-light">{fac.qualification}</p>
                          </div>
                          <div>
                            <strong className="block text-white uppercase text-[9px] tracking-wider font-semibold text-campus-amber mb-0.5 font-sans">Professional Legacy:</strong>
                            <p className="font-light">More than {fac.experienceYears} academic terms driving regional CBSE benchmarks.</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 border-t border-white/10 pt-4">
                        <p className="text-xs text-slate-300 italic font-light leading-relaxed">
                          "I believe in driving individual students to scale milestones through continuous testing combined with active nutritional mentoring."
                        </p>
                        <span className="text-[9px] text-slate-400 font-mono block uppercase">
                           Click to rotate ↺
                        </span>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-white rounded-3xl border border-campus-maroon/5 col-span-full font-light text-slate-400 text-sm">
               No staff records found in database directory.
            </div>
          )}
        </motion.div>

      </div>
    </div>
  );
}
