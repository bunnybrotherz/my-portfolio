import { motion } from "framer-motion";
import { 
  Database, 
  Cpu, 
  Target, 
  Layers, 
  BarChart3,
  Bell,
  ImagePlus,
  Microscope,
  CheckCircle2,
  Zap
} from "lucide-react";
import pipelineImage from "@/assets/smart-protection-pipeline.png";
const phases = [
  {
    id: 1,
    phase: "Phase 1",
    title: "Data Engineering",
    color: "from-green-500 to-emerald-500",
    stages: [
      {
        icon: Database,
        title: "Data Collection & Analysis",
        description: "Gathered satellite imagery and aerial photographs of 20 protected conservation areas to understand the scope of illegal structure detection.",
        details: [
          "Analyzed imagery across 3,470 km² of protected land",
          "Identified patterns in illegal tarp and structure placements",
          "Cataloged diverse environmental conditions and terrains"
        ]
      },
      {
        icon: ImagePlus,
        title: "Synthetic Data Pipeline",
        description: "Built an innovative data augmentation pipeline using Stable Diffusion to generate synthetic training data, dramatically reducing the need for manually labeled images.",
        details: [
          "Generated 100+ synthetic tarp variants using Stable Diffusion",
          "Reduced labeled data reliance by over 70%",
          "Created diverse augmentations for various weather and lighting conditions"
        ]
      }
    ]
  },
  {
    id: 2,
    phase: "Phase 2",
    title: "Model Development",
    color: "from-blue-500 to-cyan-500",
    stages: [
      {
        icon: Cpu,
        title: "YOLOv11 Object Detection",
        description: "Implemented state-of-the-art YOLOv11 architecture for real-time detection of illegal structures and tarps in satellite imagery.",
        details: [
          "Fine-tuned YOLOv11 on conservation-specific dataset",
          "Optimized for high-resolution satellite image processing",
          "Achieved robust detection across varied terrains"
        ]
      },
      {
        icon: Layers,
        title: "U-Net Segmentation",
        description: "Developed U-Net segmentation models to precisely delineate the boundaries of detected structures for accurate area measurement.",
        details: [
          "Implemented encoder-decoder architecture with skip connections",
          "Trained on pixel-level annotated conservation imagery",
          "Enabled precise boundary detection for reporting"
        ]
      },
      {
        icon: Microscope,
        title: "Model Experimentation",
        description: "Conducted extensive experimentation with different architectures, hyperparameters, and training strategies to optimize detection performance.",
        details: [
          "Tested multiple backbone architectures",
          "Experimented with various loss functions and optimizers",
          "Performed ablation studies on data augmentation strategies"
        ]
      }
    ]
  },
  {
    id: 3,
    phase: "Phase 3",
    title: "Evaluation & Deployment",
    color: "from-purple-500 to-pink-500",
    stages: [
      {
        icon: BarChart3,
        title: "Comprehensive Evaluation",
        description: "Implemented rigorous evaluation workflows to measure model performance across multiple metrics and ensure reliability in production.",
        details: [
          "Calculated precision, recall, and F1 scores",
          "Measured mAP (mean Average Precision) across classes",
          "Validated performance on held-out test regions"
        ]
      },
      {
        icon: Bell,
        title: "Backend Alerting System",
        description: "Designed and implemented an automated alerting pipeline to notify conservation authorities when illegal structures are detected.",
        details: [
          "Built real-time inference pipeline for new imagery",
          "Integrated with notification systems for rapid response",
          "Reduced response time by 3–5× compared to manual monitoring"
        ]
      },
      {
        icon: Target,
        title: "Production Deployment",
        description: "Deployed the end-to-end ML pipeline for operational use across all 20 protected areas.",
        details: [
          "Containerized models for scalable deployment",
          "Implemented monitoring and logging infrastructure",
          "Enabled continuous model improvement with feedback loops"
        ]
      }
    ]
  }
];

const metrics = [
  { label: "Protected Areas", value: "20", icon: Target },
  { label: "Coverage", value: "3,470 km²", icon: Layers },
  { label: "Data Reduction", value: "70%+", icon: Database },
  { label: "Response Speedup", value: "3–5×", icon: Zap }
];

const SmartProtectionTimeline = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="mb-12"
    >
      {/* Pipeline Diagram */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="mb-12"
      >
        <h2 className="text-xl font-semibold mb-4">ML Pipeline Architecture</h2>
        <div className="p-6 rounded-xl bg-card border border-border">
          <img 
            src={pipelineImage} 
            alt="Smart Protection ML Pipeline showing synthetic and genuine data flowing through YOLOv8, U-Net, and Dashboard" 
            className="w-full h-auto"
          />
        </div>
      </motion.div>
      {/* Key Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-xl font-semibold mb-4">Impact Metrics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
              className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center"
            >
              <metric.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
              <p className="text-2xl font-bold text-primary">{metric.value}</p>
              <p className="text-sm text-muted-foreground">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ML Pipeline Header */}
      <h2 className="text-xl font-semibold mb-6">ML Pipeline Development</h2>

      {/* Timeline */}
      <div className="space-y-12">
        {phases.map((phase, phaseIndex) => (
          <motion.div
            key={phase.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 + phaseIndex * 0.2 }}
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
                  transition={{ duration: 0.4, delay: 0.8 + phaseIndex * 0.2 + stageIndex * 0.1 }}
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

      {/* Technical Stack Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="mt-12 p-6 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20"
      >
        <h3 className="text-lg font-semibold mb-4">Technical Highlights</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <Cpu size={18} className="text-primary mt-1" />
            <div>
              <p className="font-medium">Deep Learning Models</p>
              <p className="text-sm text-muted-foreground">YOLOv11 for detection, U-Net for segmentation</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <ImagePlus size={18} className="text-primary mt-1" />
            <div>
              <p className="font-medium">Generative AI for Data</p>
              <p className="text-sm text-muted-foreground">Stable Diffusion for synthetic data augmentation</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <BarChart3 size={18} className="text-primary mt-1" />
            <div>
              <p className="font-medium">Rigorous Evaluation</p>
              <p className="text-sm text-muted-foreground">Precision, recall, F1, mAP metrics</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Bell size={18} className="text-primary mt-1" />
            <div>
              <p className="font-medium">Production Pipeline</p>
              <p className="text-sm text-muted-foreground">End-to-end inference with automated alerting</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Dashboard Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="mt-12"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold text-sm">
            Phase 4
          </div>
          <h3 className="text-2xl font-bold">Dashboard & User Interface</h3>
        </div>
        
        <p className="text-muted-foreground mb-6">
          To translate model outputs into an operational tool for end users, we developed a web-based dashboard using Python's NiceGUI framework. The interface visualises satellite imagery alongside detection results, enabling rangers to make rapid, informed decisions.
        </p>

        <div className="grid gap-4">
          {/* Overview Page */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 1.6 }}
            className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 text-white flex-shrink-0">
                <BarChart3 size={20} />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-lg mb-2">Overview Page</h4>
                <p className="text-muted-foreground mb-3">
                  Central hub displaying key statistics, recent detections, and protected area status. Features a "Scan Region" function for real-time satellite imagery retrieval and detection pipeline execution.
                </p>
                <div className="mb-4">
                  <p className="text-sm font-medium mb-2">Colour-Coded Threat System:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 rounded text-xs font-medium bg-red-500/20 text-red-400 border border-red-500/30">Critical Priority</span>
                    <span className="px-2 py-1 rounded text-xs font-medium bg-orange-500/20 text-orange-400 border border-orange-500/30">High Priority</span>
                    <span className="px-2 py-1 rounded text-xs font-medium bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">Medium Priority</span>
                    <span className="px-2 py-1 rounded text-xs font-medium bg-lime-500/20 text-lime-400 border border-lime-500/30">Low Priority</span>
                    <span className="px-2 py-1 rounded text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">No Threat</span>
                  </div>
                </div>
                <ul className="space-y-1.5">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                    Case management to optimise manpower allocation
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                    Status tracking: Under Investigation, Under Review, Confirmed Legal
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                    Prevents redundant ranger deployments to same location
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Map View */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 1.7 }}
            className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 text-white flex-shrink-0">
                <Target size={20} />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-lg mb-2">Geospatial Map Interface</h4>
                <p className="text-muted-foreground mb-3">
                  Interactive geographical representation with pin-marked protected areas. Hierarchical visualisation from national overview to localised site-level detail enables strategic planning and tactical field deployment.
                </p>
                <ul className="space-y-1.5">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                    Automatic tessellation into standardised grid cells
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                    Grid-based decomposition for targeted patrol sectors
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                    Exact grid coordinates for field-actionable intelligence
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Detection Registry */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 1.8 }}
            className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 text-white flex-shrink-0">
                <Layers size={20} />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-lg mb-2">Detection Registry Page</h4>
                <p className="text-muted-foreground mb-3">
                  Searchable, sortable list consolidating all identified threats. Customisable filters by location, confidence score, detection date, and threat classification support evidence-based decision-making.
                </p>
                <ul className="space-y-1.5">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                    Status management: Under Review, Resolved
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                    Intuitive colour coding for streamlined decision-making
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                    Patrol resource allocation and rapid response coordination
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack for Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.9 }}
          className="mt-6 p-4 rounded-lg bg-muted/50 border border-border"
        >
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Built with:</span> Python, NiceGUI framework — enabling rapid prototyping of interactive components without managing a separate JavaScript codebase.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SmartProtectionTimeline;
