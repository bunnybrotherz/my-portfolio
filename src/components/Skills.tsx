import { motion } from "framer-motion";
import { Wrench } from "lucide-react";
const skills = [{
  name: "Figma",
  color: "from-purple-500 to-pink-500"
}, {
  name: "Adobe Illustrator",
  color: "from-orange-500 to-yellow-500"
}, {
  name: "Adobe Photoshop",
  color: "from-blue-500 to-cyan-500"
}, {
  name: "Canva",
  color: "from-cyan-500 to-teal-500"
}, {
  name: "Capcut",
  color: "from-pink-500 to-rose-500"
}, {
  name: "C#",
  color: "from-violet-500 to-purple-500"
}, {
  name: "Ruby",
  color: "from-red-500 to-rose-500"
}, {
  name: "Python",
  color: "from-yellow-500 to-green-500"
}, {
  name: "JavaScript",
  color: "from-yellow-400 to-orange-500"
}, {
  name: "HTML",
  color: "from-orange-500 to-red-500"
}, {
  name: "CSS",
  color: "from-blue-500 to-indigo-500"
}, {
  name: "Google Cloud Platform",
  color: "from-blue-500 to-green-500"
}, {
  name: "Git",
  color: "from-orange-600 to-red-600"
}, {
  name: "Postman",
  color: "from-orange-500 to-amber-500"
}, {
  name: "Unity",
  color: "from-gray-600 to-gray-800"
}, {
  name: "Agile",
  color: "from-green-500 to-emerald-500"
}];
const Skills = () => {
  return <section className="py-12 px-6 overflow-hidden relative">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
      
      <div className="max-w-6xl mx-auto mb-8">
        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} className="flex items-center justify-center gap-3">
          <div className="p-1.5 rounded-md bg-gradient-to-br from-primary to-accent px-[10px]">
            <Wrench className="text-white" size={16} />
          </div>
          <span className="font-mono text-primary font-medium text-3xl">TOOLS & TECHNOLOGIES</span>
        </motion.div>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Scrolling content */}
        <div className="flex animate-marquee">
          {[...skills, ...skills].map((skill, index) => <div key={index} className="flex-shrink-0 px-5 py-2.5 mx-2 bg-card border border-border rounded-full hover:border-primary/50 transition-all cursor-default group shadow-sm hover:shadow-md">
              <span className={`bg-gradient-to-r ${skill.color} bg-clip-text text-transparent font-medium group-hover:opacity-100 opacity-80 transition-opacity`}>
                {skill.name}
              </span>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Skills;