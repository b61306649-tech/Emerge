import { motion } from 'motion/react';
import { TRAINERS } from '../data';
import { Instagram, Twitter } from 'lucide-react';

export function Trainers() {
  return (
    <section id="trainers" className="py-16 md:py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-4"
          >
            Meet Our <span className="text-orange-500">Experts</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-base md:text-lg"
          >
            Learn from the best. Our certified trainers are here to guide, push, and celebrate your progress.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRAINERS.map((trainer, index) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-90"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{trainer.name}</h3>
                <p className="text-orange-500 font-medium mb-4 text-sm md:text-base">{trainer.specialty}</p>
                
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <button className="bg-zinc-800 p-2 rounded-full text-white hover:bg-orange-500 hover:text-zinc-950 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </button>
                  <button className="bg-zinc-800 p-2 rounded-full text-white hover:bg-orange-500 hover:text-zinc-950 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
