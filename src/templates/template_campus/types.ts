/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

export interface TenantViewModel {
  school: {
    key: string;
    name: string;
    slug: string;
    logoUrl: string;
    slogan: string;
    description: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    fullAddress: string;
    paymentGatewayUrl: string;
    themeConfig: Record<string, unknown>;
  };
  identity: {
    vision: string;
    mission: string;
    motto: string;
    history: string;
    foundedYear: number;
    boardMessage: string;
    aboutTitle: string;
    aboutDescription: string;
  };
  heroMedia: Array<{
    key: string;
    headline: string;
    subheadline: string;
    mediaType: string;   // 'image' | 'video'
    mediaUrl: string;
    primaryButtonText: string;
    primaryButtonUrl: string;
    secondaryButtonText: string;
    secondaryButtonUrl: string;
    isActive: boolean;
  }>;
  broadcast: Array<{
    key: string;
    title: string;
    message: string;
    priority: number;
    isActive: boolean;
  }>;
  faculty: Array<{
    key: string;
    name: string;
    designation: string;
    qualification: string;
    experienceYears: number;
    imageUrl: string;
    isActive: boolean;
  }>;
  stats: Array<{
    key: string;
    label: string;
    value: string;
    icon: string;
  }>;
  achievements: Array<{
    key: string;
    title: string;
    description: string;
    category: string;    // 'Sports', 'Academic', 'Arts'
    year: number;
    awardLevel: string;  // 'State Level', 'National Level'
    imageUrl: string;
    isFeatured: boolean;
  }>;
  testimonials: Array<{
    key: string;
    message: string;
    authorName: string;
    designation: string;
    photoUrl: string;
  }>;
  events: Array<{
    key: string;
    title: string;
    description: string;
    category: string;
    location: string;
    eventDate: string;
    imageUrl: string;
  }>;
  gallery: Array<{
    key: string;
    url: string;
    caption: string;
    category: string;
    mediaType: string;
  }>;
  infrastructure: Array<{
    key: string;
    title: string;
    description: string;
    tag: string;         // 'Sports Turf', 'Lab', 'Gym', 'Library'
    imageUrl: string;
  }>;
  academicResult: {
    key: string;
    year: number;
    tenthPassPercentage: number;
    plusTwoPassPercentage: number;
    passPercentage: number;
    legacyQuote: string;
  } | null;
  contactDetails: Array<{
    phone: string;
    email: string;
    address: string;
    mapUrl: string;
    facebook: string;
    instagram: string;
    youtube: string;
    officeHours: string;
  }>;
  whyChooseUs: Array<{
    id: string;
    title: string;
    description: string;
    icon: string;
  }>;
}
