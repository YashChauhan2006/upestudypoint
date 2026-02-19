import { BookOpen, FileText, ClipboardList, ChevronRight, Mail, Instagram, Menu, X, Search, GraduationCap } from "lucide-react";
import { useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const resources = [
  {
    icon: BookOpen,
    title: "Lecture Notes",
    description: "Comprehensive notes for AEM, Physics, DAA, DSA, Cyber Security, Python, Mathematics, and more.",
    subjects: ["AEM", "Physics", "DAA", "DSA", "Cyber Security", "Python"],
    color: "from-green-bright to-green-glow",
    tag: "Most Popular",
  },
  {
    icon: ClipboardList,
    title: "Previous Year Questions",
    description: "PYQs of Mid-Sems and End-Sems sorted by subject and year to help you ace your exams.",
    subjects: ["Mid-Sem", "End-Sem", "All Branches", "All Years"],
    color: "from-secondary to-gray-800",
    tag: "Exam Ready",
  },
  {
    icon: FileText,
    title: "Solutions",
    description: "Detailed solutions to Practice Sets, Tutorial Sheets, and Assignments.",
    subjects: ["Practice Sets", "Tutorial Sheets", "Assignments", "Lab Sheets"],
    color: "from-green-bright to-green-glow",
    tag: "Step-by-Step",
  },
];

const subjects = [
  "Mathematics", "Physics", "Chemistry", "DSA", "DAA",
  "Python", "DBMS", "OS", "Cyber Security", "Machine Learning",
  "Web Development", "AEM", "COA", "Signals & Systems",
];

const stats = [
  { label: "Resources Available", value: "500+" },
  { label: "Subjects Covered", value: "30+" },
  { label: "Students Helped", value: "10K+" },
  { label: "PYQs Solved", value: "200+" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background font-body">
      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg gradient-green flex items-center justify-center shadow-green">
                <GraduationCap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl text-primary-foreground tracking-tight">
                UPE<span className="text-primary">Study</span>point
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              {["Notes", "PYQs", "Solutions", "Subjects"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm font-medium text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
              <a
                href="mailto:upestudypoint@gmail.com"
                className="ml-2 px-4 py-2 rounded-lg gradient-green text-primary-foreground text-sm font-semibold shadow-green hover:opacity-90 transition-opacity"
              >
                Contact Us
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-secondary-foreground/80 hover:text-primary transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-secondary border-t border-primary/20 px-4 pb-4 animate-fade-up">
            {["Notes", "PYQs", "Solutions", "Subjects"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block py-3 text-secondary-foreground/80 hover:text-primary transition-colors border-b border-white/5 text-sm"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              href="mailto:upestudypoint@gmail.com"
              className="mt-3 block text-center px-4 py-2 rounded-lg gradient-green text-primary-foreground text-sm font-semibold"
            >
              Contact Us
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero bg image */}
        <img
          src={heroBg}
          alt="Student studying"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Overlay */}
        <div className="absolute inset-0 gradient-hero" />
        {/* Green bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 rounded-full px-4 py-1.5 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">Free Study Resources for UPE Students</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-primary-foreground leading-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
            UPE<span className="text-primary">Study</span>point
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-secondary-foreground/80 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Your one-stop destination for Lecture Notes, PYQs, and Solutions — everything you need to ace your college exams.
          </p>

          {/* Search bar */}
          <div className="mt-8 flex items-center gap-0 max-w-lg mx-auto animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search subjects, notes, PYQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 rounded-l-xl bg-background/95 text-foreground placeholder:text-muted-foreground text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <button className="px-5 py-3.5 gradient-green text-primary-foreground font-semibold text-sm rounded-r-xl hover:opacity-90 transition-opacity shadow-green">
              Search
            </button>
          </div>

          {/* CTA buttons */}
          <div className="mt-6 flex flex-wrap justify-center gap-3 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <a href="#resources" className="px-6 py-3 rounded-xl gradient-green text-primary-foreground font-semibold text-sm shadow-green hover:opacity-90 transition-opacity flex items-center gap-2">
              Explore Resources <ChevronRight className="w-4 h-4" />
            </a>
            <a href="mailto:upestudypoint@gmail.com" className="px-6 py-3 rounded-xl bg-secondary-foreground/10 border border-secondary-foreground/20 text-primary-foreground font-semibold text-sm hover:bg-secondary-foreground/20 transition-colors flex items-center gap-2">
              <Mail className="w-4 h-4" /> Email Us
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-secondary py-10">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="text-center animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="font-display text-4xl font-bold text-primary">{stat.value}</div>
              <div className="text-secondary-foreground/60 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── RESOURCES ── */}
      <section id="resources" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">What We Offer</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-2 text-foreground">
              📚 Resources Available
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Curated study material to help you study smarter, not harder.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((res, i) => {
              const Icon = res.icon;
              return (
                <div
                  key={i}
                  className="group relative bg-card rounded-2xl p-7 shadow-card border border-border hover:border-primary/40 hover:shadow-green transition-all duration-300 cursor-pointer animate-fade-up"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  {/* Tag */}
                  <span className="absolute top-5 right-5 text-xs font-semibold text-primary bg-green-light px-2.5 py-1 rounded-full">
                    {res.tag}
                  </span>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl gradient-green flex items-center justify-center mb-5 shadow-green group-hover:scale-105 transition-transform">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>

                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">{res.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{res.description}</p>

                  {/* Subject chips */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {res.subjects.map((s) => (
                      <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground border border-border">
                        {s}
                      </span>
                    ))}
                  </div>

                  <button className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                    Explore <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SUBJECTS ── */}
      <section id="subjects" className="py-16 px-4 bg-secondary">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Browse by Subject</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2 text-secondary-foreground">
              Find Your Subject
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {subjects.map((sub, i) => (
              <button
                key={sub}
                className="px-4 py-2 rounded-xl bg-secondary-foreground/5 border border-secondary-foreground/10 text-secondary-foreground/80 text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 animate-fade-in"
                style={{ animationDelay: `${i * 0.04}s` }}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── PYQ SECTION ── */}
      <section id="pyqs" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl overflow-hidden relative bg-secondary shadow-hero">
            {/* green stripe */}
            <div className="absolute left-0 top-0 bottom-0 w-2 gradient-green" />
            <div className="p-10 sm:p-14 pl-10">
              <div className="max-w-2xl">
                <span className="text-primary text-xs font-bold uppercase tracking-widest">PYQs</span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-foreground mt-2 mb-4">
                  Previous Year Questions
                </h2>
                <p className="text-secondary-foreground/60 leading-relaxed mb-7">
                  Practice with real Mid-Sem and End-Sem question papers. Sorted by year and subject for fast access. The best way to prepare for what's coming.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Mid-Sem Papers", "End-Sem Papers", "All Subjects"].map((t) => (
                    <button key={t} className="px-5 py-2.5 rounded-xl gradient-green text-primary-foreground text-sm font-semibold shadow-green hover:opacity-90 transition-opacity">
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NOTES SECTION ── */}
      <section id="notes" className="py-10 px-4 bg-muted/40">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-primary text-xs font-bold uppercase tracking-widest">Lecture Notes</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2 mb-4 text-foreground">
                Study Smarter with Curated Notes
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Well-structured lecture notes for all major subjects — from technical courses like DSA and OS to mathematics and physics. No more scrambling before exams.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {["DSA Notes", "OS Notes", "DBMS Notes", "Python Notes", "AEM Notes", "Physics Notes"].map((n) => (
                  <div key={n} className="flex items-center gap-2 p-3 bg-card rounded-xl border border-border shadow-card hover:border-primary/30 hover:shadow-green transition-all cursor-pointer">
                    <div className="w-8 h-8 rounded-lg gradient-green flex items-center justify-center shrink-0">
                      <BookOpen className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{n}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { title: "Week 1–4 Notes", subject: "Data Structures & Algorithms", pages: "48 pages" },
                { title: "Complete OS Notes", subject: "Operating Systems", pages: "62 pages" },
                { title: "Python Basics to Advanced", subject: "Python Programming", pages: "35 pages" },
              ].map((note, i) => (
                <div key={i} className="bg-card rounded-xl p-5 border border-border shadow-card hover:border-primary/30 hover:shadow-green transition-all cursor-pointer flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-green flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-foreground text-sm">{note.title}</div>
                    <div className="text-muted-foreground text-xs mt-0.5">{note.subject}</div>
                  </div>
                  <span className="text-xs text-primary font-medium bg-green-light px-2.5 py-1 rounded-full">{note.pages}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT / CTA ── */}
      <section id="contact" className="py-20 px-4 bg-secondary">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-foreground mb-4">
            Suggest Content or<br />Request Resources
          </h2>
          <p className="text-secondary-foreground/60 mb-8">
            Missing something? Found an error? Want specific notes or solutions? We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:upestudypoint@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl gradient-green text-primary-foreground font-semibold shadow-green hover:opacity-90 transition-opacity"
            >
              <Mail className="w-5 h-5" />
              Email Here
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-secondary-foreground/5 border border-secondary-foreground/10 text-secondary-foreground font-semibold hover:bg-secondary-foreground/10 transition-colors"
            >
              <Instagram className="w-5 h-5" />
              DM on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-black-deep py-8 px-4 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg gradient-green flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-secondary-foreground/80 text-sm">
              UPEStudypoint.com
            </span>
          </div>
          <p className="text-secondary-foreground/40 text-xs text-center">
            Made with 💚 for UPE college students. All resources are for educational purposes.
          </p>
          <div className="flex gap-4 text-xs text-secondary-foreground/40">
            <a href="mailto:upestudypoint@gmail.com" className="hover:text-primary transition-colors">Contact</a>
            <a href="#resources" className="hover:text-primary transition-colors">Resources</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
