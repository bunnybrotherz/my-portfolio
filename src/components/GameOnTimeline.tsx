import { motion } from "framer-motion";
import { 
  Search, 
  ClipboardList, 
  MessageSquare, 
  Users, 
  Palette,
  CheckCircle2,
  Target,
  Layers,
  Sparkles,
  Gamepad2
} from "lucide-react";

const phases = [
  {
    id: 1,
    phase: "Diamond 1",
    title: "Discover & Define",
    color: "from-blue-500 to-cyan-500",
    stages: [
      {
        icon: Search,
        title: "Context Research",
        description: "Immersed ourselves in the intersection of casual gaming and parenting, exploring existing apps, game mechanics, and behavioral psychology frameworks.",
        details: [
          "Analyzed 15+ existing parenting apps and engagement patterns",
          "Studied casual gaming mechanics that drive sustained engagement",
          "Reviewed behavioral change theories applicable to parenting"
        ]
      },
      {
        icon: ClipboardList,
        title: "Online Survey",
        description: "Designed and distributed a comprehensive online survey targeting parents with children of various ages to validate assumptions and gather broad insights.",
        details: [
          "Collected responses from 30+ parents across diverse demographics",
          "Identified most common parenting scenarios that cause stress",
          "Gathered preferences on game formats and reward systems"
        ]
      },
      {
        icon: MessageSquare,
        title: "In-Depth Interviews",
        description: "Conducted one-on-one interviews to deeply understand the emotional journey of parents and uncover nuanced needs.",
        details: [
          "Conducted 10+ semi-structured interviews (45-60 min each)",
          "Used empathy mapping to capture feelings and behaviors",
          "Identified moments where parents felt most vulnerable"
        ]
      }
    ]
  },
  {
    id: 2,
    phase: "Diamond 2",
    title: "Develop & Deliver",
    color: "from-emerald-500 to-green-500",
    stages: [
      {
        icon: Users,
        title: "Co-Design Workshop",
        description: "Brought together parents, child development experts, and game designers for an intensive co-design workshop.",
        details: [
          "Facilitated a 3-hour virtual workshop with 8 participants",
          "Used 'How Might We' statements and design thinking exercises",
          "Prioritized features using dot voting and impact/effort matrices"
        ]
      },
      {
        icon: Palette,
        title: "Figma Prototype",
        description: "Created a comprehensive Figma prototype with detailed UI/UX, game flows, and interactive elements.",
        details: [
          "Developed complete design system with consistent visual language",
          "Created 50+ screens covering onboarding, gameplay, and progression",
          "Iterated through 4 major design versions based on feedback"
        ]
      },
      {
        icon: Gamepad2,
        title: "Unity Development",
        description: "Transitioned from design to code, building the functional game prototype in Unity with Firebase backend.",
        details: [
          "Implemented game mechanics and scenario-based narratives",
          "Integrated Firebase for user data and progress tracking",
          "Conducted 10+ usability testing sessions for validation"
        ]
      }
    ]
  }
];

const metrics = [
  { label: "Research Participants", value: "30+", icon: Users },
  { label: "Design Iterations", value: "4", icon: Layers },
  { label: "Usability Tests", value: "10+", icon: Target },
  { label: "Prototype Screens", value: "50+", icon: Sparkles }
];

const problemSolution = {
  problem: {
    title: "The Problem",
    description: "78% of parents feel overwhelmed by parenting advice and struggle to apply theoretical guidance in real-time challenging situations with their children."
  },
  solution: {
    title: "The Solution",
    description: "A scenario-based mobile game that allows parents to practice responses to challenging situations in a safe, gamified environment before facing them in real life."
  }
};

const GameOnTimeline = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="mb-12"
    >
      {/* Problem & Solution Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="p-6 rounded-xl bg-destructive/10 border border-destructive/20"
        >
          <h3 className="text-lg font-semibold text-destructive mb-2">{problemSolution.problem.title}</h3>
          <p className="text-muted-foreground">{problemSolution.problem.description}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="p-6 rounded-xl bg-primary/10 border border-primary/20"
        >
          <h3 className="text-lg font-semibold text-primary mb-2">{problemSolution.solution.title}</h3>
          <p className="text-muted-foreground">{problemSolution.solution.description}</p>
        </motion.div>
      </div>

      {/* Key Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mb-12"
      >
        <h2 className="text-xl font-semibold mb-4">Key Metrics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
              className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center"
            >
              <metric.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
              <p className="text-2xl font-bold text-primary">{metric.value}</p>
              <p className="text-sm text-muted-foreground">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Double Diamond Visual */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="mb-8 p-6 rounded-xl bg-card border border-border"
      >
        <h2 className="text-xl font-semibold mb-4">Double Diamond Methodology</h2>
        <div className="flex items-center justify-center gap-4 mb-4 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
            <span className="text-sm text-muted-foreground">Diamond 1: Problem Space</span>
          </div>
          <div className="w-8 h-px bg-border hidden sm:block" />
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-500 to-green-500" />
            <span className="text-sm text-muted-foreground">Diamond 2: Solution Space</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-xs text-muted-foreground font-mono px-4">
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
              className="fill-cyan-500/20 stroke-cyan-500/50" 
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
              className="fill-green-500/20 stroke-green-500/50" 
              strokeWidth="1"
            />
          </svg>
        </div>
      </motion.div>

      {/* Design Process Header */}
      <h2 className="text-xl font-semibold mb-6">Design & Development Process</h2>

      {/* Timeline */}
      <div className="space-y-12">
        {phases.map((phase, phaseIndex) => (
          <motion.div
            key={phase.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 + phaseIndex * 0.2 }}
          >
            {/* Phase Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${phase.color} text-white font-semibold text-sm`}>
                {phase.phase}
              </div>
              <h3 className="text-2xl font-bold">{phase.title}</h3>
            </div>

            {/* Stages Grid */}
            <div className="grid gap-4">
              {phase.stages.map((stage, stageIndex) => (
                <motion.div
                  key={stageIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.1 + phaseIndex * 0.2 + stageIndex * 0.1 }}
                  className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${phase.color} text-white flex-shrink-0`}>
                      <stage.icon size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2">{stage.title}</h4>
                      <p className="text-muted-foreground mb-3">{stage.description}</p>
                      <ul className="space-y-1.5">
                        {stage.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Technical Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="mt-12 p-6 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20"
      >
        <h3 className="text-lg font-semibold mb-4">Project Highlights</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <Search size={18} className="text-primary mt-1" />
            <div>
              <p className="font-medium">User-Centered Research</p>
              <p className="text-sm text-muted-foreground">Surveys, interviews, and co-design with real parents</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Palette size={18} className="text-primary mt-1" />
            <div>
              <p className="font-medium">Iterative Design</p>
              <p className="text-sm text-muted-foreground">4 major design iterations based on user feedback</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Gamepad2 size={18} className="text-primary mt-1" />
            <div>
              <p className="font-medium">Game Development</p>
              <p className="text-sm text-muted-foreground">Unity prototype with Firebase integration</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Target size={18} className="text-primary mt-1" />
            <div>
              <p className="font-medium">Validated Solution</p>
              <p className="text-sm text-muted-foreground">10+ usability tests confirming core mechanics</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GameOnTimeline;
