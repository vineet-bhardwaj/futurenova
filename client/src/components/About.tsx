import { motion } from "framer-motion";
import { Users, BookOpen, Trophy, Clock } from "lucide-react";
import CountUp from "@/components/ui/count-up";

const stats = [
  { label: "Students", value: 1200, suffix: "+", icon: Users },
  { label: "Faculty", value: 150, suffix: "+", icon: BookOpen },
  { label: "Awards", value: 50, suffix: "+", icon: Trophy },
  { label: "Years", value: 25, suffix: "", icon: Clock },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
              A Legacy of <span className="text-primary">Excellence</span> & <span className="text-accent">Innovation</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Nova Academy, we don't just teach; we inspire. Our philosophy is rooted in the belief that every student has the potential to change the world. Through a blend of traditional academic rigor and modern technological integration, we prepare our students for challenges that don't even exist yet.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From our state-of-the-art robotics labs to our comprehensive arts programs, we offer a holistic education that nurtures the mind, body, and spirit.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-3xl md:text-4xl font-bold text-foreground flex items-center">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="text-sm text-muted-foreground mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent opacity-20 blur-2xl rounded-3xl" />
            <div className="relative bg-card border border-border/50 p-8 rounded-3xl shadow-2xl backdrop-blur-sm">
              <div className="aspect-video rounded-xl bg-muted overflow-hidden mb-6 relative group cursor-pointer">
                 {/* Placeholder for video/image */}
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                 <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center pl-1 group-hover:scale-110 transition-transform duration-300">
                     <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[16px] border-l-white border-b-8 border-b-transparent" />
                   </div>
                 </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Principal's Message</h3>
              <p className="text-muted-foreground">"Education is the most powerful weapon which you can use to change the world."</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}