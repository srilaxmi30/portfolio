import { motion } from "framer-motion";

const technicalSkills = [
  { name: "Java", level: 80 },
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 75 },
  { name: "MySQL", level: 65 },
];

const tools = ["GitHub", "Eclipse", "VS Code", "Vite"];

const softSkills = [
  "Problem Solving",
  "Communication",
  "Team Collaboration",
  "Adaptability",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding relative">
      {/* Decorative orb */}
      <div className="absolute top-1/2 right-0 w-72 h-72 rounded-full bg-primary/5 blur-[120px]" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-2">
            What I know
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-12">
            Technical <span className="text-gradient">Skills</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Skill bars */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-5"
          >
            {technicalSkills.map((skill, i) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-display text-sm font-medium text-foreground">
                    {skill.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-pink-blue"
                  />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Tools & Soft Skills */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h3 className="font-display text-lg font-semibold mb-4 text-foreground">
                Tools & Platforms
              </h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="glass-card px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:glow-border transition-all duration-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <h3 className="font-display text-lg font-semibold mb-4 text-foreground">
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-primary/30 text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/10 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
