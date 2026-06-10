/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  id?: string;
  title: string;
  subtitle?: string;
  badge?: string;
  align?: "left" | "center" | "right";
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

const childVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 14 }
  }
};

export default function SectionHeader({
  id = "section-header",
  title,
  subtitle,
  badge,
  align = "center"
}: SectionHeaderProps) {
  const isLeft = align === "left";
  const isRight = align === "right";

  return (
    <motion.div
      id={id}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`max-w-4xl mb-12 ${
        isLeft ? "text-left mr-auto" : isRight ? "text-right ml-auto" : "text-center mx-auto"
      }`}
    >
      {badge && (
        <motion.span
          id={`${id}-badge`}
          variants={childVariants}
          className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-campus-rose-tint text-campus-maroon border border-campus-maroon/10 mb-4 animate-shimmer"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-campus-amber" />
          {badge}
        </motion.span>
      )}
      
      <motion.h2
        id={`${id}-title`}
        variants={childVariants}
        className="font-display font-bold text-3xl md:text-4xl text-campus-navy tracking-tight"
      >
        {title}
      </motion.h2>

      {/* Maroon decorative line with an amber node */}
      <motion.div
        id={`${id}-decorator`}
        variants={childVariants}
        className={`flex items-center gap-2 mt-4 mb-5 ${
          isLeft ? "justify-start" : isRight ? "justify-end" : "justify-center"
        }`}
      >
        <span className="h-1 w-16 bg-campus-maroon rounded-full" />
        <span className="w-2.5 h-2.5 rounded-full bg-campus-amber animate-pulse" />
        <span className="h-1 w-6 bg-campus-maroon/30 rounded-full" />
      </motion.div>

      {subtitle && (
        <motion.p
          id={`${id}-subtitle`}
          variants={childVariants}
          className="font-sans text-base md:text-lg text-text-body font-light leading-relaxed max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
