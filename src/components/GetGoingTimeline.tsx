import { motion } from "framer-motion";
import { 
  ClipboardList, 
  Users, 
  Lightbulb, 
  Layers, 
  Code, 
  Target,
  FileText,
  Workflow,
  Palette,
  AlertTriangle,
  MapPin,
  BarChart3,
  Smartphone,
  Globe,
  CheckCircle2
} from "lucide-react";

const phases = [
  {
    id: 1,
    phase: "Phase 1",
    title: "Research & Problem Definition",
    color: "from-blue-500 to-cyan-500",
    stages: [
      {
        icon: ClipboardList,
        title: "Stakeholder Interviews",
        description: "Conducted primary research through interviews with Tony Tan, founder of Gebirah, to understand the challenges of flood early warning systems in the Philippines.",
        details: [
          "Identified fragmented EWS across scattered platforms",
          "Uncovered inconsistent alerts hindering timely evacuations",
          "Discovered coordination challenges for relief efforts"
        ]
      },
      {
        icon: Target,
        title: "Problem Statement",
        description: "Defined a clear HMW statement: How might we design a flood EWS that provides timely, localised, and accessible alerts for underserved Filipinos?",
        details: [
          "Focused on Bagong Silangan barangay in Quezon City",
          "Population of 160,000 with only 5,000-capacity shelter",
          "Target: creating a 'single source of truth' for flood warnings"
        ]
      },
      {
        icon: Users,
        title: "User Personas",
        description: "Developed two user personas to empathize with stakeholder pain points and inform design decisions.",
        details: [
          "Christian (25): Relief volunteer struggling with scattered information",
          "Maria (35): Mother needing reliable alerts for family evacuation",
          "Identified needs for verification, safe routes, and accessibility"
        ]
      }
    ]
  },
  {
    id: 2,
    phase: "Phase 2",
    title: "Simulation & Algorithm Design",
    color: "from-purple-500 to-pink-500",
    stages: [
      {
        icon: Workflow,
        title: "Agent-Based Simulation",
        description: "Selected agent-based simulation (ABS) to model individual evacuation behaviors, mobility constraints, and aid prioritization strategies.",
        details: [
          "Modeled 4 demographic groups: youth, adults, elderly, PWDs",
          "Each agent has unique speed ratios and aid requirements",
          "Simulation spans 2 hours (7,200 seconds) at 1,500x speed"
        ]
      },
      {
        icon: BarChart3,
        title: "Prioritization Strategies",
        description: "Developed and tested 5 different evacuation prioritization strategies to maximize rescue rates.",
        details: [
          "Baseline: No helpers, 50% start delay simulation",
          "Type-based: Prioritize first-aid vs packing assistance",
          "Age-based: Youth/Adults (95%) vs Elderly/PWD (70%)",
          "Proximity-based: Assign helpers to nearest victims"
        ]
      },
      {
        icon: Code,
        title: "Algorithm Implementation",
        description: "Built comprehensive simulation logic with helper assignment, reassignment, and rescue tracking systems.",
        details: [
          "75% of adults converted to helpers in simulation",
          "Dynamic reassignment upon rescue completion",
          "Euclidean distance for proximity calculations"
        ]
      }
    ]
  },
  {
    id: 3,
    phase: "Phase 3",
    title: "UI/UX Design",
    color: "from-green-500 to-emerald-500",
    stages: [
      {
        icon: Smartphone,
        title: "Mobile-First Design",
        description: "Designed interface tailored for younger Filipino users, incorporating familiar patterns from popular apps like Facebook and TikTok.",
        details: [
          "Swipe-based navigation for ease of use",
          "Three main pages: Post Help, Request Help, Help Others",
          "Inter font selected for multilingual support"
        ]
      },
      {
        icon: Palette,
        title: "Visual Design System",
        description: "Created a clean, accessible interface using white for clarity, deep blue for calm, and soft accents.",
        details: [
          "High-contrast color palette for emergency contexts",
          "Clear iconography for quick comprehension",
          "Consistent component library in Figma"
        ]
      },
      {
        icon: Globe,
        title: "Interactive Prototype",
        description: "Built fully interactive Figma prototype demonstrating core user flows for flood alerts and evacuation assistance.",
        details: [
          "Complete user flow for requesting/offering help",
          "Real-time alert posting and viewing",
          "Evacuation route guidance to shelters"
        ]
      }
    ]
  },
  {
    id: 4,
    phase: "Phase 4",
    title: "Results & Visualization",
    color: "from-amber-500 to-orange-500",
    stages: [
      {
        icon: BarChart3,
        title: "Performance Metrics",
        description: "Achieved up to 88% rescue rate through optimized prioritization strategies, with detailed analysis of each demographic group.",
        details: [
          "Elderly/PWD prioritization achieved highest rescue rates",
          "Age-based 70% strategy rescued 44% of elderly",
          "Proximity-based strategy saved 80% of PWDs"
        ]
      },
      {
        icon: Layers,
        title: "Data Visualization Dashboard",
        description: "Built interactive simulation visualization showing agent movements, rescue progress, and comparative strategy analysis.",
        details: [
          "Real-time agent movement tracking",
          "Rescue effectiveness charts by victim type",
          "Helper utilization and idle time metrics"
        ]
      }
    ]
  }
];

const problemSolution = {
  problem: {
    title: "The Problem",
    description: "In underserved Filipino communities, existing flood Early Warning Systems operate in isolation across different platforms, leading to inconsistent alerts that hinder timely evacuations and effective relief coordination."
  },
  solution: {
    title: "The Solution",
    description: "A multilingual, mobile-first EWS app that serves as a 'single source of truth', enabling residents to receive real-time flood updates, request or volunteer aid, and find the fastest routes to accommodating shelters."
  }
};

const projectSpecs = [
  { label: "Duration", value: "4 months" },
  { label: "Role", value: "UX Designer" },
  { label: "Team Size", value: "5 members" },
  { label: "Partner", value: "Gebirah" }
];

const GetGoingTimeline = () => {
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

      {/* Project Specifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mb-12"
      >
        <h2 className="text-xl font-semibold mb-4">Project Specifications</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {projectSpecs.map((spec, i) => (
            <div key={i} className="p-4 rounded-lg bg-muted/50 text-center">
              <p className="text-sm text-muted-foreground mb-1">{spec.label}</p>
              <p className="font-semibold">{spec.value}</p>
            </div>
          ))}
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
            transition={{ duration: 0.5, delay: 0.8 + phaseIndex * 0.2 }}
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
                  transition={{ duration: 0.4, delay: 0.9 + phaseIndex * 0.2 + stageIndex * 0.1 }}
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

      {/* Key Outcomes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="mt-12 p-6 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20"
      >
        <h3 className="text-lg font-semibold mb-4">Key Outcomes & Impact</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <BarChart3 size={18} className="text-primary mt-1" />
            <div>
              <p className="font-medium">88% Rescue Rate</p>
              <p className="text-sm text-muted-foreground">Achieved through optimized demographic prioritization</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Users size={18} className="text-primary mt-1" />
            <div>
              <p className="font-medium">Vulnerable-First Approach</p>
              <p className="text-sm text-muted-foreground">Elderly/PWD prioritization shows highest overall survival</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin size={18} className="text-primary mt-1" />
            <div>
              <p className="font-medium">Location-Aware Alerts</p>
              <p className="text-sm text-muted-foreground">Real-time flood data from community reporters</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Globe size={18} className="text-primary mt-1" />
            <div>
              <p className="font-medium">Multilingual Support</p>
              <p className="text-sm text-muted-foreground">Accessible interface for diverse Filipino communities</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GetGoingTimeline;