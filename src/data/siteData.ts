export const brands = [
  { name: 'Belgotex', logo: 'https://storage.googleapis.com/dentcarpets/Dent%20Brands%20/B%20logo.jpeg' },
  { name: 'Floornet', logo: 'https://storage.googleapis.com/dentcarpets/Dent%20Brands%20/floornet%20logo.jpeg' },
  { name: 'Likewise', logo: 'https://storage.googleapis.com/dentcarpets/Dent%20Brands%20/likewise%20floors.jpeg' },
  { name: 'Lockweave', logo: 'https://storage.googleapis.com/dentcarpets/Dent%20Brands%20/lockweave%20logo.jpeg' },
  { name: 'Traviata', logo: 'https://storage.googleapis.com/dentcarpets/Dent%20Brands%20/traviata.jpeg' },
  { name: 'Finfloor', logo: 'https://storage.googleapis.com/dentcarpets/Dent%20Brands%20/fin%20floor%20logo.jpeg' },
  { name: 'Azura Distributors', logo: 'https://storage.googleapis.com/dentcarpets/Dent%20Brands%20/Azura%20distributors.jpeg' },
  { name: 'Leno', logo: 'https://storage.googleapis.com/dentcarpets/Dent%20Brands%20/leno%20flooring%20logo.jpeg' },
  { name: 'Nouwens', logo: 'https://storage.googleapis.com/dentcarpets/Dent%20Brands%20/%20nouwens%20logo.jpeg' },
];

export const clients = [
  { name: 'ABSA', logo: 'https://storage.googleapis.com/dentcarpets/Dent%20CArpets%20client%20logos/ABSA%20logo.jpeg' },
  { name: 'Santam', logo: 'https://storage.googleapis.com/dentcarpets/Dent%20CArpets%20client%20logos/Santam%20logo' },
  { name: 'RACE!', logo: 'https://storage.googleapis.com/dentcarpets/Dent%20CArpets%20client%20logos/Race%20logo.jpeg' },
  { name: 'Marantha', logo: 'https://storage.googleapis.com/dentcarpets/Dent%20CArpets%20client%20logos/maranatha%20logo.jpeg' },
  { name: 'NBCFC', logo: 'https://storage.googleapis.com/dentcarpets/Dent%20CArpets%20client%20logos/nbcfc%20logo.jpeg' },
  { name: 'Rand Aid association', logo: 'https://storage.googleapis.com/dentcarpets/Dent%20CArpets%20client%20logos/Rand%20Aid%20logo.jpeg' },
  { name: 'Desco', logo: 'https://storage.googleapis.com/dentcarpets/Dent%20CArpets%20client%20logos/desco%20logo.jpeg' },
  { name: 'St Dunstans College', logo: 'https://storage.googleapis.com/dentcarpets/Dent%20CArpets%20client%20logos/st%20dunstans%20logo.jpeg' },
  { name: 'Farrarmere Primary', logo: 'https://storage.googleapis.com/dentcarpets/Dent%20CArpets%20client%20logos/farrarmere%20logo.jpeg' },
  { name: 'Rynfield Primary', logo: 'https://storage.googleapis.com/dentcarpets/Dent%20CArpets%20client%20logos/rynfield%20logo.jpeg' },
  { name: 'Platinum Wheels', logo: 'https://storage.googleapis.com/dentcarpets/Dent%20CArpets%20client%20logos/platinum%20wheels.jpeg' },
  { name: 'Tringery', logo: 'https://storage.googleapis.com/dentcarpets/Dent%20CArpets%20client%20logos/trinergy%20logo.jpeg' },
  { name: 'Izimoto', logo: 'https://storage.googleapis.com/dentcarpets/Dent%20CArpets%20client%20logos/izimoto%20logo.jpeg' },
];

export const productCategories = [
  {
    id: 'carpets',
    title: 'Carpets',
    image: 'https://storage.googleapis.com/dentcarpets/CArpet%20cover.jpeg',
    description: 'Soft, luxurious carpeting designed to bring warmth, comfort, and elegance to every space.',
    variants: ['Luxury Pile', 'Berber', 'Loop Pile', 'Cut Pile'],
  },
  {
    id: 'commercial',
    title: 'Commercial Flooring',
    image: 'https://storage.googleapis.com/dentcarpets/Commercial%20cover.jpeg',
    description: 'Durable, high-performance flooring solutions built for busy commercial environments.',
    variants: ['Office Carpet Tiles', 'Industrial Vinyl', 'Safety Flooring'],
  },
  {
    id: 'laminate',
    title: 'Laminate Flooring',
    image: 'https://storage.googleapis.com/dentcarpets/LAminate%20Cover.jpeg',
    description: 'Stylish and practical laminate flooring with the perfect balance of durability and design.',
    variants: ['Oak Finish', 'Walnut Finish', 'Modern Grey', 'Antique Pine'],
  },
  {
    id: 'vinyl',
    title: 'Vinyl Flooring',
    image: 'https://storage.googleapis.com/dentcarpets/Vinyl%20Cover.jpeg',
    description: 'Modern waterproof vinyl flooring combining luxury finishes with everyday durability.',
    variants: ['Luxury Tile', 'Plank Wood Look', 'Stone Effect'],
  },
  {
    id: 'artificial-grass',
    title: 'Artificial Grass',
    image: 'https://storage.googleapis.com/dentcarpets/artificial%20grass',
    description: 'Low-maintenance artificial grass designed for beautiful, evergreen outdoor spaces.',
    variants: ['Luxury Green', 'Natural Soft', 'Sports Grade'],
  },
  {
    id: 'interlocking-tiles',
    title: 'Interlocking Tiles',
    image: 'https://storage.googleapis.com/dentcarpets/interlocking%20tiles',
    description: 'Versatile interlocking tile systems ideal for garages, gyms, patios, and high-traffic areas.',
    variants: ['Heavy Duty', 'Gym & Fitness', 'Garage Tiles', 'Industrial Grade'],
  },
];

export const products = [
  // Carpets
  {
    id: 'aqua',
    categoryId: 'carpets',
    name: 'Aqua',
    image: 'https://picsum.photos/seed/modern-blue-carpet/800/800',
    brands: ['Belgotex'],
    description: 'A perfect blend of style and durability, Aqua is designed to withstand moisture and heavy foot traffic while maintaining its plush feel.',
    features: ['Moisture Resistant', 'High Traffic', 'Easy Clean', 'UV Stable'],
    variants: [
      { name: 'Lagoon', color: '#1a365d', image: 'https://picsum.photos/seed/lagoon/800/800' },
      { name: 'Coral', color: '#c05621', image: 'https://picsum.photos/seed/coral/800/800' },
      { name: 'Mist', color: '#a0aec0', image: 'https://picsum.photos/seed/mist/800/800' },
      { name: 'Deep Sea', color: '#2c5282', image: 'https://picsum.photos/seed/deepsea/800/800' },
      { name: 'Sand', color: '#e2e8f0', image: 'https://picsum.photos/seed/sand/800/800' },
    ],
    specs: {
      'Fiber Type': 'Stainproof SDX',
      'Construction': 'Tufted Multi-Scroll Loop Pile',
      'Width': '4.0m',
      'Standard Length': '25m',
      'VOC Tested': 'Passed',
    }
  },
  {
    id: 'hilton',
    categoryId: 'carpets',
    name: 'Hilton',
    image: 'https://picsum.photos/seed/luxury-hotel-flooring/800/800',
    brands: ['Belgotex'],
    description: 'The Hilton range represents the pinnacle of luxury underfoot, offering a deep pile and sophisticated color palette.',
    features: ['Luxury Feel', 'Extra Soft', 'Stain Resistant'],
    variants: [
      { name: 'Ivory', color: '#fffff0', image: 'https://picsum.photos/seed/ivory/800/800' },
      { name: 'Charcoal', color: '#333333', image: 'https://picsum.photos/seed/charcoal/800/800' },
      { name: 'Taupe', color: '#8b8589', image: 'https://picsum.photos/seed/taupe/800/800' },
    ],
    specs: {
      'Fiber Type': 'Luxury Nylon',
      'Construction': 'Cut Pile',
      'Width': '4.0m',
      'Fire Rating': 'Class 1',
    }
  },
  {
    id: 'softology',
    categoryId: 'carpets',
    name: 'Softology',
    image: 'https://picsum.photos/seed/plush-soft-carpet/800/800',
    brands: ['Belgotex'],
    description: 'Powered by advanced fiber technology, Softology brings unparalleled softness and resilience to contemporary homes.',
    features: ['Ultra Soft', 'Resilient', 'Modern Colors'],
    variants: [
      { name: 'Cloud', color: '#f7fafc', image: 'https://picsum.photos/seed/cloud/800/800' },
      { name: 'Stone', color: '#718096', image: 'https://picsum.photos/seed/stone/800/800' },
    ],
    specs: {
      'Fiber Type': 'Soft SDX',
      'Construction': 'Textured Cut Pile',
      'Width': '4.0m',
    }
  },
  
  // Laminate
  {
    id: 'oak-finish',
    categoryId: 'laminate',
    name: 'Premium Oak',
    image: 'https://picsum.photos/seed/laminate-oak/800/800',
    brands: ['Floornet', 'Traviata'],
    description: 'Realistic oak grain patterns with a hard-wearing protective layer.',
    features: ['Scratch Resistant', 'Click System', 'Natural Look'],
    variants: [
      { name: 'Natural Oak', color: '#D2B48C', image: 'https://picsum.photos/seed/natoak/800/800' },
      { name: 'Smoked Oak', color: '#4B3621', image: 'https://picsum.photos/seed/smokeoak/800/800' },
    ],
    specs: {
      'Thickness': '8mm / 12mm',
      'Box Size': '2.1sqm',
      'Rating': 'AC4 / AC5',
    }
  },
  {
    id: 'twilight',
    categoryId: 'carpets',
    name: 'Twilight',
    image: 'https://picsum.photos/seed/dark-shaded-carpet/800/800',
    brands: ['Belgotex'],
    description: 'A luxurious cut pile carpet that offers exceptional value and comfort.',
    features: ['Plush Underfoot', 'Stain Resistant', 'Durable'],
    variants: [
      { name: 'Moonlight', color: '#E2E8F0', image: 'https://picsum.photos/seed/moonlight/800/800' },
      { name: 'Midnight', color: '#1A202C', image: 'https://picsum.photos/seed/midnight/800/800' },
    ],
    specs: {
      'Fiber Type': 'Nylon',
      'Construction': 'Cut Pile',
      'Width': '4.0m',
    }
  },
  {
    id: 'berber-point-920',
    categoryId: 'carpets',
    name: 'Berber Point 920',
    image: 'https://picsum.photos/seed/grey-loop-pile/800/800',
    brands: ['Belgotex'],
    description: 'The industry standard for commercial durability, offering a classic loop pile aesthetic.',
    features: ['Commercial Grade', 'Eco-Friendly', 'Heavy Duty'],
    variants: [
      { name: 'Graphite', color: '#4A5568', image: 'https://picsum.photos/seed/graphite/800/800' },
      { name: 'Earth', color: '#744210', image: 'https://picsum.photos/seed/earth/800/800' },
    ],
    specs: {
      'Fiber Type': 'Stainproof SDX',
      'Construction': 'Loop Pile',
      'Width': '4.0m',
    }
  },
];

export const processSteps = [
  {
    title: 'Consultation',
    description: 'We assess your space, discuss your needs and help you choose the right flooring',
    number: '01',
  },
  {
    title: 'Quotation',
    description: 'You receive a clear, detailed quote with no hidden costs',
    number: '02',
  },
  {
    title: 'Preparation',
    description: 'We prepare the area properly for long-lasting results',
    number: '03',
  },
  {
    title: 'Installation',
    description: 'Installed with precision and care',
    number: '04',
  },
  {
    title: 'Final Check',
    description: 'We ensure everything is perfect and you’re satisfied',
    number: '05',
  },
];

export const testimonials = [
  {
    name: 'Sarah Johnson',
    text: 'Dent Carpets transformed our home. The quality of the laminate is exceptional and the installation was flawless.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    text: 'Professional service from start to finish. They helped us choose the right commercial flooring for our office.',
    rating: 5,
  },
  {
    name: 'Amanda Roberts',
    text: 'Highly recommend! The team was efficient and the final result exceeded my expectations.',
    rating: 5,
  },
];

export const faqs = [
  {
    question: 'How long does a typical installation take?',
    answer: 'Installation time varies depending on the area and type of flooring. A standard room usually takes 1-2 days.',
  },
  {
    question: 'Do you offer a warranty on your products and services?',
    answer: 'Yes, all our products come with manufacturer warranties, and we provide a guarantee on our professional installation.',
  },
  {
    question: 'Can you install flooring over existing tiles?',
    answer: 'In some cases, yes, pending a site assessment to ensure the surface is level and stable.',
  },
  {
    question: 'How should I maintain my new flooring?',
    answer: 'Maintenance depends on the material. We provide detailed care instructions for every installation we complete.',
  },
];

export const completedProjects = [
  {
    id: 'p1',
    image: 'https://storage.googleapis.com/dentcarpets/Projects%201%20dent%20carpets',
    title: 'Modern Residential Project',
    category: 'Carpets'
  },
  {
    id: 'p2',
    image: 'https://storage.googleapis.com/dentcarpets/Project%202%20dent%20carpets',
    title: 'Executive Office Design',
    category: 'Commercial'
  },
  {
    id: 'p3',
    image: 'https://storage.googleapis.com/dentcarpets/Projects%203%20dent%20carpets',
    title: 'High-End Retail Floor',
    category: 'Laminate'
  },
  {
    id: 'p4',
    image: 'https://storage.googleapis.com/dentcarpets/projects%204%20dent%20carpets',
    title: 'Luxury Home Renovation',
    category: 'Carpets'
  },
  {
    id: 'p5',
    image: 'https://storage.googleapis.com/dentcarpets/projects%205%20dent%20carpets',
    title: 'Contemporary Workspace',
    category: 'Commercial'
  },
  {
    id: 'p6',
    image: 'https://storage.googleapis.com/dentcarpets/Projects%206%20dent%20',
    title: 'Stylish Interior Finish',
    category: 'Vinyl'
  }
];
