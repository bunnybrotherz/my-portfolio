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
    <section id="projects" className="py-32 px-6">
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Number */}
                  <div className="hidden md:block">
                    <span className="font-mono text-6xl font-bold text-muted/30 group-hover:text-primary/30 transition-colors">
                      {project.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
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
                    </div>

                    <p className="text-muted-foreground mb-6 max-w-2xl">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tools.map((tool, i) => (
                        <span key={i} className="px-3 py-1 text-sm bg-secondary rounded-lg text-foreground/80">
                          {tool}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      {project.highlights.map((highlight, i) => (
                        <span key={i} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {highlight}
                        </span>
                      ))}
                    </div>
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
