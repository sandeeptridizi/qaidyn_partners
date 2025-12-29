
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
import heroHelpdesk from "../../assets/hero/helpdesk.png";
import heroDevicesSetup from "../../assets/hero/devices-setup.png";
import heroPatchManagement from "../../assets/hero/patch-management.png";
import heroNetworkManagement from "../../assets/hero/network-management.png";
import heroBackup from "../../assets/hero/backup.png";
import heroheroVendorCoordination from "../../assets/hero/heroVendorCoordination.png"
import heroThreatDetection from "../../assets/hero/threat-detection.png";
import heroEndpointProtection from "../../assets/hero/endpoint-protection.png";
import heroIncidentResponse from "../../assets/hero/incident-response.png";
import heroSecurityMonitoring from "../../assets/hero/security-monitoring.png";
import heroSecurityTraining from "../../assets/hero/security-training.png";
import heroCloudSetup from "../../assets/hero/cloud-setup.png";
import heroVirtualServers from "../../assets/hero/virtual-servers.png";
import heroVirtualDesktops from "../../assets/hero/virtual-desktops.png";
import heroITInfrastructure from "../../assets/hero/it-infrastructure.png";
import heroISO27001 from "../../assets/hero/iso27001.png";
import heroIRAP from "../../assets/hero/irap.png";
import heroSOC2 from "../../assets/hero/soc2.png";
import heroRiskManagement from "../../assets/hero/risk-management.png";
import heroPolicyDevelopment from "../../assets/hero/policy-development.png";
import heroSecurityTrainingAw from "../../assets/hero/Security Awareness Training.png";
import heroDisasterRecovery from "../../assets/hero/disaster-recovery.png";
import heroRansomwareRecovery from "../../assets/hero/ransomware-recovery.png";
import heroEncryption from "../../assets/hero/encryption.png";

const baseHero = {
  bullets: [],
  desc: "",
};

const baseBrands = {
  label: "Trusted by 100+ companies",
  image: brandsImg,
};

const baseProcess = {
  title: "",
  subtitle: "",
  centerImage: processImg,
  leftCards: [
    { title: "", text: "", icon: iconConsult },
    { title: "", text: "", icon: iconDeploy },
  ],
  rightCards: [
    { title: "", text: "", icon: iconEvaluate },
    { title: "", text: "", icon: iconProvide },
  ],
};

const baseTwoColumn = {
  title: "",
  subtitle: "",
  items: [
    { title: "", text: "", icon: iconConsult },
    { title: "", text: "", icon: iconEvaluate },
    { title: "", text: "", icon: iconProvide },
  ],
  image: twoColumnImg,
};

const baseCta = {
  title: "Let’s build a secure IT foundation together",
  text:
    "Connect with our experts to transform your IT operations with reliable and scalable solutions.",
  primaryLabel: "Get Started",
  secondaryLabel: "Learn more",
};

const baseRelated = {
  title: "Related Services",
  cards: [
    "Devices Setup",
    "Patch Management",
    "Network Management",
    "Backup",
    "Vendor Coordination",
  ],
};

const baseTestimonial = {
  sectionTitle: "What Our Clients Say",
  sectionSubtitle:
    "Trusted by businesses worldwide for reliable IT and security solutions.",
  name: "Robert Fox",
  role: "Business Owner",
  quote:
    "Their team transformed our IT operations with proactive support and exceptional service.",
  photo: testimonialImg,
  stars: starsImg,
  quoteIcon: quoteIcon,
};

const serviceList = [
  { category: "managed-it", slug: "helpdesk", title: "Helpdesk Support" },
  { category: "managed-it", slug: "devices-setup", title: "Devices Setup and Configuration" },
  { category: "managed-it", slug: "patch-management", title: "Patch Management" },
  { category: "managed-it", slug: "network-management", title: "Network Management" },
  { category: "managed-it", slug: "backup", title: "Backup (Managed IT)" },
  { category: "managed-it", slug: "vendor-coordination", title: "Vendor Coordination" },
  { category: "managed-security", slug: "threat-detection", title: "Threat Detection" },
  { category: "managed-security", slug: "endpoint-protection", title: "Endpoint & Network Protection" },
  { category: "managed-security", slug: "incident-response", title: "Incident Response" },
  { category: "managed-security", slug: "security-monitoring", title: "Continuous Security Monitoring" },
  { category: "cloud-infrastructure", slug: "cloud-setup", title: "Cloud Setup and Migration" },
  { category: "cloud-infrastructure", slug: "virtual-servers", title: "Virtual Private Servers" },
  { category: "cloud-infrastructure", slug: "virtual-desktops", title: "Virtual Desktops" },
  { category: "cloud-infrastructure", slug: "it-infrastructure", title: "IT Infrastructure and Planning" },
  { category: "security-assessment", slug: "iso27001", title: "ISO 27001 Assessment and Audit" },
  { category: "security-assessment", slug: "irap", title: "iRAP Assessment and Audit" },
  { category: "security-assessment", slug: "soc2", title: "SOC2 Assessment and Audit" },
  { category: "security-assessment", slug: "risk-management", title: "Risk Management" },
  { category: "security-assessment", slug: "policy-development", title: "Policy Development" },
  { category: "security-assessment", slug: "security-training", title: "Security Awareness Training" },
  { category: "data-protection", slug: "backup", title: "Data Backup" },
  { category: "data-protection", slug: "disaster-recovery", title: "Disaster Recovery" },
  { category: "data-protection", slug: "ransomware-recovery", title: "Ransomware Recovery" },
  { category: "data-protection", slug: "encryption", title: "Encryption" },
];


const serviceContent = {
  helpdesk: {
    hero: {
      image: heroHelpdesk,
      bullets: [
        "24/7 Assistance for Teams",
        "Faster Ticket Resolution",
        "Multi-Channel Support",
        "Improved Employee Experience",
      ],
      desc:
        "At Qaidyn Partners, our HelpDesk Support ensures seamless communication, quick resolutions, and uninterrupted workflow for your organization.",
    },

    process: {
      title: "How Our HelpDesk Support Delivers Efficiency Every Day",
      subtitle: "Our HelpDesk process is designed to keep your teams running smoothly. From issue logging to final resolution, each step ensures transparency, accountability, and fast support.",
      leftCards: [
        {
          title: "Issue Logging & Ticket Creation",
          text: "Users can report issues quickly through our support portal, enabling accurate tracking and a structured ticketing process.",
        },
        {
          title: "Priority Assessment & Assignment",
          text: "Each ticket is evaluated based on urgency and assigned to the appropriate expert, ensuring high-priority issues are addressed first.",
        },
      ],
      rightCards: [
        {
          title: "Troubleshooting &  Real-Time Support",
          text: "Our support specialists provide quick resolutions through chat, email, or remote access, minimizing downtime and confusion.",
        },
        {
          title: "Resolution & Status Update",
          text: "Once resolved, users receive a clear update along with preventive suggestions to avoid recurring issues and maintain workflow continuity.",
        },
      ],
    },

    twoColumn: {
      title: "Quality That Speaks Through Every Word",
      subtitle: "At Qaidyn Partners, we ensure every blog reflects deep expertise, strategic thinking, and actionable insights that drive real value for founders, leaders, and growing businesses.",
      items: [
        {
          title: "Insight-Driven Research",
          text: "Our content is built on verified data, industry trends, and real business challenges—ensuring every blog delivers clarity, relevance, and credibility.",
        },
        {
          title: "Strategic Storytelling",
          text: "We transform complex topics into simple, structured, and engaging narratives that help readers understand, learn, and apply ideas in their business journey.",
        },
        {
          title: "Action-Focused Outcomes",
          text: "Each blog concludes with practical steps, frameworks, and takeaways, empowering readers to make informed decisions and implement strategies confidently.",
        },
      ],
    },

    cta: {
      title: "Get in Touch With Us",
      text:
        "Have a question or need support? Our team is ready to assist you with all your IT service needs",
      primaryLabel: "Contact Us",
      secondaryLabel: "Talk to Expert",
    },


    testimonial: {
      sectionTitle: "What Clients Say About Our Helpdesk",
      sectionSubtitle: "Trusted for fast response and reliable IT support.",
      name: "Robert Fox",
      role: "IT Manager",
      quote:
        "Their helpdesk team resolved our issues quickly and reduced downtime significantly.",
    },
  },

  "devices-setup": {
    hero: {
      image: heroDevicesSetup,
      bullets: [
        "OS Installation & Updates",
        "Device Configuration",
        "Application Setup",
        "Performance Optimization",
      ],
      desc:
        "Seamless setup and configuration for all devices to ensure smooth onboarding and productive work environments",
    },

    process: {
      title: "Efficient Device Deployment for Hassle-Free Operations",
      subtitle: "Our streamlined setup process ensures every device is configured, secured, and ready for immediate use.",
      leftCards: [
        {
          title: "Requirement  Collection",
          text: "We begin by understanding the user’s role, department needs, required applications, and hardware specifications so the device is prepared exactly for their workflow.",
        },
        {
          title: "System   Configuration",
          text: "Our team installs the operating system, essential drivers, corporate software, and productivity tools while ensuring the device meets company standards.",
        },
      ],
      rightCards: [
        {
          title: "Security  Setup",
          text: "Security policies, endpoint protection, user access controls, and compliance configurations are applied to safeguard the system from the very first login.",
        },
        {
          title: "Final Validation & Handover",
          text: "The device undergoes performance testing, application checks, and connectivity validation before being handed over to the user fully ready for work.",
        },
      ],
    },

    twoColumn: {
      title: "Quality That Speaks Through Every Word",
      subtitle: "At Qaidyn Partners, we ensure every blog reflects deep expertise, strategic thinking, and actionable insights that drive real value for founders, leaders, and growing businesses.",
      items: [
        {
          title: "Insight-Driven Research",
          text: "Our content is built on verified data, industry trends, and real business challenges—ensuring every blog delivers clarity, relevance, and credibility.",
        },
        {
          title: "Strategic Storytelling",
          text: "We transform complex topics into simple, structured, and engaging narratives that help readers understand, learn, and apply ideas in their business journey.",
        },
        {
          title: "Action-Focused Outcomes",
          text: "Each blog concludes with practical steps, frameworks, and takeaways, empowering readers to make informed decisions and implement strategies confidently.",
        },
      ],
    },

    cta: {
      title: "Get in Touch With Us",
      text:
        "Have a question or need support? Our team is ready to assist you with all your IT service needs",
      primaryLabel: "Contact Us",
      secondaryLabel: "Talk to Expert",
    },


    testimonial: {
      sectionTitle: "What Clients Say About Our Helpdesk",
      sectionSubtitle: "Trusted for fast response and reliable IT support.",
      name: "Robert Fox",
      role: "IT Manager",
      quote:
        "Their helpdesk team resolved our issues quickly and reduced downtime significantly.",
    },
  },

  "patch-management": {
    hero: {
      image:heroPatchManagement,
      bullets: [
        "Scheduled Updates",
        "Vulnerability Fixes",
        "Compliance Assurance",
        "Automated Deployment",
      ],
      desc:
        "Keep your systems secure and up-to-date with automated patch deployment across all devices.",
    },

    process: {
      title: "Ensuring System Security Through Timely Patch Updates",
      subtitle: "We apply critical patches and updates proactively to protect your environment from vulnerabilities.",
      leftCards: [
        {
          title: "Patch Scanning & Identification",
          text: "Systems are scanned to detect outdated components, security gaps, missing patches, and critical vendor updates.",
        },
        {
          title: "Testing & Verification",
          text: "All updates are first tested in a controlled environment to ensure system stability and avoid compatibility issues.",
        },
      ],
      rightCards: [
        {
          title: "Scheduled  Deployment",
          text: "Validated patches are rolled out across endpoints during approved maintenance windows to prevent workflow interruptions.",
        },
        {
          title: "Monitoring & Compliance Reporting",
          text: "Post-deployment, we verify successful installation, track compliance status, and generate reports for audits and security reviews.",
        },
      ],
    },

    twoColumn: {
      title: "Quality That Speaks Through Every Word",
      subtitle: "At Qaidyn Partners, we ensure every blog reflects deep expertise, strategic thinking, and actionable insights that drive real value for founders, leaders, and growing businesses.",
      items: [
        {
          title: "Insight-Driven Research",
          text: "Our content is built on verified data, industry trends, and real business challenges—ensuring every blog delivers clarity, relevance, and credibility.",
        },
        {
          title: "Strategic Storytelling",
          text: "We transform complex topics into simple, structured, and engaging narratives that help readers understand, learn, and apply ideas in their business journey.",
        },
        {
          title: "Action-Focused Outcomes",
          text: "Each blog concludes with practical steps, frameworks, and takeaways, empowering readers to make informed decisions and implement strategies confidently.",
        },
      ],
    },

    cta: {
      title: "Get in Touch With Us",
      text:
        "Have a question or need support? Our team is ready to assist you with all your IT service needs",
      primaryLabel: "Contact Us",
      secondaryLabel: "Talk to Expert",
    },

   

    testimonial: {
      sectionTitle: "What Clients Say About Our Helpdesk",
      sectionSubtitle: "Trusted for fast response and reliable IT support.",
      name: "Robert Fox",
      role: "IT Manager",
      quote:
        "Their helpdesk team resolved our issues quickly and reduced downtime significantly.",
    },
  },

  "network-management": {
    hero: {
      image:heroNetworkManagement,
      bullets: [
        "Router & Switch Setup",
        "Network Monitoring",
        "Wi-Fi Optimization",
        "Bandwidth Management",
      ],
      desc:
        "Robust network management to ensure seamless connectivity, security, and high performance.",
    },

    process: {
      title: "Reliable Networks for Continuous Business Operations",
      subtitle: "We maintain and optimize network performance to minimize downtime and maximize efficiency.",
      leftCards: [
        {
          title: "Network Assessment",
          text: "We review your existing network infrastructure, performance bottlenecks, device load, and security posture.",
        },
        {
          title: "Configuration & Optimization",
          text: "Routers, switches, firewalls, and Wi-Fi systems are configured with best practices to ensure fast and stable connectivity.",
        },
      ],
      rightCards: [
        {
          title: "Continuous  Monitoring",
          text: "Real-time tracking tools monitor bandwidth usage, device health, latency, and security alerts round-the-clock.",
        },
        {
          title: "Troubleshooting & Enhancement",
          text: "Any issues detected are addressed promptly, and ongoing improvements are made to maintain peak network performance.",
        },
      ],
    },

    twoColumn: {
      title: "Quality That Speaks Through Every Word",
      subtitle: "At Qaidyn Partners, we ensure every blog reflects deep expertise, strategic thinking, and actionable insights that drive real value for founders, leaders, and growing businesses.",
      items: [
        {
          title: "Insight-Driven Research",
          text: "Our content is built on verified data, industry trends, and real business challenges—ensuring every blog delivers clarity, relevance, and credibility.",
        },
        {
          title: "Strategic Storytelling",
          text: "We transform complex topics into simple, structured, and engaging narratives that help readers understand, learn, and apply ideas in their business journey.",
        },
        {
          title: "Action-Focused Outcomes",
          text: "Each blog concludes with practical steps, frameworks, and takeaways, empowering readers to make informed decisions and implement strategies confidently.",
        },
      ],
    },

    cta: {
      title: "Get in Touch With Us",
      text:
        "Have a question or need support? Our team is ready to assist you with all your IT service needs",
      primaryLabel: "Contact Us",
      secondaryLabel: "Talk to Expert",
    },

    testimonial: {
      sectionTitle: "What Clients Say About Our Helpdesk",
      sectionSubtitle: "Trusted for fast response and reliable IT support.",
      name: "Robert Fox",
      role: "IT Manager",
      quote:
        "Their helpdesk team resolved our issues quickly and reduced downtime significantly.",
    },
  },

  "backup": {
    hero: {
      image:heroBackup,
      bullets: [
        "Daily Backups",
        "Encrypted Storage",
        "Cloud & Local Backup",
        "Quick Restore",
      ],
      desc:
        "Protect critical business data with secure and automated backup solutions.",
    },

    process: {
      title: "Reliable Backup Systems for Data Protection",
      subtitle: "We ensure your data is backed up regularly and available for immediate recovery.",
      leftCards: [
        {
          title: "Backup Strategy Planning",
          text: "We analyze data types, storage needs, recovery objectives, and retention policies to create a customized backup plan.",
        },
        {
          title: "Backup Deployment",
          text: "Cloud and local backup systems are configured with automated schedules to ensure continuous protection without manual effort.",
        },
      ],
      rightCards: [
        {
          title: "Health  Monitoring",
          text: "Daily tracking ensures all backups complete successfully; failures are immediately flagged for resolution.",
        },
        {
          title: "Data Restoration Support",
          text: "In case of data loss, our team assists with quick restoration to minimize downtime and operational impact.",
        },
      ],
    },

    twoColumn: {
      title: "Quality That Speaks Through Every Word",
      subtitle: "At Qaidyn Partners, we ensure every blog reflects deep expertise, strategic thinking, and actionable insights that drive real value for founders, leaders, and growing businesses.",
      items: [
        {
          title: "Insight-Driven Research",
          text: "Our content is built on verified data, industry trends, and real business challenges—ensuring every blog delivers clarity, relevance, and credibility.",
        },
        {
          title: "Strategic Storytelling",
          text: "We transform complex topics into simple, structured, and engaging narratives that help readers understand, learn, and apply ideas in their business journey.",
        },
        {
          title: "Action-Focused Outcomes",
          text: "Each blog concludes with practical steps, frameworks, and takeaways, empowering readers to make informed decisions and implement strategies confidently.",
        },
      ],
    },

    cta: {
      title: "Get in Touch With Us",
      text:
        "Have a question or need support? Our team is ready to assist you with all your IT service needs",
      primaryLabel: "Contact Us",
      secondaryLabel: "Talk to Expert",
    },

    testimonial: {
      sectionTitle: "What Clients Say About Our Helpdesk",
      sectionSubtitle: "Trusted for fast response and reliable IT support.",
      name: "Robert Fox",
      role: "IT Manager",
      quote:
        "Their helpdesk team resolved our issues quickly and reduced downtime significantly.",
    },
  },

   "vendor-coordination": {
    hero: {
      image:heroheroVendorCoordination,
      bullets: [
        "Vendor Interaction",
        "SLA Tracking",
        "Service Escalations",
        "Issue Follow-ups",
      ],
      desc:
        "Centralized vendor coordination to streamline communication, service requests, and issue resolution.",
    },

    process: {
      title: "Simplified Vendor Management for Faster Resolutions",
      subtitle: "We act as your single point of contact to ensure timely vendor response and service delivery.",
      leftCards: [
        {
          title: "Requirement Documentation",
          text: "We gather all vendor-related needs, service expectations, and technical details to streamline communication.",
        },
        {
          title: "Communication & Follow-Up",
          text: "Our team engages with vendors on your behalf, raising tickets, requesting updates, and ensuring progress.",
        },
      ],
      rightCards: [
        {
          title: "SLA  Monitoring",
          text: "Service quality, timelines, and commitments are closely tracked to ensure compliance with agreed-upon SLAs.",
        },
        {
          title: "Final Validation & Closure",
          text: "Once resolved, we verify that the issue is fixed correctly before closing the request with the vendor.",
        },
      ],
    },

    twoColumn: {
      title: "Quality That Speaks Through Every Word",
      subtitle: "At Qaidyn Partners, we ensure every blog reflects deep expertise, strategic thinking, and actionable insights that drive real value for founders, leaders, and growing businesses.",
      items: [
        {
          title: "Insight-Driven Research",
          text: "Our content is built on verified data, industry trends, and real business challenges—ensuring every blog delivers clarity, relevance, and credibility.",
        },
        {
          title: "Strategic Storytelling",
          text: "We transform complex topics into simple, structured, and engaging narratives that help readers understand, learn, and apply ideas in their business journey.",
        },
        {
          title: "Action-Focused Outcomes",
          text: "Each blog concludes with practical steps, frameworks, and takeaways, empowering readers to make informed decisions and implement strategies confidently.",
        },
      ],
    },

    cta: {
      title: "Get in Touch With Us",
      text:
        "Have a question or need support? Our team is ready to assist you with all your IT service needs",
      primaryLabel: "Contact Us",
      secondaryLabel: "Talk to Expert",
    },

    testimonial: {
      sectionTitle: "What Clients Say About Our Helpdesk",
      sectionSubtitle: "Trusted for fast response and reliable IT support.",
      name: "Robert Fox",
      role: "IT Manager",
      quote:
        "Their helpdesk team resolved our issues quickly and reduced downtime significantly.",
    },
  },

   "threat-detection": {
    hero: {
      image:heroThreatDetection,
      bullets: [
        "Real-Time Alerts",
        "Malware Detection",
        "Behavioral Analysis",
        "Security Monitoring",
      ],
      desc:
        "Real-time detection of threats across devices, networks, and cloud environments.",
    },

    process: {
      title: "Proactive Threat Detection for Maximum Security",
      subtitle: "We continuously analyze system activity to identify suspicious actions before they become incidents.",
      leftCards: [
        {
          title: "Monitoring Setup",
          text: "Security tools, SIEM solutions, and detection agents are deployed to continuously capture logs and system behavior.",
        },
        {
          title: "Threat Identification",
          text: "Behavioural analytics and real-time scanning detect malware, anomalies, unauthorized access, and unusual activities.",
        },
      ],
      rightCards: [
        {
          title: "Prioritization  & Classification",
          text: "Threats are graded by severity so critical issues are addressed immediately while monitoring ongoing events.",
        },
        {
          title: "Response Activation",
          text: "Appropriate teams are alerted, actions are initiated, and protections are strengthened to minimize damage.",
        },
      ],
    },

    twoColumn: {
      title: "Quality That Speaks Through Every Word",
      subtitle: "At Qaidyn Partners, we ensure every blog reflects deep expertise, strategic thinking, and actionable insights that drive real value for founders, leaders, and growing businesses.",
      items: [
        {
          title: "Insight-Driven Research",
          text: "Our content is built on verified data, industry trends, and real business challenges—ensuring every blog delivers clarity, relevance, and credibility.",
        },
        {
          title: "Strategic Storytelling",
          text: "We transform complex topics into simple, structured, and engaging narratives that help readers understand, learn, and apply ideas in their business journey.",
        },
        {
          title: "Action-Focused Outcomes",
          text: "Each blog concludes with practical steps, frameworks, and takeaways, empowering readers to make informed decisions and implement strategies confidently.",
        },
      ],
    },

    cta: {
      title: "Get in Touch With Us",
      text:
        "Have a question or need support? Our team is ready to assist you with all your IT service needs",
      primaryLabel: "Contact Us",
      secondaryLabel: "Talk to Expert",
    },
   testimonial: {
      sectionTitle: "What Clients Say About Our Helpdesk",
      sectionSubtitle: "Trusted for fast response and reliable IT support.",
      name: "Robert Fox",
      role: "IT Manager",
      quote:
        "Their helpdesk team resolved our issues quickly and reduced downtime significantly.",
    },
  },

   "endpoint-protection": {
    hero: {
      image:heroEndpointProtection,
      bullets: [
        "Antivirus Management",
        "Firewall Rules",
        "Device Control",
        "Intrusion Prevention",
      ],
      desc:
        "Advanced protection for devices and network infrastructure against cyber threats.",
    },

    process: {
      title: "Comprehensive Protection for Devices and Networks",
      subtitle: "We implement strong security controls to safeguard endpoints and network layers.",
      leftCards: [
        {
          title: "Security Assessment",
          text: "Existing endpoint and network environments are evaluated for vulnerabilities, weak access controls, and policy gaps.",
        },
        {
          title: "Deployment of Protection Tools",
          text: "Firewalls, antivirus, device control, intrusion prevention, and encryption tools are configured.",
        },
      ],
      rightCards: [
        {
          title: "Real-Time  Monitoring",
          text: "Systems are continuously monitored to identify suspicious activity, unauthorized usage, or security violations.",
        },
        {
          title: "Threat Mitigation & Enforcement",
          text: "Upon detection, threats are blocked, devices are isolated if needed, and policies are reinforced for future prevention.",
        },
      ],
    },

    twoColumn: {
      title: "Quality That Speaks Through Every Word",
      subtitle: "At Qaidyn Partners, we ensure every blog reflects deep expertise, strategic thinking, and actionable insights that drive real value for founders, leaders, and growing businesses.",
      items: [
        {
          title: "Insight-Driven Research",
          text: "Our content is built on verified data, industry trends, and real business challenges—ensuring every blog delivers clarity, relevance, and credibility.",
        },
        {
          title: "Strategic Storytelling",
          text: "We transform complex topics into simple, structured, and engaging narratives that help readers understand, learn, and apply ideas in their business journey.",
        },
        {
          title: "Action-Focused Outcomes",
          text: "Each blog concludes with practical steps, frameworks, and takeaways, empowering readers to make informed decisions and implement strategies confidently.",
        },
      ],
    },

    cta: {
      title: "Get in Touch With Us",
      text:
        "Have a question or need support? Our team is ready to assist you with all your IT service needs",
      primaryLabel: "Contact Us",
      secondaryLabel: "Talk to Expert",
    },
   testimonial: {
      sectionTitle: "What Clients Say About Our Helpdesk",
      sectionSubtitle: "Trusted for fast response and reliable IT support.",
      name: "Robert Fox",
      role: "IT Manager",
      quote:
        "Their helpdesk team resolved our issues quickly and reduced downtime significantly.",
    },
  },

   "incident-response": {
    hero: {
      image:heroIncidentResponse,
      bullets: [
        "Root Cause Analysis",
        "Incident Containment",
        "Threat Eradication",
        "Recovery Assistance",
      ],
      desc:
        "Fast and structured response to security incidents to minimize damage and downtime.",
    },

    process: {
      title: "Rapid Incident Response for Security Threats",
      subtitle: "We follow a tested response procedure to quickly control and resolve incidents.",
      leftCards: [
        {
          title: "Incident Detection & Verification",
          text: "Alerts, logs, and reports are analyzed to confirm whether an incident has occurred and assess initial impact.",
        },
        {
          title: "Containment Phase",
          text: "Immediate steps are taken to isolate affected systems, stop ongoing damage, and protect remaining infrastructure.",
        },
      ],
      rightCards: [
        {
          title: "Eradication  & Resolution",
          text: "Root cause analysis is performed; malicious files are removed, vulnerabilities patched, and compromised accounts secured.",
        },
        {
          title: "Recovery & Documentation",
          text: "Systems are restored safely, performance is validated, and a detailed incident report is created for future prevention.",
        },
      ],
    },

    twoColumn: {
      title: "Quality That Speaks Through Every Word",
      subtitle: "At Qaidyn Partners, we ensure every blog reflects deep expertise, strategic thinking, and actionable insights that drive real value for founders, leaders, and growing businesses.",
      items: [
        {
          title: "Insight-Driven Research",
          text: "Our content is built on verified data, industry trends, and real business challenges—ensuring every blog delivers clarity, relevance, and credibility.",
        },
        {
          title: "Strategic Storytelling",
          text: "We transform complex topics into simple, structured, and engaging narratives that help readers understand, learn, and apply ideas in their business journey.",
        },
        {
          title: "Action-Focused Outcomes",
          text: "Each blog concludes with practical steps, frameworks, and takeaways, empowering readers to make informed decisions and implement strategies confidently.",
        },
      ],
    },

    cta: {
      title: "Get in Touch With Us",
      text:
        "Have a question or need support? Our team is ready to assist you with all your IT service needs",
      primaryLabel: "Contact Us",
      secondaryLabel: "Talk to Expert",
    },
   testimonial: {
      sectionTitle: "What Clients Say About Our Helpdesk",
      sectionSubtitle: "Trusted for fast response and reliable IT support.",
      name: "Robert Fox",
      role: "IT Manager",
      quote:
        "Their helpdesk team resolved our issues quickly and reduced downtime significantly.",
    },
  },

   "security-monitoring": {
    hero: {
      image:heroSecurityTraining,
      bullets: [
        "Real-time threat visibility",
        "Log and event monitoring",
        "Anomaly detection",
        "Proactive incident alerts",
      ],
      desc:
        "24/7 monitoring to detect, analyze, and respond to security threats before they impact your business.",
    },

    process: {
      title: "Always-On Security, Always in Control",
      subtitle: "Our continuous monitoring ensures threats are identified early and acted upon immediately.",
      leftCards: [
        {
          title: "Environment Visibility Setup",
          text: "We configure monitoring tools across endpoints, servers, networks, and cloud platforms to ensure full visibility of activities.",
        },
        {
          title: "Threat Intelligence Integration",
          text: "Real-time threat feeds and behavioral analytics are integrated to detect known and emerging security risks.",
        },
      ],
      rightCards: [
        {
          title: "Active Monitoring  & Alerts",
          text: "Our team continuously tracks anomalies, suspicious behavior, and policy violations with instant alerting mechanisms.",
        },
        {
          title: "Incident Reporting & Optimization",
          text: "Detected risks are documented, reported, and analyzed to strengthen security posture and reduce future exposure.",
        },
      ],
    },

    twoColumn: {
      title: "Quality That Speaks Through Every Word",
      subtitle: "At Qaidyn Partners, we ensure every blog reflects deep expertise, strategic thinking, and actionable insights that drive real value for founders, leaders, and growing businesses.",
      items: [
        {
          title: "Insight-Driven Research",
          text: "Our content is built on verified data, industry trends, and real business challenges—ensuring every blog delivers clarity, relevance, and credibility.",
        },
        {
          title: "Strategic Storytelling",
          text: "We transform complex topics into simple, structured, and engaging narratives that help readers understand, learn, and apply ideas in their business journey.",
        },
        {
          title: "Action-Focused Outcomes",
          text: "Each blog concludes with practical steps, frameworks, and takeaways, empowering readers to make informed decisions and implement strategies confidently.",
        },
      ],
    },

    cta: {
      title: "Get in Touch With Us",
      text:
        "Have a question or need support? Our team is ready to assist you with all your IT service needs",
      primaryLabel: "Contact Us",
      secondaryLabel: "Talk to Expert",
    },
   testimonial: {
      sectionTitle: "What Clients Say About Our Helpdesk",
      sectionSubtitle: "Trusted for fast response and reliable IT support.",
      name: "Robert Fox",
      role: "IT Manager",
      quote:
        "Their helpdesk team resolved our issues quickly and reduced downtime significantly.",
    },
  },

   "cloud-setup": {
    hero: {
      image:heroCloudSetup,
      bullets: [
        "Cloud architecture design",
        "Secure workload migration",
        "Multi-cloud support",
        "Cost optimization",
      ],
      desc:
        "Seamless cloud adoption and migration with security, scalability, and performance in focus.",
    },

    process: {
      title: "Move to the Cloud with Confidence",
      subtitle: "We ensure smooth transitions without downtime or data loss.",
      leftCards: [
        {
          title: "Cloud Readiness Assessment",
          text: "We evaluate your existing infrastructure, workloads, and business objectives to determine the optimal cloud strategy.",
        },
        {
          title: "Architecture & Migration Planning",
          text: "Secure, scalable cloud architectures are designed with minimal downtime and compliance alignment.",
        },
      ],
      rightCards: [
        {
          title: "Migration &  Configuration",
          text: "Applications, data, and systems are migrated seamlessly while ensuring performance, security, and cost optimization.",
        },
        {
          title: "Post-Migration Optimization",
          text: "We fine-tune cloud resources, implement monitoring, and optimize usage for long-term efficiency.",
        },
      ],
    },

    twoColumn: {
      title: "Quality That Speaks Through Every Word",
      subtitle: "At Qaidyn Partners, we ensure every blog reflects deep expertise, strategic thinking, and actionable insights that drive real value for founders, leaders, and growing businesses.",
      items: [
        {
          title: "Insight-Driven Research",
          text: "Our content is built on verified data, industry trends, and real business challenges—ensuring every blog delivers clarity, relevance, and credibility.",
        },
        {
          title: "Strategic Storytelling",
          text: "We transform complex topics into simple, structured, and engaging narratives that help readers understand, learn, and apply ideas in their business journey.",
        },
        {
          title: "Action-Focused Outcomes",
          text: "Each blog concludes with practical steps, frameworks, and takeaways, empowering readers to make informed decisions and implement strategies confidently.",
        },
      ],
    },

    cta: {
      title: "Get in Touch With Us",
      text:
        "Have a question or need support? Our team is ready to assist you with all your IT service needs",
      primaryLabel: "Contact Us",
      secondaryLabel: "Talk to Expert",
    },
   testimonial: {
      sectionTitle: "What Clients Say About Our Helpdesk",
      sectionSubtitle: "Trusted for fast response and reliable IT support.",
      name: "Robert Fox",
      role: "IT Manager",
      quote:
        "Their helpdesk team resolved our issues quickly and reduced downtime significantly.",
    },
  },

   "virtual-servers": {
    hero: {
      image:heroVirtualServers,
      bullets: [
        "Dedicated resources",
        "High availability",
        "Secure access controls",
        "Performance optimization",
      ],
      desc:
        "Secure, scalable, and high-performance virtual servers tailored to your business needs.",
    },

    process: {
      title: "Powerful Servers Without Physical Complexity",
      subtitle: "We deliver reliable VPS environments built for growth.",
      leftCards: [
        {
          title: "Requirement Analysis",
          text: "We analyze your application workload, performance expectations, security needs, and scalability requirements to define the right VPS configuration.",
        },
        {
          title: "Security Hardening",
          text: "Security layers such as firewalls, access controls, encryption, and monitoring tools are implemented to protect the VPS environment.",
        },
      ],
      rightCards: [
        {
          title: "Server  Provisioning",
          text: "Virtual servers are provisioned with optimized CPU, memory, storage, and operating systems to ensure stable and reliable performance.",
        },
        {
          title: "Ongoing Management",
          text: "We continuously manage updates, backups, performance optimization, and uptime monitoring to ensure uninterrupted operations.",
        },
      ],
    },

    twoColumn: {
      title: "Quality That Speaks Through Every Word",
      subtitle: "At Qaidyn Partners, we ensure every blog reflects deep expertise, strategic thinking, and actionable insights that drive real value for founders, leaders, and growing businesses.",
      items: [
        {
          title: "Insight-Driven Research",
          text: "Our content is built on verified data, industry trends, and real business challenges—ensuring every blog delivers clarity, relevance, and credibility.",
        },
        {
          title: "Strategic Storytelling",
          text: "We transform complex topics into simple, structured, and engaging narratives that help readers understand, learn, and apply ideas in their business journey.",
        },
        {
          title: "Action-Focused Outcomes",
          text: "Each blog concludes with practical steps, frameworks, and takeaways, empowering readers to make informed decisions and implement strategies confidently.",
        },
      ],
    },

    cta: {
      title: "Get in Touch With Us",
      text:
        "Have a question or need support? Our team is ready to assist you with all your IT service needs",
      primaryLabel: "Contact Us",
      secondaryLabel: "Talk to Expert",
    },
   testimonial: {
      sectionTitle: "What Clients Say About Our Helpdesk",
      sectionSubtitle: "Trusted for fast response and reliable IT support.",
      name: "Robert Fox",
      role: "IT Manager",
      quote:
        "Their helpdesk team resolved our issues quickly and reduced downtime significantly.",
    },
  },

   "virtual-desktops": {
    hero: {
      image:heroVirtualDesktops,
      bullets: [
        "Secure remote access",
        "Centralized desktop control",
        "Device-independent access",
        "Data protection",
      ],
      desc:
        "Enable secure remote work with centrally managed virtual desktop environments.",
    },

    process: {
      title: "Work Securely from Anywhere",
      subtitle: "Virtual desktops ensure flexibility without compromising security.",
      leftCards: [
        {
          title: "User & Access Assessment",
          text: "We evaluate user roles, access requirements, and device usage to design a secure and flexible virtual desktop environment.",
        },
        {
          title: "Virtual Desktop Deployment",
          text: "Centralized virtual desktops are deployed with controlled access, standardized configurations, and secure user authentication.",
        },
      ],
      rightCards: [
        {
          title: "Security &  Compliance Setup",
          text: "Data protection, access logging, and endpoint security measures are implemented to maintain compliance and data integrity.",
        },
        {
          title: "Performance & User Support",
          text: "Desktop performance is continuously monitored, and user support is provided to resolve issues quickly and efficiently.",
        },
      ],
    },

    twoColumn: {
      title: "Quality That Speaks Through Every Word",
      subtitle: "At Qaidyn Partners, we ensure every blog reflects deep expertise, strategic thinking, and actionable insights that drive real value for founders, leaders, and growing businesses.",
      items: [
        {
          title: "Insight-Driven Research",
          text: "Our content is built on verified data, industry trends, and real business challenges—ensuring every blog delivers clarity, relevance, and credibility.",
        },
        {
          title: "Strategic Storytelling",
          text: "We transform complex topics into simple, structured, and engaging narratives that help readers understand, learn, and apply ideas in their business journey.",
        },
        {
          title: "Action-Focused Outcomes",
          text: "Each blog concludes with practical steps, frameworks, and takeaways, empowering readers to make informed decisions and implement strategies confidently.",
        },
      ],
    },

    cta: {
      title: "Get in Touch With Us",
      text:
        "Have a question or need support? Our team is ready to assist you with all your IT service needs",
      primaryLabel: "Contact Us",
      secondaryLabel: "Talk to Expert",
    },
   testimonial: {
      sectionTitle: "What Clients Say About Our Helpdesk",
      sectionSubtitle: "Trusted for fast response and reliable IT support.",
      name: "Robert Fox",
      role: "IT Manager",
      quote:
        "Their helpdesk team resolved our issues quickly and reduced downtime significantly.",
    },
  },

   "it-infrastructure": {
    hero: {
      image:heroITInfrastructure,
      bullets: [
        "Infrastructure assessment",
        "Capacity planning",
        "Technology roadmap",
        "Technology roadmap",
      ],
      desc:
        "Strategic IT planning to build scalable, reliable, and future-ready infrastructure.",
    },

    process: {
      title: "Building IT That Supports Growth",
      subtitle: "We align IT infrastructure with long-term business goals.",
      leftCards: [
        {
          title: "Infrastructure Assessment",
          text: "We assess your existing IT infrastructure, identify gaps, and evaluate performance, reliability, and scalability limitations.",
        },
        {
          title: "Strategic IT Roadmap Design",
          text: "A structured IT roadmap is developed, aligning infrastructure investments with business growth and future technology needs.",
        },
      ],
      rightCards: [
        {
          title: "Implementation  & Optimization",
          text: "Planned infrastructure upgrades and deployments are executed with minimal disruption to ongoing business operations.",
        },
        {
          title: "Continuous Review & Scaling",
          text: "Infrastructure performance is regularly reviewed and scaled to support evolving workloads and organizational growth.",
        },
      ],
    },

    twoColumn: {
      title: "Quality That Speaks Through Every Word",
      subtitle: "At Qaidyn Partners, we ensure every blog reflects deep expertise, strategic thinking, and actionable insights that drive real value for founders, leaders, and growing businesses.",
      items: [
        {
          title: "Insight-Driven Research",
          text: "Our content is built on verified data, industry trends, and real business challenges—ensuring every blog delivers clarity, relevance, and credibility.",
        },
        {
          title: "Strategic Storytelling",
          text: "We transform complex topics into simple, structured, and engaging narratives that help readers understand, learn, and apply ideas in their business journey.",
        },
        {
          title: "Action-Focused Outcomes",
          text: "Each blog concludes with practical steps, frameworks, and takeaways, empowering readers to make informed decisions and implement strategies confidently.",
        },
      ],
    },

    cta: {
      title: "Get in Touch With Us",
      text:
        "Have a question or need support? Our team is ready to assist you with all your IT service needs",
      primaryLabel: "Contact Us",
      secondaryLabel: "Talk to Expert",
    },
   testimonial: {
      sectionTitle: "What Clients Say About Our Helpdesk",
      sectionSubtitle: "Trusted for fast response and reliable IT support.",
      name: "Robert Fox",
      role: "IT Manager",
      quote:
        "Their helpdesk team resolved our issues quickly and reduced downtime significantly.",
    },
  },

   "iso27001": {
    hero: {
      image:heroISO27001,
      bullets: [
        "Gap assessment",
        "Risk identification",
        "Control implementation",
        "Audit readiness",
      ],
      desc:
        "End-to-end support to achieve and maintain ISO 27001 compliance.",
    },

    process: {
      title: "Strengthening Information Security Standards",
      subtitle: "We guide organizations through compliance with confidence.",
      leftCards: [
        {
          title: "Gap Analysis",
          text: "We conduct a detailed gap assessment to compare your current security controls against ISO 27001 requirements.",
        },
        {
          title: "Control Mapping & Documentation",
          text: "Required security policies, procedures, and controls are mapped, documented, and aligned with ISO standards.",
        },
      ],
      rightCards: [
        {
          title: "Internal Audit  & Remediation",
          text: "Internal audits identify non-conformities, and corrective actions are implemented to close compliance gaps.",
        },
        {
          title: "Certification Readiness Support",
          text: "We prepare your organization for external audits by ensuring full compliance and audit readiness.",
        },
      ],
    },

    twoColumn: {
      title: "Quality That Speaks Through Every Word",
      subtitle: "At Qaidyn Partners, we ensure every blog reflects deep expertise, strategic thinking, and actionable insights that drive real value for founders, leaders, and growing businesses.",
      items: [
        {
          title: "Insight-Driven Research",
          text: "Our content is built on verified data, industry trends, and real business challenges—ensuring every blog delivers clarity, relevance, and credibility.",
        },
        {
          title: "Strategic Storytelling",
          text: "We transform complex topics into simple, structured, and engaging narratives that help readers understand, learn, and apply ideas in their business journey.",
        },
        {
          title: "Action-Focused Outcomes",
          text: "Each blog concludes with practical steps, frameworks, and takeaways, empowering readers to make informed decisions and implement strategies confidently.",
        },
      ],
    },

    cta: {
      title: "Get in Touch With Us",
      text:
        "Have a question or need support? Our team is ready to assist you with all your IT service needs",
      primaryLabel: "Contact Us",
      secondaryLabel: "Talk to Expert",
    },
   testimonial: {
      sectionTitle: "What Clients Say About Our Helpdesk",
      sectionSubtitle: "Trusted for fast response and reliable IT support.",
      name: "Robert Fox",
      role: "IT Manager",
      quote:
        "Their helpdesk team resolved our issues quickly and reduced downtime significantly.",
    },
  },

   "irap": {
    hero: {
      image:heroIRAP,
      bullets: [
        "Security maturity assessment",
        "Control alignment",
        "Risk documentation",
        "Compliance readiness",
      ],
      desc:
        "Structured assessments to meet iRAP security requirements with confidence.",
    },

    process: {
      title: "Meeting Regulatory Security Expectations",
      subtitle: "Our approach simplifies complex compliance requirements.",
      leftCards: [
        {
          title: "Security Posture Evaluation",
          text: "We begin by reviewing your systems, applications, and operational processes to understand their current security posture. This assessment helps identify gaps against iRAP requirements and establishes a clear baseline for compliance.",
        },
        {
          title: "Risk & Control Identification",
          text: "Potential risks are identified and mapped against required iRAP security controls. Each gap is documented with recommended corrective actions to reduce compliance risks effectively.",
        },
      ],
      rightCards: [
        {
          title: "Compliance  Implementation",
          text: "We support the implementation of technical, administrative, and procedural controls needed to meet iRAP standards. All changes are aligned with business workflows to avoid operational disruption.",
        },
        {
          title: "Audit Readiness Validation",
          text: "A final readiness review ensures controls are implemented correctly and evidence is properly maintained. This step prepares your organization for a smooth and successful iRAP assessment.",
        },
      ],
    },

    twoColumn: {
      title: "Quality That Speaks Through Every Word",
      subtitle: "At Qaidyn Partners, we ensure every blog reflects deep expertise, strategic thinking, and actionable insights that drive real value for founders, leaders, and growing businesses.",
      items: [
        {
          title: "Insight-Driven Research",
          text: "Our content is built on verified data, industry trends, and real business challenges—ensuring every blog delivers clarity, relevance, and credibility.",
        },
        {
          title: "Strategic Storytelling",
          text: "We transform complex topics into simple, structured, and engaging narratives that help readers understand, learn, and apply ideas in their business journey.",
        },
        {
          title: "Action-Focused Outcomes",
          text: "Each blog concludes with practical steps, frameworks, and takeaways, empowering readers to make informed decisions and implement strategies confidently.",
        },
      ],
    },

    cta: {
      title: "Get in Touch With Us",
      text:
        "Have a question or need support? Our team is ready to assist you with all your IT service needs",
      primaryLabel: "Contact Us",
      secondaryLabel: "Talk to Expert",
    },
   testimonial: {
      sectionTitle: "What Clients Say About Our Helpdesk",
      sectionSubtitle: "Trusted for fast response and reliable IT support.",
      name: "Robert Fox",
      role: "IT Manager",
      quote:
        "Their helpdesk team resolved our issues quickly and reduced downtime significantly.",
    },
  },

   "soc2": {
    hero: {
      image:heroSOC2,
      bullets: [
        "Trust Services Criteria",
        "Control testing",
        "Evidence collection",
        "Audit readiness",
      ],
      desc:
        "SOC 2 compliance services focused on trust, security, and transparency.",
    },

    process: {
      title: "Building Customer Trust Through Compliance",
      subtitle: "We help organizations prove security and reliability.",
      leftCards: [
        {
          title: "Trust Criteria Evaluation",
          text: "We assess your organization against SOC 2 Trust Service Criteria, including security, availability, and confidentiality. This helps determine gaps that may affect audit readiness.",
        },
        {
          title: "Control Design & Alignment",
          text: "Required policies, procedures, and system controls are designed or refined to meet SOC 2 requirements. These controls are tailored to match your operational environment.",
        },
      ],
      rightCards: [
        {
          title: "Evidence  Collection & Review",
          text: "We assist in collecting audit evidence such as logs, access records, and process documentation. All evidence is reviewed for accuracy and completeness before submission.",
        },
        {
          title: "Audit Support & Closure",
          text: "During the audit, we provide ongoing support to address auditor queries and findings. This ensures timely closure of observations and successful compliance outcomes.",
        },
      ],
    },

    twoColumn: {
      title: "Quality That Speaks Through Every Word",
      subtitle: "At Qaidyn Partners, we ensure every blog reflects deep expertise, strategic thinking, and actionable insights that drive real value for founders, leaders, and growing businesses.",
      items: [
        {
          title: "Insight-Driven Research",
          text: "Our content is built on verified data, industry trends, and real business challenges—ensuring every blog delivers clarity, relevance, and credibility.",
        },
        {
          title: "Strategic Storytelling",
          text: "We transform complex topics into simple, structured, and engaging narratives that help readers understand, learn, and apply ideas in their business journey.",
        },
        {
          title: "Action-Focused Outcomes",
          text: "Each blog concludes with practical steps, frameworks, and takeaways, empowering readers to make informed decisions and implement strategies confidently.",
        },
      ],
    },

    cta: {
      title: "Get in Touch With Us",
      text:
        "Have a question or need support? Our team is ready to assist you with all your IT service needs",
      primaryLabel: "Contact Us",
      secondaryLabel: "Talk to Expert",
    },
   testimonial: {
      sectionTitle: "What Clients Say About Our Helpdesk",
      sectionSubtitle: "Trusted for fast response and reliable IT support.",
      name: "Robert Fox",
      role: "IT Manager",
      quote:
        "Their helpdesk team resolved our issues quickly and reduced downtime significantly.",
    },
  },

   "risk-management": {
    hero: {
      image:heroRiskManagement,
      bullets: [
        "Risk identification",
        "Impact analysis",
        "Mitigation strategies",
        "Continuous monitoring",
      ],
      desc:
        "Identify, assess, and mitigate risks to protect business operations.",
    },

    process: {
      title: "Proactive Risk Control",
      subtitle: "We help you stay ahead of operational and security risks",
      leftCards: [
        {
          title: "Risk Identification",
          text: "We identify potential technical, operational, and compliance risks across your IT environment. This provides visibility into threats that could impact business continuity.",
        },
        {
          title: "Risk Analysis & Prioritization",
          text: "Each identified risk is evaluated based on likelihood and business impact. High-priority risks are highlighted to focus mitigation efforts effectively.",
        },
      ],
      rightCards: [
        {
          title: "Risk  Mitigation Planning",
          text: "Appropriate controls and mitigation strategies are designed to reduce exposure. These solutions balance risk reduction with operational efficiency.",
        },
        {
          title: "Continuous Risk Monitoring",
          text: "Risks are monitored regularly to detect changes or emerging threats. This ensures your risk posture remains aligned with business growth and regulatory needs.",
        },
      ],
    },

    twoColumn: {
      title: "Quality That Speaks Through Every Word",
      subtitle: "At Qaidyn Partners, we ensure every blog reflects deep expertise, strategic thinking, and actionable insights that drive real value for founders, leaders, and growing businesses.",
      items: [
        {
          title: "Insight-Driven Research",
          text: "Our content is built on verified data, industry trends, and real business challenges—ensuring every blog delivers clarity, relevance, and credibility.",
        },
        {
          title: "Strategic Storytelling",
          text: "We transform complex topics into simple, structured, and engaging narratives that help readers understand, learn, and apply ideas in their business journey.",
        },
        {
          title: "Action-Focused Outcomes",
          text: "Each blog concludes with practical steps, frameworks, and takeaways, empowering readers to make informed decisions and implement strategies confidently.",
        },
      ],
    },

    cta: {
      title: "Get in Touch With Us",
      text:
        "Have a question or need support? Our team is ready to assist you with all your IT service needs",
      primaryLabel: "Contact Us",
      secondaryLabel: "Talk to Expert",
    },
   testimonial: {
      sectionTitle: "What Clients Say About Our Helpdesk",
      sectionSubtitle: "Trusted for fast response and reliable IT support.",
      name: "Robert Fox",
      role: "IT Manager",
      quote:
        "Their helpdesk team resolved our issues quickly and reduced downtime significantly.",
    },
  },

   "policy-development": {
    hero: {
      hero:heroPolicyDevelopment,
      bullets: [
        "Security policies",
        "IT governance",
        "Compliance alignment",
        "Employee guidelines",
      ],
      desc:
        "Clear, compliant, and actionable IT and security policies for your organization.",
    },

    process: {
      title: "Policies That Enable, Not Restrict",
      subtitle: "We create policies that support security and productivity.",
      leftCards: [
        {
          title: "Policy Requirement Assessment",
          text: "We identify mandatory and recommended policies based on compliance standards and business needs. This ensures comprehensive policy coverage across the organization.",
        },
        {
          title: "Policy Drafting & Structuring",
          text: "Policies are drafted with clear objectives, responsibilities, and enforcement guidelines. Each policy is customized to align with your organizational structure.",
        },
      ],
      rightCards: [
        {
          title: "Review &  Approval Support",
          text: "Draft policies are reviewed with stakeholders to ensure clarity and practicality. Feedback is incorporated before final approval and rollout.",
        },
        {
          title: "Implementation & Awareness",
          text: "Approved policies are implemented through communication and awareness initiatives. This ensures employees understand and adhere to defined guidelines.",
        },
      ],
    },

    twoColumn: {
      title: "Quality That Speaks Through Every Word",
      subtitle: "At Qaidyn Partners, we ensure every blog reflects deep expertise, strategic thinking, and actionable insights that drive real value for founders, leaders, and growing businesses.",
      items: [
        {
          title: "Insight-Driven Research",
          text: "Our content is built on verified data, industry trends, and real business challenges—ensuring every blog delivers clarity, relevance, and credibility.",
        },
        {
          title: "Strategic Storytelling",
          text: "We transform complex topics into simple, structured, and engaging narratives that help readers understand, learn, and apply ideas in their business journey.",
        },
        {
          title: "Action-Focused Outcomes",
          text: "Each blog concludes with practical steps, frameworks, and takeaways, empowering readers to make informed decisions and implement strategies confidently.",
        },
      ],
    },

    cta: {
      title: "Get in Touch With Us",
      text:
        "Have a question or need support? Our team is ready to assist you with all your IT service needs",
      primaryLabel: "Contact Us",
      secondaryLabel: "Talk to Expert",
    },
   testimonial: {
      sectionTitle: "What Clients Say About Our Helpdesk",
      sectionSubtitle: "Trusted for fast response and reliable IT support.",
      name: "Robert Fox",
      role: "IT Manager",
      quote:
        "Their helpdesk team resolved our issues quickly and reduced downtime significantly.",
    },
  },

   "security-training": {
    hero: {
      image:heroSecurityTrainingAw,
      bullets: [
        "Phishing awareness",
        "Secure behavior training",
        "Threat recognition",
        "Employee guidelines",
      ],
      desc:
        "Empowering employees to become the first line of defense.",
    },

    process: {
      title: "Turning Employees into Security Assets",
      subtitle: "We build a culture of security awareness.",
      leftCards: [
        {
          title: "Awareness Gap Analysis",
          text: "We assess employee awareness levels to identify common security behavior risks. This helps tailor training to real-world threat scenarios.",
        },
        {
          title: "Training Content Development",
          text: "Customized training modules are developed covering phishing, data security, and cyber hygiene. Content is designed to be engaging and easy to understand",
        },
      ],
      rightCards: [
        {
          title: "Training  Delivery",
          text: "Training sessions are delivered through workshops, virtual sessions, or digital platforms. Employees gain practical knowledge to recognize and respond to threats.",
        },
        {
          title: "Evaluation & Improvement",
          text: "Training effectiveness is measured through assessments and feedback. Continuous improvements are made to strengthen security culture.",
        },
      ],
    },

    twoColumn: {
      title: "Quality That Speaks Through Every Word",
      subtitle: "At Qaidyn Partners, we ensure every blog reflects deep expertise, strategic thinking, and actionable insights that drive real value for founders, leaders, and growing businesses.",
      items: [
        {
          title: "Insight-Driven Research",
          text: "Our content is built on verified data, industry trends, and real business challenges—ensuring every blog delivers clarity, relevance, and credibility.",
        },
        {
          title: "Strategic Storytelling",
          text: "We transform complex topics into simple, structured, and engaging narratives that help readers understand, learn, and apply ideas in their business journey.",
        },
        {
          title: "Action-Focused Outcomes",
          text: "Each blog concludes with practical steps, frameworks, and takeaways, empowering readers to make informed decisions and implement strategies confidently.",
        },
      ],
    },

    cta: {
      title: "Get in Touch With Us",
      text:
        "Have a question or need support? Our team is ready to assist you with all your IT service needs",
      primaryLabel: "Contact Us",
      secondaryLabel: "Talk to Expert",
    },
   testimonial: {
      sectionTitle: "What Clients Say About Our Helpdesk",
      sectionSubtitle: "Trusted for fast response and reliable IT support.",
      name: "Robert Fox",
      role: "IT Manager",
      quote:
        "Their helpdesk team resolved our issues quickly and reduced downtime significantly.",
    },
  },

   "disaster-recovery": {
    hero: {
      image:heroDisasterRecovery,
      bullets: [
        "Backup strategy",
        "Recovery planning",
        "Downtime minimization",
        "Business continuity",
      ],
      desc:
        "Ensure business continuity with reliable disaster recovery planning.",
    },

    process: {
      title: "Prepared for the Unexpected",
      subtitle: "We ensure your systems recover quickly during disruptions.",
      leftCards: [
        {
          title: "Business Impact Analysis",
          text: "We identify critical systems and define recovery priorities based on business impact. This ensures faster recovery during unexpected disruptions.",
        },
        {
          title: "Recovery Strategy Design",
          text: "Customized disaster recovery strategies are designed to restore systems securely. Recovery objectives align with operational and compliance requirements.",
        },
      ],
      rightCards: [
        {
          title: "Implementation  & Testing",
          text: "Recovery solutions are implemented and tested periodically to validate effectiveness. Testing ensures readiness for real disaster scenarios.",
        },
        {
          title: "Ongoing Optimization",
          text: "Recovery plans are reviewed and updated as systems evolve. This ensures long-term resilience and business continuity.",
        },
      ],
    },

    twoColumn: {
      title: "Quality That Speaks Through Every Word",
      subtitle: "At Qaidyn Partners, we ensure every blog reflects deep expertise, strategic thinking, and actionable insights that drive real value for founders, leaders, and growing businesses.",
      items: [
        {
          title: "Insight-Driven Research",
          text: "Our content is built on verified data, industry trends, and real business challenges—ensuring every blog delivers clarity, relevance, and credibility.",
        },
        {
          title: "Strategic Storytelling",
          text: "We transform complex topics into simple, structured, and engaging narratives that help readers understand, learn, and apply ideas in their business journey.",
        },
        {
          title: "Action-Focused Outcomes",
          text: "Each blog concludes with practical steps, frameworks, and takeaways, empowering readers to make informed decisions and implement strategies confidently.",
        },
      ],
    },

    cta: {
      title: "Get in Touch With Us",
      text:
        "Have a question or need support? Our team is ready to assist you with all your IT service needs",
      primaryLabel: "Contact Us",
      secondaryLabel: "Talk to Expert",
    },
   testimonial: {
      sectionTitle: "What Clients Say About Our Helpdesk",
      sectionSubtitle: "Trusted for fast response and reliable IT support.",
      name: "Robert Fox",
      role: "IT Manager",
      quote:
        "Their helpdesk team resolved our issues quickly and reduced downtime significantly.",
    },
  },

   "ransomware-recovery": {
    hero: {
      image:heroRansomwareRecovery,
      bullets: [
        "Incident containment",
        "Data restoration",
        "Root cause analysis",
        "Security hardening",
      ],
      desc:
        "Rapid response and recovery solutions to minimize ransomware impact.",
    },

    process: {
      title: "Recover Faster, Strengthen Stronger",
      subtitle: "We help organizations bounce back from ransomware attacks.",
      leftCards: [
        {
          title: "Incident Assessment",
          text: "We analyze the ransomware incident to identify affected systems and data. This assessment defines the scope and recovery approach..",
        },
        {
          title: "Containment & Stabilization",
          text: "Infected systems are isolated immediately to prevent further spread. Security controls are enforced to stabilize the environment.",
        },
      ],
      rightCards: [
        {
          title: "Secure  Data Restoration",
          text: "Clean backups are restored after thorough validation. This ensures data integrity and safe resumption of operations.",
        },
        {
          title: "Post-Recovery Hardening",
          text: "Security controls are strengthened to prevent future attacks. Lessons learned are applied to enhance overall cyber resilience.",
        },
      ],
    },

    twoColumn: {
      title: "Quality That Speaks Through Every Word",
      subtitle: "At Qaidyn Partners, we ensure every blog reflects deep expertise, strategic thinking, and actionable insights that drive real value for founders, leaders, and growing businesses.",
      items: [
        {
          title: "Insight-Driven Research",
          text: "Our content is built on verified data, industry trends, and real business challenges—ensuring every blog delivers clarity, relevance, and credibility.",
        },
        {
          title: "Strategic Storytelling",
          text: "We transform complex topics into simple, structured, and engaging narratives that help readers understand, learn, and apply ideas in their business journey.",
        },
        {
          title: "Action-Focused Outcomes",
          text: "Each blog concludes with practical steps, frameworks, and takeaways, empowering readers to make informed decisions and implement strategies confidently.",
        },
      ],
    },

    cta: {
      title: "Get in Touch With Us",
      text:
        "Have a question or need support? Our team is ready to assist you with all your IT service needs",
      primaryLabel: "Contact Us",
      secondaryLabel: "Talk to Expert",
    },
   testimonial: {
      sectionTitle: "What Clients Say About Our Helpdesk",
      sectionSubtitle: "Trusted for fast response and reliable IT support.",
      name: "Robert Fox",
      role: "IT Manager",
      quote:
        "Their helpdesk team resolved our issues quickly and reduced downtime significantly.",
    },
  },

   "encryption": {
    hero: {
      image:heroEncryption,
      bullets: [
        "Data-at-rest encryption",
        "Data-in-transit encryption",
        "Key management",
        "Compliance-driven encryption",
      ],
      desc:
        "Protect sensitive data across systems, applications, and networks using industry-standard encryption techniques.",
    },

    process: {
      title: "Securing Data at Every Level",
      subtitle: "Our encryption services ensure that your critical business data remains protected, unreadable, and compliant at all times.",
      leftCards: [
        {
          title: "Data Classification & Assessment",
          text: "We identify sensitive data across applications, databases, endpoints, and cloud environments to determine encryption requirements.",
        },
        {
          title: "Encryption Strategy Design",
          text: "Based on business and compliance needs, we design encryption models for data at rest, in transit, and during processing.",
        },
      ],
      rightCards: [
        {
          title: "Secure  Implementation",
          text: "Encryption is implemented using trusted algorithms, secure key management, and access controls without impacting performance.",
        },
        {
          title: "Monitoring & Compliance Validation",
          text: "We continuously monitor encryption effectiveness and validate compliance with industry and regulatory standards.",
        },
      ],
    },

    twoColumn: {
      title: "Quality That Speaks Through Every Word",
      subtitle: "At Qaidyn Partners, we ensure every blog reflects deep expertise, strategic thinking, and actionable insights that drive real value for founders, leaders, and growing businesses.",
      items: [
        {
          title: "Insight-Driven Research",
          text: "Our content is built on verified data, industry trends, and real business challenges—ensuring every blog delivers clarity, relevance, and credibility.",
        },
        {
          title: "Strategic Storytelling",
          text: "We transform complex topics into simple, structured, and engaging narratives that help readers understand, learn, and apply ideas in their business journey.",
        },
        {
          title: "Action-Focused Outcomes",
          text: "Each blog concludes with practical steps, frameworks, and takeaways, empowering readers to make informed decisions and implement strategies confidently.",
        },
      ],
    },

    cta: {
      title: "Get in Touch With Us",
      text:
        "Have a question or need support? Our team is ready to assist you with all your IT service needs",
      primaryLabel: "Contact Us",
      secondaryLabel: "Talk to Expert",
    },
   testimonial: {
      sectionTitle: "What Clients Say About Our Helpdesk",
      sectionSubtitle: "Trusted for fast response and reliable IT support.",
      name: "Robert Fox",
      role: "IT Manager",
      quote:
        "Their helpdesk team resolved our issues quickly and reduced downtime significantly.",
    },
  },
};

export const servicesData = serviceList.map(({ category, slug, title }) => {
  const content = serviceContent[slug] || {};

  return {
    category,
    slug,
    title,

    hero: {
      ...baseHero,
      title,
      ...content.hero,
    },

    brands: { ...baseBrands },

    process: {
      ...baseProcess,
      title: content.process?.title || "",
      subtitle: content.process?.subtitle || "",

      leftCards: content.process?.leftCards
        ? content.process.leftCards.map((card, i) => ({
            ...(baseProcess.leftCards[i] || {}),
            ...card,
          }))
        : baseProcess.leftCards,

      rightCards: content.process?.rightCards
        ? content.process.rightCards.map((card, i) => ({
            ...(baseProcess.rightCards[i] || {}),
            ...card,
          }))
        : baseProcess.rightCards,
    },

    twoColumn: {
      ...baseTwoColumn,
      title: content.twoColumn?.title || "",
      subtitle: content.twoColumn?.subtitle || "",

      items: content.twoColumn?.items
        ? content.twoColumn.items.map((item, i) => ({
            ...(baseTwoColumn.items[i] || {}),
            ...item,
          }))
        : baseTwoColumn.items,
    },

    cta: {
      ...baseCta,
      ...content.cta,
    },

    related: {
      ...baseRelated,
      ...content.related,
    },

    testimonial: {
      ...baseTestimonial,
      ...content.testimonial,
    },
  };
});

