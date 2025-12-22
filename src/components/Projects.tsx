import { motion } from "framer-motion";
import { ArrowUpRight, Layers, ImageIcon, Sparkles } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import unityLogo from "@/assets/unity-logo.png";

// Tool icons mapping using Simple Icons CDN
const toolIcons: Record<string, string> = {
  Figma: "https://www.pngall.com/wp-content/uploads/13/Figma-Logo-PNG-Cutout.png",
  Unity: unityLogo,
  Firebase: "https://tse2.mm.bing.net/th/id/OIP.xSHn5nIiJ2poYGZaRoE8xgHaKJ?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  "Android Studio": "https://cdn.simpleicons.org/androidstudio",
  Ruby: "https://cdn.simpleicons.org/ruby",
  "Ruby on Rails": "https://cdn.simpleicons.org/rubyonrails",
  GCP: "https://cdn.simpleicons.org/googlecloud",
  PostgreSQL: "https://cdn.simpleicons.org/postgresql",
  AI: "",
};

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
    image: null,
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
    image: null,
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
    image: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6 relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent">
              <Layers className="text-white" size={20} />
            </div>
            <span className="font-mono text-sm text-primary font-medium">SELECTED WORK</span>
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
                ease: [0.25, 0.46, 0.45, 0.94],
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

              <div className="relative bg-card border border-border rounded-2xl p-5 md:p-6 group-hover:border-blue-400/50 group-hover:bg-card/80 group-hover:shadow-[0_0_30px_-5px_rgba(96,165,250,0.3)] transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center gap-5">
                  {/* Project Image - Side placement */}
                  <motion.div
                    className="w-full md:w-44 h-32 md:h-28 rounded-lg overflow-hidden bg-secondary/50 border border-border flex-shrink-0"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
                  >
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground/50">
                        <ImageIcon size={24} className="mb-1" />
                        <span className="text-[10px] font-mono">Preview</span>
                      </div>
                    )}
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
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
                      className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.15 + 0.4 }}
                    >
                      {project.highlights.map((highlight, i) => (
                        <span key={i} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {highlight}
                        </span>
                      ))}
                    </motion.div>

                    <TooltipProvider delayDuration={100}>
                      <motion.div
                        className="flex flex-wrap gap-3"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.15 + 0.5 }}
                      >
                        {project.tools.map((tool, i) => {
                          const iconUrl = toolIcons[tool];
                          return (
                            <Tooltip key={i}>
                              <TooltipTrigger asChild>
                                <motion.div
                                  className="w-8 h-8 flex items-center justify-center cursor-pointer"
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.3, delay: index * 0.15 + 0.5 + i * 0.05 }}
                                  whileHover={{ scale: 1.15 }}
                                >
                                  {tool === "AI" ? (
                                    <Sparkles size={24} className="text-purple-400" />
                                  ) : (
                                    <img src={iconUrl} alt={tool} className="w-8 h-8 object-contain rounded-md" />
                                  )}
                                </motion.div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{tool}</p>
                              </TooltipContent>
                            </Tooltip>
                          );
                        })}
                      </motion.div>
                    </TooltipProvider>
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
