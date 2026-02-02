
import React from 'react';
import { Streamer, Testimonial } from './types';

export const STREAMERS: Streamer[] = [
  {
    id: '1',
    name: 'Isabella',
    age: 24,
    location: 'Miami, FL',
    imageUrl: 'https://picsum.photos/id/64/800/1200',
    isLive: true,
    viewers: 1240,
    category: 'Sensual Chat'
  },
  {
    id: '2',
    name: 'Julian',
    age: 28,
    location: 'Los Angeles, CA',
    imageUrl: 'https://picsum.photos/id/65/800/1200',
    isLive: true,
    viewers: 850,
    category: 'Private Shows'
  },
  {
    id: '3',
    name: 'Sophia',
    age: 22,
    location: 'New York, NY',
    imageUrl: 'https://picsum.photos/id/129/800/1200',
    isLive: false,
    viewers: 0,
    category: 'Dating'
  },
  {
    id: '4',
    name: 'Marcus',
    age: 31,
    location: 'Austin, TX',
    imageUrl: 'https://picsum.photos/id/177/800/1200',
    isLive: true,
    viewers: 2100,
    category: 'Group Live'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: "The most discrete and high-end platform I've used. The community here is actually real.",
    author: "David R.",
    role: "Premium Member"
  },
  {
    id: 't2',
    quote: "The stream quality is unmatched. It feels like you're in the room with them.",
    author: "Elena M.",
    role: "Frequent Viewer"
  }
];
