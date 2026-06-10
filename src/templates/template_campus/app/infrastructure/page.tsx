/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, BookOpen, Settings, HelpCircle, HardDrive } from "lucide-react";
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
  hidden: { opacity: 0, scale: 0.96, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

export default function InfrastructurePage({ data }: PageProps) {
  const infraList = data?.infrastructure ?? [];
  const [selectedTagFilter, setSelectedTagFilter] = useState("All");

  const tags = ["All", "Lab", "Sports Turf", "Gym", "Library"];

  const filteredInfra = selectedTagFilter === "All"
    ? infraList
    : infraList.filter((inf) => inf.tag === selectedTagFilter);

  return (
    <div id="infrastructure-page" className="bg-campus-sand font-sans py-12 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          id="infrastructure-main-header"
          badge="CAMPUS FACILITIES & BUILDINGS"
          title="Laboratories, Libraries, & Playgrounds"
          subtitle="Our architecture supports high-level academic research alongside premium fitness and wellness sports grounds."
        />

        {/* Filter Pill List */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12 bg-white p-2 border border-campus-maroon/5 rounded-full w-fit mx-auto shadow-xs">
          {tags.map((tag) => (
            <motion.button
              key={tag}
              onClick={() => setSelectedTagFilter(tag)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`px-5 py-2 rounded-full font-display font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                selectedTagFilter === tag
                  ? "bg-campus-maroon text-white shadow-md shadow-campus-maroon/10"
                  : "text-text-body hover:bg-campus-rose-tint"
              }`}
            >
              {tag}
            </motion.button>
          ))}
        </div>

        {/* Facilities Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTagFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filteredInfra.length > 0 ? (
              filteredInfra.map((inf) => (
                <motion.div
                  key={inf.key}
                  variants={cardVariants}
                  whileHover={{ y: -6, boxShadow: "0 12px 30px -4px rgba(122,28,44,0.04)" }}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm border border-campus-maroon/5 group flex flex-col md:flex-row hover:border-campus-maroon/15 transition-all"
                >
                  {/* Photo Block */}
                  <div className="relative w-full md:w-56 h-64 md:h-auto overflow-hidden bg-slate-100 shrink-0">
                    {isValidImageUrl(inf.imageUrl) ? (
                      <img
                        src={inf.imageUrl}
                        alt={inf.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-400 capitalize bg-slate-50 font-light">
                        {inf.tag} image
                      </div>
                    )}
                    <span className="absolute top-4 left-4 bg-campus-amber text-white text-[10px] uppercase font-bold px-2.5 py-0.5 rounded shadow">
                      {inf.tag}
                    </span>
                  </div>

                  {/* Narrative details block */}
                  <div className="p-6 flex flex-col justify-between space-y-4 flex-1">
                    <div className="space-y-2">
                      <h4 className="font-display font-bold text-lg text-campus-navy group-hover:text-campus-maroon transition-colors tracking-tight">
                        {inf.title}
                      </h4>
                      <p className="text-xs md:text-sm text-text-body leading-relaxed font-light">
                        {inf.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-campus-maroon/5 flex items-center justify-between text-[11px] font-mono text-campus-maroon uppercase font-bold">
                      <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-campus-amber animate-pulse" /> Grade A Approved</span>
                      <span>CBSE standard</span>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-16 bg-white rounded-3xl border border-campus-maroon/5 col-span-full font-light text-slate-400">
                No school facilities match this selected filter in our database.
              </div>
            )}
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
}
