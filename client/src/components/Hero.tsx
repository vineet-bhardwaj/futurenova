import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/50 to-background z-10" />
        <img
          src={heroBg}
          alt="Background"
          className="w-full h-full object-cover opacity-60 dark:opacity-40 scale-105 animate-pulse-slow"
        />
      </div>

      {/* Floating Abstract Shapes */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float delay-1000" />

      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-6 backdrop-blur-sm">
            Admissions Open for 2026-2027
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight leading-tight mb-6">
            Shaping <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-accent">Future</span> <br />
            Leaders Today.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Nova Academy empowers the next generation of innovators with a cutting-edge curriculum, world-class facilities, and a global perspective.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-full px-8 h-14 text-base bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 group">
              Explore Admissions
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base border-primary/20 bg-background/50 backdrop-blur-md hover:bg-primary/5 group">
              Virtual Campus Tour
              <ChevronRight className="ml-2 h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}