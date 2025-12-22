import { Code2, Palette, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Design Tools",
    icon: Palette,
    skills: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Canva", "Capcut"]
  },
  {
    title: "Programming",
    icon: Code2,
    skills: ["C#", "Ruby", "Python", "JavaScript", "HTML", "CSS"]
  },
  {
    title: "Frameworks & Tools",
    icon: Wrench,
    skills: ["Google Cloud Platform", "Git", "Postman", "Unity", "Agile Methods"]
  }
];

const Skills = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">
          Technical <span className="text-gradient">Skills</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="card-gradient rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <category.icon className="text-primary" size={24} />
              </div>
              
              <h3 className="font-display text-lg font-semibold mb-4">
                {category.title}
              </h3>

              <div className="flex flex-wrap justify-center gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="text-sm px-3 py-1.5 bg-secondary text-foreground rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
