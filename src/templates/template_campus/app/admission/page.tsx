/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, CheckCircle2, DollarSign, FileText, Send, UserCheck, ArrowRight, Info } from "lucide-react";
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
    transition: { type: "spring", stiffness: 90, damping: 14 }
  }
};

export default function AdmissionPage({ data }: PageProps) {
  // Enquiry form fields
  const [parentName, setParentName] = useState("");
  const [studentName, setStudentName] = useState("");
  const [targetClass, setTargetClass] = useState("Grade 1");
  const [emailAddress, setEmailAddress] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [additionalMessage, setAdditionalMessage] = useState("");

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName || !studentName || !emailAddress || !mobileNumber) {
      alert("Please fill out all required fields.");
      return;
    }
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1200);
  };

  const handleResetForm = () => {
    setParentName("");
    setStudentName("");
    setTargetClass("Grade 1");
    setEmailAddress("");
    setMobileNumber("");
    setAdditionalMessage("");
    setFormSubmitted(false);
  };

  const feeStructure = [
    { grade: "Nursery / Prep / KG", admissionFee: "₹15,000", quarterlyTuition: "₹18,500", sportsWelfareFee: "₹2,500" },
    { grade: "Grades I to V", admissionFee: "₹20,000", quarterlyTuition: "₹22,000", sportsWelfareFee: "₹3,500" },
    { grade: "Grades VI to X", admissionFee: "₹25,000", quarterlyTuition: "₹26,500", sportsWelfareFee: "₹4,500" },
    { grade: "Grades XI & XII", admissionFee: "₹30,000", quarterlyTuition: "₹32,500", sportsWelfareFee: "₹6,000" }
  ];

  return (
    <div id="admission-page" className="bg-campus-sand font-sans py-12 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          id="admissions-header"
          badge="ADMISSIONS ACADEMIC YEAR 2026-27"
          title="Enrollment & Advisory Guidelines"
          subtitle="A comprehensive handbook on criteria, quarterly fee listings, and general seat registration inquiries."
        />

        {/* Step-by-Step interactive process guide */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.01 }}
            className="bg-white p-6 rounded-3xl border border-campus-maroon/5 shadow-xs relative overflow-hidden text-center space-y-3 cursor-pointer"
          >
            <span className="w-8 h-8 rounded-full bg-campus-maroon text-white font-display font-bold flex items-center justify-center mx-auto text-sm shadow">1</span>
            <h4 className="font-display font-bold text-sm text-campus-navy">Submit Enquiry</h4>
            <p className="text-xs text-text-body font-light">Fill out the quick online advisory sheet or visit the registrar's lobby desk.</p>
          </motion.div>

          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.01 }}
            className="bg-white p-6 rounded-3xl border border-campus-maroon/5 shadow-xs relative overflow-hidden text-center space-y-3 cursor-pointer"
          >
            <span className="w-8 h-8 rounded-full bg-campus-maroon text-white font-display font-bold flex items-center justify-center mx-auto text-sm shadow">2</span>
            <h4 className="font-display font-bold text-sm text-campus-navy">Document Check</h4>
            <p className="text-xs text-text-body font-light">Submit previous pass marks sheets, transfer slip certificates, and local address utility proofs.</p>
          </motion.div>

          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.01 }}
            className="bg-white p-6 rounded-3xl border border-campus-maroon/5 shadow-xs relative overflow-hidden text-center space-y-3 cursor-pointer"
          >
            <span className="w-8 h-8 rounded-full bg-campus-maroon text-white font-display font-bold flex items-center justify-center mx-auto text-sm shadow">3</span>
            <h4 className="font-display font-bold text-sm text-campus-navy">Aptitude Interactive</h4>
            <p className="text-xs text-text-body font-light">A simple friendly cognitive evaluation for the child, mapping reasoning skills and health parameters.</p>
          </motion.div>

          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.01 }}
            className="bg-white p-6 rounded-3xl border border-campus-maroon/5 shadow-xs relative overflow-hidden text-center space-y-3 cursor-pointer animate-pulse"
          >
            <span className="w-8 h-8 rounded-full bg-campus-amber text-white font-display font-bold flex items-center justify-center mx-auto text-sm shadow animate-none">4</span>
            <h4 className="font-display font-bold text-sm text-campus-navy">Seat Guarantee</h4>
            <p className="text-xs text-text-body font-light">Complete the initial quarterly admission clearance token and receive class materials.</p>
          </motion.div>
        </motion.div>

        {/* Fees and Form double column block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Fee Schedules Columns */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="space-y-3">
              <span className="inline-block text-xs font-mono uppercase tracking-wider text-campus-maroon bg-campus-rose-tint px-2.5 py-1 rounded">
                Transparent Billing
              </span>
              <h3 className="font-display font-bold text-xl text-campus-navy">Quarterly Fee Breakdown</h3>
              <p className="text-xs text-text-body font-light">
                 CBSE guidelines mandate public audit of fee schedules. All payments processed online via eddesk gateway panels.
              </p>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden border border-campus-maroon/5 shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs md:text-sm">
                  <thead>
                    <tr className="bg-campus-maroon text-white font-display text-[11px] uppercase tracking-wider">
                      <th className="p-4">Grades & Divisions</th>
                      <th className="p-4">Admissions Block</th>
                      <th className="p-4">Quarterly Tuition</th>
                      <th className="p-4">Sports Welfare</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-campus-maroon/5 text-xs text-text-body">
                    {feeStructure.map((fee, idx) => (
                      <tr key={idx} className="hover:bg-campus-rose-tint/25 transition-all font-light cursor-pointer">
                        <td className="p-4 font-bold text-campus-navy">{fee.grade}</td>
                        <td className="p-4 text-campus-maroon font-semibold">{fee.admissionFee}</td>
                        <td className="p-4">{fee.quarterlyTuition}</td>
                        <td className="p-4 text-campus-amber font-semibold">{fee.sportsWelfareFee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="bg-campus-rose-tint p-5 rounded-2xl border border-campus-maroon/5 space-y-2"
            >
              <h4 className="font-display font-bold text-xs text-campus-maroon uppercase tracking-wide flex items-center gap-1.5 font-sans">
                <HelpCircle className="w-4 h-4 text-campus-maroon" /> Sports Stream Scholarships Available
              </h4>
              <p className="text-[11px] text-text-body leading-relaxed font-light">
                 St. Columba's Academy offers merit waivers on tuition fees and complementary athletic equipment for district-level or national players seeking admissions in class VIII to XI.
              </p>
            </motion.div>
          </motion.div>

          {/* Quick Enquiry interactive block */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="lg:col-span-6"
          >
            <div className="bg-white rounded-3xl p-8 border border-campus-maroon/5 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 h-1.5 left-0 bg-gradient-to-r from-campus-maroon to-campus-amber" />
              
              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.form
                    key="enquiry-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleEnquirySubmit}
                    className="space-y-5"
                  >
                    <div className="space-y-1">
                      <h3 className="font-display font-bold text-lg text-campus-navy">Submit Online Enquiry</h3>
                      <p className="text-xs text-text-body font-light">Enter correct details below. Our admissions desk will reply in 1 business day.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-text-body" htmlFor="parentName">
                          Parent / Guardian Name *
                        </label>
                        <input
                          id="parentName"
                          type="text"
                          required
                          value={parentName}
                          onChange={(e) => setParentName(e.target.value)}
                          placeholder="Dr. Rajesh Patel"
                          className="w-full text-xs px-4 py-3 rounded-xl bg-campus-sand/65 border border-campus-maroon/10 focus:ring-1 focus:ring-campus-amber focus:border-campus-amber outline-none transition-all"
                        />
                      </div>
                      
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-text-body" htmlFor="studentName">
                          Student Name *
                        </label>
                        <input
                          id="studentName"
                          type="text"
                          required
                          value={studentName}
                          onChange={(e) => setStudentName(e.target.value)}
                          placeholder="Arpit Patel"
                          className="w-full text-xs px-4 py-3 rounded-xl bg-campus-sand/65 border border-campus-maroon/10 focus:ring-1 focus:ring-campus-amber focus:border-campus-amber outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-text-body" htmlFor="targetClass">
                          Seeking Class *
                        </label>
                        <select
                          id="targetClass"
                          value={targetClass}
                          onChange={(e) => setTargetClass(e.target.value)}
                          className="w-full text-xs px-4 py-3 rounded-xl bg-campus-sand/65 border border-campus-maroon/10 focus:ring-1 focus:ring-campus-amber focus:border-campus-amber outline-none transition-all cursor-pointer"
                        >
                          <option value="Prep / KG">Nursery / KG</option>
                          <option value="Grade 1">Grade I - V</option>
                          <option value="Grade 6">Grade VI - VIII</option>
                          <option value="Grade 9">Grade IX - X</option>
                          <option value="Grade 11">Grade XI - XII</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-text-body" htmlFor="mobileNumber">
                          Mobile Contact Line *
                        </label>
                        <input
                          id="mobileNumber"
                          type="tel"
                          required
                          value={mobileNumber}
                          onChange={(e) => setMobileNumber(e.target.value)}
                          placeholder="+91 99887 76655"
                          className="w-full text-xs px-4 py-3 rounded-xl bg-campus-sand/65 border border-campus-maroon/10 focus:ring-1 focus:ring-campus-amber focus:border-campus-amber outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-bold tracking-wider text-text-body" htmlFor="emailAddress">
                        Authorized Email Address *
                      </label>
                      <input
                        id="emailAddress"
                        type="email"
                        required
                        value={emailAddress}
                        onChange={(e) => setEmailAddress(e.target.value)}
                        placeholder="parent@gmail.com"
                        className="w-full text-xs px-4 py-3 rounded-xl bg-campus-sand/65 border border-campus-maroon/10 focus:ring-1 focus:ring-campus-amber focus:border-campus-amber outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-bold tracking-wider text-text-body" htmlFor="additionalMessage">
                        Physical / Sporting Credentials or message
                      </label>
                      <textarea
                        id="additionalMessage"
                        rows={3}
                        value={additionalMessage}
                        onChange={(e) => setAdditionalMessage(e.target.value)}
                        placeholder="State any national level awards, district certificates, or query notes..."
                        className="w-full text-xs px-4 py-3 rounded-xl bg-campus-sand/65 border border-campus-maroon/10 focus:ring-1 focus:ring-campus-amber focus:border-campus-amber outline-none transition-all"
                      />
                    </div>

                    <motion.button
                      id="btn-submit-enquiry"
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full py-4 text-center text-white bg-campus-maroon hover:bg-campus-maroon/95 rounded-xl font-display font-bold text-xs uppercase tracking-wider transition-all shadow cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? "Dispatching Advisory..." : "Submit Seat Registration"}
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    className="text-center py-12 space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-3xl shadow-xs">
                      <CheckCircle2 className="w-8 h-8 font-extrabold" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-display font-extrabold text-2xl text-campus-navy">Seat Advisory Dispatched!</h3>
                      <p className="text-xs text-text-body font-light leading-relaxed max-w-sm mx-auto">
                         Thank you, <strong className="text-campus-maroon">{parentName}</strong>. A dedicated admissions counselor has logged registration criteria for <strong className="text-campus-navy">{studentName}</strong>. We will write to <strong className="text-slate-700">{emailAddress}</strong> shortly.
                      </p>
                    </div>

                    <div className="pt-4 flex flex-col gap-2 max-w-xs mx-auto text-xs text-text-body text-left bg-campus-sand p-4 rounded-xl border border-campus-maroon/5 font-mono">
                      <span>• Token Ref: SCA-{Math.floor(1000 + Math.random() * 9000)}</span>
                      <span>• Evaluation Slot: To be emailed</span>
                      <span>• Class requested: {targetClass}</span>
                    </div>

                    <motion.button
                      id="btn-reset-form"
                      onClick={handleResetForm}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2.5 rounded-full bg-campus-navy text-white text-xs font-display font-bold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Fill another advisory
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
