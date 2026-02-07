import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";

const projects = [
  {
    title: "Skill Execution Tracker",
    description:
      "A web-based skill execution tracker focused on daily consistency and weekly progress monitoring. Features skill creation with weekly goals, daily execution logging, and progress reports.",
    tech: ["React", "JavaScript", "CSS", "LocalStorage"],
    link: "https://skill-execution-tracker.vercel.app/",
    highlights: [
      "Weekly progress reports (Mon–Sun) from real execution data",
      "State management with React hooks",
      "Persistent storage for user progress",
    ],
  },
  {
    title: "Landing Page Website",
    description:
      "A responsive landing page built with React.js and Vite for fast development. Component-based architecture for reusability with responsive layouts using Flexbox.",
    tech: ["React.js", "Vite", "CSS", "Flexbox"],
    link: "https://landingpage-bay-eta-26.vercel.app/",
    highlights: [
      "Optimized builds with Vite",
      "Clean UI with visual hierarchy",
      "Responsive across all devices",
    ],
  },
  {
    title: "Quiz Console Application",
    description:
      "A Java console quiz app with multiple-choice questions, scoring, and result summary. Strengthened skills in arrays, loops, and user input handling.",
    tech: ["Java", "OOPs", "Console I/O"],
    link: "https://github.com/srilaxmi30/Quiz",
    highlights: [
      "Multiple-choice question system",
      "Real-time scoring mechanism",
      "Clean console-based interface",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent/10 blur-[120px]" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-2">
            My work
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-12">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, i) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-8 hover:glow-border transition-all duration-500 group block cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-pink-blue flex items-center justify-center shrink-0 group-hover:shadow-pink-glow transition-shadow duration-500">
                  <Code2 size={26} className="text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    <ExternalLink
                      size={16}
                      className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <ul className="space-y-1.5 mb-5">
                    {project.highlights.map((h) => (
                      <li
                        key={h}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="bg-secondary/60 text-secondary-foreground px-3 py-1 rounded-md text-xs font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
