import {
  BookOpen, FileText, ClipboardList, ChevronRight,
  Mail, Instagram, Menu, X, Search, GraduationCap,
  ArrowLeft, ExternalLink, Download,
} from "lucide-react";
import { useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

/* ─────────────────────── DATA ─────────────────────── */

const semesters = ["Semester 1", "Semester 2", "Semester 3", "Semester 4", "Semester 5", "Semester 6", "Semester 7", "Semester 8"];

// PDF resources per category and semester
const semesterResources: Record<string, Record<string, { title: string; subject: string; pages: string; link: string }[]>> = {
  "Lecture Notes": {
    "Semester 1": [
      { title: "Mathematics-I Notes", subject: "Engineering Mathematics", pages: "52 pages", link: "#" },
      { title: "Physics Notes", subject: "Engineering Physics", pages: "44 pages", link: "#" },
      { title: "Programming Fundamentals", subject: "C Programming", pages: "38 pages", link: "#" },
    ],
    "Semester 2": [
      { title: "Mathematics-II Notes", subject: "Engineering Mathematics", pages: "48 pages", link: "#" },
      { title: "Chemistry Notes", subject: "Engineering Chemistry", pages: "40 pages", link: "#" },
      { title: "Data Structures Notes", subject: "DSA", pages: "60 pages", link: "#" },
    ],
    "Semester 3": [
      { title: "DBMS Complete Notes", subject: "Database Management", pages: "55 pages", link: "#" },
      { title: "OS Notes", subject: "Operating Systems", pages: "62 pages", link: "#" },
      { title: "Python Basics to Advanced", subject: "Python Programming", pages: "35 pages", link: "#" },
    ],
    "Semester 4": [
      { title: "DAA Notes", subject: "Design & Analysis of Algorithms", pages: "50 pages", link: "#" },
      { title: "AEM Notes", subject: "Advanced Engineering Mathematics", pages: "45 pages", link: "#" },
      { title: "Computer Networks Notes", subject: "CN", pages: "58 pages", link: "#" },
    ],
    "Semester 5": [
      { title: "Machine Learning Notes", subject: "ML", pages: "70 pages", link: "#" },
      { title: "Web Development Notes", subject: "Web Dev", pages: "42 pages", link: "#" },
      { title: "Cyber Security Notes", subject: "CS", pages: "48 pages", link: "#" },
    ],
    "Semester 6": [
      { title: "COA Notes", subject: "Computer Organization", pages: "55 pages", link: "#" },
      { title: "Compiler Design Notes", subject: "CD", pages: "50 pages", link: "#" },
      { title: "Signals & Systems Notes", subject: "S&S", pages: "47 pages", link: "#" },
    ],
    "Semester 7": [
      { title: "AI Notes", subject: "Artificial Intelligence", pages: "65 pages", link: "#" },
      { title: "Cloud Computing Notes", subject: "CC", pages: "40 pages", link: "#" },
    ],
    "Semester 8": [
      { title: "Big Data Analytics Notes", subject: "BDA", pages: "52 pages", link: "#" },
      { title: "Project Management Notes", subject: "PM", pages: "30 pages", link: "#" },
    ],
  },
  "Previous Year Questions": {
    "Semester 1": [
      { title: "Mathematics-I Mid-Sem 2023", subject: "Mid-Sem Paper", pages: "4 pages", link: "#" },
      { title: "Mathematics-I End-Sem 2023", subject: "End-Sem Paper", pages: "6 pages", link: "#" },
      { title: "Physics Mid-Sem 2023", subject: "Mid-Sem Paper", pages: "4 pages", link: "#" },
    ],
    "Semester 2": [
      { title: "DSA Mid-Sem 2023", subject: "Mid-Sem Paper", pages: "4 pages", link: "#" },
      { title: "Chemistry End-Sem 2023", subject: "End-Sem Paper", pages: "6 pages", link: "#" },
    ],
    "Semester 3": [
      { title: "DBMS Mid-Sem 2023", subject: "Mid-Sem Paper", pages: "4 pages", link: "#" },
      { title: "OS End-Sem 2023", subject: "End-Sem Paper", pages: "6 pages", link: "#" },
      { title: "Python Mid-Sem 2022", subject: "Mid-Sem Paper", pages: "4 pages", link: "#" },
    ],
    "Semester 4": [
      { title: "DAA End-Sem 2023", subject: "End-Sem Paper", pages: "6 pages", link: "#" },
      { title: "AEM Mid-Sem 2023", subject: "Mid-Sem Paper", pages: "4 pages", link: "#" },
    ],
    "Semester 5": [
      { title: "ML End-Sem 2023", subject: "End-Sem Paper", pages: "6 pages", link: "#" },
      { title: "Cyber Security Mid-Sem 2022", subject: "Mid-Sem Paper", pages: "4 pages", link: "#" },
    ],
    "Semester 6": [
      { title: "COA End-Sem 2023", subject: "End-Sem Paper", pages: "6 pages", link: "#" },
      { title: "Compiler Design Mid-Sem 2022", subject: "Mid-Sem Paper", pages: "4 pages", link: "#" },
    ],
    "Semester 7": [
      { title: "AI End-Sem 2023", subject: "End-Sem Paper", pages: "6 pages", link: "#" },
    ],
    "Semester 8": [
      { title: "Big Data Mid-Sem 2023", subject: "Mid-Sem Paper", pages: "4 pages", link: "#" },
    ],
  },
  "Solutions": {
    "Semester 1": [
      { title: "Maths-I Tutorial Sheet Solutions", subject: "Tutorial Sheet", pages: "20 pages", link: "#" },
      { title: "Physics Practice Set Solutions", subject: "Practice Set", pages: "16 pages", link: "#" },
    ],
    "Semester 2": [
      { title: "DSA Assignment Solutions", subject: "Assignment", pages: "18 pages", link: "#" },
      { title: "Chemistry Lab Sheet", subject: "Lab Sheet", pages: "12 pages", link: "#" },
    ],
    "Semester 3": [
      { title: "DBMS Practice Set Solutions", subject: "Practice Set", pages: "22 pages", link: "#" },
      { title: "OS Tutorial Solutions", subject: "Tutorial Sheet", pages: "20 pages", link: "#" },
      { title: "Python Lab Solutions", subject: "Lab Sheet", pages: "15 pages", link: "#" },
    ],
    "Semester 4": [
      { title: "DAA Practice Set", subject: "Practice Set", pages: "25 pages", link: "#" },
      { title: "CN Assignment Solutions", subject: "Assignment", pages: "18 pages", link: "#" },
    ],
    "Semester 5": [
      { title: "ML Assignment Solutions", subject: "Assignment", pages: "24 pages", link: "#" },
      { title: "Web Dev Lab Solutions", subject: "Lab Sheet", pages: "18 pages", link: "#" },
    ],
    "Semester 6": [
      { title: "COA Tutorial Sheet", subject: "Tutorial Sheet", pages: "20 pages", link: "#" },
    ],
    "Semester 7": [
      { title: "AI Assignment Solutions", subject: "Assignment", pages: "22 pages", link: "#" },
    ],
    "Semester 8": [
      { title: "BDA Practice Set", subject: "Practice Set", pages: "16 pages", link: "#" },
    ],
  },
};

const resources = [
  {
    icon: BookOpen,
    title: "Lecture Notes",
    description: "Comprehensive notes for AEM, Physics, DAA, DSA, Cyber Security, Python, Mathematics, and more.",
    subjects: ["AEM", "Physics", "DAA", "DSA", "Cyber Security", "Python"],
    tag: "Most Popular",
  },
  {
    icon: ClipboardList,
    title: "Previous Year Questions",
    description: "PYQs of Mid-Sems and End-Sems sorted by subject and year to help you ace your exams.",
    subjects: ["Mid-Sem", "End-Sem", "All Branches", "All Years"],
    tag: "Exam Ready",
  },
  {
    icon: FileText,
    title: "Solutions",
    description: "Detailed solutions to Practice Sets, Tutorial Sheets, and Assignments.",
    subjects: ["Practice Sets", "Tutorial Sheets", "Assignments", "Lab Sheets"],
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

/* ─────────────────────── MODAL ─────────────────────── */

interface ResourceModalProps {
  category: string;
  onClose: () => void;
}

function ResourceModal({ category, onClose }: ResourceModalProps) {
  const [selectedSem, setSelectedSem] = useState<string | null>(null);
  const docs = selectedSem ? (semesterResources[category]?.[selectedSem] ?? []) : [];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Panel */}
      <div className="relative bg-card border border-border rounded-2xl shadow-hero w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-fade-up">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border sticky top-0 bg-card rounded-t-2xl z-10">
          <div className="flex items-center gap-3">
            {selectedSem && (
              <button
                onClick={() => setSelectedSem(null)}
                className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-primary"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
            )}
            <div>
              <h3 className="font-display text-xl font-bold text-foreground">{category}</h3>
              {selectedSem && <p className="text-sm text-muted-foreground mt-0.5">{selectedSem}</p>}
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {/* Semester selection */}
          {!selectedSem ? (
            <>
              <p className="text-muted-foreground text-sm mb-5">Select your semester to access {category}:</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {semesters.map((sem) => {
                  const count = semesterResources[category]?.[sem]?.length ?? 0;
                  return (
                    <button
                      key={sem}
                      onClick={() => setSelectedSem(sem)}
                      className="flex flex-col items-center justify-center gap-1.5 p-4 rounded-xl border border-border bg-muted/40 hover:border-primary hover:bg-primary/10 hover:shadow-green transition-all duration-200 group"
                    >
                      <span className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                        {sem.replace("Semester ", "Sem ")}
                      </span>
                      <span className="text-xs text-muted-foreground">{count} files</span>
                    </button>
                  );
                })}
              </div>
            </>
          ) : (
            <>
              <p className="text-muted-foreground text-sm mb-5">{docs.length} resource{docs.length !== 1 ? "s" : ""} available for {selectedSem}:</p>
              {docs.length === 0 ? (
                <div className="text-center py-10 text-muted-foreground">
                  <FileText className="w-10 h-10 mx-auto mb-3 opacity-30" />
                  <p>No resources yet for {selectedSem}. Check back soon!</p>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  {docs.map((doc, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-4 bg-muted/40 border border-border rounded-xl hover:border-primary/40 hover:shadow-green transition-all group"
                    >
                      <div className="w-11 h-11 rounded-lg gradient-green flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <FileText className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-foreground text-sm truncate">{doc.title}</div>
                        <div className="text-muted-foreground text-xs mt-0.5">{doc.subject}</div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-xs text-primary font-medium bg-green-light px-2 py-0.5 rounded-full hidden sm:block">
                          {doc.pages}
                        </span>
                        <a
                          href={doc.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg gradient-green text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity"
                          onClick={(e) => { e.preventDefault(); alert("PDF will be available soon!"); }}
                        >
                          <Download className="w-3 h-3" />
                          Open PDF
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────── PAGE ─────────────────────── */

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const handleResourceClick = (title: string) => setActiveModal(title);
  const closeModal = () => setActiveModal(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const el = document.getElementById("resources");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background font-body">

      {/* ── MODAL ── */}
      {activeModal && <ResourceModal category={activeModal} onClose={closeModal} />}

      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
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
              {[
                { label: "Notes", target: "notes", modal: "Lecture Notes" },
                { label: "PYQs", target: "pyqs", modal: "Previous Year Questions" },
                { label: "Solutions", target: "solutions", modal: "Solutions" },
                { label: "Subjects", target: "subjects", modal: null },
              ].map(({ label, target, modal }) => (
                modal ? (
                  <button
                    key={label}
                    onClick={() => setActiveModal(modal)}
                    className="text-sm font-medium text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {label}
                  </button>
                ) : (
                  <a
                    key={label}
                    href={`#${target}`}
                    className="text-sm font-medium text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {label}
                  </a>
                )
              ))}
              <a
                href="mailto:upestudypoint@gmail.com"
                className="ml-2 px-4 py-2 rounded-lg gradient-green text-primary-foreground text-sm font-semibold shadow-green hover:opacity-90 transition-opacity"
              >
                Contact Us
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-secondary-foreground/80 hover:text-primary transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden bg-secondary border-t border-primary/20 px-4 pb-4 animate-fade-up">
            {[
              { label: "Notes", modal: "Lecture Notes" },
              { label: "PYQs", modal: "Previous Year Questions" },
              { label: "Solutions", modal: "Solutions" },
            ].map(({ label, modal }) => (
              <button
                key={label}
                onClick={() => { setActiveModal(modal); setMenuOpen(false); }}
                className="block w-full text-left py-3 text-secondary-foreground/80 hover:text-primary transition-colors border-b border-white/5 text-sm"
              >
                {label}
              </button>
            ))}
            <a
              href="#subjects"
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-secondary-foreground/80 hover:text-primary transition-colors border-b border-white/5 text-sm"
            >
              Subjects
            </a>
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
        <img src={heroBg} alt="Student studying" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-primary-foreground leading-tight animate-fade-up">
            UPE<span className="text-primary">Study</span>point
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-secondary-foreground/80 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Your one-stop destination for Lecture Notes, PYQs, and Solutions — everything you need to ace your college exams.
          </p>

          {/* Search */}
          <form
            onSubmit={handleSearch}
            className="mt-8 flex items-center max-w-lg mx-auto animate-fade-up"
            style={{ animationDelay: "0.25s" }}
          >
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
            <button type="submit" className="px-5 py-3.5 gradient-green text-primary-foreground font-semibold text-sm rounded-r-xl hover:opacity-90 transition-opacity shadow-green">
              Search
            </button>
          </form>

          {/* CTAs */}
          <div className="mt-6 flex flex-wrap justify-center gap-3 animate-fade-up" style={{ animationDelay: "0.35s" }}>
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

      {/* ── RESOURCES CARDS ── */}
      <section id="resources" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">What We Offer</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-2 text-foreground">📚 Resources Available</h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Curated study material to help you study smarter, not harder.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((res, i) => {
              const Icon = res.icon;
              return (
                <div
                  key={i}
                  className="group relative bg-card rounded-2xl p-7 shadow-card border border-border hover:border-primary/40 hover:shadow-green transition-all duration-300 animate-fade-up cursor-pointer"
                  style={{ animationDelay: `${i * 0.15}s` }}
                  onClick={() => handleResourceClick(res.title)}
                >
                  <span className="absolute top-5 right-5 text-xs font-semibold text-primary bg-green-light px-2.5 py-1 rounded-full">
                    {res.tag}
                  </span>
                  <div className="w-14 h-14 rounded-xl gradient-green flex items-center justify-center mb-5 shadow-green group-hover:scale-105 transition-transform">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">{res.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{res.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {res.subjects.map((s) => (
                      <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground border border-border">{s}</span>
                    ))}
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); handleResourceClick(res.title); }}
                    className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all"
                  >
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
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2 text-secondary-foreground">Find Your Subject</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {subjects.map((sub, i) => (
              <button
                key={sub}
                className="px-4 py-2 rounded-xl bg-secondary-foreground/5 border border-secondary-foreground/10 text-secondary-foreground/80 text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 animate-fade-in"
                style={{ animationDelay: `${i * 0.04}s` }}
                onClick={() => setActiveModal("Lecture Notes")}
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
            <div className="absolute left-0 top-0 bottom-0 w-2 gradient-green" />
            <div className="p-10 sm:p-14 pl-10">
              <div className="max-w-2xl">
                <span className="text-primary text-xs font-bold uppercase tracking-widest">PYQs</span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-foreground mt-2 mb-4">
                  Previous Year Questions
                </h2>
                <p className="text-secondary-foreground/60 leading-relaxed mb-7">
                  Practice with real Mid-Sem and End-Sem question papers. Sorted by year and subject for fast access.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Mid-Sem Papers", "End-Sem Papers", "All Subjects"].map((t) => (
                    <button
                      key={t}
                      onClick={() => setActiveModal("Previous Year Questions")}
                      className="px-5 py-2.5 rounded-xl gradient-green text-primary-foreground text-sm font-semibold shadow-green hover:opacity-90 transition-opacity"
                    >
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
                Well-structured lecture notes for all major subjects. No more scrambling before exams.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {["DSA Notes", "OS Notes", "DBMS Notes", "Python Notes", "AEM Notes", "Physics Notes"].map((n) => (
                  <button
                    key={n}
                    onClick={() => setActiveModal("Lecture Notes")}
                    className="flex items-center gap-2 p-3 bg-card rounded-xl border border-border shadow-card hover:border-primary/30 hover:shadow-green transition-all cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-lg gradient-green flex items-center justify-center shrink-0">
                      <BookOpen className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{n}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4" id="solutions">
              {[
                { title: "Week 1–4 Notes", subject: "Data Structures & Algorithms", pages: "48 pages", modal: "Lecture Notes" },
                { title: "Complete OS Notes", subject: "Operating Systems", pages: "62 pages", modal: "Lecture Notes" },
                { title: "Python Basics to Advanced", subject: "Python Programming", pages: "35 pages", modal: "Lecture Notes" },
              ].map((note, i) => (
                <button
                  key={i}
                  onClick={() => setActiveModal(note.modal)}
                  className="bg-card rounded-xl p-5 border border-border shadow-card hover:border-primary/30 hover:shadow-green transition-all cursor-pointer flex items-center gap-4 text-left w-full"
                >
                  <div className="w-12 h-12 rounded-xl gradient-green flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-foreground text-sm">{note.title}</div>
                    <div className="text-muted-foreground text-xs mt-0.5">{note.subject}</div>
                  </div>
                  <span className="text-xs text-primary font-medium bg-green-light px-2.5 py-1 rounded-full">{note.pages}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS SECTION ── */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl overflow-hidden relative bg-card shadow-hero border border-border">
            <div className="absolute left-0 top-0 bottom-0 w-2 gradient-green" />
            <div className="p-10 sm:p-14 pl-10">
              <div className="max-w-2xl">
                <span className="text-primary text-xs font-bold uppercase tracking-widest">Solutions</span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
                  Step-by-Step Solutions
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-7">
                  Detailed solutions to Practice Sets, Tutorial Sheets, Assignments, and Lab Sheets — semester-wise.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Practice Sets", "Tutorial Sheets", "Assignments", "Lab Sheets"].map((t) => (
                    <button
                      key={t}
                      onClick={() => setActiveModal("Solutions")}
                      className="px-5 py-2.5 rounded-xl gradient-green text-primary-foreground text-sm font-semibold shadow-green hover:opacity-90 transition-opacity"
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT / CTA ── */}
      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Suggest Content or<br />Request Resources
          </h2>
          <p className="text-muted-foreground mb-8">
            Missing something? Found an error? Want specific notes or solutions? We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:upestudypoint@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl gradient-green text-primary-foreground font-semibold shadow-green hover:opacity-90 transition-opacity"
            >
              <Mail className="w-5 h-5" /> Email Us
            </a>
            <a
              href="https://instagram.com/upestudypoint"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-muted border border-border text-foreground font-semibold hover:bg-muted/80 transition-colors"
            >
              <Instagram className="w-5 h-5" /> DM on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-secondary py-10 px-4 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          {/* Top row */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-green flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-secondary-foreground text-base">
                UPE<span className="text-primary">Study</span>point.com
              </span>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-secondary-foreground/60">
              <button onClick={() => setActiveModal("Lecture Notes")} className="hover:text-primary transition-colors">Lecture Notes</button>
              <button onClick={() => setActiveModal("Previous Year Questions")} className="hover:text-primary transition-colors">PYQs</button>
              <button onClick={() => setActiveModal("Solutions")} className="hover:text-primary transition-colors">Solutions</button>
              <a href="#subjects" className="hover:text-primary transition-colors">Subjects</a>
              <a href="mailto:upestudypoint@gmail.com" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-secondary-foreground/40">
            <p>Made with 💚 for UPE college students. All resources are for educational purposes only.</p>
            <p>© {new Date().getFullYear()} UPEStudypoint.com. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
