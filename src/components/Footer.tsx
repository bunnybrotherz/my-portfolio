import { Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer id="contact" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Let's Work <span className="text-gradient">Together</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Currently seeking full-time opportunities starting September 2026. 
          Feel free to reach out!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow"
            asChild
          >
            <a href="mailto:jeslynwjx@gmail.com">
              <Mail className="mr-2" size={18} />
              Get In Touch
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-border hover:border-primary hover:text-primary"
            asChild
          >
            <a href="https://linkedin.com/in/jeslynwang" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2" size={18} />
              LinkedIn
            </a>
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground text-sm mb-8">
          <a 
            href="mailto:jeslynwjx@gmail.com" 
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Mail size={16} />
            jeslynwjx@gmail.com
          </a>
          <a 
            href="tel:+6597711501" 
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Phone size={16} />
            +65 9771 1501
          </a>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Jeslyn Wang. Built with passion.
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            Fluent in English & Mandarin • Dance enthusiast • Videography lover
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
