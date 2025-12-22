import { motion } from "framer-motion";
import { ArrowUpRight, Layers } from "lucide-react";

const projects = [
  {
    title: "Game On!",
    subtitle: "Final Year Project",
    period: "Sep 2025 - May 2026",
    description: "End-to-end game prototype helping parents navigate parenting challenges through gamification.",
    tools: ["Figma", "Unity", "Firebase", "Android Studio"],
    highlights: ["30+ user research participants", "4+ design iterations", "10+ usability tests"],
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    number: "01",
  },
  {
    title: "Minutes to Seconds",
    subtitle: "HCI & AI Project",
    period: "May - Aug 2024",
    description: "Web application integrating AI with human-centered design, deployed on Google Cloud.",
    tools: ["Figma", "Ruby", "AI", "GCP"],
    highlights: ["10 user interviews", "Nielsen heuristic analysis", "Live production deployment"],
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    number: "02",
  },
  {
    title: "DBS Auto Payment",
    subtitle: "Service Design Studio",
    period: "May - Aug 2024",
    description: "High-fidelity banking prototype with automated payment prompts and seamless UX flows.",
    tools: ["Figma", "Ruby on Rails", "PostgreSQL", "GCP"],
    highlights: ["Lo-fi to Hi-fi lifecycle", "RESTful architecture", "Cloud Run deployment"],
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    number: "03",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <Layers className="text-primary" size={24} />
            <span className="font-mono text-sm text-primary">SELECTED WORK</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Projects I've <span className="text-gradient">crafted</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="group relative"
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
              />

              <div className="relative bg-card border border-border rounded-2xl p-6 md:p-8 group-hover:border-blue-400/50 group-hover:bg-card/80 group-hover:shadow-[0_0_30px_-5px_rgba(96,165,250,0.3)] transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Number */}
                  <motion.div 
                    className="hidden md:block"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                  >
                    <span className="font-mono text-6xl font-bold text-blue-400/30 group-hover:text-blue-400/60 transition-colors duration-300">
                      {project.number}
                    </span>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <motion.div 
                      className="flex flex-wrap items-start justify-between gap-4 mb-4"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
                    >
                      <div>
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {project.subtitle} · <span className="font-mono text-sm">{project.period}</span>
                        </p>
                      </div>
                      <ArrowUpRight
                        size={24}
                        className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                      />
                    </motion.div>

                    <motion.p 
                      className="text-muted-foreground mb-6 max-w-2xl"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                    >
                      {project.description}
                    </motion.p>

                    <motion.div 
                      className="flex flex-wrap gap-2 mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.15 + 0.4 }}
                    >
                      {project.tools.map((tool, i) => (
                        <motion.span 
                          key={i} 
                          className="px-3 py-1.5 text-sm bg-blue-500/10 border border-blue-400/20 rounded-lg text-blue-400 font-medium group-hover:bg-blue-500/20 group-hover:border-blue-400/40 transition-all duration-300"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.15 + 0.4 + i * 0.05 }}
                        >
                          {tool}
                        </motion.span>
                      ))}
                    </motion.div>

                    <motion.div 
                      className="flex flex-wrap gap-4 text-sm text-muted-foreground"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.15 + 0.5 }}
                    >
                      {project.highlights.map((highlight, i) => (
                        <span key={i} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {highlight}
                        </span>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
