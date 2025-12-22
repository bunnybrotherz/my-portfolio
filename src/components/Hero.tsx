import { motion } from "framer-motion";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import profilePhoto from "@/assets/profile-photo.png";
import { useMemo } from "react";

const typingText = "hi, i'm";

// Generate random sparkle positions
const generateSparkles = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 2 + Math.random() * 3,
    size: 2 + Math.random() * 3,
  }));
};

const Hero = () => {
  const sparkles = useMemo(() => generateSparkles(20), []);

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    }),
  };

  return (
    <section className="min-h-[85vh] flex items-center justify-center relative px-4 sm:px-6 py-8 sm:py-12 overflow-hidden bg-dot-pattern">
      {/* Sparkle particles */}
      <div className="absolute inset-0 -z-5 overflow-hidden pointer-events-none">
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            className="absolute rounded-full bg-primary/60"
            style={{
              left: `${sparkle.left}%`,
              top: `${sparkle.top}%`,
              width: sparkle.size,
              height: sparkle.size,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: sparkle.duration,
              delay: sparkle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary/15 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-40 right-5 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-accent/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/3 w-56 sm:w-80 h-56 sm:h-80 bg-pink-500/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
        <div className="absolute top-1/2 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-blue-500/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>

      {/* Decorative geometric shapes - hidden on mobile */}
      <div className="hidden sm:block absolute top-32 right-10 w-20 h-20 border-2 border-primary/20 rounded-xl rotate-12 animate-float" />
      <div className="hidden sm:block absolute bottom-32 left-20 w-16 h-16 border-2 border-accent/20 rounded-full animate-float animation-delay-2000" />
      <div className="hidden sm:block absolute top-1/2 left-10 w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg rotate-45" />

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left side - Content */}
          <div className="order-2 lg:order-1 flex flex-col justify-center">
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
            >
              <span className="inline-flex">
                {typingText.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={letterVariants}
                    className={char === " " ? "mr-3" : ""}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>{" "}
              <motion.span 
                className="text-gradient"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.4, ease: "easeOut" }}
              >
                jeslyn
              </motion.span>
              <motion.span 
                className="block text-muted-foreground text-2xl md:text-3xl lg:text-4xl mt-2 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                UX Designer & Developer
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base text-muted-foreground max-w-lg mb-6 leading-relaxed"
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
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 glow-sm group shadow-lg"
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
                <a href="/Jeslyn_Resume.pdf" download>
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
              {/* Decorative rings with gradient */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/20 via-accent/20 to-pink-500/20 blur-sm animate-pulse" />
              <div className="absolute -inset-6 rounded-full border border-primary/10" />
              <div className="absolute -inset-10 rounded-full border border-accent/5" />
              
              {/* Profile image container */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden p-1 bg-gradient-to-br from-primary via-accent to-pink-500">
                <div className="w-full h-full rounded-full overflow-hidden bg-card">
                  <img 
                    src={profilePhoto} 
                    alt="Jeslyn Wang - UX Designer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 -right-2 md:bottom-4 md:right-0 px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-full shadow-lg glow-sm"
              >
                <span className="text-sm font-medium flex items-center gap-1">
                  <Sparkles size={14} /> Design & AI
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
