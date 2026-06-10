/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Printer, Shield, FileText, CheckCircle2 } from "lucide-react";
import { TenantViewModel } from "../../types";
import SectionHeader from "../../components/SectionHeader";

interface PageProps {
  data: TenantViewModel;
}

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

export default function DisclosurePage({ data }: PageProps) {
  // CBSE public parameters
  const generalParameters = [
    { field: "Affiliation Number", value: "1130456 (General Secondary)" },
    { field: "School Code Registered", value: "30456" },
    { field: "Official U-DISE Location Code", value: "09102304012" },
    { field: "Complete Postal Location", value: data.school.fullAddress || data.school.address },
    { field: "Trust/Society Registered Governing", value: "St. Columba's Academy Educational Society Trust" },
    { field: "NOC Authorities State Granted", value: "Uttar Pradesh Department of School Education" },
    { field: "Sanitary & Safety Certifications", value: "Certified Compliant (Audit Term 2025-26)" }
  ];

  const infrastructureDimensions = [
    { metric: "Total Campus Ground Dimension Area", specification: "8,200 Square Meters (~2.02 Acres)" },
    { metric: "State Of Art Laboratories Counts", specification: "6 Major Rooms (Physics, Chemistry, Computer, Biology, Reasoning)" },
    { metric: "Central Library Referencing Shelves", specification: "1 Centenary Lobby (10,000 Volume Archives)" },
    { metric: "Indoor Stadium Multipurpose Areas", specification: "1 Olympia Hall (Rubberized Tiles)" },
    { metric: "FIFA Standard Soccer Turf Terrain Size", specification: "1 Arena (FIFA Grade High-Density Synthetic Grass)" }
  ];

  const teachingRatios = [
    { ratioType: "Student - Teacher Balanced Ratio", parameterValue: "15 : 1 (CBSE Guideline Compliant)" },
    { ratioType: "Primary Teachers Counts (PRT)", parameterValue: "24 Certified Personnel" },
    { ratioType: "Trained Graduate Teachers Counts (TGT)", parameterValue: "18 Certified Personnel" },
    { ratioType: "Post Graduate Teachers Counts (PGT)", parameterValue: "12 Certified Personnel" },
    { ratioType: "Physical Health Directors & Coaches", parameterValue: "4 Full-Time SAI certified Instructors" }
  ];

  const triggerWindowPrint = () => {
    window.print();
  };

  return (
    <div id="cbse-disclosure-page" className="bg-campus-sand font-sans py-12 md:py-20 print:bg-white print:py-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 print:max-w-full print:px-0">
        
        {/* Upper Action print button block (hidden on print) */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="flex justify-between items-center bg-white p-4 rounded-xl border border-campus-maroon/5 shadow-xs mb-10 print:hidden"
        >
          <div className="flex items-center gap-2 text-campus-navy text-xs md:text-sm font-semibold">
            <Shield className="w-5 h-5 text-campus-maroon shrink-0" />
            <span>CBSE Appendix IX Mandatory Disclosures</span>
          </div>
          <motion.button
            id="btn-print-disclosure"
            onClick={triggerWindowPrint}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-5 py-2.5 rounded-full bg-campus-maroon hover:bg-campus-maroon/95 text-white font-display font-semibold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
          >
            <Printer className="w-4 h-4" /> Print Document
          </motion.button>
        </motion.div>

        <SectionHeader
          id="compliance-pub-header"
          badge="APPENDIX IX REPORT"
          title="Mandatory Public Disclosure"
          subtitle="CBSE guidelines mandate transparent school records. Use the Print utility above to produce certified physical reports."
        />

        <motion.div 
          className="space-y-12 mt-12 print:mt-0 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          
          {/* Section A: General Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="font-display font-bold text-lg text-campus-navy tracking-tight pb-2 border-b border-campus-maroon/15 uppercase flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-campus-amber animate-pulse" /> Section A: General Information
            </h3>
            <div className="bg-white rounded-2xl overflow-hidden border border-campus-maroon/5 shadow-sm print:border-slate-300">
              <table className="w-full text-left border-collapse text-xs md:text-sm">
                <thead>
                  <tr className="bg-campus-maroon text-white font-display text-[11px] uppercase tracking-wider">
                    <th className="p-4 w-1/2">Compliance Parameter Fields</th>
                    <th className="p-4 w-1/2 font-sans">Official Registrar Declarations</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-campus-maroon/5 text-text-body">
                  {generalParameters.map((param, idx) => (
                    <tr key={idx} className={`${idx % 2 === 0 ? "bg-campus-rose-tint/20" : "bg-white"} hover:bg-campus-rose-tint/40 transition-colors font-light cursor-pointer`}>
                      <td className="p-4 font-semibold text-campus-navy border-r border-campus-maroon/5">{param.field}</td>
                      <td className="p-4 font-mono text-slate-800">{param.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Section B: Staffing Parameters */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="font-display font-bold text-lg text-campus-navy tracking-tight pb-2 border-b border-campus-maroon/15 uppercase flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-campus-amber animate-pulse" /> Section B: Staffing & Faculty Ratios
            </h3>
            <div className="bg-white rounded-2xl overflow-hidden border border-campus-maroon/5 shadow-sm print:border-slate-300">
              <table className="w-full text-left border-collapse text-xs md:text-sm">
                <thead>
                  <tr className="bg-campus-maroon text-white font-display text-[11px] uppercase tracking-wider">
                    <th className="p-4 w-1/2">Educational Division Metric</th>
                    <th className="p-4 w-1/2 font-sans">Declared Personnel Strength</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-campus-maroon/5 text-text-body">
                  {teachingRatios.map((ratio, idx) => (
                    <tr key={idx} className={`${idx % 2 === 0 ? "bg-campus-rose-tint/20" : "bg-white"} hover:bg-campus-rose-tint/40 transition-colors font-light cursor-pointer`}>
                      <td className="p-4 font-semibold text-campus-navy border-r border-campus-maroon/5">{ratio.ratioType}</td>
                      <td className="p-4 font-mono text-slate-800">{ratio.parameterValue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Section C: Campus Specifications */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="font-display font-bold text-lg text-campus-navy tracking-tight pb-2 border-b border-campus-maroon/15 uppercase flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-campus-amber animate-pulse" /> Section C: Physical Campus Specifications
            </h3>
            <div className="bg-white rounded-2xl overflow-hidden border border-campus-maroon/5 shadow-sm print:border-slate-300">
              <table className="w-full text-left border-collapse text-xs md:text-sm">
                <thead>
                  <tr className="bg-campus-maroon text-white font-display text-[11px] uppercase tracking-wider">
                    <th className="p-4 w-1/2">Physical Infrastructure Metric</th>
                    <th className="p-4 w-1/2 font-sans">Declared Dimensions Specifications</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-campus-maroon/5 text-text-body">
                  {infrastructureDimensions.map((infra, idx) => (
                    <tr key={idx} className={`${idx % 2 === 0 ? "bg-campus-rose-tint/20" : "bg-white"} hover:bg-campus-rose-tint/40 transition-colors font-light cursor-pointer`}>
                      <td className="p-4 font-semibold text-campus-navy border-r border-campus-maroon/5">{infra.metric}</td>
                      <td className="p-4 font-mono text-slate-800">{infra.specification}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Printer Warning Statement (hidden on printing) */}
          <motion.div 
            variants={itemVariants}
            className="bg-white p-5 rounded-2xl border border-campus-maroon/5 shadow-xs text-center space-y-2 print:hidden"
          >
            <p className="text-xs text-text-body font-light animate-pulse">
               📝 <strong>CBSE Board Accreditation Rule:</strong> Public disclosures must be printed on certified letterheads and signed by school principal directors. Click the "Print Document" button to obtain standard layout prints.
            </p>
          </motion.div>

        </motion.div>

      </div>
    </div>
  );
}
