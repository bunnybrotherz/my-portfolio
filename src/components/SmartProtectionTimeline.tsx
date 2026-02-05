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
    </motion.div>
  );
};

export default SmartProtectionTimeline;
