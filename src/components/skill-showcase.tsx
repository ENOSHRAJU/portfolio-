"use client";

import { useState } from "react";
import type { CSSProperties, ReactElement, SVGProps } from "react";
import styles from "./skill-showcase.module.css";

type SkillItem = {
  accent: string;
  category: string;
  description: string;
  detail: string;
  icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
  label: string;
  signal: string;
  tools: string[];
};

const CodeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
    <path d="M8 7 3 12l5 5" />
    <path d="m16 7 5 5-5 5" />
    <path d="m14 4-4 16" />
  </svg>
);

const LayersIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
    <path d="m12 3 8 4.5-8 4.5L4 7.5 12 3Z" />
    <path d="m4 12 8 4.5 8-4.5" />
    <path d="m4 16.5 8 4.5 8-4.5" />
  </svg>
);

const ShieldIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
    <path d="M12 3 5 6v5c0 5 3.2 8.8 7 10 3.8-1.2 7-5 7-10V6l-7-3Z" />
    <path d="m9.5 12 1.7 1.7 3.8-4.2" />
  </svg>
);

const DatabaseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
    <ellipse cx="12" cy="5" rx="7" ry="3" />
    <path d="M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
    <path d="M5 12v7c0 1.7 3.1 3 7 3s7-1.3 7-3v-7" />
  </svg>
);

const FlowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
    <rect x="3" y="4" width="7" height="6" rx="1.5" />
    <rect x="14" y="14" width="7" height="6" rx="1.5" />
    <rect x="14" y="4" width="7" height="6" rx="1.5" />
    <path d="M10 7h4" />
    <path d="M17.5 10v4" />
    <path d="M10 7c0 4.5 7.5 1.5 7.5 7" />
  </svg>
);

const BoxIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
    <path d="m12 2 8 4.5v11L12 22 4 17.5v-11L12 2Z" />
    <path d="m12 12 8-4.5" />
    <path d="m12 12-8-4.5" />
    <path d="M12 12v10" />
  </svg>
);

const CloudIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
    <path d="M7 18a4 4 0 1 1 .8-7.9A5.5 5.5 0 0 1 18 11a3.5 3.5 0 1 1 .5 7H7Z" />
  </svg>
);

const PulseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
    <path d="M3 12h4l2-5 4 10 2-5h6" />
    <path d="M3 6h18" opacity="0.18" />
    <path d="M3 18h18" opacity="0.18" />
  </svg>
);

const skills: SkillItem[] = [
  {
    label: "Java & Spring Boot",
    category: "Core backend",
    description: "The backbone of my enterprise application work.",
    detail:
      "I use Java and Spring Boot to handle business logic, request validation, secure APIs, and backend workflows that need to remain dependable in production.",
    signal: "Secure, validation-heavy backend delivery",
    tools: ["Core Java", "Spring Boot", "Spring Security", "Maven"],
    accent: "#a4f782",
    icon: CodeIcon,
  },
  {
    label: "React & UI Delivery",
    category: "Frontend experience",
    description: "Modern interfaces tied closely to backend capability.",
    detail:
      "I build React-based pages for form flows, data views, and user-facing modernization work, with close attention to response handling and reducing UI defects.",
    signal: "Usability plus clean integration",
    tools: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    accent: "#58c4ff",
    icon: LayersIcon,
  },
  {
    label: "REST APIs & Security",
    category: "Service design",
    description: "Where clear contracts and safe behavior matter most.",
    detail:
      "My API work focuses on request validation, stable contracts, secure access, and giving frontend teams predictable response behavior across enterprise flows.",
    signal: "Reliable contracts between systems",
    tools: ["REST APIs", "Spring Security", "Swagger", "Postman"],
    accent: "#ffc979",
    icon: ShieldIcon,
  },
  {
    label: "MySQL & Hibernate",
    category: "Data layer",
    description: "Persistence that supports business rules instead of fighting them.",
    detail:
      "I work across relational data, persistence logic, and record lifecycle transitions, with care for accuracy in create, update, cancel, and finalize operations.",
    signal: "Business-aware data handling",
    tools: ["MySQL", "Hibernate", "JPA-style persistence"],
    accent: "#f58faa",
    icon: DatabaseIcon,
  },
  {
    label: "Microservices Thinking",
    category: "Architecture",
    description: "Breaking work into cleaner service responsibilities.",
    detail:
      "I'm familiar with microservices-style design and with separating responsibilities so services remain easier to reason about, debug, and evolve.",
    signal: "Bounded responsibilities and cleaner workflows",
    tools: ["Microservices", "Service boundaries", "API orchestration"],
    accent: "#9a8cff",
    icon: FlowIcon,
  },
  {
    label: "Docker Delivery",
    category: "Deployment readiness",
    description: "Consistent environments from development to deployment.",
    detail:
      "I've containerized frontend and backend applications using Docker and multi-stage builds to keep images cleaner and deployments more repeatable.",
    signal: "Environment consistency without friction",
    tools: ["Docker", "Multi-stage builds", "Container workflows"],
    accent: "#45d6c1",
    icon: BoxIcon,
  },
  {
    label: "AWS Familiarity",
    category: "Cloud exposure",
    description: "Comfortable working around modern deployment environments.",
    detail:
      "I'm familiar with AWS-based environments and with the deployment expectations that come with production-facing enterprise applications.",
    signal: "Cloud-aware engineering mindset",
    tools: ["AWS", "Deployment environments", "Operational awareness"],
    accent: "#ff9e54",
    icon: CloudIcon,
  },
  {
    label: "Tracing & Debugging",
    category: "Production support",
    description: "The part of engineering that keeps systems calm.",
    detail:
      "I use logs, workflow tracing, and tools like Zipkin and Postman to investigate failures, understand request paths, and turn recurring incidents into solved problems.",
    signal: "Faster investigation and steadier systems",
    tools: ["Zipkin", "Postman", "Log analysis", "Root cause analysis"],
    accent: "#ff6d6d",
    icon: PulseIcon,
  },
];

export function SkillShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSkill = skills[activeIndex];
  const ActiveIcon = activeSkill.icon;

  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          const isActive = index === activeIndex;

          return (
            <button
              className={styles.skillCard}
              key={skill.label}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              style={{ "--skill-accent": skill.accent } as CSSProperties}
              type="button"
              data-active={isActive}
            >
              <span className={styles.iconWrap}>
                <Icon className={styles.icon} />
              </span>
              <span className={styles.cardCopy}>
                <strong>{skill.label}</strong>
                <small>{skill.category}</small>
                <span>{skill.description}</span>
              </span>
            </button>
          );
        })}
      </div>

      <aside
        className={styles.detailPanel}
        style={{ "--detail-accent": activeSkill.accent } as CSSProperties}
      >
        <div className={styles.detailTop}>
          <span className={styles.detailEyebrow}>{activeSkill.category}</span>
          <div className={styles.detailIconWrap}>
            <ActiveIcon className={styles.detailIcon} />
          </div>
        </div>

        <h3>{activeSkill.label}</h3>
        <p>{activeSkill.detail}</p>

        <div className={styles.signalBlock}>
          <span className={styles.signalLabel}>Best Used For</span>
          <strong>{activeSkill.signal}</strong>
        </div>

        <div className={styles.toolCloud}>
          {activeSkill.tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </aside>
    </div>
  );
}
