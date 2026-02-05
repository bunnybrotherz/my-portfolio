import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GameOnTimeline from "@/components/GameOnTimeline";
import DBSTimeline from "@/components/DBSTimeline";
import SmartProtectionTimeline from "@/components/SmartProtectionTimeline";

import unityLogo from "@/assets/unity-logo.png";
import gameOn1 from "@/assets/game-on-1.png";
import gameOn2 from "@/assets/game-on-2.png";
import gameOn3 from "@/assets/game-on-3.png";
import gameOn4 from "@/assets/game-on-4.png";
import dbsMain from "@/assets/dbs-main.png";
import smartProtectionMain from "@/assets/smart-protection-main.png";

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

const projectsData: Record<string, {
  title: string;
  subtitle: string;
  partner: string | null;
  partnerLogo: string | null;
  period: string;
  description: string;
  tools: string[];
  highlights: string[];
  images: string[];
  mainImage?: string;
}> = {
  "game-on": {
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
    images: [gameOn1, gameOn2, gameOn3, gameOn4],
  },
  "smart-protection": {
    title: "Smart Protection for Conserved Areas",
    subtitle: "ML & Computer Vision",
    partner: null,
    partnerLogo: null,
    period: "May - Aug 2024",
    description: "Engineered an end-to-end ML inference pipeline detecting illegal structures across 20 protected areas spanning 3,470 km². Built a synthetic data pipeline using Stable Diffusion, augmenting 100+ tarp variants and reducing labeled data reliance by 70%+. Implemented comprehensive evaluation workflows (precision, recall, F1, mAP) and backend alerting systems, reducing response time by 3–5×.",
    tools: ["Python", "PyTorch", "Figma"],
    highlights: [
      "20 protected areas covered",
      "70%+ reduction in labeled data",
      "3–5× faster response time",
      "YOLOv11 & U-Net models"
    ],
    images: [],
    mainImage: smartProtectionMain,
  },
  "dbs-auto-payment": {
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
    images: [],
    mainImage: dbsMain,
  },
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectsData[slug] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Button asChild>
            <Link to="/#projects">
              <ArrowLeft size={16} className="mr-2" />
              Back to Projects
            </Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Button variant="ghost" asChild className="mb-8">
              <Link to="/#projects">
                <ArrowLeft size={16} className="mr-2" />
                Back to Projects
              </Link>
            </Button>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h1>
            <div className="flex flex-wrap items-center gap-3 text-muted-foreground">
              <span>{project.subtitle}</span>
              {project.partner && (
                <span className="inline-flex items-center gap-1.5 text-primary font-medium">
                  · In collaboration with
                  <img src={project.partnerLogo!} alt={project.partner} className="h-5 object-contain" />
                </span>
              )}
              <span className="font-mono text-sm">· {project.period}</span>
            </div>
          </motion.div>

          {/* Main Image */}
          {project.mainImage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8"
            >
              <img
                src={project.mainImage}
                alt={`${project.title} main screenshot`}
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </motion.div>
          )}

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-xl font-semibold mb-3">About the Project</h2>
            <p className="text-muted-foreground leading-relaxed">{project.description}</p>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8"
          >
            <h2 className="text-xl font-semibold mb-3">Key Highlights</h2>
            <div className="grid grid-cols-2 gap-3">
              {project.highlights.map((highlight, i) => (
                <div key={i} className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  {highlight}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mb-8"
          >
            <h2 className="text-xl font-semibold mb-3">Tools & Technologies</h2>
            <TooltipProvider delayDuration={100}>
              <div className="flex flex-wrap gap-4">
                {project.tools.map((tool, i) => {
                  const iconUrl = toolIcons[tool];
                  return (
                    <Tooltip key={i}>
                      <TooltipTrigger asChild>
                        <motion.div
                          className="w-10 h-10 flex items-center justify-center cursor-pointer"
                          whileHover={{ scale: 1.15 }}
                        >
                          {tool === "AI" ? (
                            <Sparkles size={28} className="text-purple-400" />
                          ) : (
                            <img 
                              src={iconUrl} 
                              alt={tool} 
                              className={`object-contain rounded-md ${tool === "Google Cloud Platform" ? "w-20 h-20" : "w-10 h-10"}`} 
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
              </div>
            </TooltipProvider>
          </motion.div>

          {/* Game On Timeline - Only show for game-on project */}
          {slug === "game-on" && <GameOnTimeline />}

          {/* DBS Timeline - Only show for dbs-auto-payment project */}
          {slug === "dbs-auto-payment" && <DBSTimeline />}

          {/* Smart Protection Timeline - Only show for smart-protection project */}
          {slug === "smart-protection" && <SmartProtectionTimeline />}

          {/* Images Gallery */}
          {project.images.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-8"
            >
              <h2 className="text-xl font-semibold mb-3">Screenshots</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {project.images.map((img, i) => (
                  <motion.img
                    key={i}
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
