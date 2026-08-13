import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop" 
          alt="Gym background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase leading-tight tracking-tight mb-4 md:mb-6">
              Push Your Limits.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Emerge Stronger.
              </span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base md:text-lg lg:text-xl text-zinc-400 mb-8 md:mb-10 max-w-xl"
          >
            Welcome to Emerge Private Fitness Studio. State-of-the-art equipment, expert trainers, and a community dedicated to helping you achieve your fitness goals.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4"
          >
            <a 
              href="#memberships" 
              className="inline-flex items-center justify-center gap-2 bg-orange-500 text-zinc-950 px-6 py-3 md:px-8 md:py-4 rounded-full font-bold uppercase tracking-wide hover:bg-orange-400 transition-colors text-base md:text-lg"
            >
              Start Your Journey <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#services" 
              className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold uppercase tracking-wide hover:bg-zinc-700 transition-colors text-base md:text-lg border border-zinc-700"
            >
              Explore Classes
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
