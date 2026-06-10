/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Image, X, ZoomIn } from "lucide-react";
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
  hidden: { opacity: 0, scale: 0.95, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 95, damping: 14 }
  }
};

export default function GalleryPage({ data }: PageProps) {
  const images = data?.gallery ?? [];
  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState("All");
  
  // Lightbox State
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterTags = ["All", "Academic", "Sports", "Cultural"];

  const filteredImages = selectedGalleryCategory === "All"
    ? images
    : images.filter((img) => img.category === selectedGalleryCategory);

  const openLightbox = (url: string) => {
    const idx = images.findIndex((img) => img.url === url);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  return (
    <div id="gallery-page" className="bg-campus-sand font-sans py-12 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          id="gallery-main-header"
          badge="CAMPUS ARCHIVES & CHRONICLES"
          title="Campus Visual Chronicles"
          subtitle="Explore our photo archives showcasing day-to-day scholastic projects, athletic victories, and inter-school debate championships."
        />

        {/* Gallery category filters */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-12 bg-white p-2 border border-campus-maroon/5 rounded-full w-fit mx-auto shadow-xs">
          {filterTags.map((tag) => (
            <motion.button
              key={tag}
              onClick={() => setSelectedGalleryCategory(tag)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`px-5 py-2 rounded-full font-display font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                selectedGalleryCategory === tag
                  ? "bg-campus-maroon text-white shadow-md shadow-campus-maroon/10"
                  : "text-text-body hover:bg-campus-rose-tint"
              }`}
            >
              {tag}
            </motion.button>
          ))}
        </div>

        {/* Photo Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedGalleryCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredImages.length > 0 ? (
              filteredImages.map((img) => (
                <motion.div
                  key={img.key}
                  variants={cardVariants}
                  whileHover={{ y: -6 }}
                  onClick={() => openLightbox(img.url)}
                  className="bg-white rounded-3xl overflow-hidden border border-campus-maroon/5 shadow-xs group cursor-pointer relative aspect-4/3 hover:border-campus-maroon/15 hover:shadow-md transition-all"
                >
                  {isValidImageUrl(img.url) ? (
                    <img
                      src={img.url}
                      alt={img.caption}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400 bg-slate-50 uppercase font-light">
                       Photo placeholder
                    </div>
                  )}

                  {/* Dark hover blur and icon trigger overlay */}
                  <div className="absolute inset-0 bg-campus-navy/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 text-white space-y-2">
                    <div className="w-9 h-9 rounded-full bg-campus-amber text-white flex items-center justify-center border border-white/25 self-start text-sm shadow">
                       <ZoomIn className="w-4 h-4 animate-pulse" />
                    </div>
                    
                    <span className="inline-block text-[9px] uppercase tracking-widest bg-white/20 text-white px-2 py-0.5 rounded w-fit">
                       {img.category}
                    </span>
                    
                    <p className="text-xs text-slate-200 line-clamp-2 leading-relaxed font-light">
                       {img.caption}
                    </p>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-16 bg-white rounded-3xl border border-campus-maroon/5 col-span-full font-light text-slate-400 text-sm">
                 No visual archives registered for this filter in our database.
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Lightbox Modal overlay */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              id="gallery-lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-campus-navy/95 flex flex-col justify-center items-center"
            >
              {/* Close Button */}
              <motion.button
                id="btn-close-lightbox"
                onClick={closeLightbox}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all cursor-pointer border border-white/10"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </motion.button>

              {/* Main lightbox photo container */}
              <div className="max-w-4xl max-h-[70vh] w-full px-4 relative flex flex-col items-center">
                <motion.img
                  id="img-lightbox-large"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.95 }}
                  src={images[lightboxIndex].url}
                  alt={images[lightboxIndex].caption}
                  className="max-h-[60vh] object-contain rounded-2xl shadow-2xl border border-white/10"
                  referrerPolicy="no-referrer"
                />
                
                {/* Lightbox caption banner info */}
                <div className="text-center text-white mt-6 space-y-2 max-w-xl">
                  <span className="inline-block text-[10px] uppercase font-bold tracking-widest text-[#D97706] bg-campus-amber/20 border border-campus-amber/30 px-3 py-1 rounded-full">
                     {images[lightboxIndex].category} Division
                  </span>
                  <p className="text-sm font-sans text-slate-200 font-light">
                     {images[lightboxIndex].caption}
                  </p>
                </div>
              </div>

              {/* Slider Controls Inside Lightbox */}
              <div className="flex gap-4 mt-8">
                <motion.button
                  id="btn-lightbox-prev"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setLightboxIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null))}
                  className="px-4 py-2 bg-white/10 hover:bg-white/15 text-white rounded-lg text-xs font-display font-medium uppercase tracking-wider transition-colors cursor-pointer border border-white/5"
                >
                   Previous
                </motion.button>
                <motion.button
                  id="btn-lightbox-next"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setLightboxIndex((prev) => (prev !== null ? (prev + 1) % images.length : null))}
                  className="px-4 py-2 bg-white/10 hover:bg-white/15 text-white rounded-lg text-xs font-display font-medium uppercase tracking-wider transition-colors cursor-pointer border border-white/5"
                >
                   Next
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
