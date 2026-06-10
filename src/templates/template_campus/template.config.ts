/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

export const templateConfig = {
  key: "template_campus",
  name: "Holistic Campus",
  description: "A scholar-first premium academic template highlighting athletics, co-curricular achievements, CBSE Appendix compliant, and rich framer-motion micro-interactions.",
  theme: {
    primaryColor: "#7A1C2C", // campus-maroon
    accentColor: "#D97706",  // campus-amber
    backgroundColor: "#FAF7F2" // campus-sand
  },
  routes: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Activities & Sports", path: "/activities" },
    { name: "Admissions", path: "/admission" },
    { name: "Infrastructure", path: "/infrastructure" },
    { name: "Faculty & Coaches", path: "/faculty" },
    { name: "Gallery", path: "/gallery" },
    { name: "Events & Fixtures", path: "/events" },
    { name: "CBSE Disclosure", path: "/disclosure" },
    { name: "Contact Us", path: "/contact" }
  ]
};
