import {
  GoBook,
  GoBriefcase,
  GoGoal,
  GoHome,
  GoLocation,
} from "react-icons/go";

export const navItems = [
  { name: "Home", link: "/", icon: GoHome },
  { name: "Treatments", link: "/treatments", icon: GoBriefcase },
  { name: "Why Us", link: "/why-us", icon: GoGoal },
  { name: "About", link: "/about", icon: GoBook },
  { name: "Visit", link: "/visit", icon: GoLocation },
];

export const footerItemsCol3 = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Why Us", href: "/why-us" },
      { label: "About", href: "/about" },
      { label: "Visit", href: "/visit" },
    ],
  },
];
export const footerItemsCol2 = [
  {
    bigTitle: "For Consultation",
    block: [
      {
        id: 1,
        hospital: "Dermax Hospital",
        timings: "Monday to Friday: 3pm - 5pm",
        text: [
          {
            title: "Address",
            desc: "36 Old No 9, 5th Avenue, 11th Main Rd, 4th T Block East, Lincoln, Illinois, Chicago",
          },
          { title: "Phone", desc: "+1 23238-8800" },
          { title: "WhatsApp", desc: "+1 23238-9900" },
        ],
        direction: [
          {
            label: "Get Directions",
            href: "https://maps.app.goo.gl/eZC9w7pciVUf7yEZ7",
          },
        ],
      },
      {
        id: 2,
        hospital: "Abraham Hospital",
        timings: "Saturday & Sunday: 10am - 1pm",
        text: [
          {
            title: "Address",
            desc: "21 Savage, 7th Avenue, 12th Main Rd, 5th T Block East, Lincoln, Illinois, Chicago",
          },
          { title: "Phone", desc: "+1 23238-8800" },
          { title: "WhatsApp", desc: "+1 23238-9900" },
        ],
        direction: [
          {
            label: "Get Directions",
            href: "https://maps.app.goo.gl/eZC9w7pciVUf7yEZ7",
          },
        ],
      },
    ],
  },
];

export const medicalServices = [
  {
    id: 1,
    name: "Excision",
    link: "/excision",
  },
  {
    id: 2,
    name: "Photodynamic Therapy",
    link: "/photodynamic-therapy",
  },
  {
    id: 3,
    name: "Mohs Surgery",
    link: "/mohs-surgery",
  },
  {
    id: 4,
    name: "Skin Biopsy",
    link: "/skin-biopsy",
  },
  {
    id: 5,
    name: "Skin Graft",
    link: "/skin-graft",
  },
  {
    id: 6,
    name: "Electrodessication and Curettage",
    link: "/electrodessication-and-curettage",
  },
  {
    id: 7,
    name: "Intralesional Injections",
    link: "/injections",
  },
  {
    id: 8,
    name: "Topical Chemotherapy",
    link: "/chemotherapy",
  },
];
export const cosmeticServices = [
  {
    id: 1,
    name: "Hair Transplants",
    link: "/hair-transplants",
  },
  {
    id: 2,
    name: "Microdermaabrasion",
    link: "/abrasion",
  },
  {
    id: 3,
    name: "Scar Removal",
    link: "/scar-removal",
  },
  {
    id: 4,
    name: "Dermaplaning",
    link: "/dermaplaning",
  },
  {
    id: 5,
    name: "Dermal Filler Injections",
    link: "/injections",
  },
  {
    id: 6,
    name: "Botox",
    link: "/botox",
  },
  {
    id: 7,
    name: "Chemical Peel",
    link: "/chemical-peel",
  },
  {
    id: 8,
    name: "Laser Skin Resurfacing",
    link: "/laser",
  },
  {
    id: 9,
    name: "Sclerotherapy",
    link: "/sclerotherapy",
  },
  {
    id: 10,
    name: "Tattoo Removal",
    link: "/tattoo-removal",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/images/facebook.svg",
    link: "https://genius.com/Drake-young-thug-and-21-savage-its-up-lyrics",
  },
  {
    id: 2,
    img: "/images/insta.svg",
    link: "https://genius.com/Drake-young-thug-and-21-savage-its-up-lyrics",
  },
  {
    id: 3,
    img: "/images/twit.svg",
    link: "https://genius.com/Drake-young-thug-and-21-savage-its-up-lyrics",
  },
  {
    id: 4,
    img: "/images/link.svg",
    link: "https://genius.com/Drake-young-thug-and-21-savage-its-up-lyrics",
  },
];
export const emblaImages = [
  {
    id: 1,
    img: "/staff/staff1.jpg",
  },
  {
    id: 2,
    img: "/staff/staff2.jpg",
  },
  {
    id: 3,
    img: "/staff/staff3.jpg",
  },
  {
    id: 4,
    img: "/staff/staff4.jpg",
  },
  {
    id: 5,
    img: "/staff/staff5.jpg",
  },
];

export const servicesAAT = [
  {
    imgSrc: "/images/botox.webp",
    imgAlt: "Botox and Fillers",
    title: "Botox and Fillers",
    description: "Wrinkle reduction, volume restoration, facial contouring.",
  },
  {
    imgSrc: "/images/chemical-peels.jpg",
    imgAlt: "Chemical Peels",
    title: "Chemical Peels",
    description:
      "Skin rejuvenation, acne scar treatment, pigmentation .",
  },
  {
    imgSrc: "/images/laser.jpeg",
    imgAlt: "Laser Treatments",
    title: "Laser Treatments",
    description:
      "Treating skin pigmentation, fine lines, scars, and hair removal.",
  },
  {
    imgSrc: "/images/prp-therapy.jpg",
    imgAlt: "PRP Therapy",
    title: "PRP Therapy",
    description: "Skin rejuvenation, hair growth stimulation.",
  },
  {
    imgSrc: "/images/microdermabrasion.jpg",
    imgAlt: "Microdermabrasion",
    title: "Microdermabrasion",
    description: "Skin exfoliation, texture improvement.",
  },
  {
    imgSrc: "/images/microneedling.jpg",
    imgAlt: "Micro-needling",
    title: "Micro-needling",
    description: "Collagen induction, scar treatment, and skin rejuvenation.",
  },
];

export const servicesHRT = [
  {
    imgSrc: "/images/hair2.jpg",
    imgAlt: "Hair Transplantation",
    title: "Hair Transplantation",
    description: "Treating baldness and hair thinning.",
  },
  {
    imgSrc: "/images/prp-therapy.jpg",
    imgAlt: "PRP Therapy",
    title: "PRP Therapy",
    description: "Stimulating hair growth in thinning or bald areas.",
  },
];

export const servicesSLR = [
  {
    imgSrc: "/images/tattoo.jpg",
    imgAlt: "Tattoos Removal",
    title: "Tattoos Removal",
    description: "Removal of unwanted tattoos.",
  },
  {
    imgSrc: "/images/cryotherapy.jpg",
    imgAlt: "Cryotherapy",
    title: "Cryotherapy",
    description: "Removal of warts and precancerous lesions.",
  },
  {
    imgSrc: "/images/sclerotherapy.jpg",
    imgAlt: "Sclerotherapy",
    title: "Sclerotherapy",
    description: "Treating varicose and spider veins.",
  },
  {
    imgSrc: "/images/electrosurgery.jpg",
    imgAlt: "Electrosurgery",
    title: "Electrosurgery",
    description: "Removal of benign skin lesions.",
  },
];

export const servicesPST = [
  {
    imgSrc: "/images/chemical-peels.jpg",
    imgAlt: "Service 1",
    title: "Chemical Peels",
    description: "Improving skin texture and pigmentation.",
  },
  {
    imgSrc: "/images/laser.jpeg",
    imgAlt: "Service 2",
    title: "Laser Treatments",
    description: "Treating pigmentation, scars, and skin texture.",
  },
  {
    imgSrc: "/images/microdermabrasion.jpg",
    imgAlt: "Dermabrasion",
    title: "Dermabrasion",
    description: "Treating deeper scars and skin imperfections.",
  },
];

export const servicesSCT = [
  {
    imgSrc: "/images/mohs.jpg",
    imgAlt: "Mohs Micrographic Surgery",
    title: "Mohs Micrographic Surgery",
    description: "Removal of skin cancer, preserving healthy tissue.",
  },
];

export const testimonials = [
  {
    img: "/pfp/female/19.jpg",
    quote:
      "Dr. Agarwal's treatment for my acne has been life-changing. My skin has cleared up significantly, and I feel much more confident now.",
    name: "Aarushi Patel ",
    date: "1 year ago",
  },
  {
    img: "/pfp/male/51.jpg",
    quote:
      "I am extremely happy with the results of my treatment. Dr. Agarwal is very knowledgeable and made sure I understood everything about my skin condition.",
    name: "Ravi Kumar",
    date: "1 year ago",
  },
  {
    img: "/pfp/female/22.jpg",
    quote:
      "Dr. Agarwal is very professional, and the results speak for themselves. I’ve seen remarkable improvement in my skin, and I couldn’t be more satisfied.",
    name: "Sneha Desai",
    date: "1 year ago",
  },
  {
    img: "/pfp/male/48.jpg",
    quote:
      "After struggling with eczema for years, Dr. Agarwal’s treatment has made a world of difference. My skin is now smooth and clear. I truly appreciate his approach.",
    name: "Manish Reddy",
    date: "1 year ago",
  },
  {
    img: "/pfp/male/41.jpg",
    quote:
      "I visited Dr. Agarwal for my acne scars, and within just a few sessions, I started seeing incredible improvement. He is both skilled and caring.",
    name: "Vikram Shah",
    date: "1 year ago",
  },
  {
    img: "/pfp/female/54.jpg",
    quote:
      "I’ve been to several dermatologists, but Dr. Agarwal’s expertise and treatment plan really worked wonders for my skin. It’s healthier and brighter now.",
    name: "Ananya Verma",
    date: "1 year ago",
  },
  {
    img: "/pfp/female/37.jpg",
    quote:
      "Dr. Agarwal has helped me regain my confidence. His acne treatment was effective, and the results were visible within weeks. Highly recommended!",
    name: "Priya Singh",
    date: "1 year ago",
  },
  {
    img: "/pfp/male/22.jpg",
    quote:
      "Fantastic doctor! Dr. Agarwal is thorough, attentive, and professional. My skin has never been better, and I can’t thank him enough.",
    name: "Karthik Nair",
    date: "9 months ago",
  },
  {
    img: "/pfp/female/87.jpg",
    quote:
      "Dr. Agarwal’s approach to treating my skin was personalized and effective. He listened to my concerns and delivered great results in a short time.",
    name: "Rekha Sharma",
    date: "5 months ago",
  },
  {
    img: "/pfp/male/6.jpg",
    quote:
      "After visiting Dr. Agarwal for my pigmentation treatment, I noticed a significant improvement. The doctor is so kind, and the treatment was absolutely worth it.",
    name: "Rohit Gupta",
    date: "2 months ago",
  },
];
