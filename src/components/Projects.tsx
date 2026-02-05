import { motion } from "framer-motion";
import { ArrowUpRight, Layers, ImageIcon, Sparkles } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { Link } from "react-router-dom";
import unityLogo from "@/assets/unity-logo.png";
import gameOn1 from "@/assets/game-on-1.png";
import gameOn2 from "@/assets/game-on-2.png";
import gameOn3 from "@/assets/game-on-3.png";
import gameOn4 from "@/assets/game-on-4.png";
import hci1 from "@/assets/hci-1.png";
import hci2 from "@/assets/hci-2.png";
import hci3 from "@/assets/hci-3.png";
import hciMain from "@/assets/hci-main.png";
import dbsMain from "@/assets/dbs-main.png";

// Tool icons mapping using Simple Icons CDN
const toolIcons: Record<string, string> = {
  Figma: "https://www.pngall.com/wp-content/uploads/13/Figma-Logo-PNG-Cutout.png",
  Unity: unityLogo,
  Firebase: "https://tse2.mm.bing.net/th/id/OIP.xSHn5nIiJ2poYGZaRoE8xgHaKJ?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  "Android Studio": "https://cdn.simpleicons.org/androidstudio",
  Ruby: "https://cdn.simpleicons.org/ruby",
  "Ruby on Rails": "https://cdn.simpleicons.org/rubyonrails",
  "Google Cloud Platform": "https://logos-world.net/wp-content/uploads/2021/02/Google-Cloud-Symbol.png",
  PostgreSQL: "https://cdn.simpleicons.org/postgresql",
  Python: "https://cdn.simpleicons.org/python",
  PyTorch: "https://cdn.simpleicons.org/pytorch",
  AI: "",
};

const projects = [
  {
    title: "Game On!",
    subtitle: "Final Year Project",
    partner: "MSF",
    partnerLogo: "https://www.msf.gov.sg/ResourcePackages/Msf/assets/img/msf-logo.png",
    period: "Sep 2025 - May 2026",
    description: "Leading the end-to-end design and development of a mobile game prototype that helps parents navigate real-world parenting challenges through gamification. Conducted extensive user research with parents and child development experts to identify pain points, then translated insights into an engaging game mechanic that promotes positive parenting behaviors.",
    tools: ["Figma", "Unity", "Firebase", "Android Studio"],
    highlights: [
      "30+ user research participants",
      "4 design iterations based on feedback",
      "10+ usability testing sessions",
      "Full design-to-dev ownership"
    ],
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    number: "01",
    images: [gameOn1, gameOn2, gameOn3, gameOn4],
    slug: "game-on",
  },
  {
    title: "Smart Protection for Conserved Areas",
    subtitle: "ML & Computer Vision",
    partner: null,
    partnerLogo: null,
    period: "May - Aug 2024",
    description: "Engineered an end-to-end ML inference pipeline detecting illegal structures across 20 protected areas spanning 3,470 km². Built a synthetic data pipeline using Stable Diffusion, augmenting 100+ tarp variants and reducing labeled data reliance by 70%+. Implemented evaluation workflows and backend alerting, reducing response time by 3–5×.",
    tools: ["Python", "PyTorch", "Figma"],
    highlights: [
      "20 protected areas covered",
      "70%+ reduction in labeled data",
      "3–5× faster response time",
      "YOLOv11 & U-Net models"
    ],
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    number: "02",
    mainImage: null,
    useLaptopMockup: false,
    images: null,
    slug: "smart-protection",
  },
  {
    title: "DBS Auto Payment",
    subtitle: "Service Design Studio",
    partner: "DBS",
    partnerLogo: "https://th.bing.com/th/id/R.ddce714d19c1f5d6d7b8962c25449fe2?rik=4V%2bkCYLaSmiaSg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2flogo-dbs-png-dbs-bank-logo-logotype-4519.png&ehk=pUyYTffFFD1WwHmsLYI%2fYBy78YjbrxsbG46bjjdYEcI%3d&risl=&pid=ImgRaw&r=0",
    period: "May - Aug 2024",
    description: "Developed a high-fidelity banking prototype for DBS featuring intelligent automated payment prompts and intuitive UX flows. Owned the complete design lifecycle from low-fidelity wireframes to pixel-perfect prototypes, while contributing to the frontend implementation using Ruby on Rails with RESTful architecture and PostgreSQL database.",
    tools: ["Figma", "Ruby on Rails", "PostgreSQL", "Google Cloud Platform"],
    highlights: [
      "Lo-fi to Hi-fi design lifecycle",
      "RESTful API architecture",
      "Cloud Run deployment",
      "Banking UX best practices"
    ],
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    number: "03",
    mainImage: dbsMain,
    images: null,
    slug: "dbs-auto-payment",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-8 sm:py-10 px-4 sm:px-6 relative">
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
          <h2 className="text-3xl md:text-4xl font-bold">
            Projects I've <span className="text-gradient">crafted</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <Link to={`/projects/${project.slug}`} className="block h-full">
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                />

                <div className="relative bg-card border border-border rounded-2xl p-4 sm:p-5 md:p-6 group-hover:border-blue-400/50 group-hover:bg-card/80 group-hover:shadow-[0_0_30px_-5px_rgba(96,165,250,0.3)] transition-all duration-300 h-full flex flex-col cursor-pointer">
                <div className="flex flex-col gap-4 sm:gap-6 flex-1">
                  {/* Project Images */}
                  <motion.div
                    className="flex-shrink-0 w-full"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
                  >
                    {project.mainImage ? (
                      <div className="space-y-3 w-full">
                        {/* Main image - with or without laptop mockup */}
                        {project.useLaptopMockup ? (
                          <div className="relative w-full">
                            <div className="bg-[#2d2d2d] rounded-t-lg pt-2 pb-1 px-2">
                              <div className="flex gap-1 mb-1.5">
                                <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                                <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                                <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
                              </div>
                              <img
                                src={project.mainImage}
                                alt={`${project.title} main screenshot`}
                                className="w-full h-auto object-contain rounded-sm"
                              />
                            </div>
                            <div className="bg-[#1a1a1a] h-2.5 rounded-b-lg" />
                            <div className="bg-[#2d2d2d] h-1 w-1/3 mx-auto rounded-b-md" />
                          </div>
                        ) : (
                          <img
                            src={project.mainImage}
                            alt={`${project.title} main screenshot`}
                            className="w-full h-auto object-contain rounded-lg shadow-md group-hover:scale-[1.02] transition-transform duration-500"
                          />
                        )}
                        {/* Additional screenshots */}
                        {project.images && (
                          <div className="grid grid-cols-3 gap-2 w-full">
                            {project.images.slice(0, 3).map((img, i) => (
                              <img
                                key={i}
                                src={img}
                                alt={`${project.title} screenshot ${i + 1}`}
                                className="w-full h-auto object-contain rounded-md group-hover:scale-105 transition-transform duration-500 shadow-sm"
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    ) : project.images ? (
                      <div className="grid grid-cols-2 gap-3 w-full">
                        {project.images.map((img, i) => (
                          <img
                            key={i}
                            src={img}
                            alt={`${project.title} screenshot ${i + 1}`}
                            className="w-full h-auto object-contain rounded-md group-hover:scale-105 transition-transform duration-500"
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="h-40 w-full rounded-lg overflow-hidden bg-secondary/50 border border-border flex flex-col items-center justify-center text-muted-foreground/50">
                        <ImageIcon size={24} className="mb-2" />
                        <span className="text-xs font-mono">Preview</span>
                      </div>
                    )}
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 relative flex flex-col">
                    {/* Arrow always at top right */}
                    <ArrowUpRight
                      size={24}
                      className="absolute top-0 right-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    />
                    
                    <motion.div
                      className="pr-10 mb-4"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
                    >
                      <h3 className="text-lg sm:text-xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="text-muted-foreground text-sm sm:text-base">
                        <span>{project.subtitle}</span>
                        {project.partner && (
                          <span className="inline-flex items-center gap-1.5 text-primary font-medium ml-2">
                            · <span className="hidden xs:inline">In collaboration with</span>
                            <img src={project.partnerLogo!} alt={project.partner} className="h-4 sm:h-5 object-contain" />
                          </span>
                        )}
                      </div>
                      <span className="font-mono text-xs sm:text-sm text-muted-foreground">{project.period}</span>
                    </motion.div>

                    <motion.p
                      className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-2xl"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                    >
                      {project.description}
                    </motion.p>

                    <motion.div
                      className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.15 + 0.4 }}
                    >
                      {project.highlights.map((highlight, i) => (
                        <span key={i} className="flex items-center gap-1.5">
                          <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-primary" />
                          {highlight}
                        </span>
                      ))}
                    </motion.div>

                    <div className="flex items-center gap-4 mt-auto pt-4">
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
                                      <img 
                                        src={iconUrl} 
                                        alt={tool} 
                                        className={`object-contain rounded-md ${tool === "Google Cloud Platform" ? "w-16 h-16" : "w-8 h-8"}`} 
                                      />
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
              </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
