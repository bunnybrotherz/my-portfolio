import { ArrowDown, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary font-medium mb-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Hi, I'm
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Jeslyn Wang
        </h1>
        <p className="text-2xl md:text-3xl font-display font-medium mb-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          Design & AI <span className="text-gradient">Student</span>
        </p>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          UX Designer passionate about creating human-centered digital experiences. 
          Currently pursuing a BSc in Design & AI at SUTD, Singapore.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 glow"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </Button>
          <div className="flex items-center gap-4">
            <a 
              href="https://linkedin.com/in/jeslynwang" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:jeslynwjx@gmail.com"
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <a 
            href="#projects" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default Hero;
