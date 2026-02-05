import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, ArrowUpRight } from "lucide-react";
import bcaLogo from "@/assets/bca-logo.png";
import accentureLogo from "@/assets/accenture-logo.png";
const experiences = [{
  company: "Building and Construction Authority",
  shortName: "BCA",
  location: "Singapore",
  role: "User Experience Intern",
  period: "May - Sep 2025",
  type: "Upcoming",
  tools: ["Figma", "Canva"],
  logo: bcaLogo,
  highlights: ["Leading UX research with 10+ stakeholder interviews", "Streamlining design-to-handoff workflows"],
  color: "from-blue-500 to-cyan-500"
}, {
  company: "Accenture",
  shortName: "ACN",
  location: "Singapore",
  role: "Technology & Consulting Intern",
  period: "Sep - Dec 2024",
  type: "Completed",
  tools: ["SAP", "MAM Testing"],
  logo: accentureLogo,
  highlights: ["Analyzed 30+ user-reported issues in SAP systems", "Executed MAM testing across devices & OS"],
  color: "from-purple-500 to-pink-500"
}];
const Experience = () => {
  return <section id="experience" className="py-8 sm:py-10 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="mb-8">
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

        {/* Compact side-by-side cards */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {experiences.map((exp, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          y: 0,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="group relative">
              {/* Gradient border effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${exp.color} rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300`} />
              
              <div className="relative bg-card border border-border rounded-2xl p-5 sm:p-6 hover:border-primary/30 transition-all h-full">
                {/* Status badge */}
                <div className="absolute top-4 right-4">
                  
                </div>

                {/* Company header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-2 rounded-xl bg-gradient-to-br ${exp.color} shadow-lg`}>
                    <img src={exp.logo} alt={exp.company} className="w-10 h-10 object-contain rounded-lg bg-white p-1" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                  </div>
                </div>

                {/* Meta info */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={12} />
                    {exp.location}
                  </span>
                  <span className="flex items-center gap-1.5 font-mono">
                    <Calendar size={12} />
                    {exp.period}
                  </span>
                </div>

                {/* Tools */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.tools.map((tool, i) => <span key={i} className="px-2.5 py-1 text-xs bg-secondary text-foreground rounded-lg font-medium">
                      {tool}
                    </span>)}
                </div>

                {/* Highlights - condensed */}
                <ul className="space-y-1.5">
                  {exp.highlights.map((highlight, i) => <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <ArrowUpRight size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      {highlight}
                    </li>)}
                </ul>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default Experience;