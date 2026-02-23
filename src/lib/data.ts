export const siteConfig = {
  name: "Harshvardhan Singh Jadon",
  shortName: "Harsh",
  title: "DevOps & Platform Engineer",
  description:
    "DevOps & Platform Engineer with 4+ years of experience building and operating cloud-native platforms across AWS and Azure. Currently expanding into Generative AI, LLM infrastructure, and MLOps.",
  domain: "jadonharsh.in",
  email: "jadonharsh109@gmail.com",
  location: "Indore, Madhya Pradesh, India",
  company: "howie.systems",
  resumeUrl: "#",
  social: {
    github: "https://github.com/jadonharsh109",
    linkedin: "https://www.linkedin.com/in/jadonharsh/",
    upwork: "https://www.upwork.com/freelancers/jadonharsh",
    discord: "https://discord.com/users/719570015099289701",
    instagram: "https://www.instagram.com/jadonharsh_/",
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
  { value: "1688+", label: "GitHub Contributions" },
  { value: "3", label: "Certifications" },
];

export const aboutParagraphs = [
  "I'm Harshvardhan Singh Jadon — a DevOps & Platform Engineer with 4+ years of experience building and operating cloud-native platforms across AWS and Microsoft Azure. Currently at howie.systems, I architect multi-tenant SaaS platforms with FastAPI, Keycloak, and Kubernetes. I also freelance for multiple clients including Eigenkor (Houston) and Seentech (Jeddah).",
  "Skilled in Kubernetes, Terraform (IaC), CI/CD, GitOps, and cloud security, I support scalable microservices and distributed systems. Experienced in Python-based backend development, automation, and observability-driven operations to improve deployment speed and platform reliability.",
  "Currently expanding into Generative AI, LLM infrastructure, and MLOps with a focus on production-ready AI systems — integrating vector databases, embedding pipelines, and workflow orchestration into modern cloud platforms.",
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
    role: "Engineering (Freelancing)",
    company: "howie.systems",
    location: "Vienna (Remote)",
    period: "Sep 2025 – Present",
    description:
      "Architecting a multi-tenant SaaS platform with FastAPI, Keycloak SSO, and Kubernetes on Azure.",
    highlights: [
      "Built multi-tenant auth platform with schema-per-tenant PostgreSQL isolation, MinIO, Qdrant, and Redis",
      "Developed API Gateway with JWT auth, RBAC, circuit breakers, distributed tracing, and Prometheus monitoring",
      "Delivered scalable document ingestion platform with SharePoint OAuth, VPN proxy, and Temporal workflows",
      "Provisioned Azure infra (AKS, ACR, Key Vault, PostgreSQL) with Terraform and GitHub Actions CI/CD",
    ],
    technologies: [
      "FastAPI",
      "Keycloak",
      "Terraform",
      "Azure AKS",
      "Temporal",
      "PostgreSQL",
    ],
  },
  {
    role: "DevOps Manager (Freelancing)",
    company: "Eigenkor",
    location: "Houston (Remote)",
    period: "Mar 2025 – Present",
    description:
      "Leading DevOps and cloud operations for a multi-product fintech ecosystem.",
    highlights: [
      "Architected serverless EC2 scheduling with Lambda, API Gateway & EventBridge, reducing manual ops by ~95%",
      "Lowered trading order execution latency by ~73% through Redis caching and async queue processing",
      "Containerized and coordinated 15+ microservices using Docker, Compose, and GitHub Actions CI/CD",
      "Directed end-to-end AWS infrastructure with Terraform and optimized multi-stage Docker builds",
    ],
    technologies: [
      "AWS",
      "Terraform",
      "Docker",
      "GitHub Actions",
      "Redis",
      "Lambda",
    ],
  },
  {
    role: "DevOps Engineer (Freelancing)",
    company: "Seentech.sa",
    location: "Jeddah (Remote)",
    period: "Mar 2026 – May 2026",
    description:
      "Engineered reusable Terraform IaC modules and GitOps-driven CI/CD for a multi-environment platform.",
    highlights: [
      "Built reusable Terraform modules for VPC, compute, databases, LB, DNS with AWS WAF & CloudTrail",
      "Established GitOps CI/CD with GitHub Actions, Helm, multi-arch Docker builds, and App-of-Apps model",
      "Maintained custom Helm charts for 6+ microservices with HPA, Ingress, and ServiceAccounts",
      "Deployed centralized observability stack with distributed tracing, metrics, and CloudWatch alarms",
    ],
    technologies: [
      "Terraform",
      "AWS",
      "Helm",
      "GitHub Actions",
      "Kubernetes",
      "OpenVPN",
    ],
  },
  {
    role: "Analyst (Full Time) — Serving Notice",
    company: "HCLTech",
    location: "Lucknow (Onsite)",
    period: "Dec 2022 – Present",
    description:
      "Administered enterprise Active Directory infrastructure supporting 1M+ users in healthcare.",
    highlights: [
      "Maintained HIPAA compliance while achieving 95% SLA-based request resolution",
      "Managed AD operations including users, security groups, DNS, Group Policy, and patch management",
      "Improved compliance visibility using Active Directory, Splunk, and ServiceNow",
    ],
    technologies: [
      "Active Directory",
      "Splunk",
      "ServiceNow",
      "Group Policy",
      "DNS",
      "ITIL",
    ],
  },
  {
    role: "Freelance DevOps Engineer",
    company: "Upwork",
    location: "Remote",
    period: "Sep 2023 – Present",
    description:
      "Delivering infrastructure automation and cloud solutions to global clients. Top Rated freelancer (Top 10%).",
    highlights: [
      "Streamlined infra provisioning with Terraform across AWS Organizations, eliminating ~90% manual setup",
      "Delivered scalable AWS architectures reducing deployment time by ~50%",
      "Implemented SOC 2 controls with Vanta, achieving full audit readiness",
    ],
    technologies: [
      "AWS",
      "Terraform",
      "EKS",
      "Docker",
      "Helm",
      "Ansible",
    ],
  },
];

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
