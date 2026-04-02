export interface SocialLink {
  platform: string;
  url: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  image?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar?: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Pillar {
  icon: string;
  title: string;
  description: string;
}

export interface VideoConfig {
  type: "self-hosted" | "youtube" | "vimeo";
  src: string;
  poster?: string;
}

export interface SiteConfig {
  company: {
    name: string;
    tagline: string;
    description: string;
    phone: string[];
    email: string;
    address: string;
    serviceAreas: string[];
    license?: string;
    businessHours?: string;
    socialLinks: SocialLink[];
  };

  theme: {
    colors: {
      primary: string;
      primaryLight: string;
      accent: string;
      neutral: {
        950: string;
        900: string;
        800: string;
        600: string;
        500: string;
        400: string;
        50: string;
      };
    };
    font: string;
    borderRadius: string;
  };

  hero: {
    backgroundType: "image" | "video";
    image?: string;
    video?: VideoConfig;
    headline: string;
    subheadline: string;
    ctas: { label: string; href: string; variant: "primary" | "secondary" }[];
  };

  about: {
    kicker: string;
    title: string;
    description: string;
    highlights: { icon: string; text: string }[];
    cta: { label: string; href: string };
  };

  services: Service[];

  portfolio: {
    images: { src: string; alt: string }[];
  };

  stats: Stat[];

  whyChooseUs: {
    kicker: string;
    title: string;
    description: string;
    pillars: Pillar[];
    cta: { label: string; href: string };
  };

  testimonials: {
    kicker: string;
    title: string;
    subtitle: string;
    items: Testimonial[];
  };

  ctaBanner: {
    headline: string;
    description: string;
    buttonLabel: string;
    buttonHref: string;
  };

  i18n: {
    defaultLocale: string;
    locales: string[];
  };

  seo: {
    titleTemplate: string;
    defaultDescription: string;
    ogImage: string;
    canonical: string;
  };
}

const siteConfig: SiteConfig = {
  company: {
    name: "Cali Roofing Solutions",
    tagline: "TRANSPARENT ROOFING SOLUTIONS DELIVERED WITH SPEED",
    description:
      "Family-owned and operated, bonded, insured, and licensed by the California State License Board. We treat every home like it's our own.",
    phone: ["(951) 743-1437"],
    email: "caliroofingsolutions@gmail.com",
    address: "Southern California",
    serviceAreas: [
      "Los Angeles",
      "Irvine",
      "Corona",
      "Chino",
      "Anaheim",
      "Riverside",
      "Long Beach",
    ],
    license: undefined,
    businessHours: "Mon-Fri 9AM-6PM | Sat 9AM-5PM | Sun by Appointment",
    socialLinks: [],
  },

  theme: {
    colors: {
      primary: "216 97 60",
      primaryLight: "232 130 90",
      accent: "49 153 247",
      neutral: {
        950: "2 6 23",
        900: "17 17 17",
        800: "30 41 59",
        600: "71 85 105",
        500: "100 116 139",
        400: "148 163 184",
        50: "249 249 249",
      },
    },
    font: "Inter",
    borderRadius: "1rem",
  },

  hero: {
    backgroundType: "image",
    image: "/images/hero.webp",
    headline: "TRANSPARENT ROOFING SOLUTIONS DELIVERED WITH SPEED",
    subheadline:
      "From repairs to replacements, installations to inspections — we bring precision, style, and quality craftsmanship to every project.",
    ctas: [
      { label: "Get Free Estimate", href: "/contact", variant: "primary" },
      { label: "View Our Work", href: "/gallery", variant: "secondary" },
    ],
  },

  about: {
    kicker: "About Us",
    title: "Welcome to Cali Roofing Solutions",
    description:
      "We are a family-owned and operated business based in Southern California — bonded, insured, and licensed by the California State License Board. Our mission is to deliver top-quality roofing services at the BEST prices. No pushy salesmen — everything is done in-house. Trust is earned, not sold.",
    highlights: [
      { icon: "Shield", text: "Bonded, insured & licensed by CA State License Board" },
      { icon: "UserCheck", text: "Family-owned — everything done in-house" },
      { icon: "DollarSign", text: "100% free estimates, best prices guaranteed" },
      { icon: "Camera", text: "Before & after photo documentation" },
    ],
    cta: { label: "Get a Free Estimate", href: "/contact" },
  },

  services: [
    {
      id: "replacement",
      title: "Roof Replacement",
      description: "Complete roof replacements with lifetime warranty",
      features: [
        "Asphalt shingles, metal, and tile options",
        "Lifetime roof replacement warranty",
        "Most replacements completed in about a week",
      ],
    },
    {
      id: "repair",
      title: "Roof Repair",
      description: "Expert repair services for all roof types",
      features: [
        "Leak detection and repair",
        "Storm damage restoration",
        "Free inspection & detailed estimate",
      ],
    },
    {
      id: "installation",
      title: "Roof Installation",
      description: "New construction and addition roofing",
      features: [
        "Quality materials for lasting durability",
        "Comprehensive warranty coverage",
        "Stress-free process with reliable timelines",
      ],
    },
    {
      id: "inspection",
      title: "Roof Inspection",
      description: "Thorough inspections with detailed reports",
      features: [
        "Drone-assisted aerial inspection",
        "Detailed photo documentation",
        "Free for all homeowners",
      ],
    },
    {
      id: "commercial",
      title: "Commercial Roofing",
      description: "Full-service commercial roofing solutions",
      features: [
        "TPO, PVC, and modified bitumen systems",
        "Minimal business disruption",
        "Preventative maintenance programs",
      ],
    },
    {
      id: "emergency",
      title: "Emergency Roof Service",
      description: "24/7 emergency response for urgent roof issues",
      features: [
        "Rapid response times",
        "Temporary tarping and leak stop",
        "Insurance claim assistance",
      ],
    },
  ],

  portfolio: {
    images: [
      { src: "/images/portfolio/1.webp", alt: "Before and after roof replacement" },
      { src: "/images/portfolio/2.webp", alt: "Residential roof transformation" },
      { src: "/images/portfolio/3.webp", alt: "Completed roofing project aerial view" },
      { src: "/images/portfolio/4.webp", alt: "Roof installation in progress" },
      { src: "/images/portfolio/5.webp", alt: "Shingle roof close-up" },
      { src: "/images/portfolio/6.webp", alt: "Finished residential roofing" },
      { src: "/images/portfolio/7.webp", alt: "Tile roofing project" },
      { src: "/images/portfolio/8.webp", alt: "Commercial roofing work" },
      { src: "/images/portfolio/9.webp", alt: "Meet the Cali Roofing team" },
      { src: "/images/portfolio/10.webp", alt: "Emergency roof service" },
    ],
  },

  stats: [
    { value: "82+", label: "5-Star Reviews" },
    { value: "20+", label: "Years Experience" },
    { value: "100%", label: "Free Estimates" },
  ],

  whyChooseUs: {
    kicker: "Why us",
    title: "The roofers your neighbors would recommend",
    description:
      "At Cali Roofing Solutions, we believe trust is earned, not sold. That's why we've built our family-owned reputation on one simple principle: treat every home like it's our own.",
    pillars: [
      {
        icon: "Award",
        title: "Unmatched Craftsmanship",
        description: "Skilled, certified professionals delivering quality on every project.",
      },
      {
        icon: "Eye",
        title: "Transparent Communication",
        description: "Open lines and honest updates throughout your entire project.",
      },
      {
        icon: "Heart",
        title: "Customer-Centric",
        description: "Tailored services for your unique needs — no pushy salesmen.",
      },
      {
        icon: "Clock",
        title: "Respect Your Time",
        description: "We treat your home and schedule with the care they deserve.",
      },
    ],
    cta: { label: "Get started today", href: "/contact" },
  },

  testimonials: {
    kicker: "Testimonials",
    title: "What our customers say",
    subtitle:
      "5.0 out of 5 stars based on 82 Google reviews. See why homeowners across Southern California trust us.",
    items: [
      {
        name: "Maria G.",
        role: "Homeowner, Corona",
        quote:
          "Cali Roofing Solutions did an amazing job on our roof replacement. The team was professional, on time, and the quality of work exceeded our expectations. Highly recommend!",
      },
      {
        name: "James T.",
        role: "Homeowner, Irvine",
        quote:
          "From the free inspection to the final walkthrough, everything was transparent and stress-free. They treated our home like it was their own. Five stars all the way.",
      },
      {
        name: "Sandra L.",
        role: "Property Manager, Los Angeles",
        quote:
          "We needed emergency roof repair after a storm and they responded within hours. Fair pricing, honest communication, and excellent craftsmanship. Our go-to roofer now.",
      },
    ],
  },

  ctaBanner: {
    headline: "Ready to get started with a free roof inspection?",
    description:
      "No pushy salesmen, no hidden fees. Just honest, quality roofing from a family that cares.",
    buttonLabel: "Schedule my free inspection",
    buttonHref: "/contact",
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
  },

  seo: {
    titleTemplate: "%s | Cali Roofing Solutions",
    defaultDescription:
      "Southern California's trusted family-owned roofer. Roof repair, replacement & installation. Bonded, insured, licensed. Free estimates. (951) 743-1437",
    ogImage: "/images/og-image.webp",
    canonical: "https://caliroofingsolutions.com",
  },
};

export default siteConfig;
