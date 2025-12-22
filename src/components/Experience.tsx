import { motion } from "framer-motion";
import { Briefcase, MapPin, Building2 } from "lucide-react";
import bcaLogo from "@/assets/bca-logo.png";
import accentureLogo from "@/assets/accenture-logo.png";

const experiences = [
  {
    company: "Building and Construction Authority",
    shortName: "BCA",
    location: "Singapore",
    role: "User Experience Intern",
    period: "May - Sep 2025",
    type: "Upcoming",
    tools: ["Figma", "Canva"],
    logo: bcaLogo,
    highlights: [
      "Leading UX research with 10+ stakeholder interviews and journey mapping",
      "Streamlining design-to-handoff workflows with cross-functional teams"
    ]
  },
  {
    company: "Accenture",
    shortName: "ACN",
    location: "Singapore",
    role: "Technology & Consulting Intern",
    period: "Sep - Dec 2024",
    type: "Completed",
    tools: ["SAP", "MAM Testing"],
    logo: accentureLogo,
    highlights: [
      "Analyzed 30+ user-reported issues across internal SAP systems",
      "Executed MAM testing across multiple devices and OS versions",
      "Contributed to SAP security testing and enterprise risk reduction"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-8 sm:py-10 px-4 sm:px-6 bg-gradient-to-b from-secondary/30 via-secondary/20 to-background relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden bg-grid-pattern opacity-50" />
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-gradient-to-br from-accent to-pink-500">
              <Briefcase className="text-white" size={20} />
            </div>
            <span className="font-mono text-sm text-accent font-medium">EXPERIENCE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Where I've{" "}
            <span className="text-gradient-alt">worked</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? '' : 'md:direction-rtl'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-8 w-3 h-3 rounded-full bg-primary -translate-x-1.5 md:-translate-x-1.5 ring-4 ring-background" />

                {/* Content card */}
                <div className={`ml-6 sm:ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:col-start-2'}`}>
                  <div className="bg-card border border-border rounded-xl p-4 sm:p-6 hover:border-primary/30 transition-all">
                    <div className="flex items-start gap-3 sm:gap-4 mb-4">
                      {/* Company Logo */}
                      {exp.logo ? (
                        <img 
                          src={exp.logo} 
                          alt={exp.company}
                          className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-lg flex-shrink-0"
                        />
                      ) : (
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-secondary/50 border border-border flex items-center justify-center flex-shrink-0">
                          <Building2 size={20} className="text-muted-foreground/50 sm:hidden" />
                          <Building2 size={24} className="text-muted-foreground/50 hidden sm:block" />
                        </div>
                      )}
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                          <div className="min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-lg sm:text-xl font-bold truncate">{exp.role}</h3>
                            </div>
                            <p className="text-primary font-medium text-sm sm:text-base">{exp.company}</p>
                            <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mt-1">
                              <MapPin size={12} className="sm:hidden" />
                              <MapPin size={14} className="hidden sm:block" />
                              {exp.location}
                            </div>
                          </div>
                          <span className="font-mono text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                            {exp.period}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                      {exp.tools.map((tool, i) => (
                        <span 
                          key={i}
                          className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-xs bg-primary/10 text-primary rounded-md"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <ul className="space-y-1.5 sm:space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-primary mt-1.5 sm:mt-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
