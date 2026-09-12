export const siteConfig = {
  name: "Harshvardhan Singh Jadon",
  shortName: "Harsh",
  title: "DevOps & Platform Engineer",
  description:
    "DevOps & Platform Engineer with 4+ years across healthcare, fintech, and GenAI infrastructure — AWS, Azure, Kubernetes, Terraform, GitOps, and SRE. Building Smriti, an offline-first photo library, on the side.",
  domain: "jadonharsh.in",
  email: "jadonharsh109@gmail.com",
  location: "Indore, Madhya Pradesh, India",
  company: "iHeal Information Technology LLC",
  resumeUrl: "#",
  social: {
    github: "https://github.com/jadonharsh109",
    linkedin: "https://www.linkedin.com/in/jadonharsh/",
    upwork: "https://www.upwork.com/freelancers/jadonharsh",
    discord: "https://discord.com/users/719570015099289701",
    instagram: "https://www.instagram.com/jadonharsh109/",
  },
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "30+", label: "Upwork Projects" },
  { value: "2,580+", label: "GitHub Contributions" },
  { value: "3", label: "Certifications" },
];

export const aboutParagraphs = [
  "I'm Harshvardhan Singh Jadon — a DevOps & Platform Engineer with 4+ years in infrastructure, three of them running Kubernetes, Terraform, and GitOps across Azure and AWS. Currently the sole platform owner for iHeal, a regulated UAE healthcare product, leading its AWS-to-Azure migration — before that, four years at HCLTech, plus contract stints as the sole DevOps engineer for startups in fintech and GenAI.",
  "In my own time I build things I actually use. Smriti is an offline photo library — face recognition, geocoding, and search, entirely on-device. Part of a broader move into Generative AI and on-device ML, alongside smaller experiments like Advect.",
];

export interface Skill {
  name: string;
  icon: string;
  category: string;
}

export const skillCategories = [
  {
    title: "Cloud & Infrastructure",
    skills: [
      "AWS",
      "Microsoft Azure",
      "DigitalOcean",
      "Terraform",
      "Terraform Cloud",
      "Ansible",
    ],
  },
  {
    title: "Containers & Orchestration",
    skills: [
      "Docker",
      "Kubernetes (EKS/AKS)",
      "Helm",
      "Istio",
      "kOps",
      "MicroK8s",
    ],
  },
  {
    title: "CI/CD & GitOps",
    skills: [
      "GitHub Actions",
      "GitLab CI",
      "Jenkins",
      "Argo CD",
      "AWS DevOps Tools",
      "Temporal",
    ],
  },
  {
    title: "Security & Compliance",
    skills: [
      "Kyverno",
      "Vanta",
      "Prowler",
      "Trivy",
      "SonarQube",
      "AWS WAF",
    ],
  },
  {
    title: "Observability & Monitoring",
    skills: [
      "Prometheus",
      "Grafana",
      "Loki",
      "EFK Stack",
      "Splunk",
      "CloudWatch",
    ],
  },
  {
    title: "Backend & Development",
    skills: [
      "Python",
      "FastAPI",
      "Node.js",
      "Next.js",
      "PostgreSQL",
      "Redis",
    ],
  },
  {
    title: "AI/ML & On-Device",
    skills: [
      "ONNX Runtime",
      "Tauri",
      "Face Recognition",
      "SQLite",
      "Generative AI",
      "MLOps",
    ],
  },
];

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    role: "DevOps & Platform Engineer",
    company: "iHeal Information Technology LLC",
    location: "Dubai, UAE (Remote)",
    period: "Apr 2026 – Present",
    description:
      "Sole platform owner for a regulated UAE healthcare product, leading its AWS-to-Azure migration.",
    highlights: [
      "Led an AWS-to-Azure migration for UAE health-data residency in a single planned cutover",
      "Architected the Azure landing zone as IaC — Terraform, 8 isolated stacks, zero static credentials",
    ],
    technologies: ["Azure", "AKS", "Terraform", "Entra ID", "GitHub Actions"],
  },
  {
    role: "Analyst, Infrastructure, Identity & Automation",
    company: "HCLTech",
    location: "Lucknow, India (Onsite)",
    period: "Dec 2022 – Mar 2026",
    description:
      "HIPAA-regulated Windows and Linux estate on AWS and on-premises for Tenet Healthcare, Dallas.",
    highlights: [
      "Automated operations across 300+ servers, cutting manual effort 40%",
      "Managed identity for 1M+ users — Active Directory, Entra ID, RBAC",
    ],
    technologies: ["AWS", "Active Directory", "Entra ID", "Splunk", "ServiceNow"],
  },
  {
    role: "Platform Engineer (Contract)",
    company: "Howie FlexCo",
    location: "Vienna, Austria (Remote)",
    period: "2025 · alongside HCLTech",
    description:
      "Built observability and release discipline for a GenAI startup's multi-tenant SaaS platform.",
    highlights: [
      "Built the observability stack from scratch — Prometheus, Grafana, Loki, Jaeger, 80 alert rules",
      "Owned release management across 20 pipelines — 49 releases in 90 days",
    ],
    technologies: ["Azure", "AKS", "Terraform", "Prometheus", "Grafana"],
  },
  {
    role: "DevOps Engineer (Contract) — Sole Owner",
    company: "eigenKOR",
    location: "Houston, USA (Remote)",
    period: "2025 · alongside HCLTech",
    description: "Sole DevOps owner for a fintech startup running two trading products.",
    highlights: [
      "Built the AWS estate from scratch in Terraform for 15+ microservices",
      "Cut order execution latency 73% and monthly AWS cost 40%",
    ],
    technologies: ["AWS", "Terraform", "Redis", "Docker"],
  },
  {
    role: "DevOps Engineer (Contract)",
    company: "Seentech.sa",
    location: "Jeddah, Saudi Arabia (Remote)",
    period: "Mar 2025 – Present",
    description:
      "Ongoing GitOps-driven infrastructure work for a SaaS platform, alongside HCLTech.",
    highlights: [
      "Built reusable Terraform modules for VPC, compute, databases, and DNS",
      "Established GitOps CI/CD with GitHub Actions, Helm, and an App-of-Apps model",
    ],
    technologies: ["Terraform", "AWS", "Helm", "GitHub Actions", "Kubernetes"],
  },
  {
    role: "TechBee Scholar & Intern",
    company: "HCLTech",
    location: "Lucknow, India (Onsite)",
    period: "Dec 2021 – Dec 2022",
    description:
      "Foundational infrastructure program — systems administration and networking.",
    highlights: [
      "Linux/Windows administration, shell scripting, and virtualization",
      "LAN/WAN/VPN routing (OSPF, BGP)",
    ],
    technologies: ["Linux", "Windows Server", "Bash", "Networking"],
  },
];

export interface FlagshipProject {
  name: string;
  sanskrit: string;
  meaning: string;
  tagline: string;
  description: string;
  highlight: string;
  features: string[];
  version: string;
  license: string;
  platforms: string[];
  technologies: string[];
  github: string;
  homepage?: string;
  year: string;
}

export const flagshipProject: FlagshipProject = {
  name: "Smriti",
  sanskrit: "स्मृति",
  meaning: "that which is remembered",
  tagline: "An offline photo library that actually remembers",
  description:
    "A 2TB drive with 12,000 photos I hadn't opened in two years pushed me to build Smriti — it turns the folders already on your drives into a real library: a timeline, natural-language search, faces grouped into people, places from GPS, and auto-generated trip recaps.",
  highlight:
    "Everything computed on your own machine. No cloud, no account, nothing uploaded — ever.",
  features: [
    "Natural-language search — \"sunset over the sea\" — answered by an on-device vision model",
    "Moments: auto-generated trip recap videos with generated music, entirely offline",
    "On-device face recognition (SCRFD + ArcFace), clustered into people you can name",
    "Offline reverse geocoding on a tile-server-free interactive globe",
    "Duplicate detection (exact + perceptual hash) with safe cleanup to Trash",
    "Google Takeout repair — restores the dates & GPS Google strips out, nothing re-encoded",
    "Headless/CLI server mode — reach your library from any device on your LAN",
    "14 themes, a wandering desktop companion, and a passcode-locked section",
  ],
  version: "v2.6.0",
  license: "AGPL-3.0",
  platforms: ["macOS", "Windows"],
  technologies: [
    "FastAPI",
    "React",
    "Tauri",
    "SQLite (WAL)",
    "ONNX Runtime",
    "MobileCLIP",
    "SCRFD + ArcFace",
  ],
  github: "https://github.com/jadonharsh109/smriti.photos",
  homepage: "https://smriti.jadonharsh.in",
  year: "2026",
};

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  highlights: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "Advect",
    description:
      "Describe an IT or system flow in plain English and get back an animated diagram of the traffic moving through it — powered by a local model, no cloud, no API key.",
    technologies: ["Python", "Local LLM", "Diagramming", "CLI"],
    github: "https://github.com/jadonharsh109/Advect",
    highlights: [
      "Plain-English flow → animated GIF in ~1 minute",
      "Runs entirely on-device, no API key required",
      "Open source",
    ],
    featured: true,
  },
  {
    title: "Multi-Tenant SaaS Platform",
    description:
      "Production-grade multi-tenant authentication and tenant management platform with schema-per-tenant isolation, API Gateway, and document ingestion pipelines.",
    technologies: ["FastAPI", "Keycloak", "PostgreSQL", "Qdrant", "Temporal", "Azure AKS"],
    highlights: [
      "Schema-per-tenant PostgreSQL isolation",
      "JWT auth with RBAC & circuit breakers",
      "Temporal workflow orchestration",
    ],
    featured: true,
  },
  {
    title: "Serverless EC2 Scheduling Platform",
    description:
      "AWS Lambda-based serverless platform for CRON-based EC2 lifecycle automation with tag filtering and timezone awareness, reducing manual cloud operations by ~95%.",
    technologies: ["AWS Lambda", "API Gateway", "EventBridge", "Terraform", "Python"],
    highlights: [
      "~95% reduction in manual cloud ops",
      "CRON-based lifecycle automation",
      "Tag filtering & timezone awareness",
    ],
    featured: true,
  },
  {
    title: "Fintech Trading Infrastructure",
    description:
      "End-to-end AWS cloud infrastructure and DevOps operations for a multi-product fintech ecosystem with webhook-driven automated trading and real-time PnL monitoring.",
    technologies: ["AWS", "Docker", "Redis", "Django", "GitHub Actions", "Nginx"],
    highlights: [
      "~73% lower order execution latency",
      "15+ containerized microservices",
      "Real-time PnL monitoring",
    ],
    featured: true,
  },
  {
    title: "GitOps CI/CD Platform",
    description:
      "GitOps-driven CI/CD platform using GitHub Actions and Helm with multi-architecture Docker builds, automated semantic versioning, and App-of-Apps Kubernetes deployments.",
    technologies: ["GitHub Actions", "Helm", "Kubernetes", "Terraform", "OpenVPN", "AWS WAF"],
    highlights: [
      "Multi-arch Docker builds",
      "App-of-Apps deployment model",
      "Centralized observability stack",
    ],
    featured: true,
  },
  {
    title: "AWS Zero-Trust Architecture",
    description:
      "Zero-Trust Kubernetes security architecture enforcing strict RBAC, least-privilege access, Kyverno policies, and Calico network micro-segmentation on AWS EKS.",
    technologies: ["AWS EKS", "Terraform", "Kyverno", "Calico", "Kubernetes"],
    github: "https://github.com/jadonharsh109/aws-zero-trust",
    highlights: [
      "~90% reduced attack surface",
      "Full Kyverno policy compliance",
      "Default-deny network controls",
    ],
    featured: true,
  },
  {
    title: "Upwork Infrastructure Projects",
    description:
      "Streamlined infrastructure provisioning using Terraform and AWS CloudFormation across AWS Organizations for global clients, with SOC 2 compliance via Vanta.",
    technologies: ["Terraform", "AWS", "VPC", "ECS", "CloudFront", "Vanta"],
    highlights: [
      "~90% less manual setup effort",
      "~50% faster deployment time",
      "Full SOC 2 audit readiness",
    ],
    featured: true,
  },
];

export interface UpworkReview {
  clientName: string;
  country: string;
  rating: number;
  review: string;
  project: string;
  date: string;
}

export const upworkReviews: UpworkReview[] = [
  {
    clientName: "Santosh V.",
    country: "R V Agency",
    rating: 5,
    review:
      "Harsh is a true gem. He is an expert DevOps Admin who is responsive and reliable. His contributions have made several mission critical projects progress smoothly. Outstanding team member — his ability to sort through complexity and simplify them enables all team members to be more productive. Simply Indispensable.",
    project: "DevOps & Cloud Management",
    date: "Nov 2025",
  },
  {
    clientName: "Tapp Fintech",
    country: "Tapp",
    rating: 5,
    review:
      "Harsh did an outstanding job designing and implementing a new infrastructure setup tailored to our needs. His deep expertise in cloud architecture and DevOps practices led to a 20% cost reduction, while improving reliability. Communication was clear and proactive throughout. Highly recommended for any high-impact infrastructure work.",
    project: "AWS DevOps – Terraform Automation",
    date: "May 2025",
  },
  {
    clientName: "John Smith",
    country: "Matt",
    rating: 5,
    review:
      "I had a medium-size terraform project that needed to be completed and Harshvardhan was completely up to the task. His code was great and the project was completed in time. I would highly recommend Harshvardhan for any terraform or devops related work.",
    project: "Terraform Project",
    date: "May 2025",
  },
  {
    clientName: "Naga T.",
    country: "Numax",
    rating: 5,
    review:
      "Harsh is great at what he does.",
    project: "AWS + Terraform",
    date: "Jun 2024",
  },
  {
    clientName: "Muhammad A.",
    country: "Scarlet Enterprise",
    rating: 5,
    review:
      "He is professional and overall experience is good. Recommended!",
    project: "Kubernetes Environment Setup",
    date: "Dec 2024",
  },
  {
    clientName: "Nadia T.",
    country: "Nadina Tarnovska",
    rating: 4.9,
    review:
      "Great work deploying our application on AWS. Professional and delivered on time.",
    project: "App Deployment using AWS",
    date: "Feb 2025",
  },
];

export interface Certification {
  title: string;
  issuer: string;
  icon: string;
  inProgress?: boolean;
}

export const certifications: Certification[] = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    icon: "aws",
  },
  {
    title: "SC-900: Security, Compliance & Identity",
    issuer: "Microsoft",
    icon: "microsoft",
  },
  {
    title: "AZ-900: Azure Fundamentals",
    issuer: "Microsoft",
    icon: "microsoft",
  },
  {
    title: "Terraform Associate",
    issuer: "HashiCorp",
    icon: "terraform",
    inProgress: true,
  },
  {
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "Linux Foundation / CNCF",
    icon: "kubernetes",
    inProgress: true,
  },
];

export interface Achievement {
  title: string;
  description: string;
  organization: string;
}

export const achievements: Achievement[] = [
  {
    title: "Performance of the Month",
    description: "Recognized for outstanding performance in April 2023 at HCLTech.",
    organization: "HCLTech",
  },
  {
    title: "Top Rated Freelancer (Top 10%)",
    description:
      "Achieved Top Rated status on Upwork, placing in the top 10% of freelancers on the platform.",
    organization: "Upwork",
  },
];
