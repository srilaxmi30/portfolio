import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const timeline = [
  {
    type: "work",
    icon: <Briefcase size={18} />,
    title: "Java Programming Intern",
    org: "Internship Program",
    period: "Aug 2024 – Sep 2024",
    details: [
      "Practiced core Java concepts including OOPs, control structures, and basic problem-solving",
      "Implemented small Java programs and mini-tasks as part of structured assignments",
      "Gained exposure to coding workflows and task-based project submissions",
    ],
  },
  {
    type: "education",
    icon: <GraduationCap size={18} />,
    title: "B.Tech in ECE",
    org: "Guru Nanak Institutions Technical Campus",
    period: "Nov 2021 – Aug 2025",
    details: ["CGPA: 8.1", "Electronics and Communication Engineering"],
  },
  {
    type: "cert",
    icon: <Award size={18} />,
    title: "Certifications",
    org: "",
    period: "",
    details: [
      "Java Programming Masterclass (Udemy) — Java fundamentals, OOPs, exception handling, collections",
      "Project Completion Certificate – DRDO, Hyderabad — Smart MOSFET for Power Switching",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-2">
            My journey
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-12">
            Experience & <span className="text-gradient">Education</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

          {timeline.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative flex items-start gap-6 mb-12 md:w-1/2 ${
                i % 2 === 0
                  ? "md:pr-12 md:ml-0"
                  : "md:pl-12 md:ml-auto md:text-left"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-5 md:left-auto md:right-0 top-0 w-10 h-10 rounded-full bg-gradient-pink-blue flex items-center justify-center text-primary-foreground z-10 -translate-x-1/2 md:translate-x-1/2 shadow-pink-glow"
                style={i % 2 !== 0 ? { left: 0, right: 'auto', transform: 'translateX(-50%)' } : undefined}
              >
                {item.icon}
              </div>

              <div className="ml-10 md:ml-0 glass-card rounded-xl p-6 flex-1">
                <h3 className="font-display text-lg font-bold text-foreground mb-1">
                  {item.title}
                </h3>
                {item.org && (
                  <p className="text-primary text-sm font-medium mb-1">
                    {item.org}
                  </p>
                )}
                {item.period && (
                  <p className="text-muted-foreground text-xs mb-3">
                    {item.period}
                  </p>
                )}
                <ul className="space-y-1.5">
                  {item.details.map((d) => (
                    <li
                      key={d}
                      className="text-muted-foreground text-sm flex items-start gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
