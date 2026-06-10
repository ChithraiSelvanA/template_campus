/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, CheckCircle2 } from "lucide-react";
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

export default function ContactPage({ data }: PageProps) {
  const contacts = data?.contactDetails?.[0] || {
    phone: data?.school?.phone || "+91 80 4123 5678",
    email: data?.school?.email || "admissions@stcolumbas.edu.in",
    address: data?.school?.fullAddress || "12, Academic Boulevard, Greater Noida, UP - 201310",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.9405625447177!2d77.49448831507857!3d28.45129699899175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1063dbf4505%3A0xe67db5098ffb4e8c!2sKnowledge%20Park%20III%2C%20Greater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1689234567890!5m2!1sen!2sin",
    officeHours: "Monday - Saturday: 8:00 AM - 3:00 PM"
  };

  const [contactSubject, setContactSubject] = useState("Gen Inquiry");
  const [contactMsg, setContactMsg] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [msgSent, setMsgSent] = useState(false);

  const handleMessageSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactPhone || !contactMsg) {
      alert("Please fill in name, phone, and message contents.");
      return;
    }
    setMsgSent(true);
  };

  return (
    <div id="contact-page" className="bg-campus-sand font-sans py-12 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          id="contact-main-header"
          badge="PORTAL RECONCILIATION"
          title="Campus Liaison Office"
          subtitle="Get in touch with the Registrar, Academic Dean, or Physical Education directors directly regarding enrollment slots."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-stretch">
          
          {/* Quick Details List & Map Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <h3 className="font-display font-bold text-xl text-campus-navy">Liaison Directory</h3>
              
              <motion.ul 
                className="space-y-5 text-sm text-text-body font-light"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.li 
                  variants={cardVariants}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3.5 p-4 bg-white rounded-2xl border border-campus-maroon/5 shadow-xs hover:border-campus-maroon/15 transition-all"
                >
                  <MapPin className="w-5 h-5 text-campus-maroon shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-display font-semibold text-campus-navy">Main Campus Address</strong>
                    <span>{contacts.address}</span>
                  </div>
                </motion.li>

                <motion.li 
                  variants={cardVariants}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3.5 p-4 bg-white rounded-2xl border border-campus-maroon/5 shadow-xs hover:border-campus-maroon/15 transition-all"
                >
                  <Phone className="w-4 h-4 text-campus-maroon shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-display font-semibold text-campus-navy">Administrative Contact Desk</strong>
                    <span>{contacts.phone}</span>
                  </div>
                </motion.li>

                <motion.li 
                  variants={cardVariants}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3.5 p-4 bg-white rounded-2xl border border-campus-maroon/5 shadow-xs hover:border-campus-maroon/15 transition-all"
                >
                  <Mail className="w-4 h-4 text-campus-maroon shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-display font-semibold text-campus-navy">Electronic Admissions Office</strong>
                    <span className="break-all">{contacts.email}</span>
                  </div>
                </motion.li>

                <motion.li 
                  variants={cardVariants}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3.5 p-4 bg-white rounded-2xl border border-campus-maroon/5 shadow-xs hover:border-campus-maroon/15 transition-all"
                >
                  <Clock className="w-4 h-4 text-campus-amber shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-display font-semibold text-campus-navy">School Office Hours</strong>
                    <span>{contacts.officeHours}</span>
                  </div>
                </motion.li>
              </motion.ul>
            </div>

            {/* Direct WhatsApp Call to Action */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="bg-emerald-600 text-white rounded-2xl p-6 shadow-sm space-y-3 relative overflow-hidden"
            >
              <span className="text-[9px] font-bold bg-emerald-800 text-emerald-100 px-2 py-0.5 rounded tracking-wide uppercase">
                Instant Advisory
              </span>
              <h4 className="font-display font-bold text-sm text-white">Need immediate boarding answers?</h4>
              <p className="text-xs text-white/90 font-light">
                Connect directly with our counseling administrators on WhatsApp for fast answers.
              </p>
              
              <motion.a
                whileTap={{ scale: 0.97 }}
                href={`https://wa.me/${contacts.phone.replace(/\+/g, '').replace(/\s/g, '')}?text=Hello%20St.%20Columbas%20Academy`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white hover:bg-slate-50 text-emerald-700 font-display font-bold text-[11px] uppercase tracking-wider transition-colors shadow block w-fit"
              >
                <MessageSquare className="w-4 h-4" /> WhatsApp Chat Live
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Map Embed and Quick Message Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Embedded map iframe */}
            <div className="bg-white p-2 rounded-3xl overflow-hidden border border-campus-maroon/5 shadow-sm h-64 relative">
              {contacts.mapUrl ? (
                <iframe
                  id="map-embed-frame"
                  src={contacts.mapUrl}
                  title="St. Columba's Academy Map Coordinates"
                  className="w-full h-full border-0 rounded-2xl"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              ) : (
                <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-500 text-sm">
                  School Map Area Configuration Disabled
                </div>
              )}
            </div>

            {/* Quick Contact Message Form */}
            <div className="bg-white rounded-3xl p-6 border border-campus-maroon/5 shadow-xs relative">
              <AnimatePresence mode="wait">
                {!msgSent ? (
                  <motion.form 
                    key="msg-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    id="contact-quick-msg-form" 
                    onSubmit={handleMessageSend} 
                    className="space-y-4"
                  >
                    <h4 className="font-display font-bold text-base text-campus-navy">Dispatch a Quick Message</h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-text-body">Your Name</label>
                        <input
                          type="text"
                          required
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          placeholder="Archana Sen"
                          className="w-full text-xs px-4 py-2.5 rounded-xl bg-campus-sand/65 border border-campus-maroon/10 focus:ring-1 focus:ring-campus-amber focus:border-campus-amber outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-text-body">Contact Number</label>
                        <input
                          type="tel"
                          required
                          value={contactPhone}
                          onChange={(e) => setContactPhone(e.target.value)}
                          placeholder="+91"
                          className="w-full text-xs px-4 py-2.5 rounded-xl bg-campus-sand/65 border border-campus-maroon/10 focus:ring-1 focus:ring-campus-amber focus:border-campus-amber outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold tracking-wider text-text-body">Department Segment</label>
                      <select
                        value={contactSubject}
                        onChange={(e) => setContactSubject(e.target.value)}
                        className="w-full text-xs px-4 py-2.5 rounded-xl bg-campus-sand/65 border border-campus-maroon/10 focus:ring-1 outline-none focus:ring-campus-amber focus:border-campus-amber transition-all cursor-pointer"
                      >
                        <option value="Gen Inquiry">General Advisory Desk</option>
                        <option value="Principal Liaison">Principal's Liaison Desk</option>
                        <option value="Athletics Board">Athletic programs</option>
                        <option value="Accounts Block">Accounts and tuition Fees</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold tracking-wider text-text-body">Message details</label>
                      <textarea
                        rows={3}
                        required
                        value={contactMsg}
                        onChange={(e) => setContactMsg(e.target.value)}
                        placeholder="Type your brief query or question here..."
                        className="w-full text-xs px-4 py-2.5 rounded-xl bg-campus-sand/65 border border-campus-maroon/10 focus:ring-1 outline-none focus:ring-campus-amber focus:border-campus-amber transition-all"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full py-3 bg-campus-maroon hover:bg-campus-maroon/95 text-white rounded-xl font-display font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Send message
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="sent-confirmation"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    className="text-center py-6 space-y-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-xl">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="font-display font-bold text-base text-campus-navy">Message Dispatched!</h4>
                    <p className="text-xs text-text-body leading-relaxed max-w-sm mx-auto">
                       Thank you, <strong className="text-campus-maroon">{contactName}</strong>. Your liaison enquiry regarding <strong>{contactSubject}</strong> is logged. We will get back.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => { setMsgSent(false); setContactMsg(""); }}
                      className="px-4 py-1.5 rounded-full bg-campus-sand hover:bg-campus-rose-tint text-text-body text-xs cursor-pointer font-bold"
                    >
                       Write another message
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
