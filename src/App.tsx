import { useState, type ReactNode } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#portfolio" },
  { label: "Reflections", href: "#reflections" },
  { label: "Contact", href: "#contact" },
];

const projects = [
  {
    number: "01",
    type: "Machine Learning",
    title: "CropSense",
    description:
      "A computer vision model that identifies common crop diseases from leaf images, built to support faster field diagnosis.",
    meta: "Python · TensorFlow · OpenCV",
    className: "bg-[#dfe8d3]",
  },
  {
    number: "02",
    type: "Data Science",
    title: "Commute Lens",
    description:
      "An exploratory analysis of student commute patterns, turning survey data into actionable campus transport insights.",
    meta: "Pandas · Jupyter · Tableau",
    className: "bg-[#d8e5ee]",
  },
  {
    number: "03",
    type: "Human-Centered AI",
    title: "StudyMate",
    description:
      "A prototype study companion that creates review questions from class notes while keeping the learner in control.",
    meta: "React · NLP · Figma",
    className: "bg-[#efe1d1]",
  },
];

const reflections = [
  {
    date: "March 14, 2025",
    title: "The model is only half the solution",
    excerpt:
      "Building my first end-to-end classifier taught me that clear problem framing and thoughtful evaluation matter just as much as accuracy.",
    category: "Learning",
  },
  {
    date: "February 02, 2025",
    title: "Finding confidence in the messy middle",
    excerpt:
      "A reflection on debugging, asking better questions, and learning to see failed experiments as useful evidence rather than setbacks.",
    category: "Growth",
  },
  {
    date: "December 18, 2024",
    title: "Designing AI for real people",
    excerpt:
      "What a semester project revealed about bias, accessibility, and the responsibility to build technology with—not just for—its users.",
    category: "Perspective",
  },
];

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d={diagonal ? "M7 17 17 7M7 7h10v10" : "M5 12h14m-5-5 5 5-5 5"}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#5d635c]">
      <span className="h-px w-8 bg-[#a5aaa2]" />
      {children}
    </p>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f4f2ed] text-[#17201b]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[#f4f2ed]/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <a
            className="font-display text-xl font-semibold tracking-tight"
            href="#home"
          >
            AR<span className="text-[#e65f3b]">.</span>
          </a>

          <nav className="hidden items-center gap-9 md:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                className="text-sm font-medium text-[#4d554f] transition hover:text-[#17201b]"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            className="hidden items-center gap-2 rounded-full bg-[#17201b] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#e65f3b] sm:flex"
            href="mailto:alex.rivera@example.com"
          >
            Let&apos;s connect
            <ArrowIcon diagonal />
          </a>

          <button
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-4 flex-col gap-1.5">
              <span
                className={`h-px w-full bg-current transition ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
              />
              <span
                className={`h-px w-full bg-current transition ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>

        {menuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="border-t border-black/10 bg-[#f4f2ed] px-6 py-6 md:hidden"
          >
            <div className="flex flex-col gap-5">
              {navItems.map((item) => (
                <a
                  className="font-display text-2xl"
                  href={item.href}
                  key={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main>
        <section
          className="relative overflow-hidden pb-20 pt-32 lg:min-h-[820px] lg:pb-24 lg:pt-40"
          id="home"
        >
          <div className="pointer-events-none absolute -right-20 top-12 h-96 w-96 rounded-full border border-[#17201b]/10" />
          <div className="pointer-events-none absolute -right-2 top-32 h-64 w-64 rounded-full border border-[#17201b]/10" />
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.12fr_0.88fr] lg:px-10">
            <div className="relative z-10">
              <div className="mb-10 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#e65f3b]" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5d635c]">
                  Available for collaboration
                </p>
              </div>
              <h1 className="font-display max-w-4xl text-[clamp(4rem,9vw,8.5rem)] leading-[0.82] tracking-[-0.065em]">
                Curious
                <br />
                by nature<span className="text-[#e65f3b]">.</span>
              </h1>
              <div className="mt-10 grid gap-8 border-t border-black/15 pt-8 sm:grid-cols-[1fr_auto] sm:items-end">
                <div>
                  <p className="mb-2 font-display text-2xl">Alex Rivera</p>
                  <p className="max-w-lg text-base leading-7 text-[#5d635c]">
                    Third-year BS Artificial Intelligence Engineering student
                    exploring how responsible technology can solve tangible,
                    human problems.
                  </p>
                </div>
                <a
                  className="group flex h-16 w-16 items-center justify-center rounded-full border border-[#17201b] transition hover:bg-[#17201b] hover:text-white"
                  href="#portfolio"
                  aria-label="Explore selected work"
                >
                  <span className="transition group-hover:translate-x-0.5">
                    <ArrowIcon />
                  </span>
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:mr-0">
              <div className="absolute -left-8 -top-8 h-28 w-28 bg-[#e65f3b]" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-[12rem]">
                <img
                  alt="Laptop and notebook on a focused coding workspace"
                  className="h-full w-full object-cover grayscale-[20%]"
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=85"
                />
                <div className="absolute inset-0 bg-[#183526]/10 mix-blend-multiply" />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-full bg-[#f4f2ed] p-3">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#17201b]/30 text-center text-[10px] font-semibold uppercase leading-4 tracking-[0.16em]">
                  Learn
                  <br />
                  Build
                  <br />
                  Improve
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#17201b] py-24 text-[#f4f2ed] lg:py-32" id="about">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionLabel>About me</SectionLabel>
            <div className="grid gap-16 lg:grid-cols-[0.72fr_1.28fr]">
              <div>
                <p className="font-display text-3xl leading-tight text-[#abb6ad]">
                  I&apos;m learning to build systems that are not only
                  intelligent, but useful, fair, and understandable.
                </p>
              </div>
              <div>
                <h2 className="font-display text-5xl leading-[1.04] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
                  Technology feels most powerful when it expands what people can
                  do.
                </h2>
                <div className="mt-12 grid gap-8 border-t border-white/15 pt-8 sm:grid-cols-2">
                  <p className="leading-7 text-[#abb6ad]">
                    I chose AI Engineering because it sits at the intersection
                    of logic, creativity, and service. It gives me the tools to
                    understand complex systems and reshape them around real
                    human needs.
                  </p>
                  <p className="leading-7 text-[#abb6ad]">
                    My academic journey has taken me from writing my first lines
                    of Python to training models, studying data ethics, and
                    collaborating on solutions that begin with listening.
                  </p>
                </div>
                <dl className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3">
                  <div>
                    <dt className="mb-2 text-xs uppercase tracking-[0.18em] text-[#7f8c82]">
                      Program
                    </dt>
                    <dd className="font-display text-xl">BS AI Engineering</dd>
                  </div>
                  <div>
                    <dt className="mb-2 text-xs uppercase tracking-[0.18em] text-[#7f8c82]">
                      Year level
                    </dt>
                    <dd className="font-display text-xl">Third year</dd>
                  </div>
                  <div>
                    <dt className="mb-2 text-xs uppercase tracking-[0.18em] text-[#7f8c82]">
                      Based in
                    </dt>
                    <dd className="font-display text-xl">Manila, PH</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32" id="portfolio">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <SectionLabel>Selected work</SectionLabel>
                <h2 className="font-display text-5xl tracking-[-0.04em] sm:text-7xl">
                  Ideas, made tangible.
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-[#5d635c]">
                A selection of projects, lab work, and experiments from my
                academic journey.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  className={`${project.className} group flex min-h-[430px] flex-col justify-between p-7 transition duration-300 hover:-translate-y-1 sm:p-9`}
                  key={project.title}
                >
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-semibold tracking-[0.18em]">
                      {project.number}
                    </span>
                    <span className="rounded-full border border-black/20 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em]">
                      {project.type}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-5xl tracking-[-0.04em]">
                      {project.title}
                    </h3>
                    <p className="mt-5 leading-7 text-[#4d554f]">
                      {project.description}
                    </p>
                    <div className="mt-8 flex items-center justify-between border-t border-black/15 pt-5">
                      <span className="text-xs font-medium text-[#5d635c]">
                        {project.meta}
                      </span>
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/25 transition group-hover:bg-[#17201b] group-hover:text-white">
                        <ArrowIcon diagonal />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-black/10 bg-[#ebe8e1] py-24 lg:py-32" id="reflections">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
              <div>
                <SectionLabel>Reflections</SectionLabel>
                <h2 className="font-display text-5xl leading-none tracking-[-0.04em] sm:text-6xl">
                  Notes from
                  <br />
                  the journey.
                </h2>
                <p className="mt-7 max-w-sm leading-7 text-[#5d635c]">
                  Small records of what I&apos;m learning—in the classroom,
                  through projects, and in the spaces between.
                </p>
              </div>

              <div className="divide-y divide-black/15 border-t border-black/15">
                {reflections.map((reflection) => (
                  <article
                    className="group grid gap-5 py-8 sm:grid-cols-[130px_1fr_auto] sm:items-start"
                    key={reflection.title}
                  >
                    <div>
                      <p className="text-xs font-medium text-[#5d635c]">
                        {reflection.date}
                      </p>
                      <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#e65f3b]">
                        {reflection.category}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-display text-2xl transition group-hover:text-[#e65f3b] sm:text-3xl">
                        {reflection.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-sm leading-6 text-[#5d635c]">
                        {reflection.excerpt}
                      </p>
                    </div>
                    <span className="hidden h-11 w-11 items-center justify-center rounded-full border border-black/20 sm:flex">
                      <ArrowIcon diagonal />
                    </span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#e65f3b] py-24 lg:py-32" id="contact">
          <div className="pointer-events-none absolute -right-28 -top-52 h-[560px] w-[560px] rounded-full border border-black/15" />
          <div className="pointer-events-none absolute -right-8 -top-32 h-[380px] w-[380px] rounded-full border border-black/15" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
            <SectionLabel>Contact</SectionLabel>
            <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <h2 className="font-display max-w-5xl text-6xl leading-[0.92] tracking-[-0.055em] sm:text-8xl lg:text-[7.5rem]">
                  Let&apos;s build something that matters.
                </h2>
                <a
                  className="mt-10 inline-flex items-center gap-3 border-b border-black/40 pb-2 text-lg font-semibold transition hover:border-black"
                  href="mailto:alex.rivera@example.com"
                >
                  alex.rivera@example.com
                  <ArrowIcon diagonal />
                </a>
              </div>
              <div className="flex gap-3">
                <a
                  className="flex h-12 items-center justify-center rounded-full border border-black/30 px-5 text-sm font-semibold transition hover:bg-[#17201b] hover:text-white"
                  href="https://www.linkedin.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  LinkedIn
                </a>
                <a
                  className="flex h-12 items-center justify-center rounded-full border border-black/30 px-5 text-sm font-semibold transition hover:bg-[#17201b] hover:text-white"
                  href="https://github.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#17201b] py-7 text-[#abb6ad]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 text-xs sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>© 2025 Alex Rivera. Thoughtfully designed &amp; built.</p>
          <a className="transition hover:text-white" href="#home">
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}
