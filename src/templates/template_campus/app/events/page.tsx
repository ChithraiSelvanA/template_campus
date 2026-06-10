/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Clock, Trophy, Shield, Activity, Flame } from "lucide-react";
import { TenantViewModel } from "../../types";
import SectionHeader from "../../components/SectionHeader";
import { isValidImageUrl } from "../../../../core/utils/url";

interface PageProps {
  data: TenantViewModel;
}

const listContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

export default function EventsPage({ data }: PageProps) {
  const events = data?.events ?? [];
  const [activeCategoryFilter, setActiveCategoryFilter] = useState("All");

  const categories = ["All", "Sports Matches", "Academics", "Athletics"];

  const filteredEvents = activeCategoryFilter === "All"
    ? events
    : events.filter((ev) => ev.category === activeCategoryFilter);

  // Hardcoded list of upcoming matches representing our athletic rosters
  const upcomingMatchedFixtures = [
    {
      sport: "Cricket • Under-19 Boys",
      teamA: "St. Columba's Academy",
      teamB: "DPS Greenfield School",
      date: "June 15, 2026",
      time: "2:00 PM",
      court: "Central Cricket Oval Ground",
      status: "Upcoming League Match"
    },
    {
      sport: "Badminton • Girls Doubles",
      teamA: "St. Columba's Academy",
      teamB: "Alpine Public School",
      date: "June 18, 2026",
      time: "3:30 PM",
      court: "Olympia Indoor Hall",
      status: "Semi-Final Match"
    },
    {
      sport: "Soccer • Under-15 Boys",
      teamA: "St. Columba's Academy",
      teamB: "Navy Goodwill School",
      date: "June 22, 2026",
      time: "4:00 PM",
      court: "Centenary Football Turf",
      status: "Quarter-Final Match"
    }
  ];

  return (
    <div id="events-page" className="bg-campus-sand font-sans py-12 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          id="events-main-header"
          badge="CAMPUS CALENDAR"
          title="Events, Tournaments, & Match Fixtures"
          subtitle="Keep track of academic symposiums, parent-teacher workshops, and inter-school sports matches."
        />

        {/* UPCOMING MATCHES - HORIZONTAL SNAP SWIPING LAYOUT */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="flex items-center gap-2 mb-6 justify-center md:justify-start"
          >
            <Flame className="w-5 h-5 text-campus-maroon animate-pulse" />
            <h3 className="font-display font-extrabold text-xl text-campus-navy tracking-tight">Upcoming Athletic Fixtures</h3>
            <span className="text-[10px] uppercase font-bold tracking-wider text-campus-amber bg-rose-950/5 px-2.5 py-0.5 rounded ml-2 hidden sm:inline-block animate-pulse">
               Active PE Programs
            </span>
          </motion.div>

          {/* Snap scroll container with motion children */}
          <motion.div 
            variants={listContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-thin scrollbar-thumb-campus-maroon scroll-smooth whitespace-nowrap"
          >
            {upcomingMatchedFixtures.map((fix, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.15 } }}
                className="snap-center shrink-0 w-[290px] sm:w-[350px] inline-block bg-white rounded-3xl p-6 border border-campus-maroon/5 shadow-sm whitespace-normal flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-[10px] tracking-wider uppercase font-mono font-bold">
                    <span className="text-slate-400">{fix.sport}</span>
                    <span className="text-campus-amber bg-campus-rose-tint px-2.2 py-0.5 rounded font-bold animate-pulse">{fix.status}</span>
                  </div>

                  <div className="flex items-center justify-between py-2 bg-campus-sand/40 p-4 rounded-2xl border border-campus-maroon/5">
                    <div className="text-center flex-1">
                      <span className="text-xs font-bold text-campus-navy block leading-tight font-mono">{fix.teamA.split(" ")[0].toUpperCase()}</span>
                      <span className="text-[9px] text-slate-400 block font-sans">FLYERS</span>
                    </div>
                    <span className="font-display font-black text-sm text-campus-maroon">VS</span>
                    <div className="text-center flex-1">
                      <span className="text-xs font-bold text-slate-500 block leading-tight font-mono">{fix.teamB.split(" ")[0].toUpperCase()}</span>
                      <span className="text-[9px] text-slate-400 block font-sans">RIFLES</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-campus-maroon/5 mt-4 space-y-1.5 text-xs text-text-body font-mono">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-campus-maroon" /> {fix.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-campus-maroon" /> {fix.time}</span>
                  <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-campus-amber font-sans" /> {fix.court}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <span className="text-[10px] text-slate-400 block text-right font-mono mt-1 pr-2">
            Swipe left/right horizontally to view more fixtures ⟶
          </span>
        </div>

        {/* Interactive Filter for academic events, athletic meets */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-12 bg-white p-2 border border-campus-maroon/5 rounded-full w-fit mx-auto shadow-xs">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategoryFilter(cat)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`px-5 py-2 rounded-full font-display font-bold text-xs uppercase tracking-wider cursor-pointer transition-all ${
                activeCategoryFilter === cat
                  ? "bg-campus-maroon text-white shadow-md shadow-campus-maroon/10"
                  : "text-text-body hover:bg-campus-rose-tint"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Dynamic Events Timeline Table/List with animations */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategoryFilter}
            variants={listContainerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="space-y-6"
          >
            {filteredEvents.length > 0 ? (
              filteredEvents.map((ev) => {
                const eventFormattedDate = new Date(ev.eventDate).toLocaleDateString("en-IN", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                });
                return (
                  <motion.div
                    key={ev.key}
                    id={`active-event-${ev.key}`}
                    variants={itemVariants}
                    whileHover={{ y: -4, borderLeft: "4px solid #7A1C2C" }}
                    className="flex flex-col md:flex-row gap-6 p-6 rounded-3xl bg-white border border-campus-maroon/5 shadow-xs hover:shadow-md hover:border-campus-maroon/15 transition-all items-center"
                  >
                    {isValidImageUrl(ev.imageUrl) && (
                      <div className="w-full md:w-44 h-32 overflow-hidden rounded-2xl shrink-0 border border-campus-maroon/5 p-0.5 bg-slate-50">
                        <img
                          src={ev.imageUrl}
                          alt={ev.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-103"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    )}
                    
                    <div className="flex-1 space-y-2">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="inline-block text-[10px] font-bold tracking-widest bg-campus-rose-tint text-campus-maroon px-2.5 py-0.5 rounded font-mono uppercase">
                          {ev.category}
                        </span>
                        <span className="text-xs text-text-body font-mono font-semibold flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-campus-amber" /> {eventFormattedDate}
                        </span>
                      </div>

                      <h4 className="font-display font-bold text-base md:text-lg text-campus-navy">
                        {ev.title}
                      </h4>
                      <p className="text-xs md:text-sm text-text-body leading-relaxed font-light font-sans">
                        {ev.description}
                      </p>
                    </div>

                    <div className="shrink-0 flex flex-col items-center justify-center p-4 border-t md:border-t-0 md:border-l border-campus-maroon/10 h-full">
                      <span className="text-xs font-mono text-text-body flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-campus-maroon" /> Arena Room
                      </span>
                      <span className="text-sm font-display font-extrabold text-campus-maroon mt-1">
                        {ev.location}
                      </span>
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <div className="text-center py-16 bg-white border border-campus-maroon/5 rounded-3xl text-slate-400">
                No calendar entries discovered for this filter criteria in database.
              </div>
            )}
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
}
