import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Parent, Class of '24",
    content: "Nova Academy has been transformative for my daughter. The blend of technology and traditional values is exactly what we were looking for.",
    avatar: "S",
    bg: "bg-purple-100 dark:bg-purple-900/30",
    text: "text-purple-600 dark:text-purple-300"
  },
  {
    name: "Michael Chen",
    role: "Student Council President",
    content: "The opportunities here are endless. From robotics competitions to art exhibitions, I feel constantly challenged and supported.",
    avatar: "M",
    bg: "bg-blue-100 dark:bg-blue-900/30",
    text: "text-blue-600 dark:text-blue-300"
  },
  {
    name: "Dr. Alisha Patel",
    role: "Professor of Physics",
    content: "Teaching at Nova is a privilege. The facilities are world-class, but it's the curiosity of the students that makes this place special.",
    avatar: "A",
    bg: "bg-pink-100 dark:bg-pink-900/30",
    text: "text-pink-600 dark:text-pink-300"
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-muted/20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold font-display text-center mb-16">Community Voices</h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                <div className="p-1">
                  <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-12 text-center relative shadow-lg">
                    <Quote className="w-12 h-12 text-primary/20 mx-auto mb-6" />
                    <p className="text-xl md:text-2xl font-medium text-foreground mb-8 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div className="flex flex-col items-center justify-center gap-4">
                      <Avatar className="w-16 h-16 border-2 border-primary">
                        <AvatarImage src="" />
                        <AvatarFallback className={`${testimonial.bg} ${testimonial.text} text-2xl font-bold`}>
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 border-primary/20 hover:bg-primary/10 hover:text-primary" />
          <CarouselNext className="hidden md:flex -right-12 border-primary/20 hover:bg-primary/10 hover:text-primary" />
        </Carousel>
      </div>
    </section>
  );
}