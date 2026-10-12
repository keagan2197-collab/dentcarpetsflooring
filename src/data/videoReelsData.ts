export interface VideoReel {
  id: string;
  slotNumber?: number;
  title: string;
  category?: string;
  videoUrl: string; // Direct streaming URL
  posterUrl: string; // Poster thumbnail image
  location: string;
  client?: string;
  duration?: string;
  date?: string;
  description: string;
  likesCount?: number;
  featured?: boolean;
}

/**
 * Normalizes Google Cloud Storage links so they stream directly
 * without hitting Google login redirects.
 */
export function normalizeVideoUrl(url: string): string {
  if (!url) return '';
  return url
    .trim()
    .replace('https://storage.cloud.google.com/', 'https://storage.googleapis.com/');
}

/**
 * 10 FEATURED PROJECT VIDEOS
 * All 10 video links populated directly from Google Cloud Storage:
 */
export const defaultVideoReels: VideoReel[] = [
  // ==========================================
  // VIDEO 1: Country Club
  // ==========================================
  {
    id: 'reel-slot-1',
    slotNumber: 1,
    title: 'Country Club Commercial Flooring',
    videoUrl: 'https://storage.googleapis.com/dentcarpets/Project%20videos%20(dario)/Country%20club.mp4',
    posterUrl: 'https://storage.googleapis.com/dentcarpets/Commercial%20cover.jpeg',
    location: 'Gauteng Country Club',
    client: 'Country Club Management',
    duration: '0:35',
    description: 'Commercial grade flooring and luxury finishes fitted for clubhouse hospitality, dining, and high-traffic common areas.',
    likesCount: 264,
  },

  // ==========================================
  // VIDEO 2: Cross Section
  // ==========================================
  {
    id: 'reel-slot-2',
    slotNumber: 2,
    title: 'Flooring Cross Section & Subfloor Preparation',
    videoUrl: 'https://storage.googleapis.com/dentcarpets/Project%20videos%20(dario)/Cross%20section.mp4',
    posterUrl: 'https://storage.googleapis.com/dentcarpets/LAminate%20Cover.jpeg',
    location: 'Benoni Workshop, Gauteng',
    client: 'Dent Carpets Master Team',
    duration: '0:40',
    description: 'In-depth cross section examination showing subfloor leveling, high-density acoustic underlay, and click-lock tongue engineering.',
    likesCount: 198,
  },

  // ==========================================
  // VIDEO 3: Dent j-1
  // ==========================================
  {
    id: 'reel-slot-3',
    slotNumber: 3,
    title: 'Dent Carpets Installation Project - Reel 1',
    videoUrl: 'https://storage.googleapis.com/dentcarpets/Project%20videos%20(dario)/Dent%20j-1.mp4',
    posterUrl: 'https://storage.googleapis.com/dentcarpets/LAminate%20Cover.jpeg',
    location: 'Johannesburg, Gauteng',
    client: 'Residential Client',
    duration: '0:32',
    description: 'Master artisans clicking together scratch-resistant luxury laminate with precision edge profiling and expansion margins.',
    likesCount: 242,
  },

  // ==========================================
  // VIDEO 4: Dent-1 2
  // ==========================================
  {
    id: 'reel-slot-4',
    slotNumber: 4,
    title: 'Precision Craftsmanship & Floor Laying',
    videoUrl: 'https://storage.googleapis.com/dentcarpets/Project%20videos%20(dario)/Dent-1%202.mp4',
    posterUrl: 'https://storage.googleapis.com/dentcarpets/Vinyl%20Cover.jpeg',
    location: 'East Rand, Gauteng',
    client: 'Homeowner',
    duration: '0:38',
    description: 'Detailed showcase of our meticulous fitting process, ensuring flush joins, seamless door transitions, and spotless cleanup.',
    likesCount: 215,
  },

  // ==========================================
  // VIDEO 5: Dent-2 new
  // ==========================================
  {
    id: 'reel-slot-5',
    slotNumber: 5,
    title: 'Modern Living Space Flooring Transformation',
    videoUrl: 'https://storage.googleapis.com/dentcarpets/Project%20videos%20(dario)/Dent-2%20new.mp4',
    posterUrl: 'https://storage.googleapis.com/dentcarpets/Vinyl%20Cover.jpeg',
    location: 'Bedfordview, Gauteng',
    client: 'Modern Residence',
    duration: '0:45',
    description: 'Transforming an open-plan lounge and dining space with natural oak-look waterproof flooring built for family living.',
    likesCount: 289,
  },

  // ==========================================
  // VIDEO 6: Dent-3 Race
  // ==========================================
  {
    id: 'reel-slot-6',
    slotNumber: 6,
    title: 'Fast-Track Professional Installation Timelapse',
    videoUrl: 'https://storage.googleapis.com/dentcarpets/Project%20videos%20(dario)/Dent-3%20Race.mp4',
    posterUrl: 'https://storage.googleapis.com/dentcarpets/LAminate%20Cover.jpeg',
    location: 'Sandton, Gauteng',
    client: 'Commercial Client',
    duration: '0:30',
    description: 'High-speed master installation demonstrating how our skilled team lays square meters with unrivaled speed and accuracy.',
    likesCount: 334,
  },

  // ==========================================
  // VIDEO 7: House 2 educational reel
  // ==========================================
  {
    id: 'reel-slot-7',
    slotNumber: 7,
    title: 'House 2 - Educational Flooring Guide & Tips',
    videoUrl: 'https://storage.googleapis.com/dentcarpets/Project%20videos%20(dario)/House%202%20educational%20reel%20.mp4',
    posterUrl: 'https://storage.googleapis.com/dentcarpets/LAminate%20Cover.jpeg',
    location: 'Gauteng Showhouse',
    client: 'Dent Carpets Advisory',
    duration: '0:50',
    description: 'Expert tips on choosing the right AC rating, plank thickness, and water resistance for different rooms in your home.',
    likesCount: 276,
  },

  // ==========================================
  // VIDEO 8: House-1 Farramere completed
  // ==========================================
  {
    id: 'reel-slot-8',
    slotNumber: 8,
    title: 'Farrarmere Luxury Home - Completed Reveal',
    videoUrl: 'https://storage.googleapis.com/dentcarpets/Project%20videos%20(dario)/House-1%20Farramere%20completed.mp4',
    posterUrl: 'https://storage.cloud.google.com/dentcarpets/Before%20%26%20After%20/after%20res%20laminate.jpeg',
    location: 'Farrarmere, Benoni',
    client: 'Private Residence',
    duration: '0:42',
    description: 'The finished walk-through of the magnificent Farrarmere residential project, featuring continuous flooring through bedrooms and corridors.',
    likesCount: 382,
  },

  // ==========================================
  // VIDEO 9: House-1 Farramere
  // ==========================================
  {
    id: 'reel-slot-9',
    slotNumber: 9,
    title: 'Farrarmere Residence - In-Progress Installation',
    videoUrl: 'https://storage.googleapis.com/dentcarpets/Project%20videos%20(dario)/House-1%20Farramere.mp4',
    posterUrl: 'https://storage.cloud.google.com/dentcarpets/Before%20%26%20After%20/after%20res%20laminate.jpeg',
    location: 'Farrarmere, Benoni',
    client: 'Private Residence',
    duration: '0:36',
    description: 'Raw behind-the-scenes progress showing subfloor preparation, underlay rollout, and initial plank rows being locked in place.',
    likesCount: 221,
  },

  // ==========================================
  // VIDEO 10: volley ball court 3
  // ==========================================
  {
    id: 'reel-slot-10',
    slotNumber: 10,
    title: 'Volleyball Court Synthetic Turf Installation',
    videoUrl: 'https://storage.googleapis.com/dentcarpets/Project%20videos%20(dario)/volley%20ball%20court%203.mp4',
    posterUrl: 'https://storage.cloud.google.com/dentcarpets/Before%20%26%20After%20/after%20art%20grass%20install.jpeg',
    location: 'Gauteng Sports Facility',
    client: 'Sports Complex',
    duration: '0:48',
    description: 'Specialized sports-grade artificial turf installation engineered for an outdoor volleyball court with shock absorption and heavy wear resilience.',
    likesCount: 415,
  },
];
