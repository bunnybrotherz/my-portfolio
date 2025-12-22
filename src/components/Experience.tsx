import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Building and Construction Authority (BCA)",
    location: "Singapore",
    role: "User Experience Intern",
    period: "May 2025 - Sep 2025",
    tools: ["Figma", "Canva"],
    highlights: [
      "Led UX research with 10+ stakeholder interviews and journey mapping",
      "Streamlined design-to-handoff workflows with 5–8 cross-functional partners"
    ]
  },
  {
    company: "Accenture",
    location: "Singapore",
    role: "Technology & Consulting Intern",
    period: "Sep 2024 - Dec 2024",
    tools: ["SAP Enterprise Systems"],
    highlights: [
      "Analyzed 30+ user-reported issues across internal SAP systems",
      "Executed MAM testing across multiple devices and OS versions",
      "Supported SAP security testing and system hardening"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="text-primary" size={28} />
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Work Experience
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="card-gradient rounded-xl p-6 md:p-8 border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-display text-xl font-semibold mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-primary font-medium">
                    {exp.company}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {exp.location}
                  </p>
                </div>
                <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full w-fit">
                  {exp.period}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {exp.tools.map((tool, i) => (
                  <span 
                    key={i}
                    className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <ul className="space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
