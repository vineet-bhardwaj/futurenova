import { motion } from "framer-motion";
import { Atom, Microscope, Palette, Globe, Code, Calculator } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const programs = [
  {
    title: "STEM Excellence",
    description: "Advanced robotics, coding, and engineering labs for future innovators.",
    icon: Atom,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Scientific Research",
    description: "State-of-the-art laboratories fostering deep inquiry and discovery.",
    icon: Microscope,
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    title: "Arts & Culture",
    description: "Comprehensive visual and performing arts programs to unleash creativity.",
    icon: Palette,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    title: "Global Citizenship",
    description: "Model UN, language immersion, and cultural exchange programs.",
    icon: Globe,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    title: "Computer Science",
    description: "Full stack development, AI, and cybersecurity curriculum.",
    icon: Code,
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
  {
    title: "Advanced Math",
    description: "Competitive mathematics and advanced placement preparation.",
    icon: Calculator,
    color: "text-red-500",
    bg: "bg-red-500/10",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Academic Programs</h2>
          <p className="text-muted-foreground text-lg">
            Our diverse curriculum is designed to challenge students and help them discover their true potential across various disciplines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 group cursor-pointer overflow-hidden relative">
                <div className={`absolute top-0 right-0 p-32 opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-500 ${program.bg.replace('/10', '/30')}`} />
                <CardHeader>
                  <div className={`w-12 h-12 rounded-2xl ${program.bg} ${program.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <program.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-bold">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{program.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}