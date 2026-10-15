import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Compass,
  Cpu,
  Github,
  GraduationCap,
  Linkedin,
  Menu,
  Plane,
  Radio,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import fighterImage from "@/assets/skyward-fighter.jpg";

const sections = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "journey", label: "Learning" },
  { id: "projects", label: "Projects" },
  { id: "milestones", label: "Milestones" },
  { id: "interests", label: "Interests" },
  { id: "contact", label: "Contact" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Manav Gautam | Project Skyward — Aviation & Technology" },
      {
        name: "description",
        content:
          "Meet Manav Gautam, a first-year computer science student with a passion for aviation, technology, and the journey toward becoming a fighter pilot.",
      },
      {
        property: "og:title",
        content: "Manav Gautam | Project Skyward — Aviation & Technology",
      },
      {
        property: "og:description",
        content:
          "A personal portfolio charting a computer science student's ambitions, early projects, and love of aviation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800&family=DM+Sans:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [openProject, setOpenProject] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setActiveSection(entry.target.id);
          entry.target.classList.add("is-visible");
        });
      },
      { rootMargin: "-18% 0px -55% 0px", threshold: 0 },
    );

    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="skyward-page">
      <div className="boot-screen" aria-hidden="true">
        <div className="boot-mark"><Plane size={22} strokeWidth={1.5} /></div>
        <span>PROJECT SKYWARD</span>
        <div className="boot-line"><span /></div>
      </div>

      <div className="scroll-progress" aria-hidden="true" />

      <header className="site-header">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Project Skyward home">
          <span className="wordmark-icon"><Plane size={17} strokeWidth={1.7} /></span>
          <span className="wordmark-copy"><strong>SKYWARD</strong><span>PERSONAL FLIGHT LOG</span></span>
        </a>

        <Button
          className="menu-toggle"
          variant="ghost"
          size="icon"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </Button>

        <nav
          id="primary-navigation"
          className={`site-nav${menuOpen ? " is-open" : ""}`}
          aria-label="Main navigation"
        >
          {sections.map(({ id, label }, index) => (
            <a
              className="nav-link"
              aria-current={activeSection === id ? "location" : undefined}
              href={`#${id}`}
              onClick={closeMenu}
              key={id}
            >
              <span className="nav-number">0{index + 1}</span>{label}
            </a>
          ))}
        </nav>
        <a className="header-status" href="#contact">
          <span className="status-light" /> OPEN TO CONNECTION <ArrowUpRight size={13} />
        </a>
      </header>

      <section className="hero" id="home" aria-labelledby="hero-title">
        <img
          className="hero-image"
          src={fighterImage}
          alt="A modern fighter aircraft flying above clouds at sunrise"
          width={1792}
          height={1024}
          fetchPriority="high"
        />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />

        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> PERSONAL PORTFOLIO <span className="eyebrow-separator">/</span> JAIPUR, INDIA</div>
          <h1 id="hero-title">MANAV<br /><span>GAUTAM</span></h1>
          <div className="hero-roles">
            <p><span className="role-mark" /> ASPIRING FIGHTER PILOT</p>
            <p><span className="role-mark role-mark-blue" /> B.TECH COMPUTER SCIENCE STUDENT</p>
          </div>
          <p className="hero-tagline">Driven by dreams.<br />Guided by discipline.<br /><span>Inspired by the skies.</span></p>
          <div className="hero-actions">
            <Button asChild size="lg" className="button-primary">
              <a href="#about">Explore my journey <ArrowDownRight /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="button-quiet">
              <a href="#projects">View projects <ArrowRight /></a>
            </Button>
          </div>
        </div>

        <div className="flight-panel" aria-label="Personal journey navigation">
          <div className="flight-panel-head"><span><Radio size={13} /> FLIGHT LOG</span><span className="flight-live"><i /> ACTIVE</span></div>
          <a className="radar-link" href="#about" aria-label="Navigate to About Manav">
            <span className="radar-gridline" /><span className="radar-sweep" />
            <span className="radar-center"><Plane size={16} /></span>
            <i className="radar-ping ping-one" /><i className="radar-ping ping-two" />
          </a>
          <div className="flight-panel-bottom"><span>MISSION</span><strong>PERSONAL GROWTH</strong></div>
        </div>

        <div className="hero-coordinate"><span>01</span><span className="hero-coordinate-rule" /> A JOURNEY IN PROGRESS</div>
        <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
        <div className="hero-corner hero-corner-top" aria-hidden="true" />
        <div className="hero-corner hero-corner-bottom" aria-hidden="true" />
      </section>

      <section className="identity-strip" aria-label="Portfolio summary">
        <div><span className="strip-label">CURRENT POSITION</span><strong>First-year student</strong></div>
        <div><span className="strip-label">FIELD OF STUDY</span><strong>Computer science</strong></div>
        <div><span className="strip-label">NORTH STAR</span><strong>Inspired by aviation</strong></div>
        <div className="strip-signal"><span className="strip-signal-dot" /> LEARNING IN MOTION</div>
      </section>

      <section className="content-section about-section" id="about" data-reveal aria-labelledby="about-title">
        <div className="section-inner about-layout">
          <div className="section-label"><span>01</span><span className="section-label-rule" /> ABOUT ME</div>
          <div className="about-copy">
            <p className="section-kicker">A student with his eyes on the horizon</p>
            <h2 id="about-title">CURIOUS BY NATURE.<br /><span>DRIVEN BY PURPOSE.</span></h2>
            <p className="body-copy">I’m Manav Gautam, a first-year B.Tech Computer Science Engineering student at JECRC University, Jaipur. I’m drawn to the places where aviation, technology, and innovation meet—and to the steady work it takes to turn a big ambition into a meaningful journey.</p>
            <p className="body-copy">Becoming a fighter pilot is my ultimate dream. Discipline, determination, leadership, and a commitment to keep learning guide the path I’m building, one step at a time.</p>
            <div className="value-list"><span>DISCIPLINE</span><i /><span>DETERMINATION</span><i /><span>CONTINUOUS LEARNING</span></div>
          </div>
          <div className="about-aside">
            <div className="aside-index"><Compass size={19} /><span>PERSONAL FLIGHT PLAN</span></div>
            <div className="aside-quote">“A clear sense of direction. A willingness to keep learning.”</div>
            <div className="aside-signature"><span className="signature-line" /> MANAV GAUTAM</div>
            <div className="aside-tricolor" aria-hidden="true"><i /><i /><i /></div>
          </div>
        </div>
      </section>

      <section className="content-section education-section" id="education" data-reveal aria-labelledby="education-title">
        <div className="section-inner">
          <div className="section-heading-row">
            <div><div className="section-label"><span>02</span><span className="section-label-rule" /> EDUCATION</div><p className="section-kicker">The foundations so far</p><h2 className="section-title" id="education-title">THE LEARNING<br /><span>CONTINUES.</span></h2></div>
            <div className="section-heading-aside"><GraduationCap size={22} /><span>STUDENT RECORD</span><span>JAIPUR · INDIA</span></div>
          </div>
          <div className="education-timeline">
            <div className="timeline-entry">
              <span className="timeline-date">2026 — PRESENT</span>
              <span className="timeline-marker"><i /></span>
              <div className="timeline-copy"><span className="timeline-status">CURRENT STUDIES</span><h3>JECRC University</h3><p>B.Tech Computer Science Engineering (Core)</p><span className="timeline-location">First year · Jaipur</span></div>
              <span className="timeline-icon"><Cpu size={19} /></span>
            </div>
            <div className="timeline-entry">
              <span className="timeline-date">2024 — 2026</span>
              <span className="timeline-marker"><i /></span>
              <div className="timeline-copy"><span className="timeline-status timeline-status-muted">SCHOOL EDUCATION</span><h3>SVVM Public School</h3><p>Class 12 · 2026 &nbsp; / &nbsp; Class 10 · 2024</p><span className="timeline-location">School education</span></div>
              <span className="timeline-icon"><GraduationCap size={19} /></span>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section journey-section" id="journey" data-reveal aria-labelledby="journey-title">
        <div className="section-inner">
          <div className="section-heading-row journey-heading">
            <div><div className="section-label"><span>03</span><span className="section-label-rule" /> MY LEARNING JOURNEY</div><p className="section-kicker">Early days. Open horizons.</p><h2 className="section-title" id="journey-title">EVERY EXPERT<br /><span>STARTS SOMEWHERE.</span></h2></div>
            <p className="journey-intro">I’m beginning my technical learning journey. Right now, I’m interested in exploring programming fundamentals, building a strong foundation in computer science, and discovering what I can create.</p>
          </div>
          <div className="journey-steps">
            <article className="journey-step"><span className="step-number">01</span><span className="step-icon"><Compass size={19} /></span><span className="step-state">FOUNDATION · UNDERWAY</span><h3>Explore the fundamentals</h3><p>Get curious about programming logic and how computer science ideas fit together.</p></article>
            <article className="journey-step"><span className="step-number">02</span><span className="step-icon"><Cpu size={19} /></span><span className="step-state">PRACTICE · IN PROGRESS</span><h3>Learn by making</h3><p>Try small, practical ideas and keep building confidence through hands-on exploration.</p></article>
            <article className="journey-step"><span className="step-number">03</span><span className="step-icon"><Sparkles size={19} /></span><span className="step-state">NEXT · AHEAD</span><h3>Keep widening the view</h3><p>Discover new tools, ask better questions, and grow one thoughtful step at a time.</p></article>
          </div>
          <p className="journey-note"><span className="status-light" /> THIS IS A LEARNING JOURNEY — NOT A CLAIM OF MASTERY</p>
        </div>
      </section>

      <section className="content-section projects-section" id="projects" data-reveal aria-labelledby="projects-title">
        <div className="section-inner">
          <div className="section-heading-row">
            <div><div className="section-label"><span>04</span><span className="section-label-rule" /> SELECTED PROJECTS</div><p className="section-kicker">Ideas, explored hands-on</p><h2 className="section-title" id="projects-title">SMALL BUILDS.<br /><span>REAL CURIOSITY.</span></h2></div>
            <span className="project-count"><span>02</span> PROJECTS</span>
          </div>
          <div className="project-list">
            <article className={`project-item${openProject === "fitness" ? " project-open" : ""}`}>
              <div className="project-index">01 <span>PERSONAL PROJECT</span></div>
              <div className="project-main"><h3>Fitness Application</h3><p>A fitness-related application developed with the assistance of Python-based tools.</p><div className="project-tags"><span>FITNESS</span><span>EARLY EXPLORATION</span></div>{openProject === "fitness" && <p className="project-detail">A first project exploring how Python-based tools can support a practical fitness idea.</p>}</div>
              <Button className="project-toggle" variant="ghost" size="icon" aria-label={openProject === "fitness" ? "Close Fitness Application details" : "Show Fitness Application details"} aria-expanded={openProject === "fitness"} onClick={() => setOpenProject(openProject === "fitness" ? null : "fitness")}>{openProject === "fitness" ? <X /> : <ArrowUpRight />}</Button>
            </article>
            <article className={`project-item${openProject === "skyward" ? " project-open" : ""}`}>
              <div className="project-index">02 <span>PERSONAL PROJECT</span></div>
              <div className="project-main"><h3>Project Skyward</h3><p>An AI-assisted personal portfolio sharing my education, ambitions, interests, and early projects.</p><div className="project-tags"><span>PORTFOLIO</span><span>DESIGN &amp; TECHNOLOGY</span></div>{openProject === "skyward" && <p className="project-detail">A personal space for the journey: what I’m learning, what inspires me, and where I hope to go.</p>}</div>
              <Button className="project-toggle" variant="ghost" size="icon" aria-label={openProject === "skyward" ? "Close Project Skyward details" : "Show Project Skyward details"} aria-expanded={openProject === "skyward"} onClick={() => setOpenProject(openProject === "skyward" ? null : "skyward")}>{openProject === "skyward" ? <X /> : <ArrowUpRight />}</Button>
            </article>
          </div>
        </div>
      </section>

      <section className="content-section milestones-section" id="milestones" data-reveal aria-labelledby="milestones-title">
        <div className="section-inner milestones-layout">
          <div><div className="section-label"><span>05</span><span className="section-label-rule" /> MILESTONES</div><p className="section-kicker">An honest record, as it grows</p><h2 className="section-title" id="milestones-title">ROOM FOR<br /><span>WHAT’S NEXT.</span></h2></div>
          <div className="milestones-record"><div className="record-header"><ShieldCheck size={19} /><span>VERIFIED RECORD</span><span className="record-dot" /></div><p>Certifications and achievements will appear here when there are milestones to share.</p><span className="record-empty">NO CERTIFICATIONS OR ACHIEVEMENTS LISTED YET</span></div>
        </div>
      </section>

      <section className="content-section interests-section" id="interests" data-reveal aria-labelledby="interests-title">
        <div className="section-inner">
          <div className="section-label"><span>06</span><span className="section-label-rule" /> CURIOSITY, IN ALL DIRECTIONS</div>
          <div className="interests-layout"><h2 className="section-title" id="interests-title">WHAT<br /><span>FUELS ME.</span></h2><div className="interest-list"><span><i /> Aviation</span><span><i /> Fighter aircraft</span><span><i /> Indian Air Force</span><span><i /> Technology &amp; innovation</span><span><i /> Computer science</span><span><i /> Personal development</span></div></div>
          <p className="independence-note">A personal student portfolio. Not affiliated with or endorsed by the Indian Air Force.</p>
        </div>
      </section>

      <section className="comms-band" aria-label="AI chatbot">
        <div className="section-inner comms-inner"><div className="comms-symbol"><Radio size={22} /></div><div className="comms-copy"><span className="section-label">FLIGHT ASSISTANT</span><h2>AI CO-PILOT MODULE</h2><p>Have a question? The chat assistant in the corner is ready to help.</p></div><div className="comms-state"><span className="record-dot" /> ONLINE <span>·</span> CHAT AVAILABLE</div></div>
      </section>

      <section className="content-section contact-section" id="contact" data-reveal aria-labelledby="contact-title">
        <div className="section-inner contact-layout">
          <div><div className="section-label"><span>07</span><span className="section-label-rule" /> GET IN TOUCH</div><p className="section-kicker">The next connection starts here</p><h2 className="section-title" id="contact-title">SAY HELLO.<br /><span>STAY IN TOUCH.</span></h2><p className="contact-note">Contact details will be added when available. No address or social profiles have been provided yet.</p></div>
          <div className="profile-links"><div className="profile-row"><Github size={19} /><div><strong>GITHUB</strong><span>PROFILE DETAILS NOT PROVIDED</span></div><span className="profile-pending">PENDING</span></div><div className="profile-row"><Linkedin size={19} /><div><strong>LINKEDIN</strong><span>PROFILE DETAILS NOT PROVIDED</span></div><span className="profile-pending">PENDING</span></div><div className="contact-signal"><span className="status-light" /> CONTACT CHANNEL · AWAITING DETAILS</div></div>
        </div>
      </section>

      <footer className="site-footer"><a className="wordmark footer-wordmark" href="#home"><span className="wordmark-icon"><Plane size={16} /></span><span className="wordmark-copy"><strong>SKYWARD</strong><span>PERSONAL FLIGHT LOG</span></span></a><span className="footer-center">BUILT WITH CURIOSITY. ALWAYS LEARNING.</span><a className="back-top" href="#home">BACK TO TOP <ArrowUpRight size={14} /></a><span className="footer-copyright">© {new Date().getFullYear()} MANAV GAUTAM</span></footer>
    </main>
  );
}