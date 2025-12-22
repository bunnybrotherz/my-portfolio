import { motion } from "framer-motion";
import { ArrowUpRight, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer id="contact" className="py-16 px-6 relative overflow-hidden">
      {/* Background gradient and patterns */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-accent/5 to-transparent -z-10" />
      <div className="absolute inset-0 bg-dot-pattern opacity-30 -z-10" />
      
      {/* Decorative blobs */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 font-mono text-sm text-primary mb-4 px-3 py-1 rounded-full border border-primary/20 bg-primary/5">
            ✨ GET IN TOUCH
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's create something{" "}
            <span className="text-gradient">amazing</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-lg mx-auto">
            I'm currently looking for full-time opportunities starting September 2026. 
            Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 glow-sm group shadow-lg"
            asChild
          >
            <a href="mailto:jeslynwjx@gmail.com">
              Say Hello
              <ArrowUpRight size={18} className="ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/30 hover:border-primary hover:bg-primary/10 group"
            asChild
          >
            <a href="https://linkedin.com/in/jeslynwang" target="_blank" rel="noopener noreferrer">
              <Linkedin size={18} className="mr-2 group-hover:text-primary transition-colors" />
              Connect on LinkedIn
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-border pt-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
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

            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Jeslyn Wang
              </p>
              <p className="text-xs text-muted-foreground/60 mt-1">
                Fluent in English & Mandarin · Dancer · Videographer
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
