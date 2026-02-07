import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-2">
            Get to know me
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-12">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a motivated and detail-oriented B.Tech graduate from Guru Nanak Institutions 
              Technical Campus, specializing in Electronics and Communication Engineering with 
              a CGPA of 8.1. I'm passionate about leveraging programming, SDLC, and problem-solving 
              skills to contribute to innovative software solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With hands-on experience in Java programming and modern web development using React.js, 
              I bring a unique blend of technical aptitude and creative problem-solving to every project. 
              I'm eager to apply my skills in a professional IT environment and grow as a developer.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-4"
          >
            {[
              {
                icon: <MapPin size={20} />,
                label: "Location",
                value: "Hyderabad, India",
              },
              {
                icon: <GraduationCap size={20} />,
                label: "Education",
                value: "B.Tech ECE — CGPA 8.1",
              },
              {
                icon: <Briefcase size={20} />,
                label: "Experience",
                value: "Java Programming Intern",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="glass-card rounded-xl p-5 flex items-center gap-4 hover:glow-border transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-pink-blue flex items-center justify-center text-primary-foreground shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p className="font-display font-semibold text-foreground">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
