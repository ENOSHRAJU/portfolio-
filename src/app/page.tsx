import type { CSSProperties } from "react";
import { SkillShowcase } from "@/components/skill-showcase";
import { SiteNav } from "@/components/site-nav";
import styles from "./page.module.css";

const impactStats = [
  {
    value: "~3",
    label: "Years building enterprise-focused applications",
  },
  {
    value: "15-20%",
    label: "Fewer recurring incidents after root-cause-driven fixes",
  },
  {
    value: "25%",
    label: "Reduction in UI-related defects through cleaner integrations",
  },
  {
    value: "8.3/10",
    label: "Integrated dual degree academic record",
  },
];

const capabilityCards = [
  {
    title: "Production Reliability",
    body:
      "I trace failures through logs, request states, and business flows so fixes stay permanent instead of temporary.",
  },
  {
    title: "Full Stack Delivery",
    body:
      "My strongest work starts in Java and Spring Boot, then carries through React interfaces and API integration details.",
  },
  {
    title: "Enterprise Collaboration",
    body:
      "I work comfortably inside Agile delivery cycles with QA, product stakeholders, and Jira-managed sprint work.",
  },
];

const featuredProjects = [
  {
    kind: "Full Stack Project",
    title: "AI Image Generation Platform",
    description:
      "A full stack application built to generate AI-based images through external API integration, including Ghibli-style image generation support, multipart image input handling, and Dockerized delivery.",
    stack: ["ReactJS", "Java", "Spring Boot", "REST API", "Docker", "OpenFeign"],
    links: [
      {
        href: "https://ghibliart-frontned-1.onrender.com/",
        label: "Open Live Project",
      },
      {
        href: "https://github.com/ENOSHRAJU",
        label: "GitHub Profile",
      },
    ],
  },
  {
    kind: "Frontend Project",
    title: "Weather Website",
    description:
      "A frontend weather application that connects to an external API to fetch live weather data and present it in a clean, responsive interface.",
    stack: ["HTML", "CSS", "JavaScript", "Weather API", "Responsive UI"],
    links: [
      {
        href: "https://enoshraju.github.io/Weather-api/",
        label: "Open Live Project",
      },
      {
        href: "https://github.com/ENOSHRAJU",
        label: "GitHub Profile",
      },
    ],
  },
];

const experienceCards = [
  {
    company: "Tata Consultancy Services",
    role: "Java Full Stack Developer",
    period: "June 2023 - Present",
    location: "Hyderabad, India",
    accent: "#a4f782",
    stories: [
      {
        heading: "Healthcare enterprise workflows",
        body:
          "Built and supported Spring Boot services responsible for high-volume transactional records and billing-related flows. The work centered on validation-heavy processing, safer business transitions, and backend stability under real production pressure.",
      },
      {
        heading: "Incident reduction through investigation",
        body:
          "Followed logs, request traces, and failure patterns to isolate recurring issues, then shipped durable fixes that helped reduce repeat incidents by roughly 15-20% over time.",
      },
      {
        heading: "Internal application modernization",
        body:
          "Delivered Spring Boot REST APIs and React pages for employee-centric workflows, improving usability while tightening frontend-backend integration and reducing UI defects by around 25%.",
      },
    ],
    signals: [
      "Root cause analysis",
      "Business rule handling",
      "Spring Boot APIs",
      "React modernization",
      "QA collaboration",
    ],
  },
  {
    company: "Innomatics Research Labs",
    role: "Full Stack Intern",
    period: "Feb 2023 - Apr 2023",
    location: "Hyderabad, India",
    accent: "#58c4ff",
    stories: [
      {
        heading: "High-performing internship",
        body:
          "Selected among the top 10% for a full stack internship and worked on real web application delivery instead of only training exercises.",
      },
      {
        heading: "Practical application building",
        body:
          "Created web applications using HTML, CSS, JavaScript, REST APIs, Spring Boot, and database-backed features with a strong emphasis on hands-on implementation.",
      },
      {
        heading: "Recognized contribution",
        body:
          "Earned a Letter of Recommendation for backend and full stack work completed during the program.",
      },
    ],
    signals: [
      "Spring Boot",
      "REST APIs",
      "Frontend delivery",
      "Database features",
      "Fast learning",
    ],
  },
];

const navItems = [
  { id: "top", label: "Intro" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "project", label: "Project" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <SiteNav items={navItems} />

      <div className={styles.shell}>
        <section className={styles.hero} id="top">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Next.js Portfolio Experience</p>
            <h1>Java engineering with product instincts, cleaner UI, and enterprise calm.</h1>
            <p className={styles.heroText}>
              I build dependable backend systems with Spring Boot and REST APIs, then carry
              that same care into React interfaces, frontend integration, and production
              support. This version of my portfolio is built with Next.js to feel faster,
              more interactive, and more modern than a static resume page.
            </p>

            <div className={styles.heroActions}>
              <a
                className={styles.primaryAction}
                href="/resume/Cv_Enosh_Raju_2026.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View Resume
              </a>
              <a
                className={styles.secondaryAction}
                href="https://www.linkedin.com/in/enoshraju/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className={styles.secondaryAction}
                href="https://github.com/ENOSHRAJU"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className={styles.heroPanel}>
            <div className={styles.signalCard}>
              <span className={styles.signalLabel}>Current Snapshot</span>
              <h2>Tata Consultancy Services</h2>
              <p>
                Working across backend services, incident reduction, validation-heavy business
                rules, API delivery, and React-driven modernization inside enterprise systems.
              </p>
            </div>

            <div className={styles.statGrid}>
              {impactStats.map((stat) => (
                <article className={styles.statCard} key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} id="about">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>About</p>
            <h2>A full stack profile anchored in backend confidence.</h2>
          </div>

          <div className={styles.aboutGrid}>
            <article className={styles.panel}>
              <p>
                My strongest work happens where Java, Spring Boot, and practical product
                thinking meet. I enjoy building APIs that stay stable in production, reducing
                repeat incidents, and giving frontend experiences cleaner data flows and fewer
                edge-case surprises.
              </p>
              <p>
                I&apos;m comfortable moving between service design, request validation,
                debugging, database-backed business logic, React screens, and cross-team
                delivery within Agile engineering environments.
              </p>
            </article>

            <article className={`${styles.panel} ${styles.checklistPanel}`}>
              <h3>What I bring</h3>
              <div className={styles.bringList}>
              {capabilityCards.map((card) => (
                  <article className={styles.bringItem} key={card.title}>
                    <h4>{card.title}</h4>
                  <p>{card.body}</p>
                </article>
              ))}
              </div>
            </article>
          </div>
        </section>

        <section className={styles.section} id="skills">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Skills</p>
            <h2>Hover across the stack to see how each part fits my day-to-day work.</h2>
          </div>
          <SkillShowcase />
        </section>

        <section className={styles.section} id="experience">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Experience</p>
            <h2>Projects and teams where reliability mattered as much as feature delivery.</h2>
          </div>

          <div className={styles.experienceGrid}>
            {experienceCards.map((card) => (
              <article
                className={styles.experienceCard}
                key={card.company}
                style={{ "--card-accent": card.accent } as CSSProperties}
              >
                <div className={styles.experienceTop}>
                  <div>
                    <p className={styles.company}>{card.company}</p>
                    <h3>{card.role}</h3>
                  </div>
                  <div className={styles.experienceMeta}>
                    <span>{card.period}</span>
                    <span>{card.location}</span>
                  </div>
                </div>

                <div className={styles.storyColumns}>
                  {card.stories.map((story) => (
                    <article className={styles.storySnippet} key={story.heading}>
                      <h4>{story.heading}</h4>
                      <p>{story.body}</p>
                    </article>
                  ))}
                </div>

                <div className={styles.signalRow}>
                  {card.signals.map((signal) => (
                    <span key={signal}>{signal}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.featuredProjects}`} id="project">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Projects</p>
            <h2>Selected work across full stack delivery and frontend API integration.</h2>
          </div>

          <div className={styles.projectList}>
            {featuredProjects.map((project) => (
              <article className={styles.projectCard} key={project.title}>
                <div className={styles.projectCopy}>
                  <div>
                    <span className={styles.projectLabel}>{project.kind}</span>
                    <h3>{project.title}</h3>
                  </div>
                  <p>{project.description}</p>

                  <div className={styles.projectActions}>
                    {project.links.map((link, index) => (
                      <a
                        className={index === 0 ? styles.primaryAction : styles.secondaryAction}
                        href={link.href}
                        key={link.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div className={styles.projectStack}>
                  <p>Project Stack</p>
                  <div className={styles.tagList}>
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} id="education">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Education</p>
            <h2>Integrated engineering training with a solid academic track.</h2>
          </div>

          <article className={`${styles.panel} ${styles.educationCard}`}>
            <h3>Jawaharlal Nehru Technological University Hyderabad</h3>
            <p>Integrated Dual Degree (BTech + MTech)</p>
            <div className={styles.educationMeta}>
              <span>Aug 2017 - May 2022</span>
              <span>Hyderabad, India</span>
              <span>CGPA: 8.3 / 10</span>
            </div>
          </article>
        </section>

        <section className={styles.section} id="contact">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Contact</p>
            <h2>Let&apos;s build software that feels reliable to teams and smooth to users.</h2>
          </div>

          <div className={styles.contactGrid}>
            <article className={styles.panel}>
              <p>
                I&apos;m available for software engineering roles involving Java backend
                development, full stack product work, and enterprise application teams.
              </p>
              <div className={styles.contactLinks}>
                <a href="mailto:enoshkaligithi@gmail.com">enoshkaligithi@gmail.com</a>
                <a href="tel:+916300974830">+91 6300974830</a>
                <span>Hyderabad, India</span>
              </div>
            </article>

            <article className={`${styles.panel} ${styles.placeholderLinks}`}>
              <h3>Profile Links</h3>
              <p>
                You can reach me through my professional profiles and project links as well.
              </p>
              <div className={styles.placeholderList}>
                <a href="https://www.linkedin.com/in/enoshraju/" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a href="https://github.com/ENOSHRAJU" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
