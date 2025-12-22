import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Building and Construction Authority",
    shortName: "BCA",
    location: "Singapore",
    role: "User Experience Intern",
    period: "May - Sep 2025",
    type: "Upcoming",
    tools: ["Figma", "Canva"],
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
    highlights: [
      "Analyzed 30+ user-reported issues across internal SAP systems",
      "Executed MAM testing across multiple devices and OS versions",
      "Contributed to SAP security testing and enterprise risk reduction"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="text-primary" size={24} />
            <span className="font-mono text-sm text-primary">EXPERIENCE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Where I've{" "}
            <span className="text-gradient">worked</span>
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
                <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:col-start-2'}`}>
                  <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-bold">{exp.role}</h3>
                          {exp.type === "Upcoming" && (
                            <span className="px-2 py-0.5 text-xs font-mono bg-primary/10 text-primary rounded">
                              UPCOMING
                            </span>
                          )}
                        </div>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                          <MapPin size={14} />
                          {exp.location}
                        </div>
                      </div>
                      <span className="font-mono text-sm text-muted-foreground whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.tools.map((tool, i) => (
                        <span 
                          key={i}
                          className="px-2.5 py-1 text-xs bg-primary/10 text-primary rounded-md"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
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
