import { ExternalLink, Layers } from "lucide-react";

const projects = [
  {
    title: "Game On! – Final Year Project",
    period: "Sep 2025 - May 2026",
    description: "An end-to-end game prototype designed to help parents navigate parenting challenges through gamification.",
    tools: ["Figma", "Unity", "Google Firebase", "Android Studio"],
    highlights: [
      "Conducted mixed-methods UX research with 30+ participants",
      "Iterated 4+ design cycles in Figma with continuous user feedback",
      "Developed fully functional Android build deployed via Android Studio",
      "Ran qualitative usability testing with 10+ users"
    ],
    color: "from-cyan-500/20 to-blue-500/20"
  },
  {
    title: "Human-Computer Interaction & AI",
    period: "May 2024 - Aug 2024",
    description: "A web application integrating AI capabilities with human-centered design principles.",
    tools: ["Figma", "Ruby", "AI", "Google Cloud Platform"],
    highlights: [
      "Conducted qualitative UX research with 10 users via observations and interviews",
      "Performed heuristic evaluations (Nielsen) identifying 10+ usability issues",
      "Built and deployed live web application using Ruby on GCP"
    ],
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "DBS Auto Prompt Payment",
    period: "May 2024 - Aug 2024",
    description: "A high-fidelity banking prototype featuring automated payment prompts and seamless user flows.",
    tools: ["Figma", "Ruby", "HTML/CSS", "GCP", "PostgreSQL"],
    highlights: [
      "Led full design lifecycle from Lo-fi wireframes to Hi-fi coded prototype",
      "Designed service-oriented UX architecture using RESTful APIs",
      "Built and deployed prototype on Google Cloud Run with cloud database"
    ],
    color: "from-emerald-500/20 to-teal-500/20"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <Layers className="text-primary" size={28} />
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Projects
          </h2>
        </div>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Academic projects showcasing my skills in UX research, design, and development.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Gradient top bar */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-lg font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink 
                    size={18} 
                    className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" 
                  />
                </div>

                <span className="text-xs text-muted-foreground mb-3 block">
                  {project.period}
                </span>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tools.map((tool, i) => (
                    <span 
                      key={i}
                      className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <ul className="space-y-1.5">
                  {project.highlights.slice(0, 2).map((highlight, i) => (
                    <li key={i} className="text-muted-foreground text-xs flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
