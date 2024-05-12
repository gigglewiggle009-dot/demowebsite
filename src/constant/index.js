import {
  AdvertisingStrategies,
  ArtistManagement,
  Branding,
  ContentIdeas,
  DirectorOne,
  DirectorTwo,
  GoogleAds,
  GoogleAnalytics,
  InstagramAds,
  Keyword,
  LeadGeneration,
  SEO,
  YoutubeAds,
  fb,
  insta,
  pintrest,
  twitter,
  
} from "@/assets";

export const serviceData = {
  header: "We Offer a Wide Range of Brand Services",
  details:
    "At PromoDaddy Digital, we're passionate about helping businesses thrive in the digital age. We offer a comprehensive suite of services designed to elevate your online presence and achieve your marketing goals",
  subtext1: "EXPERTISE ACROSS ALL CHANNELS",
  subtext2: "DATA-DRIVEN STRATEGIES:",
  subtext3: "CONTENT THAT CONNECTS",
  subtext4: "ARTIST MANAGEMENT EXPERTISE",
  subtext5: "LEAD GENERATION POWERHOUSE",
};
export const director = [
  {
    img:DirectorOne.src,
    header:"Shubham Gupta"
  },
  {
    img:DirectorTwo.src,
    header:"Nikhil Gupta"
  }
]

export const ourClient = [
  {
    header: "Google Ad Expert",
    text: "Creates and manages targeted online ads on Google Search and partner websites.",
    img: GoogleAds.src,
  },
  {
    header: "YouTube Advertising 1k views 100 rupees",
    text: "Develops video ad campaigns to reach audiences on YouTube.",
    img: YoutubeAds.src,
  },
  {
    header:
      "Instagram Advertising and Facebook Ads (1M impression in 10000 rupees)",
    text: "Runs targeted ads on Instagram and Facebook to connect with specific demographics",
    img: InstagramAds.src,
  },
  {
    header:
      "Keyword Research (charges depend on keyword volume min charges 500 inr)",
    text: "Discovers relevant keywords to optimize content and target advertising campaigns.",
    img: Keyword.src,
  },
  {
    header: "Artist Management",
    text: "Provides guidance, support, and representation for artists or creators.",
    img: ArtistManagement.src,
  },
  {
    header: "Branding",
    text: "Develops a unique brand identity that resonates with your target audience.",
    img: Branding.src,
  },
  {
    header: "Content Management and Ideas",
    text: "Creates, manages, and curates engaging content for various platforms.",
    img: ContentIdeas.src,
  },
  {
    header: "Advertisement Strategy",
    text: "Develops a comprehensive plan to reach your target audience through different advertising channels.",
    img: AdvertisingStrategies.src,
  },
  {
    header: "Google Analytics",
    text: "Analyzes website traffic data to understand user behavior and improve marketing efforts.",
    img: GoogleAnalytics.src,
  },
  {
    header: "SEO",
    text: "Optimizes your website and online presence to rank higher in search engine results.",
    img: SEO.src,
  },
  {
    header: "Lead Generation",
    text: "Attracts and captures potential customer interest for your business.",
    img: LeadGeneration.src,
  },
];

export const navTitle = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Service",
    link: "/service",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Clients",
    link: "/clients",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export const footerTitle = {
  linkOne: {
    title: "Links",
    content: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "About",
        link: "/about",
      },
      {
        name: "Service",
        link: "/service",
      },
      {
        name: "Projects",
        link: "/projects",
      },
      {
        name: "Blog",
        link: "/blog",
      },
      {
        name: "Clients",
        link: "/clients",
      },
      {
        name: "Contact",
        link: "/contact",
      },
    ],
  },
  linkTwo: {
    title: "Links",
    content: [
      {
        name: "Blog",
        link: "/blog",
      },
      {
        name: "Privacy Policy",
        link: "/privacypolicy",
      },
      {
        name: "Terms & Conditions",
        link: "/terms&conditions",
      },
      {
        name: "ReFund",
        link: "/reFund",
      },
    ],
  },
};

export const socialNetwork = [
  {
    link: "https://www.instagram.com/",
    image: insta,
  },
  {
    link: "https://www.facebook.com/",
    image: fb,
  },
  {
    link: "https://twitter.com/",
    image: twitter,
  },
  {
    link: "https://in.pinterest.com/",
    image: pintrest,
  },
];

export const footerOfficeInfo = {
  title: "Office Info",
  content: [
    {
      name: "Help and Support",
      href: "",
    },
    {
      name: "Customer Service",
      href: "",
    },
    {
      name: "Faqs",
      href: "",
    },
    {
      name: "Contact us profile",
      href: "",
    },
    {
      name: "Find our Location Careers",
      href: "",
    },
    {
      name: "Page Break Down",
      href: "",
    },
  ],
};

export const footerNewsletter = {
  title: "Newsletter",
  content: [
    {
      name: "Obligations",
      href: "",
    },
    {
      name: "Legal Notice",
      href: "",
    },
    {
      name: "Team and Condition",
      href: "",
    },
    {
      name: "Privacy Notice",
      href: "",
    },
    {
      name: "Legal Notice",
      href: "",
    },
  ],
};
