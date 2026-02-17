import logo from "@/assets/logo.png";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Nova Academy" className="h-10 w-10 object-contain" />
              <span className="text-2xl font-bold font-display">Nova Academy</span>
            </div>
            <p className="text-muted-foreground max-w-sm mb-8">
              Empowering the next generation of leaders through innovation, excellence, and character development.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["Admissions", "Academic Calendar", "Student Portal", "Careers", "Contact Us"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to stay updated with school news and events.
            </p>
            <div className="flex flex-col gap-3">
              <Input placeholder="Enter your email" className="bg-background" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-border/50">
          <div className="flex items-center gap-3 text-muted-foreground">
            <MapPin className="w-5 h-5 text-primary" />
            <span>123 Innovation Drive, Tech City, CA 94000</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <Phone className="w-5 h-5 text-primary" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <Mail className="w-5 h-5 text-primary" />
            <span>admissions@nova.edu</span>
          </div>
        </div>

        <div className="text-center pt-8 mt-8 border-t border-border/50 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Nova Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}