
import heroHelpdesk from "../../assets/services/21901977_6533310 1.png";
import brandsImg from "../../assets/services/Frame 6.png";
import processImg from "../../assets/services/Image Container.png";
import twoColumnImg from "../../assets/services/Image.png";
import testimonialImg from "../../assets/services/Image (1).png";
import starsImg from "../../assets/services/Stars.png";
import quoteIcon from "../../assets/services/Quotation.png";

import iconConsult from "../../assets/services/Frame 18.png";
import iconEvaluate from "../../assets/services/Frame 18 (1).png";
import iconProvide from "../../assets/services/Frame 18 (2).png";
import iconDeploy from "../../assets/services/Frame 18 (3).png";


const baseHero = {
  bullets: [
    "Lorem Ipsum content is dummy",
    "Lorem Ipsum content is dummy",
    "Lorem Ipsum content is dummy",
    "Lorem Ipsum content is dummy",
  ],
  desc:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar, sapien ac facilisis gravida, velit arcu .",
  image: heroHelpdesk,
};

const baseBrands = {
  label: "Trusted by 100+ companies",
  image: brandsImg,
};

const baseProcess = {
  title: "Lorem Ipsum Content",
  subtitle:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar, sapien ac facilisi gravida, velit arcu consequat magna, vitae tincidunt lectus massa in libero.",
  centerImage: processImg,
  leftCards: [
    {
      title: "Get Consultation",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar, sapien ac facilisis gravida, velit arcu consequat magna, vitae tincidunt lectus massa in libero.",
      icon: iconConsult,
    },
    {
      title: "Evaluate Requirement",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar, sapien ac facilisis gravida, velit arcu consequat magna, vitae tincidunt lectus massa in libero.",
      icon: iconDeploy,
    },
  ],
  rightCards: [
    {
      title: "Provide Solutions",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar, sapien ac facilisis gravida, velit arcu consequat magna, vitae tincidunt lectus massa in libero.",
      icon: iconEvaluate,
    },
    {
      title: "Deploy Resources",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar, sapien ac facilisis gravida, velit arcu consequat magna, vitae tincidunt lectus massa in libero.",
      icon: iconProvide,
    },
  ],
};

const baseTwoColumn = {
  title: "Lorem Ipsum content is dummy",
  subtitle:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar, sapien ac facilisis gravida, velit arcu consequat magna, vitae tincidunt lectus massa in libero.",
  items: [
    {
      title: "Lorem Ipsum Content",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar, sapien ac facilisis gravida, velit arcu consequat magna.",
      icon: iconConsult,   
    },
    {
      title: "Lorem Ipsum Content",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar, sapien ac facilisis gravida, velit arcu consequat magna.",
      icon: iconEvaluate,  
    },
    {
      title: "Lorem Ipsum Content",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar, sapien ac facilisis gravida, velit arcu consequat magna.",
      icon: iconProvide,   
    },
  ],
  image: twoColumnImg,
};


const baseCta = {
  title: "Lorem Ipsum Content is the dummy text",
  text:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar, sapien ac facilisi gravida, velit arcu consequat magna.",
  primaryLabel: "Get Started",
  secondaryLabel: "Learn more",
};

const baseRelated = {
  title: "Related Services",
  cards: [
    "Devices setup and configuration",
    "Patch Management",
    "Network Management",
    "Backup",
    "Vendor Coordination",
  ],
};

const baseTestimonial = {
  sectionTitle: "Lorem Ipsum text",
  sectionSubtitle:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar, sapien ac facilisis gravida, velit arcu consequat magna, vitae tincidunt lectus massa in libero.",
  name: "Robert Fox",
  role: "Business Man",
  quote:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar, sapien ac facilisis gravida, velit arcu consequat magna, vitae tincidunt lectus massa in libero.",
  photo: testimonialImg,
  stars: starsImg,
  quoteIcon: quoteIcon,
};

const serviceList = [
  { category: "managed-it", slug: "helpdesk", title: "Helpdesk Support" },
  {
    category: "managed-it",
    slug: "devices-setup",
    title: "Devices Setup and Configuration",
  },
  { category: "managed-it", slug: "patch-management", title: "Patch Management" },
  { category: "managed-it", slug: "network-management", title: "Network Management" },
  { category: "managed-it", slug: "backup", title: "Backup (Managed IT)" },
  {
    category: "managed-it",
    slug: "vendor-coordination",
    title: "Vendor Coordination",
  },

  {
    category: "managed-security",
    slug: "threat-detection",
    title: "Threat Detection",
  },
  {
    category: "managed-security",
    slug: "endpoint-protection",
    title: "Endpoint & Network Protection",
  },
  {
    category: "managed-security",
    slug: "incident-response",
    title: "Incident Response",
  },
  {
    category: "managed-security",
    slug: "security-monitoring",
    title: "Continuous Security Monitoring",
  },

  {
    category: "cloud-infrastructure",
    slug: "cloud-setup",
    title: "Cloud Setup and Migration",
  },
  {
    category: "cloud-infrastructure",
    slug: "virtual-servers",
    title: "Virtual Private Servers",
  },
  {
    category: "cloud-infrastructure",
    slug: "virtual-desktops",
    title: "Virtual Desktops",
  },
  {
    category: "cloud-infrastructure",
    slug: "it-infrastructure",
    title: "IT Infrastructure and Planning",
  },

  {
    category: "security-assessment",
    slug: "iso27001",
    title: "ISO 27001 Assessment and Audit",
  },
  { category: "security-assessment", slug: "irap", title: "iRAP Assessment and Audit" },
  { category: "security-assessment", slug: "soc2", title: "SOC2 Assessment and Audit" },
  {
    category: "security-assessment",
    slug: "risk-management",
    title: "Risk Management",
  },
  {
    category: "security-assessment",
    slug: "policy-development",
    title: "Policy Development",
  },
  {
    category: "security-assessment",
    slug: "security-training",
    title: "Security Awareness Training",
  },

  {
    category: "data-protection",
    slug: "backup",
    title: "Data Backup",
  },
  {
    category: "data-protection",
    slug: "disaster-recovery",
    title: "Disaster Recovery",
  },
  {
    category: "data-protection",
    slug: "ransomware-recovery",
    title: "Ransomware Recovery",
  },
  {
    category: "data-protection",
    slug: "encryption",
    title: "Encryption",
  },
];

export const servicesData = serviceList.map(({ category, slug, title }) => ({
  category,
  slug,
  title,
  hero: {
    ...baseHero,
    title,
  },
  brands: { ...baseBrands },
  process: { ...baseProcess },
  twoColumn: { ...baseTwoColumn },
  cta: { ...baseCta },
  related: { ...baseRelated },
  testimonial: { ...baseTestimonial },
}));
