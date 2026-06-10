/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import { TenantViewModel } from "./types";

export const mockTenantData: TenantViewModel = {
  school: {
    key: "st_columbas",
    name: "St. Columba's Academy",
    slug: "st-columbas",
    logoUrl: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=200&h=200", 
    slogan: "Nurturing Academic Excellence & Athletic Prowess",
    description: "St. Columba's Academy is a prestigious CBSE-affiliated institution dedicated to fostering dynamic intellects and sports sportsmanship. We believe in high scholastic rigor matched with standard co-curricular facilities.",
    email: "admissions@stcolumbas.edu.in",
    phone: "+91 80 4123 5678",
    address: "12, Academic Boulevard, Knowledge Park III",
    city: "Greater Noida",
    state: "Uttar Pradesh",
    country: "India",
    postalCode: "201310",
    fullAddress: "12, Academic Boulevard, Knowledge Park III, Greater Noida, UP - 201310",
    paymentGatewayUrl: "https://pay.eddesk.com/stcolumbas",
    themeConfig: {}
  },
  identity: {
    vision: "To be a global benchmark for holistic scholarship, empowering children to scale heights in both analytical thinking and physical discipline.",
    mission: "To provide a structured CBSE curriculum enriched with modern computational labs, advanced athletic playgrounds, and artistic avenues, cultivating balanced future-ready leaders.",
    motto: "Aeterna Intellectus et Virtus (Eternal Mind & Virtue)",
    history: "Founded in 2012 with a class of sixty scholars, St. Columba's has grown to accommodate over 1,500 active students. We have consistently broken regional academic records in CBSE Boards while securing prestigious national trophies in Football and Athletics.",
    foundedYear: 2012,
    boardMessage: "Welcome to St. Columba's Academy. We take pride in building a sanctuary where a child's curiosities find expression in physics labs and basketball courts alike. Our dedicated faculty ensures that our stellar academic performance is matched by a strong co-curricular base.",
    aboutTitle: "We Shape Scholars, Athletes, & Visionary Minds",
    aboutDescription: "With a decade-long legacy of 100% CBSE board clearance, St. Columba's Academy offers a uniquely balanced system. We believe a student should design deep software in our computer labs and score decisive points on our state-of-the-art football fields. We are an academic institution that views physical education not as an afterthought, but as an essential pillar of mental endurance."
  },
  heroMedia: [
    {
      key: "hero_slide_1",
      headline: "Where Superior Scholarship Meets Athletic Triumph",
      subheadline: "A premium CBSE school cultivating intellectual analytical thinking, scientific inquiry, and national-level sports execution.",
      mediaType: "image",
      mediaUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200",
      primaryButtonText: "Enroll for 2026-27",
      primaryButtonUrl: "#/admission",
      secondaryButtonText: "Explore Facilities",
      secondaryButtonUrl: "#/infrastructure",
      isActive: true
    },
    {
      key: "hero_slide_2",
      headline: "Inspiring Scientific & Artistic Discovery",
      subheadline: "Empowering young scholars with high-tech computational labs, robotic cells, and award-winning debate chambers.",
      mediaType: "image",
      mediaUrl: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1200",
      primaryButtonText: "Meet the Faculty",
      primaryButtonUrl: "#/faculty",
      secondaryButtonText: "View Gallery",
      secondaryButtonUrl: "#/gallery",
      isActive: true
    },
    {
      key: "hero_slide_3",
      headline: "Unleashing Champions on the Turf",
      subheadline: "Showcasing international standard outdoor tracks, professional coaching staffs, and structured wellness modules.",
      mediaType: "image",
      mediaUrl: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&q=80&w=1200",
      primaryButtonText: "Sports Programs",
      primaryButtonUrl: "#/activities",
      secondaryButtonText: "Latest Fixtures",
      secondaryButtonUrl: "#/events",
      isActive: true
    }
  ],
  broadcast: [
    {
      key: "bc_1",
      title: "Admissions Open (2026-2027)",
      message: "Applications for grades Nursery to XI are now being evaluated. Limited seats available for the sports coaching stream.",
      priority: 1,
      isActive: true
    },
    {
      key: "bc_2",
      title: "CBSE XII Regional Topper",
      message: "Congratulations to Aditya Sharma of Grade XII Science for securing 99.4% in the CBSE board examinations!",
      priority: 2,
      isActive: true
    },
    {
      key: "bc_3",
      title: "Inter-School Football Champions",
      message: "Our Academy Under-17 soccer team clinched the Regional Cup title defeating Riverside High with a 3-1 scoreline.",
      priority: 3,
      isActive: true
    }
  ],
  faculty: [
    {
      key: "fac_1",
      name: "Dr. Malini Iyer",
      designation: "Principal & Academic Chair",
      qualification: "Ph.D. in English Literature, M.Ed.",
      experienceYears: 18,
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=400",
      isActive: true
    },
    {
      key: "fac_2",
      name: "Prof. Rajesh Malhotra",
      designation: "Head of Mathematical Sciences",
      qualification: "M.Sc. in Mathematics, B.Ed.",
      experienceYears: 14,
      imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300&h=400",
      isActive: true
    },
    {
      key: "fac_3",
      name: "Coach Gurpreet Singh",
      designation: "Director of Athletics & Sports",
      qualification: "B.P.Ed., Certified Coach (SAI)",
      experienceYears: 12,
      imageUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=300&h=400",
      isActive: true
    },
    {
      key: "fac_4",
      name: "Mrs. Sarah Thomas",
      designation: "Lead Physicist & Robotics Mentor",
      qualification: "M.Tech in Physics & Systems Control",
      experienceYears: 9,
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300&h=400",
      isActive: true
    },
    {
      key: "fac_5",
      name: "Coach Ananya Deshmukh",
      designation: "Head Gymnastics Coach",
      qualification: "National Medalist, PG Dip in Sports Coaching",
      experienceYears: 8,
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300&h=400",
      isActive: true
    }
  ],
  stats: [
    {
      key: "stat_1",
      label: "CBSE Passing Rate",
      value: "100%",
      icon: "GraduationCap"
    },
    {
      key: "stat_2",
      label: "Active Scholars",
      value: "1500+",
      icon: "Users"
    },
    {
      key: "stat_3",
      label: "Sports Championship Cups",
      value: "28",
      icon: "Trophy"
    },
    {
      key: "stat_4",
      label: "Student-Teacher Ratio",
      value: "15:1",
      icon: "Award"
    }
  ],
  achievements: [
    {
      key: "ach_1",
      title: "State Science Olympiad Winner",
      description: "Secured First Position in the state-level robotics design and logical computation challenge.",
      category: "Academic",
      year: 2025,
      awardLevel: "State Level",
      imageUrl: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=400",
      isFeatured: true
    },
    {
      key: "ach_2",
      title: "Under-17 Regional Soccer Champions",
      description: "Clenched premium status after defeating 24 local academy teams without conceding a single goal in knockouts.",
      category: "Sports",
      year: 2026,
      awardLevel: "National Level",
      imageUrl: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=400",
      isFeatured: true
    },
    {
      key: "ach_3",
      title: "CBSE National Athletics Silver",
      description: "Arjun Verma secured 2nd place in the 400m sprinting division representing the Academy.",
      category: "Sports",
      year: 2025,
      awardLevel: "National Level",
      imageUrl: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=400",
      isFeatured: true
    },
    {
      key: "ach_4",
      title: "National Youth Debating Cup",
      description: "Our high school debate group triumphed on structural socio-economic topics at the Model UN summits.",
      category: "Arts",
      year: 2026,
      awardLevel: "National Level",
      imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=400",
      isFeatured: false
    }
  ],
  testimonials: [
    {
      key: "test_1",
      message: "St. Columba's has done wonders for our son. He scored 95% in his Grade X boards, but more importantly, he gained immense resilience as the defensive mid-fielder for the school school football squad.",
      authorName: "Anil & Shikha Sharma",
      designation: "Parents of Grade XI Scholar",
      photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
    },
    {
      key: "test_2",
      message: "The physics lab coupled with the robotics coding clubs gave our daughter a real appetite for engineering. Her transition to college has been seamless due to the rigorous CBSE base taught here.",
      authorName: "Dr. Vinay Murthy",
      designation: "Parent of CBSE Board Topper alum",
      photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
    },
    {
      key: "test_3",
      message: "We appreciate the sports facilities. The indoor badminton arena is world-class, and the physical training coach provides disciplined dietary advice alongside regular training protocols.",
      authorName: "Meenakshi Radhakrishnan",
      designation: "Parent of State Badminton Champion",
      photoUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
    }
  ],
  events: [
    {
      key: "ev_1",
      title: "Inter-School Football Derby",
      description: "St. Columba's vs Riverside High in the regional finals. Come support the maroon flyers on our central turf grounds!",
      category: "Sports Matches",
      location: "Academy Main Stadium",
      eventDate: "2026-06-12T16:00:00Z",
      imageUrl: "https://images.unsplash.com/photo-1489945052260-4f21d52268b9?auto=format&fit=crop&q=80&w=400"
    },
    {
      key: "ev_2",
      title: "Science & Robotics Exhibition",
      description: "Scholars from grades VIII to XII present custom IoT nodes, sustainable drone designs, and clean green energy cells.",
      category: "Academics",
      location: "Crest Conference Hall",
      eventDate: "2026-06-20T09:30:00Z",
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400"
    },
    {
      key: "ev_3",
      title: "Annual Track & Field Carnival",
      description: "Our signature co-curricular sports day featuring sprinting tournaments, relay cups, high-jump trials, and parent-teacher races.",
      category: "Athletics",
      location: "Olympia Central Turf track",
      eventDate: "2026-06-25T08:00:00Z",
      imageUrl: "https://images.unsplash.com/photo-1502224562085-639556652f33?auto=format&fit=crop&q=80&w=400"
    }
  ],
  gallery: [
    {
      key: "gal_1",
      url: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=600",
      caption: "Our students studying and collaborating inside the premium automated school library.",
      category: "Academic",
      mediaType: "image"
    },
    {
      key: "gal_2",
      url: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=600",
      caption: "Under-17 Football Captain hoisting the Inter-Academy Gold shield.",
      category: "Sports",
      mediaType: "image"
    },
    {
      key: "gal_3",
      url: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&q=80&w=600",
      caption: "High school scholars practicing qualitative analysis in our modern Chemistry Lab.",
      category: "Academic",
      mediaType: "image"
    },
    {
      key: "gal_4",
      url: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=600",
      caption: "Art and pottery workshops during our inter-batch cultural fest.",
      category: "Cultural",
      mediaType: "image"
    },
    {
      key: "gal_5",
      url: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=600",
      caption: "Our modern Indoor Sports Arena hosting regional badminton league.",
      category: "Sports",
      mediaType: "image"
    }
  ],
  infrastructure: [
    {
      key: "inf_1",
      title: "The Crest Library",
      description: "Housing over 10,000 reference archives, fully digitized catalog listings, and comfortable micro-study zones.",
      tag: "Library",
      imageUrl: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=500"
    },
    {
      key: "inf_2",
      title: "Einstein Physics & Robotics Cell",
      description: "Equipped with automated boards, Arduino boards, and CNC mechanics for structural programming.",
      tag: "Lab",
      imageUrl: "https://images.unsplash.com/photo-1530210120071-aa1927dd2447?auto=format&fit=crop&q=80&w=500"
    },
    {
      key: "inf_3",
      title: "FIFA Approved Football Turf",
      description: "High-density synthetic grass turf equipped with advanced drainage systems for non-stop athletic development.",
      tag: "Sports Turf",
      imageUrl: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=500"
    },
    {
      key: "inf_4",
      title: "Olympia Multipurpose Hall",
      description: "A rubberized indoor basketball and badminton arena with high-intensity visual lighting.",
      tag: "Gym",
      imageUrl: "https://images.unsplash.com/photo-1471295263379-6cd96c1f0034?auto=format&fit=crop&q=80&w=500"
    }
  ],
  academicResult: {
    key: "acr_1",
    year: 2025,
    tenthPassPercentage: 100,
    plusTwoPassPercentage: 99.2,
    passPercentage: 100,
    legacyQuote: "Our academic scores flow naturally from our disciplined environment. We believe that physical stamina acquired on playgrounds triggers superior biological focus in classrooms."
  },
  contactDetails: [
    {
      phone: "+91 80 4123 5678",
      email: "admissions@stcolumbas.edu.in",
      address: "12, Academic Boulevard, Knowledge Park III, Greater Noida, UP - 201310",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.9405625447177!2d77.49448831507857!3d28.45129699899175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1063dbf4505%3A0xe67db5098ffb4e8c!2sKnowledge%20Park%20III%2C%20Greater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1689234567890!5m2!1sen!2sin",
      facebook: "https://facebook.com/stcolumbas",
      instagram: "https://instagram.com/stcolumbas",
      youtube: "https://youtube.com/stcolumbas",
      officeHours: "Monday - Saturday: 8:00 AM - 3:00 PM"
    }
  ],
  whyChooseUs: [
    {
      id: "wcu_1",
      title: "Rigorous CBSE Curriculum",
      description: "Structured academic calendars, continuous evaluation, and dedicated preparation models targeting competitive exams.",
      icon: "BookOpen"
    },
    {
      id: "wcu_2",
      title: "Preeminent Athletic Program",
      description: "Structured daily coaching sessions, nutritional supervision, and extensive athletic equipment for track and turf sports.",
      icon: "Trophy"
    },
    {
      id: "wcu_3",
      title: "Practical Laboratory Discovery",
      description: "Scientific exploration with state-of-the-art instruments in our Chemistry, Biology, Physics and Computer clusters.",
      icon: "FlaskConical"
    },
    {
      id: "wcu_4",
      title: "Performing Arts & Debate Hubs",
      description: "Cultivating voice projection and creative visual composition through drama, pottery, dance, and structured debating streams.",
      icon: "Music"
    }
  ]
};
