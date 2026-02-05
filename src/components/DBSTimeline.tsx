import { motion } from "framer-motion";
import { 
  ClipboardList, 
  Users, 
  Lightbulb, 
  Layers, 
  Code, 
  GitBranch,
  Target,
  FileText,
  Workflow,
  Palette,
  Server,
  CheckCircle2
} from "lucide-react";

const phases = [
  {
    id: 1,
    phase: "Phase 1",
    title: "Empathize",
    color: "from-blue-500 to-cyan-500",
    stages: [
      {
        icon: ClipboardList,
        title: "User Surveys",
        description: "Upon receiving the problem statement from DBS, we immediately conducted user surveys to understand the scope of the problem and identify key pain points.",
        details: [
          "Distributed surveys to understand banking app usage patterns",
          "Collected quantitative data on feature discoverability issues",
          "Identified that users struggled to locate services across multiple tabs"
        ]
      },
      {
        icon: Target,
        title: "Defining Problem Statement",
        description: "Synthesized survey findings to articulate a clear, actionable problem statement that would guide our design decisions.",
        details: [
          "Analyzed survey responses to identify recurring themes",
          "Mapped out the core usability challenges",
          "Aligned problem definition with DBS business objectives"
        ]
      },
      {
        icon: FileText,
        title: "Problem Storyboarding",
        description: "Created visual narratives to illustrate user frustrations and contextualize the problems within real-world scenarios.",
        details: [
          "Developed storyboards depicting user journeys",
          "Highlighted friction points in current app navigation",
          "Used visual storytelling to communicate insights to stakeholders"
        ]
      },
      {
        icon: Users,
        title: "Persona Development",
        description: "Curated 3 distinct personas based on user demographics and pain points, refining them iteratively to balance actual user needs with client requirements.",
        details: [
          "Iteration 1: Initial personas based on survey data",
          "Iteration 2: Refined personas incorporating DBS feedback",
          "Final personas representing diverse user segments and behaviors"
        ]
      },
      {
        icon: Layers,
        title: "Setting Requirements",
        description: "Developed comprehensive user stories and scenarios under each persona to deeply understand user goals and needs.",
        details: [
          "Created detailed user stories for each persona",
          "Mapped scenarios covering various banking tasks",
          "Established acceptance criteria for feature development"
        ]
      }
    ]
  },
  {
    id: 2,
    phase: "Phase 2",
    title: "Ideate",
    color: "from-purple-500 to-pink-500",
    stages: [
      {
        icon: Workflow,
        title: "Navigation Diagram & Task Flow",
        description: "Mapped out the complete user task flow within the DBS Digibank app to understand navigation complexity and click depth for various actions.",
        details: [
          "Documented current app information architecture",
          "Calculated click counts to reach key banking actions",
          "Identified opportunities to reduce navigation friction"
        ]
      },
      {
        icon: Palette,
        title: "Lo-Fi Prototyping",
        description: "Started sketching wireframes and low-fidelity prototypes, exploring multiple design directions before converging on key features.",
        details: [
          "Rapid sketching of multiple interface concepts",
          "Iterative refinement based on team feedback",
          "Selected key features for user validation testing"
        ]
      },
      {
        icon: Lightbulb,
        title: "Feature Prioritization",
        description: "After extensive ideation, narrowed down to core features that would maximize impact on user experience and payment service adoption.",
        details: [
          "Conducted feature voting sessions with team",
          "Prioritized features based on user impact vs. effort",
          "Ran user validity tests on proposed features"
        ]
      }
    ]
  },
  {
    id: 3,
    phase: "Phase 3",
    title: "Prototyping & Development",
    color: "from-green-500 to-emerald-500",
    stages: [
      {
        icon: Palette,
        title: "Hi-Fi Figma Prototyping",
        description: "Designed pixel-perfect, interactive prototypes in Figma to validate the user interface before development.",
        details: [
          "Created comprehensive component library",
          "Built interactive prototypes for user testing",
          "Ensured design consistency with DBS brand guidelines"
        ]
      },
      {
        icon: Code,
        title: "Full-Stack Development",
        description: "Transitioned from design to code, building a functional prototype using Ruby on Rails with RESTful architecture.",
        details: [
          "Implemented MVC architecture with Ruby on Rails",
          "Built responsive frontend with HTML, CSS, and JavaScript",
          "Developed RESTful API endpoints for data handling"
        ]
      },
      {
        icon: Server,
        title: "Database & Cloud Deployment",
        description: "Architected the database schema with PostgreSQL and deployed the application on Google Cloud Platform.",
        details: [
          "Designed normalized PostgreSQL database schema",
          "Configured Cloud Run for containerized deployment",
          "Implemented CI/CD pipeline for seamless updates"
        ]
      },
      {
        icon: GitBranch,
        title: "Version Control & Collaboration",
        description: "Maintained clean codebase with Git, following best practices for team collaboration and code reviews.",
        details: [
          "Used feature branching strategy for development",
          "Conducted code reviews to ensure quality",
          "Documented technical decisions for future reference"
        ]
      }
    ]
  }
];

const problemSolution = {
  problem: {
    title: "The Problem",
    description: "Different features placed across various tabs made it difficult for users to locate banking services, leading to frustration and reduced engagement with payment features."
  },
  solution: {
    title: "The Solution",
    description: "Leverage customers' data to provide a customized user experience with intelligent payment prompts, reducing navigation friction and increasing customer satisfaction."
  }
};

const projectSpecs = [
  { label: "Duration", value: "4 months" },
  { label: "Role", value: "UX Designer & Developer" },
  { label: "Team Size", value: "4 members" },
  { label: "Methodology", value: "Agile/Scrum" }
];

const DBSTimeline = () => {
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

      {/* Technical Skills Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="mt-12 p-6 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20"
      >
        <h3 className="text-lg font-semibold mb-4">Software Engineering Highlights</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <Code size={18} className="text-primary mt-1" />
            <div>
              <p className="font-medium">Full-Stack Development</p>
              <p className="text-sm text-muted-foreground">Ruby on Rails MVC architecture with RESTful API design</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Server size={18} className="text-primary mt-1" />
            <div>
              <p className="font-medium">Cloud Infrastructure</p>
              <p className="text-sm text-muted-foreground">GCP Cloud Run deployment with PostgreSQL database</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <GitBranch size={18} className="text-primary mt-1" />
            <div>
              <p className="font-medium">Version Control</p>
              <p className="text-sm text-muted-foreground">Git workflow with feature branching and code reviews</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Layers size={18} className="text-primary mt-1" />
            <div>
              <p className="font-medium">Design-to-Code</p>
              <p className="text-sm text-muted-foreground">Seamless transition from Figma prototypes to production code</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DBSTimeline;
