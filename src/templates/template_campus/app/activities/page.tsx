/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Activity, Sparkles, Code, Music, Brush, Heart } from "lucide-react";
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
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 14 }
  }
};

export default function ActivitiesPage({ data }: PageProps) {
  const achievements = data?.achievements ?? [];
  const sportsAchievements = achievements.filter((ach) => ach.category === "Sports" || ach.category === "Arts");

  return (
    <div id="activities-page" className="bg-campus-sand font-sans py-12 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          id="activities-main-header"
          badge="CO-CURRICULAR & PHYSICAL DEVELOPMENT"
          title="Activities, Clubs, & Athletics"
          subtitle="True performance rests on a healthy body and interactive, analytical curiosity. We run top-tier sports facilities side-by-side with scientific workshops."
        />

        {/* Dynamic Sports Achievements Grid */}
        <div className="mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-xl text-campus-navy text-center mb-8 flex items-center justify-center gap-2"
          >
             <Trophy className="w-5 h-5 text-campus-amber animate-bounce" />
             Featured Sports Achievements
          </motion.h3>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {sportsAchievements.map((ach) => (
              <motion.div
                key={ach.key}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.01, boxShadow: "0 12px 25px -4px rgba(122,28,44,0.03)" }}
                className="bg-white rounded-2xl p-5 border border-campus-maroon/5 shadow-sm space-y-4 hover:border-campus-maroon/15 transition-all flex flex-col justify-between group overflow-hidden"
              >
                {isValidImageUrl(ach.imageUrl) && (
                  <div className="overflow-hidden rounded-xl h-36 border border-campus-maroon/5 shrink-0">
                    <img
                      src={ach.imageUrl}
                      alt={ach.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-103"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}
                
                <div className="space-y-2 flex-1 pt-1">
                  <div className="flex justify-between items-center text-[10px] tracking-wider uppercase font-mono font-bold">
                    <span className="text-campus-maroon bg-campus-rose-tint px-2.5 py-0.5 rounded">{ach.awardLevel}</span>
                    <span className="text-text-body">Year: {ach.year}</span>
                  </div>
                  <h4 className="font-display font-bold text-sm text-campus-navy leading-snug group-hover:text-campus-maroon transition-colors">
                    {ach.title}
                  </h4>
                  <p className="text-xs text-text-body font-light leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* List of Scholarly Clubs & Sports divisions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 items-start">
          
          {/* Left block - Academics and computing clubs */}
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="flex items-center gap-2 pb-3 border-b border-campus-maroon/10">
              <Sparkles className="w-5 h-5 text-campus-maroon animate-pulse" />
              <h3 className="font-display font-bold text-lg text-campus-navy">Analytical Societies & Art Hubs</h3>
            </div>

            <motion.div 
              variants={cardVariants}
              whileHover={{ x: 4 }}
              className="bg-white rounded-2xl p-6 border border-campus-maroon/5 shadow-sm space-y-3 hover:border-campus-maroon/15 transition-all"
            >
              <h4 className="font-display font-bold text-sm text-campus-navy uppercase flex items-center gap-2">
                <Code className="w-4 h-4 text-campus-maroon" /> Einstein Computing & Robotic Cells
              </h4>
              <p className="text-xs text-text-body leading-relaxed font-light">
                Scholars learn Arduino manipulation, logical programming in Python, IoT module integration, and drone telemetry.
              </p>
            </motion.div>

            <motion.div 
              variants={cardVariants}
              whileHover={{ x: 4 }}
              className="bg-white rounded-2xl p-6 border border-campus-maroon/5 shadow-sm space-y-3 hover:border-campus-amber/25 transition-all"
            >
              <h4 className="font-display font-bold text-sm text-campus-navy uppercase flex items-center gap-2">
                <Brush className="w-4 h-4 text-campus-amber" /> Centenary Painting & Clay Modeling
              </h4>
              <p className="text-xs text-text-body leading-relaxed font-light">
                Nurturing beautiful hand-eye symmetry through pottery, architectural canvas drawing, and fine environmental photography.
              </p>
            </motion.div>

            <motion.div 
              variants={cardVariants}
              whileHover={{ x: 4 }}
              className="bg-white rounded-2xl p-6 border border-campus-maroon/5 shadow-sm space-y-3 hover:border-campus-navy/20 transition-all"
            >
              <h4 className="font-display font-bold text-sm text-campus-navy uppercase flex items-center gap-2">
                <Music className="w-4 h-4 text-campus-maroon" /> Heritage Choir & Orchestral Beats
              </h4>
              <p className="text-xs text-text-body leading-relaxed font-light">
                Students receive training across classical string structures, electronic piano configurations, and folk instrument ensembles.
              </p>
            </motion.div>
          </motion.div>

          {/* Right block - Physical wellness programs */}
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="flex items-center gap-2 pb-3 border-b border-campus-maroon/10">
              <Activity className="w-5 h-5 text-campus-amber animate-pulse" />
              <h3 className="font-display font-bold text-lg text-campus-navy">Sports Divisions & Nutrition Programs</h3>
            </div>

            <motion.div 
              variants={cardVariants}
              whileHover={{ x: -4 }}
              className="bg-white rounded-2xl p-6 border border-campus-maroon/5 shadow-sm space-y-3 hover:border-campus-maroon/15 transition-all"
            >
              <h4 className="font-display font-bold text-sm text-campus-navy uppercase flex items-center gap-2">
                 FIFA Standard Soccer Turf
              </h4>
              <p className="text-xs text-text-body leading-relaxed font-light">
                Our central turf grounds hosts daily tactical soccer leagues, agility runs, and goalkeeping drills under certified coaches.
              </p>
            </motion.div>

            <motion.div 
              variants={cardVariants}
              whileHover={{ x: -4 }}
              className="bg-white rounded-2xl p-6 border border-campus-maroon/5 shadow-sm space-y-3 hover:border-campus-amber/25 transition-all"
            >
              <h4 className="font-display font-bold text-sm text-campus-navy uppercase flex items-center gap-2">
                 Indoor Basketball & Badminton Halls
              </h4>
              <p className="text-xs text-text-body leading-relaxed font-light">
                With proper rubberized shock-absorbing flooring tiles, these courts protect students' knees during intense physical training sessions.
              </p>
            </motion.div>

            <motion.div 
              variants={cardVariants}
              whileHover={{ x: -4 }}
              className="bg-white rounded-2xl p-6 border border-campus-maroon/5 shadow-sm space-y-3 hover:border-campus-navy/20 transition-all"
            >
              <h4 className="font-display font-bold text-sm text-campus-navy uppercase flex items-center gap-2">
                <Heart className="w-4 h-4 text-emerald-600 animate-pulse" /> Mandatory Medical & Dietary Charts
              </h4>
              <p className="text-xs text-text-body leading-relaxed font-light">
                Our athletic coaches run dynamic physical BMI records, advice on balanced nutrition streams, and host yoga, breathing, and flexibility classes.
              </p>
            </motion.div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
