import { motion } from "framer-motion";

const skills = [
  "Figma", "Adobe Illustrator", "Adobe Photoshop", "Canva", "Capcut",
  "C#", "Ruby", "Python", "JavaScript", "HTML", "CSS",
  "Google Cloud Platform", "Git", "Postman", "Unity", "Agile"
];

const Skills = () => {
  return (
    <section className="py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto mb-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-sm text-muted-foreground text-center"
        >
          TOOLS & TECHNOLOGIES
        </motion.p>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Scrolling content */}
        <div className="flex animate-marquee">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-6 py-3 mx-2 bg-secondary/50 border border-border rounded-full text-foreground/80 hover:border-primary/50 hover:text-primary transition-colors cursor-default"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
