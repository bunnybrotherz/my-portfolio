import { motion } from "framer-motion";
import { ArrowDown, Download, Linkedin, Mail, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import avatarPlaceholder from "@/assets/avatar-abstract.png";

const Hero = () => {
  return (
    <section className="min-h-[85vh] flex items-center relative px-6 py-20 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 text-sm font-mono text-primary mb-6 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5">
                <Sparkles size={14} />
                Available Sep 2026
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
            >
              Hi, I'm{" "}
              <span className="text-gradient">Jeslyn</span>
              <span className="block text-muted-foreground text-3xl md:text-4xl lg:text-5xl mt-2 font-medium">
                UX Designer & Developer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed"
            >
              Currently pursuing a BSc in <span className="text-foreground">Design & AI</span> at SUTD, Singapore. 
              I create human-centered digital experiences that make a difference.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-sm group"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See My Work
                <ArrowDown size={18} className="ml-1 group-hover:translate-y-0.5 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-border hover:border-primary/50 hover:bg-primary/5"
                asChild
              >
                <a href="/resume.pdf" download>
                  <Download size={18} className="mr-2" />
                  Resume
                </a>
              </Button>
            </motion.div>

          </div>

          {/* Right side - Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full border border-primary/20 animate-pulse-soft" />
              <div className="absolute -inset-8 rounded-full border border-primary/10" />
              
              {/* Profile image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-card">
                  <img 
                    src={avatarPlaceholder} 
                    alt="Jeslyn Wang - UX Designer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 -right-2 md:bottom-4 md:right-0 px-4 py-2 bg-card border border-border rounded-full shadow-lg"
              >
                <span className="text-sm font-medium">
                  <span className="text-primary">✦</span> Design & AI
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
