import { motion } from "framer-motion";
import campusImg from "@/assets/campus-exterior.png";

const facilities = [
  { name: "Main Campus", image: campusImg, col: "md:col-span-2", row: "md:row-span-2" },
  { name: "Science Labs", image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80", col: "md:col-span-1", row: "md:row-span-1" },
  { name: "Library", image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80", col: "md:col-span-1", row: "md:row-span-1" },
  { name: "Sports Complex", image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80", col: "md:col-span-1", row: "md:row-span-1" },
  { name: "Auditorium", image: "https://images.unsplash.com/photo-1505664063603-28e48ca204eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80", col: "md:col-span-1", row: "md:row-span-1" },
];

export default function Facilities() {
  return (
    <section id="facilities" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-2">World-Class Facilities</h2>
            <p className="text-muted-foreground text-lg">Designed to inspire learning and growth.</p>
          </div>
          <button className="text-primary font-medium hover:underline flex items-center gap-2 group">
            View All Facilities 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[600px]">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${facility.col} ${facility.row}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <img
                src={facility.image}
                alt={facility.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white text-xl md:text-2xl font-bold transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {facility.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}