import { motion } from "framer-motion";
import { Search, Target, Lightbulb, Rocket, Users, ClipboardList, MessageSquare, Palette } from "lucide-react";

const phases = [
  {
    diamond: "Discover",
    diamondNumber: 1,
    icon: Search,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    title: "Context Research",
    subtitle: "Understanding the Landscape",
    description: "We began by immersing ourselves in the intersection of casual gaming and parenting. Our research explored existing parenting apps, casual game mechanics, and behavioral psychology frameworks to understand how gamification could effectively support parents.",
    details: [
      "Analyzed 15+ existing parenting apps and their engagement patterns",
      "Studied casual gaming mechanics that drive sustained user engagement",
      "Researched evidence-based parenting styles and strategies",
      "Explored behavioral change theories applicable to parenting contexts",
      "Reviewed academic literature on gamification in educational settings"
    ],
    outcome: "Identified key opportunity areas where gamification could meaningfully support parents in building positive parenting habits."
  },
  {
    diamond: "Discover",
    diamondNumber: 1,
    icon: ClipboardList,
    color: "from-cyan-500 to-teal-500",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/30",
    title: "Online Survey",
    subtitle: "Quantitative UX Research",
    description: "To validate our initial assumptions and gather broad insights, we designed and distributed a comprehensive online survey targeting parents with children of various ages.",
    details: [
      "Designed a 25-question survey covering parenting challenges and gaming habits",
      "Collected responses from 30+ parents across diverse demographics",
      "Analyzed pain points in daily parenting routines",
      "Identified most common parenting scenarios that cause stress",
      "Gathered preferences on game formats, session lengths, and reward systems"
    ],
    outcome: "Survey data revealed that 78% of parents felt overwhelmed by parenting advice and wanted practical, bite-sized guidance integrated into their daily routines."
  },
  {
    diamond: "Define",
    diamondNumber: 1,
    icon: MessageSquare,
    color: "from-teal-500 to-emerald-500",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-500/30",
    title: "In-Depth Interviews",
    subtitle: "Qualitative Deep Dive",
    description: "Building on survey insights, we conducted one-on-one online interviews to deeply understand the emotional journey of parents and uncover nuanced needs that quantitative data couldn't capture.",
    details: [
      "Conducted 10+ semi-structured interviews lasting 45-60 minutes each",
      "Used empathy mapping to capture feelings, thoughts, and behaviors",
      "Explored specific parenting scenarios and decision-making processes",
      "Discussed current coping mechanisms and support systems",
      "Identified moments where parents felt most vulnerable or frustrated"
    ],
    outcome: "Interviews revealed that parents crave a judgment-free space to practice responses to challenging situations before facing them in real life."
  },
  {
    diamond: "Develop",
    diamondNumber: 2,
    icon: Users,
    color: "from-emerald-500 to-green-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
    title: "Co-Design Workshop",
    subtitle: "Collaborative Ideation",
    description: "We brought together parents, child development experts, and game designers for an intensive co-design workshop to collaboratively develop the core game mechanics and narrative framework.",
    details: [
      "Facilitated a 3-hour virtual workshop with 8 participants",
      "Used design thinking exercises including 'How Might We' statements",
      "Brainstormed game mechanics that balance education with entertainment",
      "Co-created character archetypes and scenario storylines",
      "Prioritized features using dot voting and impact/effort matrices"
    ],
    outcome: "The workshop produced 4 core game concepts, with participants voting for a scenario-based narrative game that allows parents to practice responses in a safe, gamified environment."
  },
  {
    diamond: "Deliver",
    diamondNumber: 2,
    icon: Palette,
    color: "from-green-500 to-primary",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
    title: "Figma Prototype",
    subtitle: "High-Fidelity Design",
    description: "Translating workshop insights into tangible designs, we created a comprehensive Figma prototype that brought the game concept to life with detailed UI/UX, game flows, and interactive elements.",
    details: [
      "Developed a complete design system with consistent visual language",
      "Created 50+ screens covering onboarding, gameplay, and progression",
      "Designed intuitive game mechanics with clear feedback loops",
      "Built interactive prototypes for usability testing",
      "Iterated through 4 major design versions based on feedback"
    ],
    outcome: "The prototype enabled 10+ usability testing sessions, validating core mechanics and refining the user experience before Unity development."
  },
];

const GameOnTimeline = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mb-12"
    >
      <h2 className="text-xl font-semibold mb-2">Design Process</h2>
      <p className="text-muted-foreground mb-6">
        Following the <span className="text-primary font-medium">Double Diamond</span> methodology, our design process moved through four key phases: Discover, Define, Develop, and Deliver.
      </p>

      {/* Double Diamond Visual */}
      <div className="mb-8 p-6 rounded-xl bg-card border border-border">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-teal-500" />
            <span className="text-sm text-muted-foreground">Diamond 1: Problem Space</span>
          </div>
          <div className="w-8 h-px bg-border" />
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-500 to-primary" />
            <span className="text-sm text-muted-foreground">Diamond 2: Solution Space</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
          <span>Discover</span>
          <span>Define</span>
          <span>Develop</span>
          <span>Deliver</span>
        </div>
        <div className="mt-2 h-12 relative">
          {/* Diamond 1 */}
          <svg viewBox="0 0 200 48" className="absolute left-0 w-1/2 h-full">
            <polygon 
              points="0,24 100,0 100,48 0,24" 
              className="fill-blue-500/20 stroke-blue-500/50" 
              strokeWidth="1"
            />
            <polygon 
              points="100,0 200,24 100,48 100,0" 
              className="fill-teal-500/20 stroke-teal-500/50" 
              strokeWidth="1"
            />
          </svg>
          {/* Diamond 2 */}
          <svg viewBox="0 0 200 48" className="absolute right-0 w-1/2 h-full">
            <polygon 
              points="0,24 100,0 100,48 0,24" 
              className="fill-emerald-500/20 stroke-emerald-500/50" 
              strokeWidth="1"
            />
            <polygon 
              points="100,0 200,24 100,48 100,0" 
              className="fill-primary/20 stroke-primary/50" 
              strokeWidth="1"
            />
          </svg>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-emerald-500 to-primary" />

        <div className="space-y-8">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="relative pl-16"
              >
                {/* Timeline dot */}
                <div className={`absolute left-3 w-7 h-7 rounded-full bg-gradient-to-br ${phase.color} flex items-center justify-center shadow-lg`}>
                  <Icon size={14} className="text-white" />
                </div>

                {/* Phase badge */}
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-mono px-2 py-0.5 rounded-full ${phase.bgColor} ${phase.borderColor} border`}>
                    {phase.diamond}
                  </span>
                  <span className="text-xs text-muted-foreground">Phase {index + 1} of 5</span>
                </div>

                {/* Content card */}
                <div className={`p-5 rounded-xl ${phase.bgColor} border ${phase.borderColor}`}>
                  <h3 className="text-lg font-semibold mb-1">{phase.title}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{phase.subtitle}</p>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {phase.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">What We Did</h4>
                    <ul className="space-y-1.5">
                      {phase.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 rounded-lg bg-background/50 border border-border">
                    <h4 className="text-sm font-medium mb-1">Key Outcome</h4>
                    <p className="text-sm text-muted-foreground">{phase.outcome}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default GameOnTimeline;
