import { motion } from "framer-motion";
import { Linkedin, Mail, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="py-10 sm:py-16 px-4 sm:px-6 relative overflow-hidden">
      {/* Background gradient and patterns */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-accent/5 to-transparent -z-10" />
      <div className="absolute inset-0 bg-dot-pattern opacity-30 -z-10" />
      
      {/* Decorative blobs */}
      <div className="absolute bottom-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-48 sm:w-80 h-48 sm:h-80 bg-accent/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 font-mono text-sm text-primary mb-4 px-3 py-1 rounded-full border border-primary/20 bg-primary/5">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's create something{" "}
            <span className="text-gradient">amazing</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-lg mx-auto mb-8">
            I'm currently looking for full-time opportunities starting September 2026. 
            Feel free to reach out!
          </p>

          {/* Social Icons Row */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <motion.a
              href="mailto:jeslynwjx@gmail.com"
              className="p-3 rounded-full bg-secondary/50 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={24} className="text-foreground group-hover:text-primary transition-colors" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/jeslyn-wang-89b28a236"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={24} className="text-foreground group-hover:text-primary transition-colors" />
            </motion.a>
            <motion.a
              href="https://github.com/bunnybrotherz"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={24} className="text-foreground group-hover:text-primary transition-colors" />
            </motion.a>
          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-border pt-8"
        >
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">
              © {new Date().getFullYear()} Jeslyn Wang
            </p>
            <p className="text-sm text-muted-foreground/70">
              Fluent in English & Mandarin • Dance enthusiast • Videography lover
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
